const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
  const categoryData = await Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
    }],
  });
  res.status(200).json(categoryData);

  } catch (error){
    res.status(500).json(error)
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{

    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        }
      ],
    });

    if(!categoryData){
      res.status(404).json({message: `There is no category with the id of ${req.params.id}!`})
    };
    res.status(200).json(categoryData)

  } catch (error) {

    res.status(500).json(error);

  }
});



router.post('/', async (req, res) => {
  // create a new category
  try{

    const newCategory = await Category.create(req.body);

    if(!req.body){
      res.status(404).json({message: "not valid"})
    };

    res.status(200).json(newCategory)

  } catch (error){

    res.status(500).json({name: error.name}, {message: error.message});
  }

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try{

    Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((updatedData) => {
        res.status(200).json({message: `Categoy with id of ${req.params.id} has successfuly been updated!`});
    })
    .catch((err) => {
      console.error(err)
    })

  } catch (error){
    
    res.status(500).json(error);

  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try{

    Category.destroy(
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((deletedData) => {
        res.status(200).json({message: `Categoy with id of ${req.params.id} has successfuly been removed from the database!`});
    })
    .catch((err) => {
      console.error(err)
    })

  } catch (error){

    res.status(500).json(error);
    
  }
});

module.exports = router;
