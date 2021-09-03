import del from 'del';
import header from '../header';
import centerText from '../center-text';
import showMessage from '../show-message';
import keyToContinue from '../key-to-continue';

async function cleaning(destinationPath) {
	console.log(header('CLEANING'));
	console.log(
		centerText(
			"First, let's make sure that we have a fresh start and remove potential artifacts of previous installations.\n\nWe are going to delete the following files and folders:\n\n" +
				'• package-lock.json\n' +
				'• node_modules'
		) + '\n\n'
	);

	del.sync([destinationPath + '/package-lock.json']);
	del.sync([destinationPath + 'node_modules']);
	showMessage('CLEANING DONE!');
	await keyToContinue('Press any key to continue...', 39);
}

export default cleaning;
