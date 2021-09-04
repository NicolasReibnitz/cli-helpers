import $eGVR2$wrapansi from "wrap-ansi";
import $eGVR2$widealign from "wide-align";
import {execSync as $eGVR2$execSync} from "child_process";
import $eGVR2$boxen from "boxen";
import $eGVR2$chalk from "chalk";
import $eGVR2$pressanykey from "press-any-key";



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
 */ function $a8fd9f1781ecbb0a$var$centerText(input, textLength = 76, lineLength = 80) {
    const wrapped = $eGVR2$wrapansi(input, textLength);
    const wrappedArray = wrapped.split('\n');
    const paddedArray = [];
    for(const line in wrappedArray)if (Object.hasOwnProperty.call(wrappedArray, line)) paddedArray[line] = $eGVR2$widealign.center(wrappedArray[line], lineLength);
    // Console.log('stringWidth', stringWidth(input));
    // console.log('stringLength', stringLength(input));
    return paddedArray.join('\n');
}
var $a8fd9f1781ecbb0a$export$9099ad97b570f7c = $a8fd9f1781ecbb0a$var$centerText;



/**
 * Clears the terminal in the same no-history and no-scroll-back way that using cmd + k does.
 */ function $0b0d61593f257180$var$clearScreen() {
    $eGVR2$execSync('clear', {
        stdio: 'inherit'
    });
    console.log('[3J');
}
var $0b0d61593f257180$export$9099ad97b570f7c = $0b0d61593f257180$var$clearScreen;






/**
 * Clears the terminal in the same way that the 'clear' command does (not erasing the history).
 */ function $931c52289c42b1d4$var$softClear() {
    $eGVR2$execSync('clear', {
        stdio: 'inherit'
    });
}
var $931c52289c42b1d4$export$9099ad97b570f7c = $931c52289c42b1d4$var$softClear;


/**
 * Outputs a header, centered inside a red box with rounded corners.
 *
 * @param {string} input The text to be shown.
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 *
 * @returns {string} The input text as string, centred in a red box with rounded corners.
 */ function $60451303f484c6a4$var$header(input, lineLength = 80) {
    $931c52289c42b1d4$export$9099ad97b570f7c();
    return '\n' + $eGVR2$boxen($eGVR2$widealign.center($eGVR2$chalk.white(input), lineLength - 2), {
        borderStyle: 'round',
        borderColor: 'red'
    }) + '\n';
}
var $60451303f484c6a4$export$9099ad97b570f7c = $60451303f484c6a4$var$header;




/**
 * Outputs a message and waits for the user to press a key to continue.
 *
 * @param {string} input The text to be shown. (default = 'Press any key to continue...')
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 */ async function $000fc36f509229c9$var$keyToContinue(input = 'Press any key to continue...', lineLength = 80) {
    await $eGVR2$pressanykey($eGVR2$widealign.center(input + '\n ', lineLength) + '\n\n' + ' '.repeat(lineLength / 2));
}
var $000fc36f509229c9$export$9099ad97b570f7c = $000fc36f509229c9$var$keyToContinue;


