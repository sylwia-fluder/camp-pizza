import menu from '../../images/menu.jpg';

const categoryHeader = category => {
	return `<div class="menu-element">
            <div class="menu-dish">
                <img class="menu-img" src="${menu}"/>
                <p>${category.name}</p>
            </div>
            <i class="fa fa-arrow-circle-down fa-2x arrow-menu"></i>
        </div>`;
};

export { categoryHeader };
