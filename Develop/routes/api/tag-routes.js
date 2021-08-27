const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findAll({
      include: [{all: true, nested: true}]
    });

    res.status(200).json(tagData)

  } catch (error){
    res.status(500).json({name: error.name, message: error.message})
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{all: true, nested: true}]
    })

    if(!tagData){

      res.status(404).json({message: `There are no tags with the id of ${req.params.id}`});
      return;

    }

    res.status(200).json(tagData);

  } catch (error){

    res.status(500).json(error)
    
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
