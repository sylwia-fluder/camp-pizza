import menu from '../../images/menu.jpg';

const productElement = product => {
	return `<div class="menu-dish mini-dish" id="${product.name}" data-id="${product._id}">
                <img class="dish-img" src="${menu}"/>
                <p>${product.name}<span class="ingredients">${product.ingredients.join(', ')}</span></p>
                <p class="price">${product.price} PLN</p>
                <i class="fas fa-shopping-basket dish-basket"></i>
        </div>`;
};

export { productElement };
