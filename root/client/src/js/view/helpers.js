import * as View from "./index";

function goToNextPage(nextPage) {
	View.mainPage.classList.add('inactive');
	View.orderPage.classList.add('inactive');
	View.ordersPage.classList.add('inactive');
	View.menuPage.classList.add('inactive');

	nextPage.classList.remove('inactive');
}

export { goToNextPage };
