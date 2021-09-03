import { execSync } from 'child_process';

/**
 * Clears the terminal in the same way that the 'clear' command does (not erasing the history).
 */
function softClear() {
	execSync('clear', {
		stdio: 'inherit'
	});
}

export default softClear;
