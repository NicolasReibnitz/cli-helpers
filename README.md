# @das.laboratory/cli-helpers

> A collection of wheels I don&#39;t want to reinvent over and over again anymore.

## Install

```
npm install @das.laboratory/cli-helpers
```

## Usage

Start with instantiating the helpers and provide a width:

```js
import cliHelpers from '@das.laboratory/cli-helpers';

const cliWidth = 100;
const cliHelpers = new cliHelpers(cliWidth);
```

## API

### cliHelpers.header(input, lineLength?)

Outputs a header, centered inside a red box with rounded corners.

```js
console.log(cliHelpers.header("I'm the header! I'm " + cliWidth + ' chars wide (80 by default)!'));
```

![header](/_assets/header.png)

#### input

Type: `string`

The text to be shown.

#### lineLength

Type: `number`\
Default: `80`

The length of the header.

---

### cliHelpers.showLogo(lineLength?)

Displays the ILY version of the simpleshow logo (aka the interactive logo), centered using a given line length.

```js
console.log(cliHelpers.showLogo(100));
```

![header](/_assets/showLogo.png)

#### lineLength

Type: `number`\
Default: `80`

The length of a line. Used to center the logo.

---

### cliHelpers.centerText(input, textLength?, lineLength?)

Outputs the input text, centered and wrapped over multiple lines if too long.

```js
console.log(
	cliHelpers.centerText(
		"Our competitors are jumping the shark, can you send me an invite?. Land the plane if you want to motivate these clowns. Try less carrot and more stick by moving the needle for high-performance keywords or game plans. Closing these latest prospects is like putting socks on an octopus. Identify pain points, and let's not solutionize this right now. Just parking-lot this for on-brand but wholly fresh ideas and overcome key issues to meet critical milestones. Circle back so ladder up / ladder back to the strategy.",
		76,
		100
	)
);
```

![header](/_assets/centerText.png)

#### input

Type: `string`

The text to be shown.

#### textLength

Type: `number`\
Default: `76`

The maximum length of text per line.

#### lineLength

Type: `number`\
Default: `80`

The maximum length of the line, including text and whitespace.

---

### cliHelpers.showMessage(input, textLength?, lineLength?)

This is the more opinionated shorthand version of `centerText()`. It adds one linebreak before and two after the text. It also console.logs the text directly, instead of just returning the string.

```js
cliHelpers.showMessage("Let's put a pin in that pre launch throughput!", 76, 100);
```

![header](/_assets/showMessage.png)

#### input

Type: `string`

The text to be shown.

#### textLength

Type: `number`\
Default: `76`

The maximum length of text per line.

#### lineLength

Type: `number`\
Default: `80`

The maximum length of the line, including text and whitespace.

---

### cliHelpers.keyToContinue(input?, lineLength?)

Outputs a message and waits for the user to press a key to continue. Asynchronous.

```js
await cliHelpers.keyToContinue('Press any key to continue...', 100);
```

![header](/_assets/keyToContinue.png)

#### input

Type: `string`

The text to be shown.

#### lineLength

Type: `number`\
Default: `80`

The maximum length of the line, including text and whitespace.

---

### cliHelpers.clearScreen()

Clears the terminal in the same no-history and no-scroll-back way that using cmd + k does.

```js
cliHelpers.clearScreen();
```

---

### cliHelpers.softClear()

Clears the terminal in the same way that the 'clear' command does (not erasing the history).

```js
cliHelpers.softClear();
```

## Development

This library uses [Parcel 2](https://github.com/parcel-bundler/parcel) for bundling. Use these npm scripts to get started.

###### Watch

```bash
npm start			# or
npm run watch		# or
npm run dev			# or
npx parcel watch
```

###### Build

```bash
npm run build		# or
npx parcel build
```

### Publish new version to npm registry

##### Syntax

npm run bump:\<newversion> --message=\<commitmessage>

##### Options

**newversion:**
major | minor | patch | premajor | preminor | prepatch | prerelease

**commitmessage:**
A string that will become the commit message (if unclean, the repository will be committed before published on npm)

##### Example

```bash
npm run bump:patch --message="Fixed that thing with the error. Like... you know. That error."
```

### Dry-run publish first

If you don't want npm to make any changes and that it should only report what it would have done, use the `--dry-run` flag:

```bash
npm publish --dry-run
```

See also:
[npm-version](https://docs.npmjs.com/cli/version)
[npm-publish](https://docs.npmjs.com/cli/publish)
[Updating your published package version number](https://docs.npmjs.com/updating-your-published-package-version-number)