const $ec4330a851820bad$var$logo = `[38;5;0m               [38;5;233m [38;5;235m.[38;5;237m..[38;5;238m''[38;5;237m.[38;5;236m.[38;5;235m.[38;5;233m [38;5;0m               [0;0m\n[38;5;0m          [38;5;232m [38;5;238m'[38;5;8mo[38;5;249m0[38;5;253mW[38;5;15mMMMMMMMMMM[38;5;253mW[38;5;249m0[38;5;8mo[38;5;238m'[38;5;232m    [38;5;0m       [0;0m\n[38;5;0m        [38;5;238m'[38;5;248mO[38;5;255mM[38;5;15mMMMMMMMMMMMMMMMMMM[38;5;255mM[38;5;247mk[38;5;235m.   [38;5;0m     [0;0m\n[38;5;0m      [38;5;238m'[38;5;252mN[38;5;15mMMMMMMMMMMMMMMMMMMMMMMMMM[38;5;246mx  [38;5;232m [38;5;0m   [0;0m\n[38;5;0m    [38;5;232m [38;5;246mx[38;5;15mMMMMMMMMMMMMMMMMMMMMMMMMMMMM[38;5;252mN  [38;5;234m [38;5;0m  [0;0m\n[38;5;0m   [38;5;232m [38;5;7mK[38;5;15mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM[38;5;252mN  [38;5;232m [38;5;0m [0;0m\n[38;5;0m   [38;5;249m0[38;5;15mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM[38;5;246mx [38;5;0m [0;0m\n[38;5;0m  [38;5;242mc[38;5;15mMMMMMMMMMMMMMMMMMMMMMMMM[38;5;252mN[38;5;242mcc[38;5;188mW[38;5;15mMMMMMMM[38;5;242mc[38;5;234m [38;5;0m[0;0m\n[38;5;0m [38;5;233m [38;5;255mM[38;5;15mMMMMMM[38;5;248mO[38;5;102md[38;5;254mM[38;5;15mMMMMMMMMMMMMMM[38;5;253mW[38;5;232m [38;5;0m  [38;5;8mo[38;5;15mMMMMMMM[38;5;246mo [38;5;0m[0;0m\n[38;5;0m [38;5;243ml[38;5;15mMMMMMM[38;5;102md[38;5;0m  [38;5;243ml[38;5;15mMMMMMMMMMMMMM[38;5;255mM[38;5;235m.[38;5;0m  [38;5;235m.[38;5;255mM[38;5;15mMMMMMMM[38;5;252mN [38;5;0m[0;0m\n[38;5;0m [38;5;251mX[38;5;15mMMMMMM[38;5;237m.[38;5;0m  [38;5;247mk[38;5;15mMMMMMMMMMMMMM[38;5;239m,[38;5;0m  [38;5;232m [38;5;252mN[38;5;15mMMMMMMMMM[38;5;232m [38;5;0m[0;0m\n[38;5;0m[38;5;233m [38;5;15mMMMMMMM[38;5;234m [38;5;0m  [38;5;251mX[38;5;15mMMMMMMMMMMMM[38;5;245md[38;5;0m   [38;5;246mx[38;5;15mMMMMMMMMMM[38;5;236m.[38;5;0m[0;0m\n[38;5;0m[38;5;237m.[38;5;15mMMMMMMM[38;5;233m [38;5;0m  [38;5;251mX[38;5;15mMMMMMMMMMMM[38;5;252mN[38;5;232m [38;5;0m  [38;5;242mc[38;5;15mMMMMMMMMMMM[38;5;239m,[38;5;0m[0;0m\n[38;5;0m[38;5;240m;[38;5;15mMMMMMMM[38;5;0m   [38;5;243ml[38;5;252mN[38;5;242mc[38;5;236m.[38;5;235m.[38;5;59m:[38;5;246mx[38;5;239m,,[38;5;8mo[38;5;188mM[38;5;251mX[38;5;234m [38;5;0m  [38;5;239m,[38;5;15mMMMMMMMMMMMM[38;5;240m;[38;5;0m[0;0m\n[38;5;0m[38;5;59m:[38;5;15mMMMMMMM[38;5;234m [38;5;0m                [38;5;235m.[38;5;255mM[38;5;15mMMMMMMMMMMMM[38;5;59m:[38;5;0m[0;0m\n[38;5;0m[38;5;59m:[38;5;15mMMMMMMM[38;5;235m.[38;5;0m                [38;5;251mX[38;5;15mMMMMMMMMMMMMM[38;5;240m;[38;5;0m[0;0m\n[38;5;0m[38;5;240m;[38;5;15mMMMMMM[38;5;254mM[38;5;232m [38;5;0m               [38;5;238m'[38;5;15mMMMMM[38;5;255mM[38;5;250mK[38;5;247mk[38;5;246mx[38;5;249m0[38;5;255mM[38;5;15mMMM[38;5;238m'[38;5;0m[0;0m\n[38;5;0m[38;5;239m,[38;5;15mMMMMMM[38;5;8mo[38;5;0m                [38;5;246mx[38;5;15mMMM[38;5;145mO[38;5;238m'[38;5;0m    [38;5;232m [38;5;243ml[38;5;15mMMM[38;5;236m.[38;5;0m[0;0m\n[38;5;0m[38;5;236m.[38;5;15mMMMMMM[38;5;234m [38;5;0m                [38;5;246mx[38;5;145m0[38;5;242mc[38;5;234m [38;5;0m    [38;5;238m'[38;5;246mx[38;5;254mM[38;5;15mMMMM[38;5;232m [38;5;0m[0;0m\n[38;5;0m[38;5;232m [38;5;15mMMMMM[38;5;255mM[38;5;0m                      [38;5;235m.[38;5;8mo[38;5;253mW[38;5;15mMMMMMM[38;5;250mK [38;5;0 m[0;0m\n[38;5;0m [38;5;251mX[38;5;15mMMMM[38;5;255mM[38;5;0m                    [38;5;233m [38;5;248mO[38;5;15mMMMMMMMMM[38;5;242mc[38;5;0m [0;0m\n[38;5;0m [38;5;8mo[38;5;15mMMMM[38;5;253mW[38;5;0m                  [38;5;234m [38;5;8mo[38;5;255mM[38;5;15mMMMMMMMMM[38;5;255mM[38;5;233m [38;5;0m [0;0m\n[38;5;0m [38;5;235m.[38;5;15mMMMM[38;5;246mx[38;5;0m               [38;5;236m.[38;5;8mo[38;5;251mX[38;5;15mMMMMMMMMMMMM[38;5;243ml[38;5;0m  [0;0m\n[38;5;0m  [38;5;247mk[38;5;15mMM[38;5;255mM[38;5;235m.[38;5;0m           [38;5;234m [38;5;241m:[38;5;248mO[38;5;255mM[38;5;15mMMMMMMMMMMMMMM[38;5;7mK[38;5;0m   [0;0m\n[38;5;0m  [38;5;233m [38;5;188mM[38;5;15mM[38;5;239m,[38;5;0m          [38;5;235m.[38;5;249m0[38;5;15mMMMMMMMMMMMMMMMMM[38;5;252mN[38;5;233m [38;5;0m   [0;0m\n[38;5;0m   [38;5;235m.[38;5;239m,[38;5;0m          [38;5;243ml[38;5;15mMMMMMMMMMMMMMMMMMM[38;5;249m0[38;5;233m [38;5;0m    [0;0m\n[38;5;0m              [38;5;241m:[38;5;15mMMMMMMMMMMMMMMMMM[38;5;254mM[38;5;59m:[38;5;0m      [0;0m\n[38;5;0m             [38;5;239m,[38;5;15mMMMMMMMMMMMMMMMM[38;5;7mX[38;5;241m:[38;5;232m [38;5;0m       [0;0m\n[38;5;0m            [38;5;236m.[38;5;255mM[38;5;15mMMMMMMMMMMM[38;5;254mM[38;5;7mK[38;5;246mx[38;5;240m;[38;5;233m [38;5;0m          [0;0m\n[38;5;0m              [38;5;233m [38;5;235m'[38;5;236m'[38;5;237m'[38;5;238m'::'[38;5;237m'[38;5;236m'[38;5;234m [38;5;232m [38;5;0m              [0;0m\n\n\n`;
/**
 * Displays the ILY version of the simpleshow logo (aka the interactive logo), centered in a given line length.
 *
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 *
 * @returns {string} Returns the logo as a string.
 */ function $ec4330a851820bad$var$showLogo(lineLength = 80) {
    const logoWith = 40;
    const padding = ' '.repeat((lineLength - logoWith) / 2);
    const logoArray = $ec4330a851820bad$var$logo.split('\n');
    const logoPaddedArray = [];
    for(const line in logoArray)if (Object.hasOwnProperty.call(logoArray, line)) logoPaddedArray[line] = padding + logoArray[line] + padding;
    return logoPaddedArray.join('\n');
}
var $ec4330a851820bad$export$9099ad97b570f7c = $ec4330a851820bad$var$showLogo;



