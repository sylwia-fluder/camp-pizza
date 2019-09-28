const {Address, validate} = require('../models/address');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const address = await Address.find().sort('city');
  res.send(address);
});

router.post('/', async (req, res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let address = new Address({
    street: req.body.street,
    houseNumber: req.body.houseNumber,
    apartmentNumber: req.body.apartmentNumber,
    city: req.body.city,
    country:req.body.country});
    
  address = await address.save();

  res.send(address);
});

router.put('/:id', async (req, res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const address = await Address.findByIdAndUpdate(
    req.params.id,
    {
        street: req.body.street,
        houseNumber: req.body.houseNumber,
        apartmentNumber: req.body.apartmentNumber,
        city: req.body.city,
        country:req.body.country},
    {
      new: true,
    }
  );

  if (!address)
    return res
      .status(404)
      .send('The address with the given ID was not found.');

  res.send(address);
});

router.delete('/:id', async (req, res) => {
  const address = await Address.findByIdAndRemove(req.params.id);

  if (address)
    return res
      .status(404)
      .send('The address with the given ID was not found.');

  res.send(address);
});

router.get('/:id', async (req, res) => {
  const address = await Category.findById(req.params.id);

  if (address)
    return res
      .status(404)
      .send('The address with the given ID was not found.');

  res.send(address);
});

router.get('/browserAddress/:country/:city/:street/:houseNumber', async (req, res) => {
  const address = await Address.find({country: req.params.country}).find({city: req.params.city}).find({street: req.params.street}).find({houseNumber: req.params.houseNumber});
  if (!address) return res.status(404).send('The address was not found.');
  res.send(address);
});


module.exports = router;
