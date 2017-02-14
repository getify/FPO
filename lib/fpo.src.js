/*! fpo.js
	v0.0.16 (c) Kyle Simpson
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
	};

	publicAPI.std = {
		identity: unapply( {fn: identity, props: ["v"]} ),
		constant: unapply( {fn: constant, props: ["v"]} ),
		pick: unapply( {fn: pick, props: ["props","o"]} ),
		pickAll: unapply( {fn: pickAll, props: ["props","o"]} ),
		unary: unapply( {fn: unary, props: ["fn","prop"]} ),
		binary: unapply( {fn: binary, props: ["fn","props"]} ),
		curry: stdCurry,
		curryMultiple: stdCurryMultiple,
		uncurry: stdUncurry,
		partial: stdCurryMultiple( stdPartial, /*arity=*/2 ),
		complement: unapply( {fn: complement, props: ["fn"]} ),
		apply: stdCurryMultiple( stdApply, /*arity=*/1 ),
		unapply: stdCurryMultiple( stdUnapply, /*arity=*/1 ),
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
		flatten: stdCurryMultiple( unapply( {fn: flatten, props: ["arr","n"]} ), /*arity=*/1 ),
		zip: stdCurryMultiple( unapply( {fn: zip, props: ["arr1","arr2"]} ), /*arity=*/2 ),
		trampoline: unapply( {fn: trampoline, props: ["fn"]} ),
	};

	// method convenience aliases
	_setMethodAlias("constant","always");
	_setMethodAlias("pipe","flow");
	_setMethodAlias("apply","spread");
	_setMethodAlias("unapply","gather");
	_setMethodAlias("compose","flowRight");
	_setMethodAlias("setProp","assoc");
	_setMethodAlias("filterIn","filter");
	_setMethodAlias("reduce","fold");
	_setMethodAlias("reduce","foldL");
	_setMethodAlias("reduceRight","foldR");
	_setMethodAlias("flatMap","chain");

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
				var allArgsObj = Object.assign( {}, prevArgsObj, { [key]: nextArgObj[key] } );

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
			return fn(
				zip( {arr1: propNamesInOrder, arr2: args} )
				.reduce( function addPropToObj(obj,[key,val]){
					obj[key] = val;
					return obj;
				}, {} )
			);
		};
	}

	function stdUnapply(fn) {
		return function unappliedFn(...argsArr) {
			return fn( argsArr );
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

		if (initialValue === undefined) {
			if (arr.length == 0) return;

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
		var i = arr.length - 1;

		if (initialValue === undefined) {
			if (arr.length == 0) return;

			initialValue = arr[i];
			arr = arr.slice( 0, i );
			i--;
		}
		for (let v of [...arr].reverse()) {
			initialValue = reducerFn( {acc: initialValue, v, i: i--, arr: origArr} );
		}
		return initialValue;
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

	function trampoline({ fn } = {}) {
		return function trampolined(...args) {
			var result = fn( ...args );

			while (typeof result == "function") {
				result = result();
			}

			return result;
		};
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

	function _applyFnProp(fn,props) {
		return function fnApplied(argsObj){
			argsObj = Object.assign( {}, argsObj );
			argsObj.fn = apply( {fn: argsObj.fn, props} );
			return fn( argsObj );
		};
	}

});
