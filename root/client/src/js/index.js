import '../styles/index.scss';

import { submitFormLogin, submitFormRegister } from './auth/';
import * as View from './view/';

if (View.loginForm) {
	View.loginForm.addEventListener('submit', e => submitFormLogin(e));
}

if (View.registerForm) {
	View.registerForm.addEventListener('submit', e => submitFormRegister(e));
}
