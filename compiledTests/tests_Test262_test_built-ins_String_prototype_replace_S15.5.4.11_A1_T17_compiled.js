
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


var __re = dynamicRegExpCreation(x, 'g');
var __instance = String('asdf');
var __str = '1';
if (__instance.replace(__re, __str) !== '1a1s1d1f1') {
	$ERROR('#1: var x; var __re = new RegExp(x,"g"); __instance = String("asdf"); __str = "1"; __instance.replace(__re, __str) === "1a1s1d1f1". Actual: ' + __instance.replace(__re, __str));
}
var x;