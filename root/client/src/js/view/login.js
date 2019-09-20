const loginForm = document.querySelector('#login-form');

const getLoginUsername = () =>
	document.querySelector('#login-form input[name="login"]').value;

const getLoginPassword = () =>
	document.querySelector('#login-form input[name="password"]').value;

export { loginForm, getLoginUsername, getLoginPassword };
