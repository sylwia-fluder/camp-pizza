import { ENDPOINTS } from '../constants';

const getAllOrders = () => {
	return fetch(ENDPOINTS.ORDERS, {
		method: 'GET'
	});
};

const getOrderById = id => {
	return fetch(`${ENDPOINTS.ORDERS}${id}`, {
		method: 'GET'
	});
};

const updateOrder = order => {
	return fetch(`${ENDPOINTS.ORDERS}${order.id}`, {
		method: 'PUT',
		body: order
	});
};

const createOrder = order => {
	return fetch(ENDPOINTS.ORDERS, {
		method: 'POST',
		body: order
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

export { getAllOrders, getOrderById, updateOrder, createOrder, completeOrder };
