import { ENDPOINTS } from '../constants';

const getProductByCategoryName = name => {
	return fetch(`${ENDPOINTS.PRODUCTS_BY_CATEGORY}${name}`, {
		method: 'GET'
	});
};

export { getProductByCategoryName };
