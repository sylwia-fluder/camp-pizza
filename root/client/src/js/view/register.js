const registerForm = document.querySelector('#register-form');

const getRegisterUsername = () =>
	document.querySelector('#register-form input[name="username"]').value;

const getRegisterEmail = () =>
	document.querySelector('#register-form input[name="email"]').value;

const getRegisterPassword = () =>
	document.querySelector('#register-form input[name="password"]').value;

export {
	registerForm,
	getRegisterPassword,
	getRegisterEmail,
	getRegisterUsername
};
