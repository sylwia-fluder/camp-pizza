const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const {addressSchema} = require('./address');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  phone: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 12,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    addressId: Joi.objectId().required(),
    phone: Joi.string()
      .min(8)
      .max(12)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    isAdmin: Joi.boolean(),
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.customerSchema = customerSchema;
exports.validate = validateCustomer;
