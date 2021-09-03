import { execSync } from 'child_process';

/**
 *
 */
function softClear() {
	execSync('clear', {
		stdio: 'inherit'
	});
}

export default softClear;
