import centerText from './center-text.js';

/**
 * @param input
 * @param textLength
 * @param lineLength
 */
function showMessage(input, textLength, lineLength) {
	lineLength = lineLength || 80;
	console.log('\n' + centerText(input, textLength, lineLength), '\n\n');
}

export default showMessage;
