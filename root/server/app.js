import Joi, { objectId } from '@hapi/joi';
import express, { json } from 'express';
import { MongoClient } from 'mongodb';
const mongoose = require('mongoose');
const products = require('./routes/products');
const categories = require('./routes/categories');
const customers = require('./routes/customers');
const addresses = require('./routes/addresses');
const orders = require('./routes/orders');
const app = express();

mongoose.connect('mongodb+srv://user:user@codersproject-iloro.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('Connect to DB'))
    .catch(err => console.error(err));


app.use(express.json());
app.use('/api/products',products);
app.use('/api/categories',categories);
app.use('/api/customers',customers);
app.use('/api/addresses',addresses);
app.use('/api/orders',orders);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});