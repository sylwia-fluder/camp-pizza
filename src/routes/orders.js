const {Order, validate} = require('../models/order');
const {Customer} = require('../models/customer');
const {Product} = require('../models/product');
const mongoose = require('mongoose');
const Fawn = require('fawn');
const pick = require('lodash');
const express = require('express');
const router = express.Router();

Fawn.init(mongoose);

router.get('/', async (req, res) => {
  res.send(await Order.find().sort('-dateOrder'));
});

router.post('/', async (req, res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const customer = await Customer.findById(req.body.customerId);
  if (!customer)
    return res.status(404).send('The customer with given ID is not found!');
  const product = await Product.findById(req.body.productId);
  if (!product)
    return res.status(404).send('The product with given ID is not found!');
  let order = new Order({
    product: {
      _id: product._id,
      name: product.name,
      price: product.price,
    },
    customer: {
      _id: customer._id,
      name: customer.name,
      address: customer.address,
      phone: customer.phone,
    },
    dateOrder: req.body.dateOrder,
    status: req.body.status,
  });
  try {
    new Fawn.Task().save('orders', order).run();
    res.send(order);
  } catch (ex) {
    res.status(500).send('The order process has failed...');
  }
});

router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) return res.status(404).send('The order with the given ID was not found.');

  res.send(order);
});

router.put('/:id', async (req, res) => {
  let order = await Order.findByIdAndUpdate(
    req.params.id,
    pick(req.body, ['status', 'isEnded','orderDeliveryDate']),
    { new: true }
  );
  if (!order) return res.status(404).send('The order with given ID is not found!');
  res.send(order);
});

router.put('/completeOrder/:id', async (req, res) => {

  let order = await Order.findByIdAndUpdate(
    req.params.id,
    {
      status:"complete", 
      isEnded: true,
      orderDeliveryDate: Date.now()
    },
    { new: true }
  );
  if (!order) return res.status(404).send('The order with given ID is not found!');
  res.send(order);
});

module.exports = router; 
