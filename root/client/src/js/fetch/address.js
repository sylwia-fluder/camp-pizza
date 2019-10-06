import { ENDPOINTS } from '../constants';

const createAddress = address => {
	return fetch(ENDPOINTS.ADDRESSES, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(address)
	});
};

export { createAddress };
