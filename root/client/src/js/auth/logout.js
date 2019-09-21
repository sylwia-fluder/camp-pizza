import { removeToken } from '../storage/';
import { goToHomepage } from '../routing/';

const logout = () => {
	removeToken();
	goToHomepage();
};

export { logout };
