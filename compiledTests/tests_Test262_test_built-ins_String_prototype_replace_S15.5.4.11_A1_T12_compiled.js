
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
		throw 'insearchValue';
	}
};
var __obj2 = {
	toString: function () {
		throw 'inreplaceValue';
	}
};
var __str = function () {
	if (String === RegExp) {
		return dynamicRegExpCreation('ABBABABAB');
	} else {
		return new String('ABBABABAB');
	}
}();
try {
	var x = __str.replace(__obj, __obj2);
	$ERROR('#1: "var x = __str.replace(__obj,__obj2)" lead to throwing exception');
} catch (e) {
	if (e !== 'insearchValue') {
		$ERROR('#1.1: Exception === "insearchValue". Actual: ' + e);
	}
}