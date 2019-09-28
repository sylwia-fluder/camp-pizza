const Joi = require('@hapi/joi');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const products = require('./src/routes/products');
const categories = require('./src/routes/categories');
const customers = require('./src/routes/customers');
const addresses = require('./src/routes/addresses');
const orders = require('./src/routes/orders');
/*
const uri = "mongodb+srv://user:user@codersproject-iloro.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    client.close();
});*/
mongoose.connect('mongodb://localhost/camp-pizza')
    .then(() => console.log('Connect to MongoDB'))
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