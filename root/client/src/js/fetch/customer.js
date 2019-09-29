import { ENDPOINTS } from '../constants';

const createCustomer = customer => {
	return fetch(ENDPOINTS.CUSTOMERS, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(customer)
	});
};

export { createCustomer };
