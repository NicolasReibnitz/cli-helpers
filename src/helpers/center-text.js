import wrapAnsi from 'wrap-ansi';
// import pad from 'pad-component';
import align from 'wide-align';
// const stringWidth = require('string-width');
// const stringLength = require('string-length');

/**
 * @param input
 * @param textLength
 * @param lineLength
 */
function centerText(input, textLength, lineLength) {
	textLength = textLength || 76;
	lineLength = lineLength || 80;
	const wrapped = wrapAnsi(input, textLength);
	const wrappedArray = wrapped.split('\n');
	let paddedArray = [];

	for (const line in wrappedArray) {
		if (Object.hasOwnProperty.call(wrappedArray, line)) {
			paddedArray[line] = align.center(wrappedArray[line], lineLength);
		}
	}
	// console.log('stringWidth', stringWidth(input));
	// console.log('stringLength', stringLength(input));
	return paddedArray.join('\n');
}

export default centerText;
