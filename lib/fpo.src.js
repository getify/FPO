/*! fpo.js
	v0.0.1 (c) Kyle Simpson
	MIT License: http://getify.mit-license.org
*/

(function UMD(name,context,definition){
	if (typeof define === "function" && define.amd) { define(definition); }
	else if (typeof module !== "undefined" && module.exports) { module.exports = definition(); }
	else { context[name] = definition(name,context); }
})("FPO",this,function DEF(name,context){
	"use strict";

	var publicAPI = {
		curry: curryMultiple( {fn: curry, n: 2} ),
		curryMultiple: curryMultiple( {fn: curryMultiple, n: 2} ),
		partial: curryMultiple( {fn: partial, n: 2 } ),
		complement,
		apply: curryMultiple( {fn: apply, n: 2} ),
		gather: curryMultiple( {fn: gather, n: 2} ),
		filterIn: curryMultiple( {fn: filterIn, n: 2} ),
		filterOut: curryMultiple( {fn: filterOut, n: 2} ),
		map: curryMultiple( {fn: map, n: 2} ),
		reduce: curryMultiple( {fn: reduce, n: 3} ),
	};

	return publicAPI;


	// ***************************************

	function curry({ fn, n: arity = 1 } = {}) {
		return (function nextCurried(prevArgsObj){
			return function curried(nextArgObj = {}){
				if (!nextArgObj || typeof nextArgObj != "object") {
					nextArgObj = { v: nextArgObj };
				}

				var [key] = Object.keys( nextArgObj );
				var argsObj = Object.assign( {}, prevArgsObj, { [key || "v"]: nextArgObj[key] } );

				if (Object.keys( argsObj ).length >= arity) {
					return fn( argsObj );
				}
				else {
					return nextCurried( argsObj );
				}
			};
		})( {} );
	}

	function curryMultiple({ fn, n: arity = 1 } = {}) {
		return (function nextCurried(prevArgsObj){
			return function curried(nextArgsObj = {}){
				if (!nextArgsObj || typeof nextArgsObj != "object") {
					nextArgsObj = { v: nextArgsObj };
				}

				var [key] = Object.keys( nextArgsObj );
				var argsObj = Object.assign( {}, prevArgsObj, nextArgsObj );

				if (Object.keys( argsObj ).length >= arity) {
					return fn( argsObj );
				}
				else {
					return nextCurried( argsObj );
				}
			};
		})( {} );
	}

	function partial({ fn, args: partialArgsObj = {} } = {}) {
		return function partiallyApplied(resetArgsObj = {}){
			return fn( Object.assign( {}, partialArgsObj, resetArgsObj ) );
		};
	}

	function complement({ fn: predicateFn } = {}) {
		return function complemented(...args){
			return !predicateFn( ...args );
		};
	}

	function apply({
		fn,
		props: propOrder = fn.toString()
			.replace( /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/, "$1$2$3" )
			.split( /\s*,\s*/ )
			.map( v => v.replace( /[=\s].*$/, "" ) )
	} = {}) {
		return function appliedFn(argsObj) {
			return fn( ...propOrder.map( k => argsObj[k] ) );
		};
	}

	function gather({ fn, props: propOrder = [] } = {}) {
		return function gatheredFn(...args) {
			return fn(
				zip( {arr1: propOrder, arr2: args} )
				.reduce( (obj,[key,val]) => (obj[key] = val, obj), {} )
			);
		};
	}

	function filterIn({ fn: predicateFn, arr } = {}) {
		return arr.filter( predicateFn );
	}

	function filterOut({ fn: predicateFn, arr } = {}) {
		return filterIn( complement( predicateFn ), arr );
	}

	function map({ fn: mapperFn, arr } ={}) {
		return arr.map( mapperFn );
	}

	function reduce({ fn: reducerFn, v: initialValue, arr } = {}) {
		return initialValue !== undefined ?
			arr.reduce( reducerFn, initialValue ) :
			arr.reduce( reducerFn );
	}

});
