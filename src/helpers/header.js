import align from 'wide-align';
import boxen from 'boxen';
import chalk from 'chalk';
import softClear from './soft-clear.js';

/**
 * @param string
 * @param length
 */
function header(string, length) {
	softClear();
	length = length || 80;
	return (
		'\n' + boxen(align.center(chalk.white(string), length - 2), { borderStyle: 'round', borderColor: 'red' }) + '\n'
	);
}

export default header;
