import {
	checkMaxLength,
	checkMinLength,
	isNotEmpty,
	isEmail
} from '../../validations/';
import { MAX_LENGTH_VALIDATION, MIN_LENGTH_VALIDATION } from '../../constants/';
import * as View from '../../view';

const validationRegisterForm = (username, email, password) => {
	if (!isNotEmpty(username)) {
		View.registerError.innerText = 'Field: username is empty';
		return false;
	}
	if (!checkMaxLength(username, MAX_LENGTH_VALIDATION.USERNAME)) {
		View.registerError.innerText = 'Value: username is long';
		return false;
	}

	if (!isNotEmpty(email)) {
		View.registerError.innerText = 'Field: email is empty';
		return false;
	}
	if (!isEmail(email)) {
		View.registerError.innerText = 'Value: email is not email type';
		return false;
	}

	if (!isNotEmpty(password)) {
		View.registerError.innerText = 'Field: password is empty';
		return false;
	}
	if (!checkMinLength(password, MIN_LENGTH_VALIDATION.PASSWORD)) {
		View.registerError.innerText = 'Value: password is short';
		return false;
	}

	return true;
};

export { validationRegisterForm };
