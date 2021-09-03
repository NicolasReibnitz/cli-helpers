import wrapAnsi from 'wrap-ansi';
// Import pad from 'pad-component';
import align from 'wide-align';
// Const stringWidth = require('string-width');
// const stringLength = require('string-length');

/**
 * Outputs the input text, centered and wrapped over multiple lines if too long.
 *
 * @param {string} input The text to be shown.
 * @param {number} textLength The maximum length of text per line. (default = 76)
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 *
 * @returns {string} The centered text as string.
 */
function centerText(input, textLength = 76, lineLength = 80) {
	const wrapped = wrapAnsi(input, textLength);
	const wrappedArray = wrapped.split('\n');
	const paddedArray = [];

	for (const line in wrappedArray) {
		if (Object.hasOwnProperty.call(wrappedArray, line)) {
			paddedArray[line] = align.center(wrappedArray[line], lineLength);
		}
	}

	// Console.log('stringWidth', stringWidth(input));
	// console.log('stringLength', stringLength(input));
	return paddedArray.join('\n');
}

export default centerText;
