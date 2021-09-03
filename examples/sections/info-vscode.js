import header from '../header';
import softClear from '../soft-clear';
import keyToContinue from '../key-to-continue';

// import showVSCodeInfo from '@das.laboratory/vscode-config-interactive';
import showVSCodeInfo from '@das.laboratory/vscode-config-interactive/dist/bundle.cjs';

async function infoVSCode() {
	// console.log(showVSCodeInfo);
	await showVSCodeInfo();
	// console.log(header('REQUIRED VSCODE EXTENSIONS'));
	// await keyToContinue('Press any key to continue...', 39);
	// console.log(header('VSCODE SETTINGS'));
	// require('@das.laboratory/vscode-config-interactive/index-p2');
	// await keyToContinue('Press any key to continue...', 39);
}

export default infoVSCode;
