import { getAllCategories } from './category';
import { getProductByCategoryName } from './product';
import { createAddress } from './address';
import { createCustomer } from './customer';
import {
	completeOrder,
	createOrder,
	updateOrder,
	getAllCompleteOrdersByCustomer,
	getOrderById
} from './order';

const getCategories = async () => {
	const response = await getAllCategories();
	return await response.json();
};

const getProducts = async category => {
	const response = await getProductByCategoryName(category.name);
	return await response.json();
};

const createNewAddress = async address => {
	const response = await createAddress(address);
	return await response.json();
};

const createNewCustomer = async customer => {
	const response = await createCustomer(customer);
	return await response.json();
};

const createNewOrder = async order => {
	const response = await createOrder(order);
	return await response.json();
};

const updateExistOrder = async (id, order) => {
	const response = await updateOrder(id, order);
	return await response.json();
};

const updateCompleteExistOrder = async id => {
	const response = await completeOrder(id);
	return await response.json();
};

const getOrder = async id => {
	const response = await getOrderById(id);
	return await response.json();
};

const getCompleteOrders = async id_customer => {
	const response = await getAllCompleteOrdersByCustomer(id_customer);
	return await response.json();
};

export {
	getCategories,
	getProducts,
	createNewAddress,
	createNewCustomer,
	createNewOrder,
	updateExistOrder,
	updateCompleteExistOrder,
	getOrder,
	getCompleteOrders
};
