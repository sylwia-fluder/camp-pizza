import { ROUTES_API, HEADERS } from '../constants/';
import { setToken } from '../storage/';
import { goToHomepage } from '../routing/';
import { validationRegisterForm } from './schemas/';
import * as View from '../view/';

const submitFormRegister = event => {
	event.preventDefault();

	View.registerError.innerText = '';

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
			View.registerError.innerText = 'Something went wrong...';
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
			throw error;
		});
};

export { submitFormRegister };