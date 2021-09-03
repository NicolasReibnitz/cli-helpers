import { execSync } from 'child_process';

/**
 * Clears the terminal in the same no-history and no-scroll-back way that using cmd + k does.
 */
function clearScreen() {
	execSync('clear', { stdio: 'inherit' });
	console.log('[3J');
}

export default clearScreen;
