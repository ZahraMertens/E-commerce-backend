const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
          as: 'Products', //Add alias because it is defined in the index.js relationships
        }
      ]
    });

    res.status(200).json(tagData)

  } catch (error){
    res.status(500).json({name: error.name, message: error.message})
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{

  } catch (error){
    
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try{

  } catch (error){
    
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try{

  } catch (error){
    
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try{

  } catch (error){
    
  }
});

module.exports = router;
