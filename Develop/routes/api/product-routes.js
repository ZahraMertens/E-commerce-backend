const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productdData = await Product.findAll({
      include: [{all: true, nested: true}] 
    });
    res.status(200).json(productdData)
  } catch (error){
    //console.log(error)
    res.status(500).json(error)
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{all: true, nested: true}]
    });

    if(!productData){

      res.status(404).json({message: `There is no product with the id of ${req.params.id}`});
      return;

    } else {
      res.status(200).json(productData)
    };

  } catch (error){
    res.status(500).json(error)
  };
});

// create new product
router.post('/', (req, res) => {
  // req.body should look like this...
  //   {
  //     "product_name": "Basketballdecddcd",
  //     "price": 200.00,
  //     "stock": 3,
  //     "category_id": [6], //add it to category
  //     "tagIds": [3, 4, 5]
  //   }
  if (!req.body.product_name || ! req.body.price || !req.body.stock || !req.body.tagIds || !req.body.category_id){ 

    //Error handling to ensure all parameters are provided
    res.status(404).json({message: "There is a paramter missing, the product object must include product_name, price, stock, category_id and tagIds"});
    return;

  } else {

    //If all parameters provided create product object including product Tags
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  }
});


// update product
router.put('/:id', (req, res) => {
  try{
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
  } catch (error){

  }
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  try{

    Product.destroy(
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((deletedData) => {

      if(!deletedData){
        res.status(404).json({message: `There is no product with an id of ${req.params.id}!`})
        return;
      }

      res.status(200).json({message: `Product with id of ${req.params.id} has successfuly been removed from the database!`});
    })
    .catch((err) => {
      console.error(err)
    })

  } catch (error){
    res.status(500).json(error);
  }
});

module.exports = router;
