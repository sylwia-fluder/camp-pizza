import menu from '../../images/menu.jpg';

const orderElement = order => {
	return `<div class="menu-dish mini-dish">
                <img class="dish-img" src="${menu}"/>
                <p>${order.product.name}<span class="ingredients">${order.product.ingredients.join(', ')}</span></p>
                <p class="price">${order.product.price} PLN</p>
            </div>
            <p class="head">SUM (ORDER + DELIVERY) =<span class="price-summary">${order.product.price} PLN</span></p>`;
};

const ordersHistory = order => {
	return `<div class="menu-dish mini-dish">
                <i class="fas fa-utensils fa-2x user-ico-s"></i>
                <p>#${order._id.substring(0, 5)}<span class="ingredients">${order.product.name}</span></p>
                <p class="price">${order.product.price} PLN</p>
            </div>`;
};

export { orderElement, ordersHistory };
