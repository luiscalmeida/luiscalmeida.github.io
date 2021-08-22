
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


var __obj = {
	toString: function () {
		return {};
	},
	valueOf: function () {
		return 1;
	}
};
var __obj2 = {
	toString: function () {
		throw 'inreplaceValue';
	}
};
try {
	var x = 'ABBABABAB1BBAA'.replace(__obj, __obj2);
	$ERROR('#1: var x = "ABB\\u0041BABAB\\u0031BBAA".replace(__obj,__obj2) lead to throwing exception');
} catch (e) {
	if (e !== 'inreplaceValue') {
		$ERROR('#1.1: Exception === "inreplaceValue". Actual: ' + e);
	}
}