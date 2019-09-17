import { ROUTING } from '../constants/';

const goToHomepage = () => (window.location = ROUTING.HOME);
const goToLogin = () => (window.location = ROUTING.LOGIN);
const goToRegister = () => (window.location = ROUTING.REGISTER);
const goToOrderDetails = () => (window.location = ROUTING.ORDER_DETAILS);
const goToOrdersHistory = () => (window.location = ROUTING.ORDERS_HISTORY);
const goToListOfProducts = () => (window.location = ROUTING.LIST_OF_PRODUCTS);

export {
	goToHomepage,
	goToLogin,
	goToRegister,
	goToOrderDetails,
	goToOrdersHistory,
	goToListOfProducts
};
