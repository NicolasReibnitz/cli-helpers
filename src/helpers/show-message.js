import centerText from './center-text.js';

/**
 * This is basically the same as using centerText() but with one linebreak added before and two lines after.
 * It also console.logs the text directly, instead of just returning the string.
 *
 * @param {string} input The text to be shown.
 * @param {number} textLength The maximum length of text per line. (default = 76)
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 */
function showMessage(input, textLength = 76, lineLength = 80) {
	console.log('\n' + centerText(input, textLength, lineLength), '\n\n');
}

export default showMessage;
