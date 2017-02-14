/*! fpo.js
	v0.0.12 (c) Kyle Simpson
	MIT License: http://getify.mit-license.org
*/

(function UMD(name,context,definition){
	if (typeof define === "function" && define.amd) { define(definition); }
	else if (typeof module !== "undefined" && module.exports) { module.exports = definition(); }
	else { context[name] = definition(name,context); }
})("FPO",this,function DEF(name,context){
	"use strict";

	var publicAPI = {
		constant,
		pick: curryMultiple( {fn: pick, n: 2} ),
		pickAll: curryMultiple( {fn: pickAll, n: 2} ),
		unary: curryMultiple( {fn: unary, n: 2} ),
		binary: curryMultiple( {fn: binary, n: 2} ),
		curry,
		curryMultiple,
		uncurry,
		partial: curryMultiple( {fn: partial, n: 2 } ),
		complement,
		apply,
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
		flatten,
		zip: curryMultiple( {fn: zip, n: 2} ),
		flatMap: curryMultiple( {fn: flatMap, n: 2} ),
	};

	publicAPI.std = {
		constant: gather( {fn: constant, props: ["v"]} ),
		pick: gather( {fn: pick, props: ["props","o"]} ),
		pickAll: gather( {fn: pickAll, props: ["props","o"]} ),
		unary: gather( {fn: unary, props: ["fn","prop"]} ),
		binary: gather( {fn: binary, props: ["fn","props"]} ),
		curry: stdCurry,
		curryMultiple: stdCurryMultiple,
		uncurry: stdUncurry,
		partial: stdCurryMultiple( _partial, /*arity=*/2 ),
		complement: gather( {fn: complement, props: ["fn"]} ),
		apply: stdCurryMultiple( gather( {fn: apply, props: ["fn","props"]} ), /*arity=*/1 ),
		gather: stdCurryMultiple( gather( {fn: gather, props: ["fn","props"]} ), /*arity=*/2 ),
		compose: gather( {fn: compose, props: ["fns"]} ),
		pipe: gather( {fn: pipe, props: ["fns"]} ),
		prop: stdCurryMultiple( gather( {fn: prop, props: ["name","o"]} ), /*arity=*/2 ),
		setProp: stdCurryMultiple( gather( {fn: setProp, props: ["name","o","v"]} ), /*arity=*/3 ),
		filterIn: stdCurryMultiple( gather( {fn: filterIn, props: ["fn","arr"]} ), /*arity=*/2 ),
		filterOut: stdCurryMultiple( gather( {fn: filterOut, props: ["fn","arr"]} ), /*arity=*/2 ),
		map: stdCurryMultiple( gather( {fn: map, props: ["fn","arr"]} ), /*arity=*/2 ),
		reduce: stdCurryMultiple( gather( {fn: reduce, props: ["fn","v","arr"]} ), /*arity=*/3 ),
		reduceRight: stdCurryMultiple( gather( {fn: reduceRight, props: ["fn","v","arr"]} ), /*arity=*/3 ),
		flatten: stdCurryMultiple( gather( {fn: flatten, props: ["arr","n"]} ), /*arity=*/1 ),
		zip: stdCurryMultiple( gather( {fn: zip, props: ["arr1","arr2"]} ), /*arity=*/2 ),
		flatMap: stdCurryMultiple( gather( {fn: flatMap, props: ["fn","arr"]}), /*arity=*/2 ),
	};

	// method convenience aliases
	_setMethodAlias("constant","always");
	_setMethodAlias("pipe","flow");
	_setMethodAlias("compose","flowRight");
	_setMethodAlias("setProp","assoc");
	_setMethodAlias("reduce","fold");
	_setMethodAlias("reduce","foldL");
	_setMethodAlias("reduceRight","foldR");
	_setMethodAlias("flatMap","chain");

	return publicAPI;


	// ***************************************

	function constant({ v } = {}) {
		return function value(){
			return v;
		};
	}

	function pick({ o: obj, props = [] } = {}) {
		return props.reduce( function addPropToObj(newObj,key){
			if (key in obj) newObj[key] = obj[key];
			return newObj;
		}, {} );
	}

	function pickAll({ o: obj, props = [] } = {}) {
		return props.reduce( function addPropToObj(newObj,key){
			newObj[key] = obj[key];
			return newObj;
		}, {} );
	}

	function unary({ fn, prop: propName1 } = {}) {
		return function onlyOneArg(argObj = {}){
			return fn( pickAll( {o: argObj, props: [propName1]} ) );
		};
	}

	function binary({ fn, props: [ propName1, propName2 ] = [] } = {}) {
		return function onlyTwoArgs(argsObj = {}){
			return fn( pickAll( {o: argsObj, props: [propName1,propName2]} ) );
		};
	}

	function curry({ fn, n: arity = 1 } = {}) {
		return (function nextCurried(prevArgsObj){
			return function curried(nextArgObj = {}){
				var [key] = Object.keys( nextArgObj );
				var argsObj = Object.assign( {}, prevArgsObj, { [key]: nextArgObj[key] } );

				if (Object.keys( argsObj ).length >= arity) {
					return fn( argsObj );
				}
				else {
					return nextCurried( argsObj );
				}
			};
		})( {} );
	}

	function stdCurry(fn,arity = fn.length) {
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

	function curryMultiple({ fn, n: arity = 1 } = {}) {
		return (function nextCurried(prevArgsObj){
			return function curried(nextArgsObj = {}){
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

	function stdCurryMultiple(fn,arity = fn.length) {
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

	function uncurry({ fn } = {}) {
		return function uncurried(argsObj = {}){
			var ret = fn;

			for (let prop of Object.keys( argsObj )) {
				// assume `fn` is strictly curried (needs props one at a time),
				// instead of loose/multiple currying
				ret = ret( { [prop]: argsObj[prop] } );
			}

			return ret;
		};
	}

	function stdUncurry(fn) {
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

	function prop({ name = "v", o = {} } = {}) {
		return o[name];
	}

	function setProp({ name = "v", o = {}, v } = {}) {
		var clone = Object.assign( {}, o );
		clone[name] = v;
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

	function _partial(fn,presetArgs = []) {
		return function partiallyApplied(...laterArgs){
			return fn( ...presetArgs, ...laterArgs );
		};
	}

	function _setMethodAlias(origName,aliasName) {
		publicAPI[aliasName] = publicAPI[origName];
		publicAPI.std[aliasName] = publicAPI.std[origName];
	}

});
