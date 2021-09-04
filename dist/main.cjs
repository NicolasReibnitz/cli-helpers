var $gRcMp$wrapansi = require("wrap-ansi");
var $gRcMp$widealign = require("wide-align");
var $gRcMp$child_process = require("child_process");
var $gRcMp$boxen = require("boxen");
var $gRcMp$chalk = require("chalk");
var $gRcMp$pressanykey = require("press-any-key");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $11d38a5042e62dde$export$9099ad97b570f7c);
$parcel$export(module.exports, "centerText", () => $11d38a5042e62dde$export$910fb1cc39113045);
$parcel$export(module.exports, "softClear", () => $11d38a5042e62dde$export$c0444aaa4d33a26e);
$parcel$export(module.exports, "header", () => $11d38a5042e62dde$export$2c93c7c04ad267d2);
$parcel$export(module.exports, "keyToContinue", () => $11d38a5042e62dde$export$525261fca82232c9);
$parcel$export(module.exports, "showLogo", () => $11d38a5042e62dde$export$290ed19cb8f7c26);
$parcel$export(module.exports, "clearScreen", () => $11d38a5042e62dde$export$40256ab660326f2f);
$parcel$export(module.exports, "showMessage", () => $11d38a5042e62dde$export$49bd7e0612dbae04);


// Const stringWidth = require('string-width');
// const stringLength = require('string-length');
/**
 * Outputs the input text, centered and wrapped over multiple lines if too long.
 *
 * @param {string} input The text to be shown.
 * @param {number} textLength The maximum length of text per line. (default = 76)
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 *
 * @returns {string} The centered text as string.
 */ function $5fa6ee50e246e05e$var$centerText(input, textLength = 76, lineLength = 80) {
    const wrapped = $parcel$interopDefault($gRcMp$wrapansi)(input, textLength);
    const wrappedArray = wrapped.split('\n');
    const paddedArray = [];
    for(const line in wrappedArray)if (Object.hasOwnProperty.call(wrappedArray, line)) paddedArray[line] = $parcel$interopDefault($gRcMp$widealign).center(wrappedArray[line], lineLength);
    // Console.log('stringWidth', stringWidth(input));
    // console.log('stringLength', stringLength(input));
    return paddedArray.join('\n');
}
var $5fa6ee50e246e05e$export$9099ad97b570f7c = $5fa6ee50e246e05e$var$centerText;



/**
 * Clears the terminal in the same no-history and no-scroll-back way that using cmd + k does.
 */ function $9e6a6cd0aacd00fb$var$clearScreen() {
    $gRcMp$child_process.execSync('clear', {
        stdio: 'inherit'
    });
    console.log('[3J');
}
var $9e6a6cd0aacd00fb$export$9099ad97b570f7c = $9e6a6cd0aacd00fb$var$clearScreen;






/**
 * Clears the terminal in the same way that the 'clear' command does (not erasing the history).
 */ function $ced87a622aa415fc$var$softClear() {
    $gRcMp$child_process.execSync('clear', {
        stdio: 'inherit'
    });
}
var $ced87a622aa415fc$export$9099ad97b570f7c = $ced87a622aa415fc$var$softClear;


/**
 * Outputs a header, centered inside a red box with rounded corners.
 *
 * @param {string} input The text to be shown.
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 *
 * @returns {string} The input text as string, centred in a red box with rounded corners.
 */ function $5bc8361119125fc1$var$header(input, lineLength = 80) {
    $ced87a622aa415fc$export$9099ad97b570f7c();
    return '\n' + $parcel$interopDefault($gRcMp$boxen)($parcel$interopDefault($gRcMp$widealign).center($parcel$interopDefault($gRcMp$chalk).white(input), lineLength - 2), {
        borderStyle: 'round',
        borderColor: 'red'
    }) + '\n';
}
var $5bc8361119125fc1$export$9099ad97b570f7c = $5bc8361119125fc1$var$header;




