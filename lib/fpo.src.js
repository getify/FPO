/*! fpo.js
	v0.0.10 (c) Kyle Simpson
	MIT License: http://getify.mit-license.org
*/

(function UMD(name,context,definition){
	if (typeof define === "function" && define.amd) { define(definition); }
	else if (typeof module !== "undefined" && module.exports) { module.exports = definition(); }
	else { context[name] = definition(name,context); }
})("FPO",this,function DEF(name,context){
	"use strict";

	var publicAPI = {
		curry: curryMultiple( {fn: curry, n: 1} ),
		curryMultiple: curryMultiple( {fn: curryMultiple, n: 1} ),
		uncurry,
		partial: curryMultiple( {fn: partial, n: 2 } ),
		complement,
		apply: curryMultiple( {fn: apply, n: 1} ),
		gather: curryMultiple( {fn: gather, n: 2} ),
		compose,
		pipe,
		prop: curryMultiple( {fn: prop, n: 2} ),
		setProp: curryMultiple( {fn: setProp, n: 3} ),
		filterIn: curryMultiple( {fn: filterIn, n: 2} ),
		filterOut: curryMultiple( {fn: filterOut, n: 2} ),
		map: curryMultiple( {fn: map, n: 2} ),
		reduce: curryMultiple( {fn: reduce, n: 3} ),
		reduceRight: curryMultiple( {fn: reduceRight, n: 3} ),
		flatten: curryMultiple( {fn: flatten, n: 1} ),
		zip: curryMultiple( {fn: zip, n: 2} ),
		flatMap: curryMultiple( {fn: flatMap, n: 2} ),
	};

	publicAPI.std = {
		curry: _curryMultiple( _curry, /*arity=*/1 ),
		curryMultiple: _curryMultiple( _curryMultiple, /*arity=*/1 ),
		uncurry: _uncurry,
		partial: _curryMultiple( _partial, /*arity=*/2 ),
		complement: gather( {fn: complement, props: ["fn"]} ),
		apply: _curryMultiple( gather( {fn: apply, props: ["fn","props"]} ), /*arity=*/1 ),
		gather: _curryMultiple( gather( {fn: gather, props: ["fn","props"]} ), /*arity=*/2 ),
		compose: gather( {fn: compose, props: ["fns"]} ),
		pipe: gather( {fn: pipe, props: ["fns"]} ),
		prop: _curryMultiple( gather( {fn: prop, props: ["name","o"]} ), /*arity=*/2 ),
		setProp: _curryMultiple( gather( {fn: setProp, props: ["name","o","v"]} ), /*arity=*/3 ),
		filterIn: _curryMultiple( gather( {fn: filterIn, props: ["fn","arr"]} ), /*arity=*/2 ),
		filterOut: _curryMultiple( gather( {fn: filterOut, props: ["fn","arr"]} ), /*arity=*/2 ),
		map: _curryMultiple( gather( {fn: map, props: ["fn","arr"]} ), /*arity=*/2 ),
		reduce: _curryMultiple( gather( {fn: reduce, props: ["fn","v","arr"]} ), /*arity=*/3 ),
		reduceRight: _curryMultiple( gather( {fn: reduceRight, props: ["fn","v","arr"]} ), /*arity=*/3 ),
		flatten: _curryMultiple( gather( {fn: flatten, props: ["arr","n"]} ), /*arity=*/1 ),
		zip: _curryMultiple( gather( {fn: zip, props: ["arr1","arr2"]} ), /*arity=*/2 ),
		flatMap: _curryMultiple( gather( {fn: flatMap, props: [""]}), /*arity=*/2 ),
	};

	// method convenience aliases
	setMethodAlias("pipe","flow");
	setMethodAlias("compose","flowRight");
	setMethodAlias("reduce","fold");
	setMethodAlias("reduce","foldL");
	setMethodAlias("reduceRight","foldR");
	setMethodAlias("flatMap","chain");

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
		props: propNamesInOrder = fn.toString()
			.replace( /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/, "$1$2$3" )
			.split( /\s*,\s*/ )
			.map( v => v.replace( /[=\s].*$/, "" ) )
	} = {}) {
		return function appliedFn(argsObj) {
			return fn( ...propNamesInOrder.map( function getPropVal(k) { return argsObj[k]; } ) );
		};
	}

	function gather({ fn, props: propNamesInOrder = [] } = {}) {
		return function gatheredFn(...args) {
			return fn(
				zip( {arr1: propNamesInOrder, arr2: args} )
				.reduce( function addPropToObj(obj,[key,val]){
					obj[key] = val;
					return obj;
				}, {} )
			);
		};
	}

	function compose({ fns = [] } = {}) {
		return function composed(result){
			// copy the array of functions to prevent side effects
			var list = fns.slice();

			while (list.length > 0) {
				result = list.pop()( result );
			}

			return result;
		};
	}

	function pipe({ fns = [] } = {}) {
		return function piped(result){
			// copy the array of functions to prevent side effects
			var list = fns.slice();

			while (list.length > 0) {
				result = list.shift()( result );
			}

			return result;
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

	function filterIn({ fn: predicateFn, arr = [] } = {}) {
		return arr.filter( predicateFn );
	}

	function filterOut({ fn: predicateFn, arr = [] } = {}) {
		return filterIn( complement( predicateFn ), arr );
	}

	function map({ fn: mapperFn, arr = [] } ={}) {
		return arr.map( mapperFn );
	}

	function reduce({ fn: reducerFn, v: initialValue, arr = [] } = {}) {
		return initialValue !== undefined ?
			arr.reduce( reducerFn, initialValue ) :
			arr.reduce( reducerFn );
	}

	function reduceRight({ fn: reducerFn, v: initialValue, arr = [] } = {}) {
		return initialValue !== undefined ?
			arr.reduceRight( reducerFn, initialValue ) :
			arr.reduceRight( reducerFn );
	}

	function flatten({ arr = [], n: depth = Infinity } = {}) {
		return arr.reduce(function reducer(list,v){
			return list.concat(
				depth > 0 ?
					(depth > 1 && Array.isArray( v ) ?
						flatten( {arr: v, n: depth - 1} ) :
						v
					) :
					[v]
			);
		}, [] );
	}

	function zip({ arr1 = [], arr2 = [] } = {}) {
		var zipped = [];
		arr1 = arr1.slice();
		arr2 = arr2.slice();

		while (arr1.length > 0 && arr2.length > 0) {
			zipped.push( [ arr1.shift(), arr2.shift() ] );
		}

		return zipped;
	}

	function flatMap({ fn: mapperFn, arr = [] } = {}) {
		return arr.reduce( function reducer(list,v) {
			list.push( mapperFn( v ) );
			return list;
		}, [] );
	}

	// ***************************************
	// Private

	function _curry(fn,arity = fn.length) {
		return (function nextCurried(prevArgs){
			return function curried(nextArg){
				var args = prevArgs.concat( [nextArg] );

				if (args.length >= arity) {
					return fn( ...args );
				}
				else {
					return nextCurried( args );
				}
			};
		})( [] );
	}

	function _curryMultiple(fn,arity = fn.length) {
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

	function _uncurry(fn) {
		return function uncurried(...args){
			var ret = fn;

			for (let i = 0; i < args.length; i++) {
				// assume `fn` is strictly curried (needs one arg at a time),
				// instead of loose/multiple currying
				ret = ret( args[i] );
			}

			return ret;
		};
	}

	function _partial(fn,presetArgs = []) {
		return function partiallyApplied(...laterArgs){
			return fn( ...presetArgs, ...laterArgs );
		};
	}

	function setMethodAlias(origName,aliasName) {
		publicAPI[aliasName] = publicAPI[origName];
		publicAPI.std[aliasName] = publicAPI.std[origName];
	}

});
