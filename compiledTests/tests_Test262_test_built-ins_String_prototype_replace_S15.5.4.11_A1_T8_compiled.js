
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
	}
};
if (String(__obj).replace(new RegExp(characterSetMatcher({
		'positive': { '101': true },
		'negative': null
	}, false, {
		'flags': {
			'm': false,
			'i': false,
			'g': true
		},
		'parens': {
			'parenIndex': 0,
			'parenCount': 0
		},
		'nCaps': 0
	}), 1, 'e', {
		'flags': {
			'm': false,
			'i': false,
			'g': true
		},
		'parens': {
			'parenIndex': 0,
			'parenCount': 0
		},
		'nCaps': 0
	}), void 0) !== 'undundefinedfinundefinedd') {
	$ERROR('#1: __obj = {toString:function(){}}; String(__obj).replace(/e/g,void 0) === "undundefinedfinundefinedd". Actual: ' + String(__obj).replace(new RegExp(characterSetMatcher({
		'positive': { '101': true },
		'negative': null
	}, false, {
		'flags': {
			'm': false,
			'i': false,
			'g': true
		},
		'parens': {
			'parenIndex': 0,
			'parenCount': 0
		},
		'nCaps': 0
	}), 1, 'e', {
		'flags': {
			'm': false,
			'i': false,
			'g': true
		},
		'parens': {
			'parenIndex': 0,
			'parenCount': 0
		},
		'nCaps': 0
	}), void 0));
}