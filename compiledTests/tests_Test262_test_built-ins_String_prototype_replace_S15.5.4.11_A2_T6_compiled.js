
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


var __str = 'She sells seashells by the seashore.';
var __re = new RegExp(function (state_2, cont_2) {
	var m_2 = characterSetMatcher({
		'positive': { '115': true },
		'negative': null
	}, false, {
		'flags': {
			'm': false,
			'i': false,
			'g': false
		},
		'parens': {
			'parenIndex': 0,
			'parenCount': 0
		},
		'nCaps': 0
	});
	var m_3 = function (state_1, cont_1) {
		var m_0 = characterSetMatcher({
			'positive': { '104': true },
			'negative': null
		}, false, {
			'flags': {
				'm': false,
				'i': false,
				'g': false
			},
			'parens': {
				'parenIndex': 0,
				'parenCount': 0
			},
			'nCaps': 0
		});
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
}, 1, 'sh', {
	'flags': {
		'm': false,
		'i': false,
		'g': false
	},
	'parens': {
		'parenIndex': 0,
		'parenCount': 0
	},
	'nCaps': 0
});
if (__str.replace(__re, 'sch') !== 'She sells seaschells by the seashore.') {
	$ERROR('#1: var __str = \'She sells seashells by the seashore.\'; var __re = /sh/; __str.replace(__re, \'sch\')===\'She sells seaschells by the seashore.\'. Actual: ' + __str.replace(__re, 'sch'));
}