import centerTextFn from './helpers/center-text.js';
import clearScreenFn from './helpers/clear-screen.js';
import headerFn from './helpers/header.js';
import keyToContinueFn from './helpers/key-to-continue.js';
import showLogoFn from './helpers/show-logo.js';
import showMessageFn from './helpers/show-message.js';
import softClearFn from './helpers/soft-clear.js';

class cliHelpers {
	constructor(cliWidth) {
		this.cliWidth = cliWidth || 80;
	}

	centerText(input, textLength, cliWidth) {
		cliWidth = cliWidth || this.cliWidth;
		return centerTextFn(input, textLength, cliWidth);
	}

	clearScreen() {
		clearScreenFn();
	}

	header(string, cliWidth) {
		cliWidth = cliWidth || this.cliWidth;
		return headerFn(string, cliWidth);
	}

	async keyToContinue(message, cliWidth) {
		cliWidth = cliWidth || this.cliWidth;
		return keyToContinueFn(message, cliWidth);
	}

	showLogo(cliWidth) {
		cliWidth = cliWidth || this.cliWidth;
		return showLogoFn(cliWidth);
	}

	showMessage(input, textLength, cliWidth) {
		cliWidth = cliWidth || this.cliWidth;
		return showMessageFn(input, textLength, cliWidth);
	}

	softClear() {
		softClearFn();
	}
}

export default cliHelpers;

export const centerText = centerTextFn;
export const clearScreen = clearScreenFn;
export const header = headerFn;
export const keyToContinue = keyToContinueFn;
export const showLogo = showLogoFn;
export const showMessage = showMessageFn;
export const softClear = softClearFn;
