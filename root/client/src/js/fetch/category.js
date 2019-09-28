import { ENDPOINTS } from '../constants';

const getAllCategories = () => {
	return fetch(ENDPOINTS.CATEGORIES, {
		method: 'GET'
	});
};

const getCategoryByName = name => {
	return fetch(`${ENDPOINTS.CATEGORIES_NAME}${name}`, {
		method: 'GET'
	});
};

const createCategory = category => {
	return fetch(ENDPOINTS.CATEGORIES, {
		method: 'POST',
		body: category
	});
};

export { getAllCategories, getCategoryByName, createCategory };