/**
 * Outputs a message and waits for the user to press a key to continue.
 *
 * @param {string} input The text to be shown. (default = 'Press any key to continue...')
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 */ async function $34f02ca0e76bad2d$var$keyToContinue(input = 'Press any key to continue...', lineLength = 80) {
    await $parcel$interopDefault($gRcMp$pressanykey)($parcel$interopDefault($gRcMp$widealign).center(input + '\n ', lineLength) + '\n\n' + ' '.repeat(lineLength / 2));
}
var $34f02ca0e76bad2d$export$9099ad97b570f7c = $34f02ca0e76bad2d$var$keyToContinue;


const $252d3b01fc880de7$var$logo = `[38;5;0m               [38;5;233m [38;5;235m.[38;5;237m..[38;5;238m''[38;5;237m.[38;5;236m.[38;5;235m.[38;5;233m [38;5;0m               [0;0m\n[38;5;0m          [38;5;232m [38;5;238m'[38;5;8mo[38;5;249m0[38;5;253mW[38;5;15mMMMMMMMMMM[38;5;253mW[38;5;249m0[38;5;8mo[38;5;238m'[38;5;232m    [38;5;0m       [0;0m\n[38;5;0m        [38;5;238m'[38;5;248mO[38;5;255mM[38;5;15mMMMMMMMMMMMMMMMMMM[38;5;255mM[38;5;247mk[38;5;235m.   [38;5;0m     [0;0m\n[38;5;0m      [38;5;238m'[38;5;252mN[38;5;15mMMMMMMMMMMMMMMMMMMMMMMMMM[38;5;246mx  [38;5;232m [38;5;0m   [0;0m\n[38;5;0m    [38;5;232m [38;5;246mx[38;5;15mMMMMMMMMMMMMMMMMMMMMMMMMMMMM[38;5;252mN  [38;5;234m [38;5;0m  [0;0m\n[38;5;0m   [38;5;232m [38;5;7mK[38;5;15mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM[38;5;252mN  [38;5;232m [38;5;0m [0;0m\n[38;5;0m   [38;5;249m0[38;5;15mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM[38;5;246mx [38;5;0m [0;0m\n[38;5;0m  [38;5;242mc[38;5;15mMMMMMMMMMMMMMMMMMMMMMMMM[38;5;252mN[38;5;242mcc[38;5;188mW[38;5;15mMMMMMMM[38;5;242mc[38;5;234m [38;5;0m[0;0m\n[38;5;0m [38;5;233m [38;5;255mM[38;5;15mMMMMMM[38;5;248mO[38;5;102md[38;5;254mM[38;5;15mMMMMMMMMMMMMMM[38;5;253mW[38;5;232m [38;5;0m  [38;5;8mo[38;5;15mMMMMMMM[38;5;246mo [38;5;0m[0;0m\n[38;5;0m [38;5;243ml[38;5;15mMMMMMM[38;5;102md[38;5;0m  [38;5;243ml[38;5;15mMMMMMMMMMMMMM[38;5;255mM[38;5;235m.[38;5;0m  [38;5;235m.[38;5;255mM[38;5;15mMMMMMMM[38;5;252mN [38;5;0m[0;0m\n[38;5;0m [38;5;251mX[38;5;15mMMMMMM[38;5;237m.[38;5;0m  [38;5;247mk[38;5;15mMMMMMMMMMMMMM[38;5;239m,[38;5;0m  [38;5;232m [38;5;252mN[38;5;15mMMMMMMMMM[38;5;232m [38;5;0m[0;0m\n[38;5;0m[38;5;233m [38;5;15mMMMMMMM[38;5;234m [38;5;0m  [38;5;251mX[38;5;15mMMMMMMMMMMMM[38;5;245md[38;5;0m   [38;5;246mx[38;5;15mMMMMMMMMMM[38;5;236m.[38;5;0m[0;0m\n[38;5;0m[38;5;237m.[38;5;15mMMMMMMM[38;5;233m [38;5;0m  [38;5;251mX[38;5;15mMMMMMMMMMMM[38;5;252mN[38;5;232m [38;5;0m  [38;5;242mc[38;5;15mMMMMMMMMMMM[38;5;239m,[38;5;0m[0;0m\n[38;5;0m[38;5;240m;[38;5;15mMMMMMMM[38;5;0m   [38;5;243ml[38;5;252mN[38;5;242mc[38;5;236m.[38;5;235m.[38;5;59m:[38;5;246mx[38;5;239m,,[38;5;8mo[38;5;188mM[38;5;251mX[38;5;234m [38;5;0m  [38;5;239m,[38;5;15mMMMMMMMMMMMM[38;5;240m;[38;5;0m[0;0m\n[38;5;0m[38;5;59m:[38;5;15mMMMMMMM[38;5;234m [38;5;0m                [38;5;235m.[38;5;255mM[38;5;15mMMMMMMMMMMMM[38;5;59m:[38;5;0m[0;0m\n[38;5;0m[38;5;59m:[38;5;15mMMMMMMM[38;5;235m.[38;5;0m                [38;5;251mX[38;5;15mMMMMMMMMMMMMM[38;5;240m;[38;5;0m[0;0m\n[38;5;0m[38;5;240m;[38;5;15mMMMMMM[38;5;254mM[38;5;232m [38;5;0m               [38;5;238m'[38;5;15mMMMMM[38;5;255mM[38;5;250mK[38;5;247mk[38;5;246mx[38;5;249m0[38;5;255mM[38;5;15mMMM[38;5;238m'[38;5;0m[0;0m\n[38;5;0m[38;5;239m,[38;5;15mMMMMMM[38;5;8mo[38;5;0m                [38;5;246mx[38;5;15mMMM[38;5;145mO[38;5;238m'[38;5;0m    [38;5;232m [38;5;243ml[38;5;15mMMM[38;5;236m.[38;5;0m[0;0m\n[38;5;0m[38;5;236m.[38;5;15mMMMMMM[38;5;234m [38;5;0m                [38;5;246mx[38;5;145m0[38;5;242mc[38;5;234m [38;5;0m    [38;5;238m'[38;5;246mx[38;5;254mM[38;5;15mMMMM[38;5;232m [38;5;0m[0;0m\n[38;5;0m[38;5;232m [38;5;15mMMMMM[38;5;255mM[38;5;0m                      [38;5;235m.[38;5;8mo[38;5;253mW[38;5;15mMMMMMM[38;5;250mK [38;5;0 m[0;0m\n[38;5;0m [38;5;251mX[38;5;15mMMMM[38;5;255mM[38;5;0m                    [38;5;233m [38;5;248mO[38;5;15mMMMMMMMMM[38;5;242mc[38;5;0m [0;0m\n[38;5;0m [38;5;8mo[38;5;15mMMMM[38;5;253mW[38;5;0m                  [38;5;234m [38;5;8mo[38;5;255mM[38;5;15mMMMMMMMMM[38;5;255mM[38;5;233m [38;5;0m [0;0m\n[38;5;0m [38;5;235m.[38;5;15mMMMM[38;5;246mx[38;5;0m               [38;5;236m.[38;5;8mo[38;5;251mX[38;5;15mMMMMMMMMMMMM[38;5;243ml[38;5;0m  [0;0m\n[38;5;0m  [38;5;247mk[38;5;15mMM[38;5;255mM[38;5;235m.[38;5;0m           [38;5;234m [38;5;241m:[38;5;248mO[38;5;255mM[38;5;15mMMMMMMMMMMMMMM[38;5;7mK[38;5;0m   [0;0m\n[38;5;0m  [38;5;233m [38;5;188mM[38;5;15mM[38;5;239m,[38;5;0m          [38;5;235m.[38;5;249m0[38;5;15mMMMMMMMMMMMMMMMMM[38;5;252mN[38;5;233m [38;5;0m   [0;0m\n[38;5;0m   [38;5;235m.[38;5;239m,[38;5;0m          [38;5;243ml[38;5;15mMMMMMMMMMMMMMMMMMM[38;5;249m0[38;5;233m [38;5;0m    [0;0m\n[38;5;0m              [38;5;241m:[38;5;15mMMMMMMMMMMMMMMMMM[38;5;254mM[38;5;59m:[38;5;0m      [0;0m\n[38;5;0m             [38;5;239m,[38;5;15mMMMMMMMMMMMMMMMM[38;5;7mX[38;5;241m:[38;5;232m [38;5;0m       [0;0m\n[38;5;0m            [38;5;236m.[38;5;255mM[38;5;15mMMMMMMMMMMM[38;5;254mM[38;5;7mK[38;5;246mx[38;5;240m;[38;5;233m [38;5;0m          [0;0m\n[38;5;0m              [38;5;233m [38;5;235m'[38;5;236m'[38;5;237m'[38;5;238m'::'[38;5;237m'[38;5;236m'[38;5;234m [38;5;232m [38;5;0m              [0;0m\n\n\n`;
/**
 * Displays the ILY version of the simpleshow logo (aka the interactive logo), centered in a given line length.
 *
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 *
 * @returns {string} Returns the logo as a string.
 */ function $252d3b01fc880de7$var$showLogo(lineLength = 80) {
    const logoWith = 40;
    const padding = ' '.repeat((lineLength - logoWith) / 2);
    const logoArray = $252d3b01fc880de7$var$logo.split('\n');
    const logoPaddedArray = [];
    for(const line in logoArray)if (Object.hasOwnProperty.call(logoArray, line)) logoPaddedArray[line] = padding + logoArray[line] + padding;
    return logoPaddedArray.join('\n');
}
var $252d3b01fc880de7$export$9099ad97b570f7c = $252d3b01fc880de7$var$showLogo;



