
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
	valueOf: function () {
	},
	toString: void 0
};
if (function () {
		if (String === RegExp) {
			return dynamicRegExpCreation(__obj);
		} else {
			return new String(__obj);
		}
	}().replace(function () {
	}(), __func) !== 'undefined0undefined') {
	$ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; function __func(a1,a2,a3){return a1+a2+a3;}; new String(__obj).replace(function(){}(),__func) === "undefined0undefined". Actual: ' + function () {
		if (String === RegExp) {
			return dynamicRegExpCreation(__obj);
		} else {
			return new String(__obj);
		}
	}().replace(function () {
	}(), __func));
}
function __func(a1, a2, a3) {
	return a1 + a2 + a3;
}
;