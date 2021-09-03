import { execSync } from 'child_process';

/**
 *
 */
function clearScreen() {
	execSync('clear', { stdio: 'inherit' });
	console.log('[3J');
}

export default clearScreen;
