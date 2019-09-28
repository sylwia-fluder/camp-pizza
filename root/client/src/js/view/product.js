const productElement = product => {
	return (
		`<div class="menu-dish mini-dish">
                <img class="dish-img" src="<%=require("../src/images/menu.jpg")%>"/>
                <p>${product.name}<span class="ingredients">${product.ingredients.join(', ')}</span></p>
                <p class="price">${product.price} PLN</p>
                <i class="fas fa-shopping-basket dish-basket"></i>
        </div>`
	);
};

export { productElement };
