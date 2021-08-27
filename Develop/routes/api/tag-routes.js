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
          as: "Products"
        },
      ]
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
      include: [
        {
          model: Product, 
          as: "Products"
        }
      ]
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

    Tag.create(req.body)
    .then((tag) => {
      console.log(tag)
      if(!req.body){
        res.status(404).json({message: "not valid"})
      }
      res.status(200).json(tag)
    })


  } catch (error){
    res.status(500).json({name: error.name}, {message: error.message});
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try{

    Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((updatedData) => {
      res.status(200).json({message: `Tag with id of ${req.params.id} has successfuly been updated!`});
    })
    .catch((err) => {
      console.error(err)
    })
  //}
  } catch (error){
    res.status(500).json(error);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try{

    Tag.destroy(
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((deletedData) => {

      if(!deletedData){
        res.status(404).json({message: `There is no tag with an id of ${req.params.id}!`})
        return;
      }

      res.status(200).json({message: `Tag with id of ${req.params.id} has successfuly been removed from the database!`});
    })
    .catch((err) => {
      console.error(err)
    })

  } catch (error){

    res.status(500).json(error);
    
  }
});

module.exports = router;
