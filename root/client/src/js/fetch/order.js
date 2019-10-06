import { ENDPOINTS } from '../constants';

const getAllCompleteOrdersByCustomer = customer_id => {
	return fetch(`${ENDPOINTS.ORDERS_BY_USER}${customer_id}`, {
		method: 'GET'
	});
};

const getOrderById = id => {
	return fetch(`${ENDPOINTS.ORDERS}${id}`, {
		method: 'GET'
	});
};

const updateOrder = (id, order) => {
	return fetch(`${ENDPOINTS.ORDERS}${id}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(order)
	});
};

const createOrder = order => {
	return fetch(ENDPOINTS.ORDERS, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(order)
	});
};

const completeOrder = id => {
	return fetch(`${ENDPOINTS.COMPLETE_ORDER}${id}`, {
		method: 'PUT',
		body: {
			isEnded: true,
			status: 'complete',
			orderDeliveryDate: Date.now
		}
	});
};

export {
	getAllCompleteOrdersByCustomer,
	getOrderById,
	updateOrder,
	createOrder,
	completeOrder
};
