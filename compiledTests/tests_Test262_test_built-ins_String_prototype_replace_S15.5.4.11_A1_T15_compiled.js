
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
		return new RegExp(function (state_2, cont_2) {
			var m_2 = characterSetMatcher({
				'positive': { '55': true },
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
					'positive': { '55': true },
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
		}, 1, '77', {
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
	}
};
var __instance = function () {
	if (Object === RegExp) {
		return dynamicRegExpCreation(1100.00777001);
	} else {
		return new Object(1100.00777001);
	}
}();
Object.prototype.replace = String.prototype.replace;
try {
	var x = __instance.replace(__obj, 1) === '1100.0017001';
	$ERROR('#1.0: x = __instance.replace(__obj, 1) === "1100.0017001" lead to throwing exception');
} catch (e) {
	if (!(e instanceof TypeError)) {
		$ERROR('#1.1: Exception is instance of TypeError. Actual: ' + e);
	}
}