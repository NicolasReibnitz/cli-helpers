import CliUtils from '../src/index.js';

const cliWidth = 100;

/**
 *  Examples for all the helpers included here.
 */
async function examples() {
	const cliUtils = new CliUtils(cliWidth);
	cliUtils.clearScreen();
	console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

	console.log(cliUtils.header("I'm the header! I'm " + cliWidth + ' chars wide (80 by default)!'));
	console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
	console.log(cliUtils.showLogo());

	console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
	console.log(
		cliUtils.centerText(
			'Join our community and get help with React, React Native, and all web technologies. Even recommend tutorials, and content you want to see.'
		)
	);

	console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
	await cliUtils.keyToContinue('Press any key to continue...');
	cliUtils.softClear();
	cliUtils.showMessage("I'm 'showMessage()'!");
	console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

examples();
