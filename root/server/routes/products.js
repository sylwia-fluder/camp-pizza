const pick = require('lodash');
const Router = require('express');
const {Product, validate} = require('../models/product');
const {Category} = require('../models/category');
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

  const category = await Category.findOne({name: req.body.category});
  if (!category) return res.status(400).send('Invalid category.');

  let product = await Product.findOne({ name: req.body.name });
  if (product) return res.status(400).send('The product with given name is already exist!');

    product = new Product({
      name: req.body.name,
      category: {
        _id: category._id,
        name: category.name
      },
      price: req.body.price,
      size: req.body.size,
      ingredients: req.body.ingredients,
      isVegan: req.body.isVegan,
      isSpicy: req.body.isSpicy
    });

    product = await product.save();

    res.send(product);
});

router.put('/:id', async (req, res) => {
  let product = await Product.findByIdAndUpdate(
    req.params.id,
    pick(req.body, ['name', 'price']),
    { new: true }
  );
  if (!product) return res.status(404).send('The product with given ID is not found!');
  res.send(product);
});

router.delete('/:id', async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).send('The product with given ID is not found!');
  res.send(product);
});

router.get('/browserName/:name', async (req, res) => {
  const product = await Product.find({name: req.params.name});
  if (!product) return res.status(404).send('The product with the given name was not found.');
  res.send(product);
});

router.get('/categoryName/:name', async (req, res) => {
  const product = await Product.find({
    'category.name': req.params.name
  });

  res.send(product);
});

module.exports = router;
