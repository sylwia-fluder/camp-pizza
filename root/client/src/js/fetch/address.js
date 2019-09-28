import { ENDPOINTS } from '../constants';

const getAllAddresses = () => {
	return fetch(ENDPOINTS.ADDRESSES, {
		method: 'GET'
	});
};

const getAddressByName = address => {
	return fetch(
		`${ENDPOINTS.ADDRESSES_NAME}${address.country}/${address.city}/${address.street}/${address.houseNumber}`,
		{
			method: 'GET'
		}
	);
};

const getAddressById = id => {
	return fetch(`${ENDPOINTS.ADDRESSES}${id}`, {
		method: 'GET'
	});
};

const createAddress = address => {
	return fetch(ENDPOINTS.ADDRESSES, {
		method: 'POST',
		body: address
	});
};

export { getAllAddresses, getAddressByName, getAddressById, createAddress };
