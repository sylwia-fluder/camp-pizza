import { isNotEmpty } from '../../validations/';

const validationLoginForm = (username, password) => {
	if (!isNotEmpty(username)) {
		alert('Field: username is empty');
		return false;
	}

	if (!isNotEmpty(password)) {
		alert('Field: password is empty');
		return false;
	}

	return true;
};

export { validationLoginForm };
