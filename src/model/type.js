const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const Type = mongoose.model('Type',new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    }
}));

function validateType(type){
    const schema = {
        name: Joi.string().min(3).max(30).required(),
    }
}