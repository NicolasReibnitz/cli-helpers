import header from '../header';
import chalk from 'chalk';
import centerText from '../center-text';
import softClear from '../soft-clear';

function installing(context) {
	softClear();
	console.log(header('INSTALLING'));
	const message =
		"We're done here! I'd suggest running " +
		chalk.yellow('npm install') +
		' for you to install the required dependencies.\n\nIf this fails, or you choose to skip, try running the command yourself.';
	console.log(centerText(message) + '\n\n');
	const prompts = [
		{
			type: 'list',
			name: 'npmInstall',
			message: 'Shall we?',
			choices: ['Install away!', 'Nah, thanks. Gotta check something first.']
		}
	];
	return context.prompt(prompts).then(props => {
		if (props.npmInstall === 'Nah, thanks. Gotta check something first.') {
			context.log(
				centerText("\n\nAlright!\nJust don't forget to run " + chalk.yellow('npm install') + '!\n\nš\n\n')
			);
		} else {
			context.log(centerText("\n\nAlright! Let's do this!\n\nš\n\n"));
			context.installDependencies({
				bower: false,
				skipMessage: true
			});
		}
	});
}

export default installing;
