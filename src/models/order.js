const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const {addressSchema} = require('./address');

const Order = mongoose.model(
  'Order',
  new mongoose.Schema({
    customer: {
      type: new mongoose.Schema({
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
      }),
      required: true,
    },
    product: {
      type: new mongoose.Schema({
        name: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 30,
        },
        price: {
          type: Number,
          required: true,
          get: v => (v = Math.round(v * 100) / 100),
          set: v => (v = Math.round(v * 100) / 100),
        },
      }),
      required: true,
    },
    dateOrder: {
      type: Date,
      required: true,
      default: Date.now,
    },
    status: {
      type: String,
      default: "is being prepered"
    },
    isEnded: {
      type: Boolean,
      default: false
    },
    orderDeliveryDate: {
      type: Date,
    },
  })
);

function validateOrder(order) {
  const schema = {
    customerId: Joi.objectId().required(),
    productId: Joi.objectId().required(),
    dateOrder: Joi.date(),
    status: Joi.string(),
    isEnded: Joi.boolean(),
    orderDeliveryDate: Joi.date(),
  };

  return Joi.validate(order, schema);
}

exports.Order = Order;
exports.validate = validateOrder;
