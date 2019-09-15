import { ROUTES_API, HEADERS } from '../constants/';
import { setToken } from '../storage/';
import { goToHomepage } from '../routing/';
import * as View from '../view/';
import { validationRegisterForm } from './schemas/';

const submitFormRegister = event => {
	event.preventDefault();

	const usernameValue = View.getRegisterUsername();
	const emailValue = View.getRegisterEmail();
	const passwordValue = View.getRegisterPassword();

	if (!validationRegisterForm(usernameValue, emailValue, passwordValue))
		return false;

	View.showLoading();
	Promise.all([register(usernameValue, emailValue, passwordValue)])
		.then(() => {
			View.hideLoading();
			goToHomepage();
		})
		.catch(() => {
			View.hideLoading();
		});
};

async function register(username, email, password) {
	const response = await registerFetch(username, email, password);
	setToken(response.headers.get(HEADERS.TOKEN));
}

const registerFetch = (username, email, password) => {
	const registerUser = {
		username: username,
		email: email,
		password: password
	};

	return fetch(ROUTES_API.REGISTER, {
		method: 'post',
		body: JSON.stringify(registerUser)
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

export { submitFormRegister };
