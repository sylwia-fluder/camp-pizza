import * as View from './index';

const searchForm = document.getElementById('search-form');
const inputSearchForm = searchForm.querySelector('input');

const infoAddress = document.querySelectorAll('.adress-time p');
const inputNameAddress = document.querySelectorAll('input[name="name"]');
const inputStreetAddress = document.querySelectorAll('input[name="street"]');
const inputNumberAddress = document.querySelectorAll('input[name="number"]');

const changeAddress = address => {
	const values = address.split(', ');
	[...infoAddress].map(element => (element.textContent = address));

	[...inputNameAddress].map(element => {
		element.value = `${values[0]}, ${values[1]}`;
		element.disabled = true;
	});

	[...inputStreetAddress].map(element => {
		element.value = `${values[2]}`;
		element.disabled = true;
	});

	[...inputNumberAddress].map(element => {
		element.value = `${values[3]}`;
		element.disabled = true;
	});
};

export {
	searchForm,
	inputSearchForm,
	infoAddress,
	inputNameAddress,
	inputStreetAddress,
	inputNumberAddress,
	changeAddress
};
