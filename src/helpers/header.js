import align from 'wide-align';
import boxen from 'boxen';
import chalk from 'chalk';
import softClear from './soft-clear.js';

/**
 * Outputs a header, centered inside a red box with rounded corners.
 *
 * @param {string} input The text to be shown.
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 *
 * @returns {string} The input text as string, centred in a red box with rounded corners.
 */
function header(input, lineLength = 80) {
	softClear();
	return (
		'\n' +
		boxen(align.center(chalk.white(input), lineLength - 2), { borderStyle: 'round', borderColor: 'red' }) +
		'\n'
	);
}

export default header;
