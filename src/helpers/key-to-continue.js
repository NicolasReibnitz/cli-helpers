import pressAnyKey from 'press-any-key';
import wideAlign from 'wide-align';

/**
 * @param message
 * @param lineLength
 */
async function keyToContinue(message, lineLength) {
	await pressAnyKey(wideAlign.center(message + '\n ', lineLength) + '\n\n' + ' '.repeat(lineLength / 2));
}

export default keyToContinue;
