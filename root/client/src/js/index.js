import '../styles/index.scss';

import faker from 'faker';
import * as View from './view';
import * as Fetch from './fetch';

faker.locale = 'pl';
View.inputSearchForm.value = `${faker.address.country()}, 
${faker.address.city()}, 
${faker.address.streetPrefix()} ${faker.address.streetName()}, 
${faker.random.number()}`;

let customerId;
let orderId;
View.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	const inputValue = View.inputSearchForm.value;
	const values = inputValue.split(', ');
	Fetch.createNewAddress({
		country: values[0],
		city: values[1],
		street: values[2],
		houseNumber: values[3]
	}).then(address => {
		const addressId = address._id;

		if (typeof customerId === 'undefined' || customerId === '') {
			Fetch.createNewCustomer({
				name: faker.name.firstName(),
				phone: faker.phone.phoneNumber(),
				addressId: addressId,
				email: faker.internet.email(),
				password: faker.internet.password(),
				isAdmin: false,
				isRegistered: true
			}).then(customer => (customerId = customer._id));
		}
	});

	View.changeAddress(inputValue);
	View.goToNextPage(View.menuPage);
});

let categoriesHTML = '';
Fetch.getCategories().then(categories => {
	categories.map(category => {
		categoriesHTML += View.categoryHeader(category);

		Fetch.getProducts(category).then(products => {
			let productsHTML = '';
			products.map(product => (productsHTML += View.productElement(product)));

			document
				.getElementById(category.name)
				.insertAdjacentHTML(
					'afterend',
					`<div class="menu-element-dishes">${productsHTML}</div>`
				);
		});
	});
	document.getElementById('menu').innerHTML = categoriesHTML;
});

document.addEventListener('click', e => {
	if (e.target && e.target.classList.contains('p_shopping_cart')) {
		View.goToNextPage(View.menuPage);
	}

	if (e.target && e.target.classList.contains('dish-basket')) {
		const productId = e.target.parentNode.getAttribute('data-id');
		const orderBody = {
			productId: productId,
			customerId: customerId
		};
		if (typeof orderId === 'undefined' || orderId === '') {
			Fetch.createNewOrder(orderBody).then(order => {
				orderId = order._id;
				Fetch.getOrder(orderId).then(order => {
					document.getElementById('order').innerHTML = View.orderElement(order);
					View.goToNextPage(View.orderPage);
				});
			});
		} else {
			Fetch.updateExistOrder(orderId, orderBody).then(() => {
				Fetch.getOrder(orderId).then(order => {
					document.getElementById('order').innerHTML = View.orderElement(order);
					View.goToNextPage(View.orderPage);
				});
			});
		}
	}
});

document.querySelector('.pay-btn').addEventListener('click', () => {
	Fetch.updateCompleteExistOrder(orderId).then(() => {
		orderId = '';
		Fetch.getCompleteOrders(customerId).then(orders => {
			let ordersHTML = '';
			orders.map(order => {
				ordersHTML += View.ordersHistory(order);
			});
			document.getElementById('orders').innerHTML = ordersHTML;
			View.goToNextPage(View.ordersPage);
		});
	});
});
