const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const {typeSchema} = require('./type');

const Meal = mongoose.model('Meal',new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        get: v => v = (Math.round(v * 100) / 100),
        set: v => v = (Math.round(v * 100) / 100)
    },
    size: {
        type: Number,
        required: function(){ return this.type.name === 'pizza'},
        get: v => v = Math.round(v),
        set: v => v = Math.round(v),
        max: 50,
        min: 10
    },
    ingredients: {
        type: Array
    },
    isVege:{
        type: Boolean,
        default: false
    },
    isSpicy:{
        type: Boolean,
        default: false
    }
}));

function validateMeal(meal){
    const schema = {
        name: Joi.string().min(3).max(30).required(),
        type: Joi.string().min(3).max(30),
        price: Joi.required(),
        size: Joi.number(),
        ingredients: Joi.array(),
        isVege: Joi.boolean(),
        isSpicy: Joi.boolean()
    }

    return Joi.validate(meal, schema);
}

exports.Meal = Meal;
exports.validate = validateMeal;