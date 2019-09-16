const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    }
});

const Type = mongoose.model('Type',typeSchema);

function validateType(type){
    const schema = {
        name: Joi.string().min(3).max(30).required(),
    }

    return Joi.validate(type, schema);
}

exports.typeSchema = typeSchema;
exports.Type = Type; 
exports.validate = validateType;