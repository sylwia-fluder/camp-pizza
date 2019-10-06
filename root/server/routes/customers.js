const {Customer, validate} = require('../models/customer');
const {Address, validateAddress} = require('../models/address');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send(await Customer.find().sort('name').select('-password'));
});

router.get('/browserEmail/:email', async (req, res) => {
  let customer = await Customer.findOne({ email: req.params.email });
  if (!customer) return res.status(400).send('Invalid email or password.');

  res.send(customer).select('-password');
});

router.post('/', async (req, res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const address = await Address.findById(req.body.addressId);
  if (!address) return res.status(400).send("Invalid address");

  let customer = new Customer({
      name: req.body.name,
      address: {
        _id: address._id,
        street: address.street,
        houseNumber: address.houseNumber,
        apartmentNumber: address.apartmentNumber,
        city: address.city,
        country:address.country
      },
      phone: req.body.phone,
      email: req.body.email,
  });
  customer = await customer.save();

  res.send(customer);
});

router.delete('/:id', async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);

  if (!customer) return res.status(404).send('The customer with the given ID was not found.');

  res.send(customer);
});

router.get('/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) return res.status(404).send('The customer with the given ID was not found.');

  res.send(customer);
});



module.exports = router; 