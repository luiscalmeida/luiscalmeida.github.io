
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


var __str = 'abc12 def34';
var __pattern = new RegExp(function (state_2, cont_2) {
	var m_2 = getGroupMatcher(repeatMatcher(characterSetMatcher({
		'positive': {
			'97': true,
			'98': true,
			'99': true,
			'100': true,
			'101': true,
			'102': true,
			'103': true,
			'104': true,
			'105': true,
			'106': true,
			'107': true,
			'108': true,
			'109': true,
			'110': true,
			'111': true,
			'112': true,
			'113': true,
			'114': true,
			'115': true,
			'116': true,
			'117': true,
			'118': true,
			'119': true,
			'120': true,
			'121': true,
			'122': true
		},
		'negative': null
	}, false, {
		'flags': {
			'm': false,
			'i': false,
			'g': false
		},
		'parens': {
			'parenIndex': 1,
			'parenCount': 1
		},
		'nCaps': 2
	}), 1, Infinity, true, 1, 1), 1);
	var m_3 = function (state_1, cont_1) {
		var m_0 = getGroupMatcher(repeatMatcher(characterSetMatcher({
			'positive': {
				'48': true,
				'49': true,
				'50': true,
				'51': true,
				'52': true,
				'53': true,
				'54': true,
				'55': true,
				'56': true,
				'57': true
			},
			'negative': null
		}, false, {
			'flags': {
				'm': false,
				'i': false,
				'g': false
			},
			'parens': {
				'parenIndex': 2,
				'parenCount': 1
			},
			'nCaps': 2
		}), 1, Infinity, true, 2, 1), 2);
		var m_1 = function (state_0, cont_0) {
			return cont_0(state_0);
		};
		var cont_d_0 = function (state_y_0) {
			return m_1(state_y_0, cont_1);
		};
		return m_0(state_1, cont_d_0);
	};
	var cont_d_1 = function (state_y_1) {
		return m_3(state_y_1, cont_2);
	};
	return m_2(state_2, cont_d_1);
}, 3, '([a-z]+)([0-9]+)', {
	'flags': {
		'm': false,
		'i': false,
		'g': false
	},
	'parens': {
		'parenIndex': 2,
		'parenCount': 0
	},
	'nCaps': 2
});
if (__str.replace(__pattern, __replFN) !== '12abc def34') {
	$ERROR('#1: var __str = "abc12 def34"; var __pattern = /([a-z]+)([0-9]+)/; function __replFN() {return arguments[2] + arguments[1];}; __str.replace(__pattern, __replFN)===\'12abc def34\'. Actual: ' + __str.replace(__pattern, __replFN));
}
function __replFN() {
	return arguments[2] + arguments[1];
}