const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
  const categoryData = await Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'], //Include associated products with category
    }],
  });
  res.status(200).json(categoryData); //If no error return json of categories with products

  } catch (error){

    res.status(500).json(error); //If error catch error and status 500

  }

});

//Find category by Id which is a Primary key
router.get('/:id', async (req, res) => {
 
  try{

    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'], //Include categories associated Products
        }
      ],
    });

    //Check if there is a category with the id parsed in the req.params
    if(!categoryData){

      //If id does not exist return 404 error and message
      res.status(404).json({message: `There is no category with the id of ${req.params.id}!`});

    };

    //If id exists return json object with id of category from the req.params
    res.status(200).json(categoryData)

  } catch (error) {

    //If error res is error
    res.status(500).json({name: error.name, message: error.message});

  }
});



router.post('/', async (req, res) => {
  try{
    //Create single category by parsing json object (Id is auto increment):
    //{
       //"category_name": "test_name"
    //}

    await Category.create(req.body)
    .then((newCategory) => {

      res.status(200).json(newCategory);

    })
    //Return error if validation fails(name exists/unqiue or special characters/numbers)
    .catch((error) => {
      //console.log(error.name)

      if(error.name == "SequelizeUniqueConstraintError"){

        res.status(404).json({message: `The name already exits!`});

      } else if (error.name == "SequelizeValidationError"){

        res.status(404).json({message: `The name can't contain special characters or numbers`})
      }
     
    })

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

        if(!updatedData[0]){
          //Error as name is unique or id does not exists
          res.status(404).json({message: `There is no category with an id of ${req.params.id} or the name already exists!`})
        }

        res.status(200).json({message: `Categoy with id of ${req.params.id} has successfuly been updated!`});
      })

      //Catches the error from the validation in category model as name can only contan letters and spaces
      .catch((err) => {
        res.status(404).json({message: `The name can't contain special characters or numbers`})
      });

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

      if(!deletedData){
        res.status(404).json({message: `There is no category with an id of ${req.params.id}!`})
        return;
      }

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
