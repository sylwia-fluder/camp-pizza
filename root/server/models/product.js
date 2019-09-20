const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const {categorySchema} = require('./category');

const Product = mongoose.model(
  'Product',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    category: {
      type: categorySchema,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      get: v => (v = Math.round(v * 100) / 100),
      set: v => (v = Math.round(v * 100) / 100),
    },
    size: {
      type: Number,
      required: function() {
        return this.category.name === 'pizza';
      },
      get: v => (v = Math.round(v)),
      set: v => (v = Math.round(v)),
      max: 50,
      min: 10,
    },
    ingredients: {
      type: Array,
    },
    isVegan: {
      type: Boolean,
      default: false,
    },
    isSpicy: {
      type: Boolean,
      default: false,
    },
  })
);

function validateProduct(product) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
    categoryId: Joi.objectId().required(),
    price: Joi.number().required(),
    size: Joi.number(),
    ingredients: Joi.array(),
    isVegan: Joi.boolean(),
    isSpicy: Joi.boolean(),
  };

  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;
