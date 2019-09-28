import { ENDPOINTS } from '../constants';

const getAllProducts = () => {
	return fetch(ENDPOINTS.PRODUCTS, {
		method: 'GET'
	});
};

const getProductByName = name => {
	return fetch(`${ENDPOINTS.PRODUCTS_NAME}${name}`, {
		method: 'GET'
	});
};

const createProduct = product => {
	return fetch(ENDPOINTS.PRODUCTS, {
		method: 'POST',
		body: product
	});
};

export { getAllProducts, getProductByName, createProduct };
