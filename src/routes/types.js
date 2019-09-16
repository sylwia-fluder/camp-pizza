const {Type, validate} = require('../model/type');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const types = await Type.find().sort('name');
  res.send(types);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let types = new Type({ name: req.body.name });
  types = await types.save();
  
  res.send(types);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const type = await Type.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
    new: true
  });

  if (!type) return res.status(404).send('The type with the given ID was not found.');
  
  res.send(type);
});

router.delete('/:id', async (req, res) => {
  const type = await Type.findByIdAndRemove(req.params.id);

  if ( type) return res.status(404).send('The type with the given ID was not found.');

  res.send(type);
});

router.get('/:id', async (req, res) => {
  const type = await type.findById(req.params.id);

  if ( type) return res.status(404).send('The type with the given ID was not found.');

  res.send(type);
});

module.exports = router;