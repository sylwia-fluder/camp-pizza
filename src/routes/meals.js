const {Meal, validate} = require('../model/meal');
const {Type} = require('../model/type');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Joi = require('@hapi/joi');

router.get('/', async (req, res) => {
    const meals = await Meal.find().sort('name');
    res.send(meals);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const type = await Type.findById(req.body.typeId);
    if (!type) return res.status(400).send('Invalid type.');

    let meal = new Meal({
      name: req.body.name, 
      type: {
        _id: type._id,
        name: type.name
      },
      price: req.body.price,
      size: req.body.size,
      ingredients: req.body.ingredients,
      isVege: req.body.isVege,
      isSpicy: req.body.isSpicy
    });
    
    meal = await meal.save();

    res.send(meal);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    
    const type = await Genre.findById(req.body.typeId);
    if (!type) return res.status(400).send('Invalid type.');

    const meal = Meal.findByIdAndUpdate(req.params.id,
        {
        name: req.body.name, 
        type: {
            _id: type._id,
            name: type.name
        },
        price: req.body.price,
        size: req.body.size,
        ingredients: req.body.ingredients,
        isVege: req.body.isVege,
        isSpicy: req.body.isSpicy

        },{new: true});
    if (!meal) return res.status(404).send('The meal with the given ID was not found.');
  
    res.send(meal);
});
  
router.delete('/:id', async (req, res) => {
    const meal = await Meal.findByIdAndRemove(req.params.id);
    if (!meal) return res.status(404).send('The meal with the given ID was not found.');
  
    res.send(meal);
});
  
router.get('/:id', async (req, res) => {
    const meal = await Meal.findById(req.params.id);
    if (!meal) return res.status(404).send('The meal with the given ID was not found.');
    res.send(meal);
});

router.get('/browserName/:name', async (req, res) => {
    const meal = await Meal.find({name: req.params.name});
    if (!meal) return res.status(404).send('The meal with the given name was not found.');
    res.send(meal);
});
  
module.exports = router;