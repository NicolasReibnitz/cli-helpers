import pressAnyKey from 'press-any-key';
import wideAlign from 'wide-align';

/**
 * Outputs a message and waits for the user to press a key to continue.
 *
 * @param {string} input The text to be shown. (default = 'Press any key to continue...')
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 */
async function keyToContinue(input = 'Press any key to continue...', lineLength = 80) {
	await pressAnyKey(wideAlign.center(input + '\n ', lineLength) + '\n\n' + ' '.repeat(lineLength / 2));
}

export default keyToContinue;