/**
 * This is basically the same as using centerText() but with one linebreak added before and two lines after.
 * It also console.logs the text directly, instead of just returning the string.
 *
 * @param {string} input The text to be shown.
 * @param {number} textLength The maximum length of text per line. (default = 76)
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 */ function $e49f96bc76f2fc96$var$showMessage(input, textLength = 76, lineLength = 80) {
    console.log('\n' + $5fa6ee50e246e05e$export$9099ad97b570f7c(input, textLength, lineLength), '\n\n');
}
var $e49f96bc76f2fc96$export$9099ad97b570f7c = $e49f96bc76f2fc96$var$showMessage;



class $11d38a5042e62dde$var$cliHelpers {
    constructor(cliWidth1){
        this.cliWidth = cliWidth1 || 80;
    }
    centerText(input, textLength, cliWidth) {
        cliWidth = cliWidth || this.cliWidth;
        return $5fa6ee50e246e05e$export$9099ad97b570f7c(input, textLength, cliWidth);
    }
    clearScreen() {
        $9e6a6cd0aacd00fb$export$9099ad97b570f7c();
    }
    header(string, cliWidth) {
        cliWidth = cliWidth || this.cliWidth;
        return $5bc8361119125fc1$export$9099ad97b570f7c(string, cliWidth);
    }
    async keyToContinue(message, cliWidth) {
        cliWidth = cliWidth || this.cliWidth;
        return $34f02ca0e76bad2d$export$9099ad97b570f7c(message, cliWidth);
    }
    showLogo(cliWidth) {
        cliWidth = cliWidth || this.cliWidth;
        return $252d3b01fc880de7$export$9099ad97b570f7c(cliWidth);
    }
    showMessage(input, textLength, cliWidth) {
        cliWidth = cliWidth || this.cliWidth;
        return $e49f96bc76f2fc96$export$9099ad97b570f7c(input, textLength, cliWidth);
    }
    softClear() {
        $ced87a622aa415fc$export$9099ad97b570f7c();
    }
}
var $11d38a5042e62dde$export$9099ad97b570f7c = $11d38a5042e62dde$var$cliHelpers;
const $11d38a5042e62dde$export$910fb1cc39113045 = $5fa6ee50e246e05e$export$9099ad97b570f7c;
const $11d38a5042e62dde$export$40256ab660326f2f = $9e6a6cd0aacd00fb$export$9099ad97b570f7c;
const $11d38a5042e62dde$export$2c93c7c04ad267d2 = $5bc8361119125fc1$export$9099ad97b570f7c;
const $11d38a5042e62dde$export$525261fca82232c9 = $34f02ca0e76bad2d$export$9099ad97b570f7c;
const $11d38a5042e62dde$export$290ed19cb8f7c26 = $252d3b01fc880de7$export$9099ad97b570f7c;
const $11d38a5042e62dde$export$49bd7e0612dbae04 = $e49f96bc76f2fc96$export$9099ad97b570f7c;
const $11d38a5042e62dde$export$c0444aaa4d33a26e = $ced87a622aa415fc$export$9099ad97b570f7c;


//# sourceMappingURL=main.cjs.map
