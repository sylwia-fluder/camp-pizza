import { ENDPOINTS } from '../constants';

const getAllCustomers = () => {
	return fetch(ENDPOINTS.CUSTOMERS, {
		method: 'GET'
	});
};

const getCustomerByEmail = email => {
	return fetch(`${ENDPOINTS.CUSTOMERS_EMAIL}${email}`, {
		method: 'GET'
	});
};

const getCustomerById = id => {
	return fetch(`${ENDPOINTS.CUSTOMERS}${id}`, {
		method: 'GET'
	});
};

const createCustomer = customer => {
	return fetch(ENDPOINTS.CUSTOMERS, {
		method: 'POST',
		body: customer
	});
};

export { getAllCustomers, getCustomerByEmail, getCustomerById, createCustomer };
