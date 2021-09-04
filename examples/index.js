import cliHelpers from '../src/index.js';

const cliWidth = 100;

/**
 *  Examples for all the helpers included here.
 */
async function examples() {
	const cliHelpers = new cliHelpers(cliWidth);
	cliHelpers.clearScreen();
	console.log(
		'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n'
	);

	console.log(cliHelpers.header("I'm the header! I'm " + cliWidth + ' chars wide (80 by default)!'));
	console.log(
		'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n'
	);
	console.log(cliHelpers.showLogo());

	console.log(
		'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n'
	);
	console.log(
		cliHelpers.centerText(
			"Our competitors are jumping the shark, can you send me an invite?. Land the plane if you want to motivate these clowns. Try less carrot and more stick by moving the needle for high-performance keywords or game plans. Closing these latest prospects is like putting socks on an octopus. Identify pain points, and let's not solutionize this right now. Just parking-lot this for on-brand but wholly fresh ideas and overcome key issues to meet critical milestones. Circle back so ladder up / ladder back to the strategy."
		)
	);

	console.log(
		'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n'
	);
	cliHelpers.showMessage("Let's put a pin in that pre launch throughput!");
	console.log(
		'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n'
	);
	await cliHelpers.keyToContinue('Press any key to continue...');
	console.log(
		'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n'
	);
	cliHelpers.softClear();
	console.log(
		'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n'
	);
}

examples();
