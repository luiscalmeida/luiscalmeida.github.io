
import { isWordChar, isLineTerminator } from './src/runtime/CharMatching'
import { contains } from './src/runtime/CharSet'
import { newCtx, ctx2str, multiline, ignoreCase } from './src/runtime/CompCtx' 
import { captures, endIndex, nCaps, state as makeState, str as stateString } from './src/runtime/State'
import { stringMap } from './src/runtime/utils'
import { isFailure, makeFailure, makeSuccess } from './src/runtime/Failure'
import { emptyMatcher, getNegativeLookAheadAssertionTester, getLookAheadAssertionTester, getBigBAssertionTester, getBabyBAssertionTester, getDollarAssertionTester, getHatAssertionTester, repeatMatcher, backReferenceMatcher, characterSetMatcher, copyCaptures, getGroupMatcher, getLookaheadAssertion } from './src/runtime/RegExpRuntime'
import { RegExp } from './src/runtime/RegExpLib'
import { dynamicRegExpCreation, turnOffNative } from './src/runtime/DynRegExpLib'
import * as StringLib from './src/runtime/StringLib'

turnOffNative();


var x = new RegExp(function (state_6, cont_6) {
	var m_8 = characterSetMatcher({
		'positive': { '97': true },
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
		'nCaps': 1
	}, {
		source: 'a',
		start: '1',
		end: '2'
	});
	var m_9 = function (state_5, cont_5) {
		var m_6 = repeatMatcher(getGroupMatcher(function (state_2, cont_2) {
			var m_2 = characterSetMatcher({
				'positive': { '97': true },
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
				'nCaps': 1
			}, {
				source: 'a',
				start: '3',
				end: '4'
			});
			var m_3 = function (state_1, cont_1) {
				var m_0 = characterSetMatcher({
					'positive': { '98': true },
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
					'nCaps': 1
				}, {
					source: 'b',
					start: '4',
					end: '5'
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
		}, 1), 0, Infinity, true, 1, 0);
		var m_7 = function (state_4, cont_4) {
			var m_4 = characterSetMatcher({
				'positive': { '98': true },
				'negative': null
			}, false, {
				'flags': {
					'm': false,
					'i': false,
					'g': false
				},
				'parens': {
					'parenIndex': 1,
					'parenCount': 0
				},
				'nCaps': 1
			}, {
				source: 'b',
				start: '7',
				end: '8'
			});
			var m_5 = function (state_3, cont_3) {
				return cont_3(state_3);
			};
			var cont_d_2 = function (state_y_2) {
				return m_5(state_y_2, cont_4);
			};
			return m_4(state_4, cont_d_2);
		};
		var cont_d_3 = function (state_y_3) {
			return m_7(state_y_3, cont_5);
		};
		return m_6(state_5, cont_d_3);
	};
	var cont_d_4 = function (state_y_4) {
		return m_9(state_y_4, cont_6);
	};
	return m_8(state_6, cont_d_4);
}, 2, 'a(ab)*b', {
	'flags': {
		'm': false,
		'i': false,
		'g': false
	},
	'parens': {
		'parenIndex': 1,
		'parenCount': 0
	},
	'nCaps': 1
});
var ret = x.exec('aabb');
console.log(ret);