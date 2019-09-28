import '../styles/index.scss';
import categories from './fakeJson/categories';
import products from './fakeJson/products';
import { categoryHeader, productElement } from './view';

let elementHtml = '';
categories.map(category => {
	elementHtml += categoryHeader(category);
	elementHtml += '<div class="menu-element-dishes">';

	products.map(product => {
		elementHtml += productElement(product);
	});

	elementHtml += '</div>';
});

document.getElementById('menu').innerHTML = elementHtml;
