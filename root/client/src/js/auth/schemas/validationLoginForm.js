import { isNotEmpty } from '../../validations/';
import * as View from '../../view';

const validationLoginForm = (username, password) => {
	if (!isNotEmpty(username)) {
		View.loginError.innerText = 'Field: username is empty';
		return false;
	}

	if (!isNotEmpty(password)) {
		View.loginError.innerText = 'Field: password is empty';
		return false;
	}

	return true;
};

export { validationLoginForm };