/**
 * This is basically the same as using centerText() but with one linebreak added before and two lines after.
 * It also console.logs the text directly, instead of just returning the string.
 *
 * @param {string} input The text to be shown.
 * @param {number} textLength The maximum length of text per line. (default = 76)
 * @param {number} lineLength The maximum length of the line, including text and whitespace. (default = 80)
 */ function $35f7da6f7b198b62$var$showMessage(input, textLength = 76, lineLength = 80) {
    console.log('\n' + $a8fd9f1781ecbb0a$export$9099ad97b570f7c(input, textLength, lineLength), '\n\n');
}
var $35f7da6f7b198b62$export$9099ad97b570f7c = $35f7da6f7b198b62$var$showMessage;



class $bd4c7c7dfd6721b6$var$cliHelpers {
    constructor(cliWidth1){
        this.cliWidth = cliWidth1 || 80;
    }
    centerText(input, textLength, cliWidth) {
        cliWidth = cliWidth || this.cliWidth;
        return $a8fd9f1781ecbb0a$export$9099ad97b570f7c(input, textLength, cliWidth);
    }
    clearScreen() {
        $0b0d61593f257180$export$9099ad97b570f7c();
    }
    header(string, cliWidth) {
        cliWidth = cliWidth || this.cliWidth;
        return $60451303f484c6a4$export$9099ad97b570f7c(string, cliWidth);
    }
    async keyToContinue(message, cliWidth) {
        cliWidth = cliWidth || this.cliWidth;
        return $000fc36f509229c9$export$9099ad97b570f7c(message, cliWidth);
    }
    showLogo(cliWidth) {
        cliWidth = cliWidth || this.cliWidth;
        return $ec4330a851820bad$export$9099ad97b570f7c(cliWidth);
    }
    showMessage(input, textLength, cliWidth) {
        cliWidth = cliWidth || this.cliWidth;
        return $35f7da6f7b198b62$export$9099ad97b570f7c(input, textLength, cliWidth);
    }
    softClear() {
        $931c52289c42b1d4$export$9099ad97b570f7c();
    }
}
var $bd4c7c7dfd6721b6$export$9099ad97b570f7c = $bd4c7c7dfd6721b6$var$cliHelpers;
const $bd4c7c7dfd6721b6$export$910fb1cc39113045 = $a8fd9f1781ecbb0a$export$9099ad97b570f7c;
const $bd4c7c7dfd6721b6$export$40256ab660326f2f = $0b0d61593f257180$export$9099ad97b570f7c;
const $bd4c7c7dfd6721b6$export$2c93c7c04ad267d2 = $60451303f484c6a4$export$9099ad97b570f7c;
const $bd4c7c7dfd6721b6$export$525261fca82232c9 = $000fc36f509229c9$export$9099ad97b570f7c;
const $bd4c7c7dfd6721b6$export$290ed19cb8f7c26 = $ec4330a851820bad$export$9099ad97b570f7c;
const $bd4c7c7dfd6721b6$export$49bd7e0612dbae04 = $35f7da6f7b198b62$export$9099ad97b570f7c;
const $bd4c7c7dfd6721b6$export$c0444aaa4d33a26e = $931c52289c42b1d4$export$9099ad97b570f7c;


export {$bd4c7c7dfd6721b6$export$40256ab660326f2f as clearScreen, $bd4c7c7dfd6721b6$export$290ed19cb8f7c26 as showLogo, $bd4c7c7dfd6721b6$export$c0444aaa4d33a26e as softClear, $bd4c7c7dfd6721b6$export$910fb1cc39113045 as centerText, $bd4c7c7dfd6721b6$export$2c93c7c04ad267d2 as header, $bd4c7c7dfd6721b6$export$49bd7e0612dbae04 as showMessage, $bd4c7c7dfd6721b6$export$525261fca82232c9 as keyToContinue, $bd4c7c7dfd6721b6$export$9099ad97b570f7c as default};
//# sourceMappingURL=module.mjs.map
