const API = 'http://localhost:5000/api/';

const ENDPOINTS = {
	PRODUCTS_BY_CATEGORY: API + 'products/categoryName/',
	CATEGORIES: API + 'categories/',
	ADDRESSES: API + 'addresses/',
	CUSTOMERS: API + 'customers/',
	ORDERS: API + 'orders/',
	COMPLETE_ORDER: API + 'orders/completeOrder/',
	ORDERS_BY_USER: API + 'orders/complete/'
};

export { ENDPOINTS };
