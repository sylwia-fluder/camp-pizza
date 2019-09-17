import { genSalt, hash } from 'bcrypt';
import { pick } from 'lodash';
import { Customer, validate } from '../models/customer'
import { Router } from 'express';
const router = Router();

router.post('/', async (req, res) => {
 const { error } = validate(req.body);
 if (error) return res.status(400).send(error.details[0].message);
 let customer = await Customer.findOne({ email: req.body.mail });
 if (customer) return res.status(400).send('The Customer with given email is already registered!');
 customer = new Customer(pick(req.body, ['name', 'email', 'password', 'address', 'phone']));
 const salt = await genSalt(10);
 customer.password = await hash(customer.password, salt);
 res.send(pick(customer, ['_id', 'name', 'email']));
});

module.exports = router;