import { Product, validate } from '../models/product';
import { pick } from 'lodash';
import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
  res.send(await Product.find().sort('name'));
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send('The product with given ID is not found!');
  res.send(product);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let product = await Product.findOne({ name: req.body.name });
  if (product) return res.status(400).send('The product with given name is already exist!');
  product = new Product(pick(req.body, ['name', 'price', 'isVegan', 'category']));
  await product.save();
  res.send(product);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let product = await Product.findByIdAndUpdate(
    req.params.id,
    pick(req.body, ['name', 'price']),
    { new: true }
  );
  if (!product) return res.status(404).send('The product with given ID is not found!');
  res.send(product);
});

router.delete('/:id', async (req, res) => {
  const product = await Product.fidnByIdAndRemove(req.params.id);
  if (!product) return res.status(404).send('The product with given ID is not found!');
  res.send(product);
});

module.exports = router;
