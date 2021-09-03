import showLogo from '../show-logo';
import keyToContinue from '../key-to-continue';
import { version as packageVersion } from '../../package.json';
import { date as packageDate } from '../../package.json';
import align from 'wide-align';
import chalk from 'chalk';

async function hero() {
	console.log('');
	console.log(showLogo(80));
	console.log(align.center('𝕯𝖆𝖘 𝕷𝖆𝖇𝖔𝖗𝖆𝖙𝖔𝖗𝖞®', 80));
	console.log(align.center(chalk.yellow('INTERACTIVE WORKSPACE PACKAGE INSTALLER'), 80));
	console.log(align.center('v' + packageVersion + ' (' + packageDate + ')', 80) + '\n\n');
	await keyToContinue('Press any key to get started!', 39);
}

export default hero;
