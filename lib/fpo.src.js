/*! fpo.js
	v0.0.3 (c) Kyle Simpson
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
		uncurry,
		partial: curryMultiple( {fn: partial, n: 2 } ),
		complement,
		apply: curryMultiple( {fn: apply, n: 2} ),
		gather: curryMultiple( {fn: gather, n: 2} ),
		prop: curryMultiple( {fn: prop, n: 2} ),
		setProp: curryMultiple( {fn: setProp, n: 3} ),
		filterIn: curryMultiple( {fn: filterIn, n: 2} ),
		filterOut: curryMultiple( {fn: filterOut, n: 2} ),
		map: curryMultiple( {fn: map, n: 2} ),
		reduce: curryMultiple( {fn: reduce, n: 3} ),
		reduceRight: curryMultiple( {fn: reduceRight, n: 3} ),
	};

	publicAPI.classic = {
		curry: looseCurry( apply( {fn: curry, props: ["fn","n"]} ), /*arity=*/2 ),
		curryMultiple: looseCurry( apply( {fn: publicAPI.curryMultiple, props: ["fn","n"]} ), /*arity=*/2 ),
		uncurry: looseCurry( apply( {fn: uncurry, props: ["fn"]} ), /*arity=*/1 ),
		partial: looseCurry( apply( {fn: partial, props: ["fn","args"]} ), /*arity=*/2 ),
		complement: looseCurry( apply( {fn: complement, props: ["fn"]} ), /*arity=*/1 ),
		apply: looseCurry( apply( {fn: apply, props: ["fn","props"]} ), /*arity=*/2 ),
		gather: looseCurry( apply( {fn: gather, props: ["fn","props"]} ), /*arity=*/2 ),
		prop: looseCurry( apply( {fn: prop, props: ["name","o"]} ), /*arity=*/2 ),
		setProp: looseCurry( apply( {fn: setProp, props: ["name","o","v"]} ), /*arity=*/3 ),
		filterIn: looseCurry( apply( {fn: filterIn, props: ["fn","arr"]} ), /*arity=*/2 ),
		filterOut: looseCurry( apply( {fn: filterOut, props: ["fn","arr"]} ), /*arity=*/2 ),
		map: looseCurry( apply( {fn: map, props: ["fn","arr"]} ), /*arity=*/2 ),
		reduce: looseCurry( apply( {fn: reduce, props: ["fn","v","arr"]} ), /*arity=*/3 ),
		reduceRight: looseCurry( apply( {fn: reduceRight, props: ["fn","v","arr"]} ), /*arity=*/3 ),
	};

	publicAPI.std = {
		curry, curryMultiple, uncurry, partial, complement, apply, gather,
		prop, setProp, filterIn, filterOut, map, reduce, reduceRight,
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

	function uncurry({ fn } = {}) {
		return function uncurried(argsObj = {}){
			var ret = fn;

			for (let prop of Object.keys(argsObj)) {
				// assume `fn` is strictly curried (needs props one at a time),
				// instead of loose/multiple currying
				ret = ret( { [prop]: argsObj[prop] } );
			}

			return ret;
		};
	}

	function partial({ fn, args: partialArgsObj = {} } = {}) {
		return function partiallyApplied(restArgsObj = {}){
			return fn( Object.assign( {}, partialArgsObj, restArgsObj ) );
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

	function prop({ name = "v", o: obj = {} } = {}) {
		return obj[name];
	}

	function setProp({ name = "v", o: obj = {}, v: val } = {}) {
		var clone = Object.assign( {}, obj );
		clone[name] = val;
		return clone;
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

	function reduceRight({ fn: reducerFn, v: initialValue, arr } = {}) {
		return initialValue !== undefined ?
			arr.reduceRight( reducerFn, initialValue ) :
			arr.reduceRight( reducerFn );
	}


	// ***************************************
	// Private

	function looseCurry(fn,arity = fn.length) {
		return (function nextCurried(prevArgs){
			return function curried(...nextArgs){
				var args = prevArgs.concat( nextArgs );

				if (args.length >= arity) {
					return fn( ...args );
				}
				else {
					return nextCurried( args );
				}
			};
		})( [] );
	}

});
