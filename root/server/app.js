import Joi, { objectId } from '@hapi/joi';
objectId = require('joi-objectid')(Joi);
import express, { json } from 'express';
import { MongoClient } from 'mongodb';
import products from './routes/products';
import customers from './routes/customers';
import orders from './routes/orders';
const app = express();

const uri = "mongodb+srv://user:user@codersproject-iloro.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(() => {
  client.close();
});

app.use(json());
app.use('/api/products', products);
app.use('/api/customers', customers);
app.use('/api/orders', orders);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});