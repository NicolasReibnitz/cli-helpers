#!/usr/bin/env node
import meow from 'meow';
import cliHelpers from './index.js';

const cli = meow(`
	Usage
	  $ cli-helpers [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ cli-helpers
	  unicorns & rainbows
	  $ cli-helpers ponies
	  ponies & rainbows
`, {
	flags: {
		foo: {
			type: 'boolean'
		}
	}
});

console.log(cliHelpers(cli.input[0] || 'unicorns'));
