import { Fawn } from 'fawn';
import { Order, validate } from '../models/order';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import mongoose from 'mongoose';
import { Router } from 'express';
const router = Router();

Fawn.init(mongoose);

router.get('/', async (req, res) => {
  res.send(await Order.find().sort('-orderDate'));
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.detials[0].message);
  const customer = await Customer.findById(req.body.customerId);
  if (!customer) return res.status(404).send('The customer with given ID is not found!');
  const product = await Product.fidnById(req.body.productId);
  if (!product) return res.status(404).send('The customer with given ID is not found!');
  let order = new Order({
    product: {
      _id: product._id,
      name: product.name,
      price: product.price
    },
    customer: {
      _id: customer._id,
      name: customer.name,
      address: customer.address,
      phone: customer.phone
    }
  });
  try {
    new Fawn.Task()
      .save('orders', order)
      .run();
    res.send(order);
  } catch (ex) {
    res.status(500).send('The order process has failed...');
  }
});