const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  houseNumber: {
    type: Number,
    require: true,
    min: 1,
  },
  apartmentNumber: {
    type: Number,
    min: 1,
  },
  city: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  country: {
    type: String,
    minlength: 3,
    maxlength: 255,
  },
});

const Address = mongoose.model('Address', addressSchema);

function validateAddress(address) {
  const schema = {
    street: Joi.string()
      .min(3)
      .max(255)
      .required(),
    houseNumber: Joi.number()
      .min(1)
      .required(),
    apartmentNumber: Joi.number()
      .min(1),
    city: Joi.string()
      .min(3)
      .max(255)
      .required(),
    country: Joi.string()
      .min(3)
      .max(255),
  };

  return Joi.validate(address, schema);
}

exports.addressSchema = addressSchema;
exports.Address = Address;
exports.validate = validateAddress;
