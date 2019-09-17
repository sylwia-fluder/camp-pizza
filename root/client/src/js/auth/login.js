import { ROUTES_API, HEADERS } from '../constants/';
import { setToken } from '../storage/';
import { goToHomepage } from '../routing/';
import { validationLoginForm } from './schemas/';
import * as View from '../view/';

const submitFormLogin = event => {
	event.preventDefault();

	const usernameValue = View.getLoginUsername();
	const passwordValue = View.getLoginPassword();

	if (!validationLoginForm(usernameValue, passwordValue)) return false;

	View.showLoading();
	Promise.all([login(usernameValue, passwordValue)])
		.then(() => {
			View.hideLoading();
			goToHomepage();
		})
		.catch(() => {
			View.hideLoading();
		});
};

async function login(username, password) {
	const response = await loginFetch(username, password);
	setToken(response.headers.get(HEADERS.TOKEN));
}

const loginFetch = (username, password) => {
	const loginUser = {
		username: username,
		password: password
	};

	return fetch(ROUTES_API.LOGIN, {
		method: 'post',
		body: JSON.stringify(loginUser)
	})
		.then(response => {
			if (!response.ok) throw new Error('HTTP status code: ' + response.status);
			return response;
		})
		.catch(error => {
			alert(error);
			throw error;
		});
};

export { submitFormLogin };
