/*! fpo.js
	v0.0.20 (c) Kyle Simpson
	MIT License: http://getify.mit-license.org
*/

(function UMD(name,context,definition){
	if (typeof define === "function" && define.amd) { define(definition); }
	else if (typeof module !== "undefined" && module.exports) { module.exports = definition(); }
	else { context[name] = definition(name,context); }
})("FPO",this,function DEF(name,context){
	"use strict";

	var publicAPI = {
		identity,
		constant,
		pick: curryMultiple( {fn: pick, n: 2} ),
		pickAll: curryMultiple( {fn: pickAll, n: 2} ),
		limitProps: curryMultiple( {fn: limitProps, n: 2} ),
		unary: curryMultiple( {fn: unary, n: 2} ),
		binary: curryMultiple( {fn: binary, n: 2} ),
		curry,
		curryMultiple,
		uncurry,
		partial: curryMultiple( {fn: partial, n: 2 } ),
		complement,
		apply,
		unapply: curryMultiple( {fn: unapply, n: 2} ),
		compose,
		pipe,
		prop: curryMultiple( {fn: prop, n: 2} ),
		setProp: curryMultiple( {fn: setProp, n: 3} ),
		filterIn: curryMultiple( {fn: filterIn, n: 2} ),
		filterOut: curryMultiple( {fn: filterOut, n: 2} ),
		map: curryMultiple( {fn: map, n: 2} ),
		flatMap: curryMultiple( {fn: flatMap, n: 2} ),
		reduce: curryMultiple( {fn: reduce, n: 2} ),
		reduceRight: curryMultiple( {fn: reduceRight, n: 2} ),
		flatten,
		zip: curryMultiple( {fn: zip, n: 2} ),
		trampoline,
		transducers: {
			transduce: curryMultiple( {fn: transduce, n: 4} ),
			into: curryMultiple( {fn: into, n: 3} ),
			mapReducer: mapReducer,
			filterReducer: filterReducer,
			string: curryMultiple( {fn: strAppend, n: 2} ),
			array: curryMultiple( {fn: arrayPush, n: 2} ),
			default: ({ acc } = {}) => acc,
		},
	};

	publicAPI.std = {
		identity: unapply( {fn: identity, props: ["v"]} ),
		constant: unapply( {fn: constant, props: ["v"]} ),
		pick: stdCurryMultiple( unapply( {fn: pick, props: ["props","o"]} ), /*arity=*/2 ),
		pickAll: stdCurryMultiple( unapply( {fn: pickAll, props: ["props","o"]} ), /*arity=*/2 ),
		limitProps: stdCurryMultiple( unapply( {fn: limitProps, props: ["props","fn"]} ), /*arity=*/2 ),
		unary: stdUnary,
		binary: stdBinary,
		curry: stdCurry,
		curryMultiple: stdCurryMultiple,
		uncurry: stdUncurry,
		partial: stdCurryMultiple( stdPartial, /*arity=*/2 ),
		complement: unapply( {fn: complement, props: ["fn"]} ),
		apply: stdApply,
		unapply: stdUnapply,
		compose: unapply( {fn: compose, props: ["fns"]} ),
		pipe: unapply( {fn: pipe, props: ["fns"]} ),
		prop: stdCurryMultiple( unapply( {fn: prop, props: ["name","o"]} ), /*arity=*/2 ),
		setProp: stdCurryMultiple( unapply( {fn: setProp, props: ["name","o","v"]} ), /*arity=*/3 ),
		filterIn: stdCurryMultiple( unapply( {fn: _applyFnProp( filterIn, ["v","i","arr"] ), props: ["fn","arr"]} ), /*arity=*/2 ),
		filterOut: stdCurryMultiple( unapply( {fn: _applyFnProp( filterOut, ["v","i","arr"] ), props: ["fn","arr"]} ), /*arity=*/2 ),
		map: stdCurryMultiple( unapply( {fn: _applyFnProp( map, ["v","i","arr"] ), props: ["fn","arr"]} ), /*arity=*/2 ),
		flatMap: stdCurryMultiple( unapply( {fn: _applyFnProp( flatMap, ["v","i","arr"] ), props: ["fn","arr"]}), /*arity=*/2 ),
		reduce: stdCurryMultiple( unapply( {fn: _applyFnProp( reduce, ["acc","v","i","arr"] ), props: ["fn","v","arr"]} ), /*arity=*/3 ),
		reduceRight: stdCurryMultiple( unapply( {fn: _applyFnProp( reduceRight, ["acc","v","i","arr"] ), props: ["fn","v","arr"]} ), /*arity=*/3 ),
		flatten: unapply( {fn: flatten, props: ["arr","n"]} ),
		zip: stdCurryMultiple( unapply( {fn: zip, props: ["arr1","arr2"]} ), /*arity=*/2 ),
		trampoline: unapply( {fn: trampoline, props: ["fn"]} ),
		transducers: {
			transduce: stdCurryMultiple( stdTransduce, /*arity=*/4 ),
			into: stdCurryMultiple( stdInto, /*arity=*/3 ),
			mapReducer: stdCurryMultiple( stdMapReducer, /*arity=*/2 ),
			filterReducer: stdCurryMultiple( stdFilterReducer, /*arity=*/2 ),
			string: stdCurryMultiple( stdStrAppend, /*arity=*/2 ),
			arrayPush: stdCurryMultiple( stdArrayPush, /*arity=*/2 ),
			default: acc => acc,
		},
	};

	// method convenience aliases
	_setMethodAlias("constant","always");
	_setMethodAlias("pipe","flow");
	_setMethodAlias("compose","flowRight");
	_setMethodAlias("apply","spread");
	_setMethodAlias("unapply","gather");
	_setMethodAlias("setProp","assoc");
	_setMethodAlias("filterIn","filter");
	_setMethodAlias("flatMap","chain");
	_setMethodAlias("reduce","fold");
	_setMethodAlias("reduce","foldL");
	_setMethodAlias("reduceRight","foldR");

	return publicAPI;


	// ***************************************

	function identity({ v } = {}) {
		return v;
	}

	function constant({ v } = {}) {
		return function value(){
			return v;
		};
	}

	function pick({ o: obj, props = [] } = {}) {
		var newObj = {};

		for (let prop of props) {
			if (_hasProp( obj, prop )) {
				newObj[prop] = obj[prop];
			}
		}

		return newObj;
	}

	function pickAll({ o: obj, props = [] } = {}) {
		var newObj = {};

		for (let prop of props) {
			newObj[prop] = obj[prop];
		}

		return newObj;
	}

	function limitProps({ fn, props = [] } = {}) {
		return function limited(argsObj = {}){
			return fn( pick( {o: argsObj, props} ) );
		};
	}

	function unary({ fn, prop: propName1 = "" } = {}) {
		return limitProps( {fn, props: [propName1]} );
	}

	function stdUnary(fn) {
		return function onlyOneArg(arg){
			return fn( arg );
		};
	}

	function binary({ fn, props: [ propName1 = "", propName2 = "" ] = [] } = {}) {
		return limitProps( {fn, props: [propName1,propName2]} );
	}

	function stdBinary(fn) {
		return function onlyTwoArgs(arg1,arg2){
			return fn( arg1, arg2 );
		};
	}

	function curry({ fn, n: arity = 1 } = {}) {
		return (function nextCurried(prevArgsObj){
			return function curried(nextArgObj = {}){
				var [key] = Object.keys( nextArgObj );
				var allArgsObj = Object.assign( {}, prevArgsObj, {[key]: nextArgObj[key]} );

				if (Object.keys( allArgsObj ).length >= arity) {
					return fn( allArgsObj );
				}
				else {
					return nextCurried( allArgsObj );
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
				ret = ret( {[prop]: argsObj[prop]} );
			}

			return ret;
		};
	}

	function stdUncurry(fn) {
		return function uncurried(...args){
			var ret = fn;

			for (let v of args) {
				// assume `fn` is strictly curried (needs one arg at a time),
				// instead of loose/multiple currying
				ret = ret( v );
			}

			return ret;
		};
	}

	function partial({ fn, args: partialArgsObj = {} } = {}) {
		return function partiallyApplied(restArgsObj = {}){
			return fn( Object.assign( {}, partialArgsObj, restArgsObj ) );
		};
	}

	function stdPartial(fn,partialArgs = []) {
		return function partiallyApplied(...restArgs){
			return fn( ...partialArgs, ...restArgs );
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

	function stdApply(fn) {
		return function appliedFn(argsArr) {
			return fn( ...argsArr );
		};
	}

	function unapply({ fn, props: propNamesInOrder = [] } = {}) {
		return function unappliedFn(...args) {
			var argsObj = {};
			var i1 = 0;
			var i2 = 0;

			while (i1 < propNamesInOrder.length && i2 < args.length) {
				argsObj[propNamesInOrder[i1++]] = args[i2++];
			}

			return fn( argsObj );
		};
	}

	function stdUnapply(fn) {
		return function unappliedFn(...argsArr) {
			return fn( argsArr );
		};
	}

	function compose({ fns = [] } = {}) {
		return function composed(result){
			for (let i = fns.length - 1; i >= 0; i--) {
				result = fns[i]( result );
			}

			return result;
		};
	}

	function pipe({ fns = [] } = {}) {
		return function piped(result){
			for (let fn of fns) {
				result = fn( result );
			}

			return result;
		};
	}

	function prop({ name = "v", o = {} } = {}) {
		return o[name];
	}

	function setProp({ name = "v", o = {}, v } = {}) {
		o = Object.assign( {}, o );
		o[name] = v;
		return o;
	}

	function filterIn({ fn: predicateFn, arr = [] } = {}) {
		var newArr = [];

		for (let [i,v] of arr.entries()) {
			if (predicateFn( { v, i, arr } )) {
				newArr[newArr.length] = v;
			}
		}

		return newArr;
	}

	function filterOut({ fn: predicateFn, arr = [] } = {}) {
		return filterIn( {fn: complement( {fn: predicateFn} ), arr} );
	}

	function map({ fn: mapperFn, arr = [] } = {}) {
		var newArr = [];

		for (let [i,v] of arr.entries()) {
			newArr[i] = mapperFn( {v, i, arr} );
		}

		return newArr;
	}

	function flatMap({ fn: mapperFn, arr = [] } = {}) {
		var newArr = [];

		for (let [i,v] of arr.entries()) {
			newArr = newArr.concat( mapperFn( {v, i, arr} ) );
		}

		return newArr;
	}

	function reduce({ fn: reducerFn, v: initialValue, arr = [] } = {}) {
		var origArr = arr;
		var i = 0;

		if (initialValue === undefined && arr.length > 0) {
			initialValue = arr[0];
			arr = arr.slice( 1 );
			i++;
		}

		for (let v of arr) {
			initialValue = reducerFn( {acc: initialValue, v, i: i++, arr: origArr} );
		}

		return initialValue;
	}

	function reduceRight({ fn: reducerFn, v: initialValue, arr = [] } = {}) {
		var origArr = arr;
		var idx = arr.length - 1;

		if (initialValue === undefined && arr.length > 0) {
			initialValue = arr[idx];
			arr = arr.slice( 0, idx );
			idx--;
		}

		for (let i = arr.length - 1; i >= 0; i--) {
			initialValue = reducerFn( {acc: initialValue, v: arr[i], i: idx--, arr: origArr} );
		}

		return initialValue;
	}

	function flatten({ arr = [], n: depth = Infinity } = {}) {
		var list = [];

		for (let v of arr) {
			list = list.concat(
				depth > 0 ?
					(depth > 1 && Array.isArray( v ) ?
						flatten( {arr: v, n: depth - 1} ) :
						v
					) :
					[v]
			);
		}

		return list;
	}

	function zip({ arr1 = [], arr2 = [] } = {}) {
		var zipped = [];
		var i1 = 0;
		var i2 = 0;

		while (i1 < arr1.length && i2 < arr2.length) {
			zipped.push( arr1[i1++], arr2[i2++] );
		}

		return zipped;
	}

	function trampoline({ fn } = {}) {
		return function trampolined(...args) {
			var result = fn( ...args );

			while (typeof result == "function") {
				result = result();
			}

			return result;
		};
	}

	function transduce({ fn: transducer, co: combinationFn, v: initialValue, arr = [] } = {}) {
		var reducer = transducer( combinationFn );

		return reduce( {fn: reducer, v: initialValue, arr} );
	}

	function stdTransduce(transducer,combinationFn,initialValue,arr = []) {
		var reducer = transducer( combinationFn );

		return publicAPI.std.reduce( reducer, initialValue, arr );
	}

	function into({ fn: transducer, v: initialValue, arr } = {}) {
		var combinationFn =
			typeof initialValue == "string" ? strAppend :
			Array.isArray( initialValue ) ? arrayPush :
			publicAPI.transducers.default;

		return transduce( {fn: transducer, co: combinationFn, v: initialValue, arr} );
	}

	function stdInto(transducer,initialValue,arr = []) {
		var combinationFn =
			typeof initialValue == "string" ? stdStrAppend :
			Array.isArray( initialValue ) ? stdArrayPush :
			publicAPI.std.transducers.default;

		return stdTransduce( transducer, combinationFn, initialValue, arr );
	}

	function mapReducer(argsObj = {}) {
		var { fn: mapperFn, co: combinationFn } = argsObj;

		// still waiting on the combination function?
		if (!_hasProp( argsObj, "co" ) || !combinationFn) {
			// Note: the combination function is usually a composed
			// function, so we expect the argument by itself,
			// not wrapped in an object
			return function curried(co){
				return mapReducer( {fn: mapperFn, co} );
			};
		}

		return function reducer({ acc, v } = {}){
			return combinationFn( {acc, v: mapperFn( {v} )} );
		};
	}

	function stdMapReducer(mapperFn,combinationFn) {
		return function reducer(acc,v){
			return combinationFn( acc, mapperFn( v ) );
		};
	}

	function filterReducer(argsObj = {}) {
		var { fn: predicateFn, co: combinationFn } = argsObj;

		// still waiting on the combination function?
		if (!_hasProp( argsObj, "co" ) || !combinationFn) {
			// Note: the combination function is usually a composed
			// function, so we expect the argument by itself,
			// not wrapped in an object
			return function curried(co){
				return filterReducer( {fn: predicateFn, co} );
			};
		}

		return function reducer({ acc, v } = {}){
			if (predicateFn( {v} )) {
				return combinationFn( {acc, v} );
			}

			return acc;
		};
	}

	function stdFilterReducer(predicateFn,combinationFn) {
		return function reducer(acc,v){
			if (predicateFn( v )) {
				return combinationFn( acc, v );
			}

			return acc;
		};
	}

	function strAppend({ acc, v } = {}) {
		return acc + v;
	}

	function stdStrAppend(acc,v) {
		return acc + v;
	}

	function arrayPush({ acc, v } = {}) {
		acc.push( v );
		return acc;
	}

	function stdArrayPush(acc,v) {
		acc.push( v );
		return acc;
	}


	// ***************************************
	// Private

	function _setMethodAlias(origName,aliasName) {
		publicAPI[aliasName] = publicAPI[origName];
		publicAPI.std[aliasName] = publicAPI.std[origName];
	}

	function _applyFnProp(fn,props) {
		return function fnApplied(argsObj){
			argsObj = Object.assign( {}, argsObj );
			argsObj.fn = apply( {fn: argsObj.fn, props} );
			return fn( argsObj );
		};
	}

	function _hasProp(obj,prop) {
		return Object.hasOwnProperty.call( obj, prop );
	}

});
