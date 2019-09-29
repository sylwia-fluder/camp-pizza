import { ENDPOINTS } from '../constants';

const getAllCategories = () => {
	return fetch(ENDPOINTS.CATEGORIES, {
		method: 'GET'
	});
};

export { getAllCategories };
