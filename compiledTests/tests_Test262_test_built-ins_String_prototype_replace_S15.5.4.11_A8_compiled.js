
import { isWordChar, isLineTerminator } from './src/runtime/CharMatching'
import { contains } from './src/runtime/CharSet'
import { newCtx, ctx2str, multiline, ignoreCase } from './src/runtime/CompCtx' 
import { captures, endIndex, nCaps, state as makeState, str as stateString } from './src/runtime/State'
import { stringMap } from './src/runtime/utils'
import { isFailure, makeFailure, makeSuccess, getState } from './src/runtime/Failure'
import { emptyMatcher, getNegativeLookAheadAssertionTester, getLookAheadAssertionTester, getBigBAssertionTester, getBabyBAssertionTester, getDollarAssertionTester, getHatAssertionTester, repeatMatcher, backReferenceMatcher, characterSetMatcher, copyCaptures, getGroupMatcher, getLookaheadAssertion } from './src/runtime/RegExpRuntime'
import { RegExp } from './src/runtime/RegExpLib'
import { dynamicRegExpCreation, turnOffNative } from './src/runtime/DynRegExpLib'
import * as StringLib from './src/runtime/StringLib'

import { $DONOTEVALUATE, $ERROR, Test262Error, verifyNotConfigurable, verifyConfigurable, verifyNotEnumerable, 
    verifyEnumerable, verifyNotWritable, arrayContains, assert, assertRelativeDateMs, compareArray, verifyProperty, 
    isConfigurable, isEnumerable, isEqualTo, isWritable, verifyEqualTo, verifyWritable } from './src/harness'

turnOffNative();


if (!String.prototype.replace.hasOwnProperty('length')) {
	$ERROR('#0: String.prototype.replace.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.replace.hasOwnProperty('length'));
}
if (String.prototype.replace.propertyIsEnumerable('length')) {
	$ERROR('#1: String.prototype.replace.propertyIsEnumerable(\'length\') return false');
}
var count = 0;
for (var p in String.prototype.replace) {
	if (p === 'length')
		count++;
}
if (count !== 0) {
	$ERROR('#2: count=0; for (p in String.prototype.replace){if (p==="length") count++;} count === 0. Actual: ' + count);
}