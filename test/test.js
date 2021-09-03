import test from 'ava';
import cliHelpers from '../src/index.js';

test('title', t => {
	t.throws(
		() => {
			cliHelpers(123);
		},
		{
			instanceOf: TypeError,
			message: 'Expected a string, got number'
		}
	);

	t.is(cliHelpers('unicorns'), 'unicorns & rainbows');
});
