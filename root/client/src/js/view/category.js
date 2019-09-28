const categoryHeader = category => {
	return (
		`<div class="menu-element">
            <div class="menu-dish">
                <img class="menu-img" src="<%=require("../src/images/menu.jpg")%>"/>
                <p>${category.name}</p>
            </div>
            <i class="fa fa-arrow-circle-down fa-2x arrow-menu"></i>
        </div>`
	);
};

export { categoryHeader };
