const API = 'http://localhost:5000/api/';

const ENDPOINTS = {
	PRODUCTS: API + 'products/',
	PRODUCTS_BY_CATEGORY: API + 'products/categoryName/',
	CATEGORIES: API + 'categories/',
	CATEGORIES_NAME: API + 'categories/browserName/',
	ADDRESSES: API + 'addresses/',
	ADDRESSES_NAME: API + 'addresses/browserAddress/',
	CUSTOMERS: API + 'customers/',
	CUSTOMERS_EMAIL: API + 'customers/browserEmail/',
	ORDERS: API + 'orders/',
	COMPLETE_ORDER: API + 'orders/completeOrder/',
	ORDERS_BY_USER: API + 'orders/complete/'
};

export { ENDPOINTS };
