import os from 'os';
import header from '../header';
import centerText from '../center-text';
import keyToContinue from '../key-to-continue';

async function introduction(context) {
	console.log(header('INTRODUCTION', 80));
	console.log(
		centerText(
			'This script is about to set up a workspace that is equipped with a whole set of linting and formatting rules. They will help you to avoid small and not so small errors, follow best practices, and relieve you from thinking about keeping your code formatted.'
		) + '\n'
	);
	console.log(centerText('The workspace will be installed into this folder:') + '\n');
	console.log(centerText(os.homedir() + '/krypgrund') + '\n');
	console.log(
		centerText(
			"Why 'krypgrund', you ask? Well, that's the Swedish word for crawl space which I thought sounds a lot better!"
		) + '\n'
	);
	console.log(
		centerText(
			"Why 'crawl space', you ask? Well, because you probably don't want to see these weird config files again, if you don't have to, right? So 'crawl space' makes sense, I thought."
		) + '\n'
	);
	console.log(
		centerText(
			"If you don't like that location, you can rename the 'krypgrund' folder later, using a name that you feel better about. I would recommend leaving the folder (however it is called) at this location, though. And if you drag the 'interactive_workspace' folder (that's where the actual projects are supposed to go) later into the finder's sidebar, you'll never have to see the content of this folder again!\n\nJust like how a good crawl space should work.\n\nš\n\n"
		) + '\n'
	);
	const prompts = [
		{
			type: 'list',
			name: 'start',
			message: 'Does that sound like something you might enjoy?',
			choices: ["Yeah! I'm in!", 'Nah, thanks. Maybe some other time.']
		}
	];

	return context.prompt(prompts).then(async props => {
		// To access props later use context.props.someAnswer;
		context.props = props;
		if (props.start === 'Nah, thanks. Maybe some other time.') {
			context.log(centerText("\n\nOkay, I understand. It's not for everyone.\n\nš\n\nRain check?\n\nš„ŗ\n"));
			process.exit(0);
		} else {
			context.log(centerText("\n\nAlright! Let's do this!\n\nš\n\n"));
			await keyToContinue('Press any key to continue...', 39);
		}
	});
}

export default introduction;
