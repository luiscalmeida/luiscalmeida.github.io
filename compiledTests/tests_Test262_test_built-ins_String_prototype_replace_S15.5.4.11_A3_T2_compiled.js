
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


var __str = 'uid=31';
var __re = new RegExp(function (state_7, cont_7) {
	var m_10 = getGroupMatcher(function (state_4, cont_4) {
		var m_6 = characterSetMatcher({
			'positive': { '117': true },
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
		});
		var m_7 = function (state_3, cont_3) {
			var m_4 = characterSetMatcher({
				'positive': { '105': true },
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
			});
			var m_5 = function (state_2, cont_2) {
				var m_2 = characterSetMatcher({
					'positive': { '100': true },
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
				});
				var m_3 = function (state_1, cont_1) {
					var m_0 = characterSetMatcher({
						'positive': { '61': true },
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
			};
			var cont_d_2 = function (state_y_2) {
				return m_5(state_y_2, cont_3);
			};
			return m_4(state_3, cont_d_2);
		};
		var cont_d_3 = function (state_y_3) {
			return m_7(state_y_3, cont_4);
		};
		return m_6(state_4, cont_d_3);
	}, 1);
	var m_11 = function (state_6, cont_6) {
		var m_8 = getGroupMatcher(repeatMatcher(characterSetMatcher({
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
		var m_9 = function (state_5, cont_5) {
			return cont_5(state_5);
		};
		var cont_d_4 = function (state_y_4) {
			return m_9(state_y_4, cont_6);
		};
		return m_8(state_6, cont_d_4);
	};
	var cont_d_5 = function (state_y_5) {
		return m_11(state_y_5, cont_7);
	};
	return m_10(state_7, cont_d_5);
}, 3, '(uid=)(\\d+)', {
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
if (__str.replace(__re, '$11' + '15') !== 'uid=115') {
	$ERROR('#1: var __str = \'uid=31\'; var __re = /(uid=)(d+)/; __str.replace(__re, "$11" + \'15\')===\'uid=115\'. Actual: ' + __str.replace(__re, '$11' + '15'));
}