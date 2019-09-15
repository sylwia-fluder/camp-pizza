import {
	checkMaxLength,
	checkMinLength,
	isNotEmpty,
	isEmail
} from '../../validations/';
import { MAX_LENGTH_VALIDATION, MIN_LENGTH_VALIDATION } from '../../constants/';

const validationRegisterForm = (username, email, password) => {
	if (!isNotEmpty(username)) {
		alert('Field: username is empty');
		return false;
	}
	if (!checkMaxLength(username, MAX_LENGTH_VALIDATION.USERNAME)) {
		alert('Value: username is long');
		return false;
	}

	if (!isNotEmpty(email)) {
		alert('Field: email is empty');
		return false;
	}
	if (!isEmail(email)) {
		alert('Value: email is not email type');
		return false;
	}

	if (!isNotEmpty(password)) {
		alert('Field: password is empty');
		return false;
	}
	if (!checkMinLength(password, MIN_LENGTH_VALIDATION.PASSWORD)) {
		alert('Value: password is short');
		return false;
	}

	return true;
};

export { validationRegisterForm };
