"use strict";

QUnit.test( "core: API methods", function t1(assert){
	assert.expect( 38 );

	assert.ok( _isFunction( FPO.identity ), "identity()" );
	assert.ok( _isFunction( FPO.constant ), "constant()" );
	assert.ok( _isFunction( FPO.pick ), "pick()" );
	assert.ok( _isFunction( FPO.pickAll ), "pickAll()" );
	assert.ok( _isFunction( FPO.nAry ), "nAry()" );
	assert.ok( _isFunction( FPO.unary ), "unary()" );
	assert.ok( _isFunction( FPO.binary ), "binary()" );
	assert.ok( _isFunction( FPO.curry ), "curry()" );
	assert.ok( _isFunction( FPO.curryMultiple ), "curryMultiple()" );
	assert.ok( _isFunction( FPO.uncurry ), "uncurry()" );
	assert.ok( _isFunction( FPO.partial ), "partial()" );
	assert.ok( _isFunction( FPO.complement ), "complement()" );
	assert.ok( _isFunction( FPO.apply ), "apply()" );
	assert.ok( _isFunction( FPO.unapply ), "unapply()" );
	assert.ok( _isFunction( FPO.compose ), "compose()" );
	assert.ok( _isFunction( FPO.pipe ), "pipe()" );
	assert.ok( _isFunction( FPO.prop ), "prop()" );
	assert.ok( _isFunction( FPO.setProp ), "setProp()" );
	assert.ok( _isFunction( FPO.filterIn ), "filterIn()" );
	assert.ok( _isFunction( FPO.filterOut ), "filterOut()" );
	assert.ok( _isFunction( FPO.map ), "map()" );
	assert.ok( _isFunction( FPO.flatMap ), "flatMap()" );
	assert.ok( _isFunction( FPO.reduce ), "reduce()" );
	assert.ok( _isFunction( FPO.reduceRight ), "reduceRight()" );
	assert.ok( _isFunction( FPO.flatten ), "flatten()" );
	assert.ok( _isFunction( FPO.zip ), "zip()" );
	assert.ok( _isFunction( FPO.trampoline ), "trampoline()" );
	assert.ok( _isObject( FPO.transducers ), "transducers" );
	assert.ok( _isFunction( FPO.transducers.transduce ), "transducers.transduce()" );
	assert.ok( _isFunction( FPO.transducers.into ), "transducers.into()" );
	assert.ok( _isFunction( FPO.transducers.map ), "transducers.map()" );
	assert.ok( _isFunction( FPO.transducers.filter ), "transducers.filter()" );
	assert.ok( _isFunction( FPO.transducers.string ), "transducers.string()" );
	assert.ok( _isFunction( FPO.transducers.array ), "transducers.array()" );
	assert.ok( _isFunction( FPO.transducers.number ), "transducers.number()" );
	assert.ok( _isFunction( FPO.transducers.booleanAnd ), "transducers.booleanAnd()" );
	assert.ok( _isFunction( FPO.transducers.booleanOr ), "transducers.booleanOr()" );
	assert.ok( _isFunction( FPO.transducers.default ), "transducers.default()" );
} );

QUnit.test( "std: API methods", function t2(assert){
	assert.expect( 41 );

	assert.ok( _isFunction( FPO.std.identity ), "identity()" );
	assert.ok( _isFunction( FPO.std.constant ), "constant()" );
	assert.ok( _isFunction( FPO.std.pick ), "pick()" );
	assert.ok( _isFunction( FPO.std.pickAll ), "pickAll()" );
	assert.ok( _isFunction( FPO.std.nAry ), "nAry()" );
	assert.ok( _isFunction( FPO.std.unary ), "unary()" );
	assert.ok( _isFunction( FPO.std.binary ), "binary()" );
	assert.ok( _isFunction( FPO.std.curry ), "curry()" );
	assert.ok( _isFunction( FPO.std.curryMultiple ), "curryMultiple()" );
	assert.ok( _isFunction( FPO.std.uncurry ), "uncurry()" );
	assert.ok( _isFunction( FPO.std.partial ), "partial()" );
	assert.ok( _isFunction( FPO.std.partialRight ), "partialRight()" );
	assert.ok( _isFunction( FPO.std.complement ), "complement()" );
	assert.ok( _isFunction( FPO.std.apply ), "apply()" );
	assert.ok( _isFunction( FPO.std.unapply ), "unapply()" );
	assert.ok( _isFunction( FPO.std.compose ), "compose()" );
	assert.ok( _isFunction( FPO.std.pipe ), "pipe()" );
	assert.ok( _isFunction( FPO.std.prop ), "prop()" );
	assert.ok( _isFunction( FPO.std.setProp ), "setProp()" );
	assert.ok( _isFunction( FPO.std.filterIn ), "filterIn()" );
	assert.ok( _isFunction( FPO.std.filterOut ), "filterOut()" );
	assert.ok( _isFunction( FPO.std.map ), "map()" );
	assert.ok( _isFunction( FPO.std.flatMap ), "flatMap()" );
	assert.ok( _isFunction( FPO.std.reduce ), "reduce()" );
	assert.ok( _isFunction( FPO.std.reduceRight ), "reduceRight()" );
	assert.ok( _isFunction( FPO.std.flatten ), "flatten()" );
	assert.ok( _isFunction( FPO.std.zip ), "zip()" );
	assert.ok( _isFunction( FPO.std.trampoline ), "trampoline()" );
	assert.ok( _isObject( FPO.std.transducers ), "transducers" );
	assert.ok( _isFunction( FPO.std.transducers.transduce ), "transducers.transduce()" );
	assert.ok( _isFunction( FPO.std.transducers.into ), "transducers.into()" );
	assert.ok( _isFunction( FPO.std.transducers.map ), "transducers.map()" );
	assert.ok( _isFunction( FPO.std.transducers.filter ), "transducers.filter()" );
	assert.ok( _isFunction( FPO.std.transducers.string ), "transducers.string()" );
	assert.ok( _isFunction( FPO.std.transducers.array ), "transducers.array()" );
	assert.ok( _isFunction( FPO.std.transducers.number ), "transducers.number()" );
	assert.ok( _isFunction( FPO.std.transducers.booleanAnd ), "transducers.booleanAnd()" );
	assert.ok( _isFunction( FPO.std.transducers.booleanOr ), "transducers.booleanOr()" );
	assert.ok( _isFunction( FPO.std.transducers.default ), "transducers.default()" );
	assert.ok( _isFunction( FPO.std.flip ), "flip()" );
	assert.ok( _isFunction( FPO.std.reverseArgs ), "reverseArgs()" );
} );

QUnit.test( "API method aliases", function t3(assert){
	assert.expect( 25 );

	assert.strictEqual( FPO.always, FPO.constant, "always -> constant" );
	assert.strictEqual( FPO.std.always, FPO.std.constant, "std: always -> constant" );
	assert.strictEqual( FPO.partialRight, FPO.partial, "partialRight -> partial" );
	assert.strictEqual( FPO.flowRight, FPO.compose, "flowRight -> compose" );
	assert.strictEqual( FPO.std.flowRight, FPO.std.compose, "std: flowRight -> compose" );
	assert.strictEqual( FPO.flow, FPO.pipe, "flow -> pipe" );
	assert.strictEqual( FPO.std.flow, FPO.std.pipe, "std: flow -> pipe" );
	assert.strictEqual( FPO.spread, FPO.apply, "spread -> apply" );
	assert.strictEqual( FPO.std.spread, FPO.std.apply, "std: spread -> apply" );
	assert.strictEqual( FPO.gather, FPO.unapply, "gather -> unapply" );
	assert.strictEqual( FPO.std.gather, FPO.std.unapply, "std: gather -> unapply" );
	assert.strictEqual( FPO.assoc, FPO.setProp, "assoc -> setProp" );
	assert.strictEqual( FPO.std.assoc, FPO.std.setProp, "std: assoc -> setProp" );
	assert.strictEqual( FPO.filter, FPO.filterIn, "filter -> filterIn" );
	assert.strictEqual( FPO.std.filter, FPO.std.filterIn, "std: filter -> filterIn" );
	assert.strictEqual( FPO.chain, FPO.flatMap, "chain -> flatMap" );
	assert.strictEqual( FPO.std.chain, FPO.std.flatMap, "std: chain -> flatMap" );
	assert.strictEqual( FPO.fold, FPO.reduce, "fold -> reduce" );
	assert.strictEqual( FPO.std.fold, FPO.std.reduce, "std: fold -> reduce" );
	assert.strictEqual( FPO.foldL, FPO.reduce, "foldL -> reduce" );
	assert.strictEqual( FPO.std.foldL, FPO.std.reduce, "std: foldL -> reduce" );
	assert.strictEqual( FPO.foldR, FPO.reduceRight, "foldR -> reduceRight" );
	assert.strictEqual( FPO.std.foldR, FPO.std.reduceRight, "std: foldR -> reduceRight" );
	assert.strictEqual( FPO.transducers.boolean, FPO.transducers.booleanAnd, "transducers.boolean -> transducers.booleanAnd" );
	assert.strictEqual( FPO.std.transducers.boolean, FPO.std.transducers.booleanAnd, "std: transducers.boolean -> transducers.booleanAnd" );
} );

QUnit.test( "identity()", function t4(assert){
	var rActual = FPO.identity( {v: 2} );
	var pActual = FPO.identity()( {} )( { v: undefined } );
	var qActual = FPO.identity()( {} )( {v: 3} );

	assert.expect( 3 );
	assert.strictEqual( rActual, 2, "regular call" );
	assert.strictEqual( pActual, undefined, "curried with undefined" );
	assert.strictEqual( qActual, 3, "curried with value" );
} );

QUnit.test( "std.identity()", function t5(assert){
	var rActual = FPO.std.identity( 2 );
	var pActual = FPO.std.identity()( undefined );
	var qActual = FPO.std.identity()( 3 );

	assert.expect( 3 );
	assert.strictEqual( rActual, 2, "regular call" );
	assert.strictEqual( pActual, undefined, "curried with undefined" );
	assert.strictEqual( qActual, 3, "curried with value" );
} );

QUnit.test( "constant()", function t6(assert){
	var rActual = FPO.constant( {v: 2} )();
	var pActual = FPO.constant()( {} )( { v: undefined } )();
	var qActual = FPO.constant()( {} )( {v: 3} )();

	assert.expect( 3 );
	assert.strictEqual( rActual, 2, "regular call" );
	assert.strictEqual( pActual, undefined, "curried with undefined" );
	assert.strictEqual( qActual, 3, "curried with value" );
} );

QUnit.test( "std.constant()", function t7(assert){
	var rActual = FPO.std.constant( 2 )();
	var pActual = FPO.std.constant()( undefined )();
	var qActual = FPO.std.constant()( 3 )();

	assert.expect( 3 );
	assert.strictEqual( rActual, 2, "regular call" );
	assert.strictEqual( pActual, undefined, "curried with undefined" );
	assert.strictEqual( qActual, 3, "curried with value" );
} );

QUnit.test( "pick()", function t8(assert){
	var obj = { x: 1, y: 2, z: 3, w: 4 };
	var rExpected = { x: 1, z: 3 };
	var pExpected = { y: 2 };
	var emptyObj = {};

	var rActual = FPO.pick( {v: obj, props: ["x","z","x","f"]} );
	var pActual = FPO.pick()( {} )( {v: obj} )( {props: ["y"]} );
	var qActual = FPO.pick( {v: obj, props: []} );
	var tActual = FPO.pick( {v: obj, props: undefined} );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, emptyObj, "empty props" );
	assert.deepEqual( tActual, emptyObj, "undefined props" );
} );

QUnit.test( "std.pick()", function t9(assert){
	var obj = { x: 1, y: 2, z: 3, w: 4 };
	var rExpected = { x: 1, z: 3 };
	var pExpected = { y: 2 };
	var emptyObj = {};

	var rActual = FPO.std.pick( ["x","z","x","f"], obj );
	var pActual = FPO.std.pick()( ["y"] )( obj );
	var qActual = FPO.std.pick( [], obj );
	var tActual = FPO.std.pick( undefined, obj );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, emptyObj, "empty props" );
	assert.deepEqual( tActual, emptyObj, "undefined props" );
} );

QUnit.test( "pickAll()", function t10(assert){
	var obj = { x: 1, y: 2, z: 3, w: 4 };
	var rExpected = { x: 1, z: 3, f: undefined };
	var pExpected = { y: 2 };
	var emptyObj = {};

	var rActual = FPO.pickAll( {v: obj, props: ["x","z","x","f"]} );
	var pActual = FPO.pickAll()( {} )( {v: obj} )( {props: ["y"]} );
	var qActual = FPO.pickAll( {v: obj, props: []} );
	var tActual = FPO.pickAll( {v: obj, props: undefined} );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, emptyObj, "empty props" );
	assert.deepEqual( tActual, emptyObj, "undefined props" );
} );

QUnit.test( "std.pickAll()", function t11(assert){
	var obj = { x: 1, y: 2, z: 3, w: 4 };
	var rExpected = { x: 1, z: 3, f: undefined };
	var pExpected = { y: 2 };
	var emptyObj = {};

	var rActual = FPO.std.pickAll( ["x","z","x","f"], obj );
	var pActual = FPO.std.pickAll()( ["y"] )( obj );
	var qActual = FPO.std.pickAll( [], obj );
	var tActual = FPO.std.pickAll( undefined, obj );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, emptyObj, "empty props" );
	assert.deepEqual( tActual, emptyObj, "undefined props" );
} );

QUnit.test( "nAry()", function t12(assert){
	function foo(argsObj) { return argsObj; }

	var obj = { x: 1, y: 2, z: 3, w: 4 };
	var rExpected = { x: 1, y: 2, w: 4 };
	var pExpected = { z: 3, w: 4 };
	var emptyObj = {};

	var rActual = FPO.nAry( {fn: foo, props: ["x","y","w"]} )( obj );
	var pActual = FPO.nAry()( {} )( {fn: foo} )( {props: ["w","z"]} )( obj );
	var qActual = FPO.nAry( {fn: foo, props: []} )( obj );
	var tActual = FPO.nAry( {fn: foo, props: undefined} )( obj );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, emptyObj, "empty props (nullary)" );
	assert.deepEqual( tActual, emptyObj, "undefined props (nullary)" );
} );

QUnit.test( "std.nAry()", function t13(assert){
	function foo(...args) { return args; }

	var args = [1,2,3,4];
	var rExpected = [1,2,3];
	var pExpected = [1,2];
	var emptyArr = [];

	var rActual = FPO.std.nAry( foo, 3 )( ...args );
	var pActual = FPO.std.nAry()( foo )( 2 )( ...args );
	var qActual = FPO.std.nAry()( foo )( 0 )( ...args );
	var tActual = FPO.std.nAry()( foo )( undefined )( ...args );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, emptyArr, "arity 0 (nullary)" );
	assert.deepEqual( tActual, emptyArr, "undefined arity (nullary)" );
} );

QUnit.test( "unary()", function t14(assert){
	function foo(argsObj) { return argsObj; }

	var obj = { x: 1, y: 2, z: 3, w: 4 };
	var rExpected = { y: 2 };
	var pExpected = { w: 4 };
	var emptyObj = {};

	var rActual = FPO.unary( {fn: foo, prop: "y"} )( obj );
	var pActual = FPO.unary()( {} )( {fn: foo} )( {prop: "w"} )( obj );
	var qActual = FPO.unary( {fn: foo, prop: undefined} )( obj );

	assert.expect( 3 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, emptyObj, "undefined prop" );
} );

QUnit.test( "std.unary()", function t15(assert){
	function foo(...args) { return args; }

	var args = [1,2,3,4];
	var rExpected = [1];
	var pExpected = [1];

	var rActual = FPO.std.unary( foo )( ...args );
	var pActual = FPO.std.unary()( foo )( ...args );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "binary()", function t16(assert){
	function foo(argsObj) { return argsObj; }

	var obj = { x: 1, y: 2, z: 3, w: 4 };
	var rExpected = { x: 1, y: 2 };
	var pExpected = { z: 3, w: 4 };
	var emptyObj = {};

	var rActual = FPO.binary( {fn: foo, props: ["x","y"]} )( obj );
	var pActual = FPO.binary()( {} )( {fn: foo} )( {props: ["w","z"]} )( obj );
	var qActual = FPO.binary( {fn: foo, props: []} )( obj );
	var tActual = FPO.binary( {fn: foo, props: undefined} )( obj );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, emptyObj, "empty props" );
	assert.deepEqual( tActual, emptyObj, "undefined props" );
} );

QUnit.test( "std.binary()", function t17(assert){
	function foo(...args) { return args; }

	var args = [1,2,3,4];
	var rExpected = [1,2];
	var pExpected = [1,2];

	var rActual = FPO.std.binary( foo )( ...args );
	var pActual = FPO.std.binary()( foo )( ...args );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "curry()", function t18(assert){
	function foo(argsObj) { return argsObj; }

	var X = { x: 1 };
	var XY = { x: 1, y: 2 };
	var YZ = { y: 2, z: 3 };
	var W = { w: 4 };
	var rExpected = { x: 1, y: 2, w: 4 };
	var pExpected = { x: 1 };
	var qExpected = { x: 1 };
	var tExpected = { x: 1 };

	var rActual = FPO.curry( {fn: foo, n: 3} )( X )( YZ )( W );
	var pActual = FPO.curry()( {} )( {fn: foo} )()( {} )( XY );
	var qActual = FPO.curry( {fn: foo, n: undefined} )( XY );
	var tActual = FPO.curry( {fn: foo, n: 0} )( XY );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call with arity 3" );
	assert.deepEqual( pActual, pExpected, "curried without arity" );
	assert.deepEqual( qActual, qExpected, "undefined arity" );
	assert.deepEqual( tActual, tExpected, "zero arity" );
} );

QUnit.test( "std.curry()", function t19(assert){
	function foo(...args) { return args; }

	var a1 = [1];
	var a12 = [1,2];
	var a23 = [2,3];
	var a4 = [4];
	var rExpected = [1,2,4];
	var pExpected = [1];
	var qExpected = [1];
	var tExpected = [1];

	var rActual = FPO.std.curry( foo, 3 )( ...a1 )( ...a23 )( ...a4 );
	var pActual = FPO.std.curry()( foo )()( ...a12 );
	var qActual = FPO.std.curry( foo, undefined )( ...a12 );
	var tActual = FPO.std.curry( foo, 0 )( ...a12 );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call with arity 3" );
	assert.deepEqual( pActual, pExpected, "curried without arity" );
	assert.deepEqual( qActual, qExpected, "undefined arity" );
	assert.deepEqual( tActual, tExpected, "zero arity" );
} );

QUnit.test( "curryMultiple()", function t20(assert){
	function foo(argsObj) { return argsObj; }

	var X = { x: 1 };
	var XY = { x: 1, y: 2 };
	var YZ = { y: 2, z: 3 };
	var W = { w: 4 };
	var rExpected = { x: 1, y: 2, z: 3 };
	var pExpected = { x: 1, y: 2 };
	var qExpected = { x: 1, y: 2 };
	var tExpected = { x: 1, y: 2 };

	var rActual = FPO.curryMultiple( {fn: foo, n: 3} )( X )( YZ );
	var pActual = FPO.curryMultiple()( {} )( {fn: foo} )()( {} )( XY );
	var qActual = FPO.curryMultiple( {fn: foo, n: undefined} )( XY );
	var tActual = FPO.curryMultiple( {fn: foo, n: 0} )( XY );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call with arity 3" );
	assert.deepEqual( pActual, pExpected, "curried without arity" );
	assert.deepEqual( qActual, qExpected, "undefined arity" );
	assert.deepEqual( tActual, tExpected, "zero arity" );
} );

QUnit.test( "std.curryMultiple()", function t21(assert){
	function foo(...args) { return args; }

	var a1 = [1];
	var a12 = [1,2];
	var a23 = [2,3];
	var a4 = [4];
	var rExpected = [1,2,3];
	var pExpected = [1,2];
	var qExpected = [1,2];
	var tExpected = [1,2];

	var rActual = FPO.std.curryMultiple( foo, 3 )( ...a1 )( ...a23 );
	var pActual = FPO.std.curryMultiple()( foo )()( ...a12 );
	var qActual = FPO.std.curryMultiple( foo, undefined )( ...a12 );
	var tActual = FPO.std.curryMultiple( foo, 0 )( ...a12 );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call with arity 3" );
	assert.deepEqual( pActual, pExpected, "curried without arity" );
	assert.deepEqual( qActual, qExpected, "undefined arity" );
	assert.deepEqual( tActual, tExpected, "zero arity" );
} );

QUnit.test( "uncurry()", function t22(assert){
	function foo(argsObj) { return argsObj; }

	var XYZ = { x: 1, y: 2, z: 3 };
	var XY = { x: 1, y: 2 };
	var rFn = FPO.curry( {fn: foo, n: 3} );
	var pFn = FPO.curry( {fn: foo, n: 2} );
	var rExpected = { x: 1, y: 2, z: 3 };
	var pExpected = { x: 1, y: 2 };

	var rActual = FPO.uncurry( {fn: rFn} )( XYZ );
	var pActual = FPO.uncurry()( {} )( {fn: pFn} )( XY );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "std.uncurry()", function t23(assert){
	function foo(...args) { return args; }

	var a123 = [1,2,3];
	var a12 = [1,2];
	var rFn = FPO.std.curry( foo, 3 );
	var pFn = FPO.std.curry( foo, 2 );
	var rExpected = [1,2,3];
	var pExpected = [1,2];

	var rActual = FPO.std.uncurry( rFn )( ...a123 );
	var pActual = FPO.std.uncurry()( pFn )( ...a12 );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "partial()", function t24(assert){
	function foo(argsObj) { return argsObj; }

	var X = { x: 1 };
	var Y = { y: 2 };
	var Z = { z: 3 };
	var XY = { x: 1, y: 2 };
	var rExpected = { x: 1, y: 2, z: 3 };
	var pExpected = { x: 1, y: 2 };
	var qExpected = { x: 1 };
	var tExpected = { x: 1 };

	var rActual = FPO.partial( {fn: foo, args: Z} )( XY );
	var pActual = FPO.partial()( {} )( {fn: foo} )( {args: Y} )( X );
	var qActual = FPO.partial( {fn: foo, args: undefined} )( X );
	var tActual = FPO.partial( {fn: foo, args: {}} )( X );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried with partial args" );
	assert.deepEqual( qActual, qExpected, "undefined partial args" );
	assert.deepEqual( tActual, tExpected, "empty partial args" );
} );

QUnit.test( "std.partial()", function t25(assert){
	function foo(...args) { return args; }

	var a1 = [1];
	var a12 = [1,2];
	var a23 = [2,3];
	var a3 = [3];
	var rExpected = [1,2,3];
	var pExpected = [1,2,3];
	var qExpected = [3];
	var tExpected = [3];

	var rActual = FPO.std.partial( foo, a1 )( ...a23 );
	var pActual = FPO.std.partial()( foo )()( a12 )( ...a3 );
	var qActual = FPO.std.partial( foo, undefined )( ...a3 );
	var tActual = FPO.std.partial( foo, [] )( ...a3 );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried with partial args" );
	assert.deepEqual( qActual, qExpected, "undefined partial args" );
	assert.deepEqual( tActual, tExpected, "empty partial args" );
} );

QUnit.test( "std.partialRight()", function t25b(assert){
	function foo(...args) { return args; }

	var a1 = [1];
	var a12 = [1,2];
	var a23 = [2,3];
	var a3 = [3];
	var rExpected = [2,3,1];
	var pExpected = [3,1,2];
	var qExpected = [3];
	var tExpected = [3];

	var rActual = FPO.std.partialRight( foo, a1 )( ...a23 );
	var pActual = FPO.std.partialRight()( foo )()( a12 )( ...a3 );
	var qActual = FPO.std.partialRight( foo, undefined )( ...a3 );
	var tActual = FPO.std.partialRight( foo, [] )( ...a3 );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried with partial args" );
	assert.deepEqual( qActual, qExpected, "undefined partial args" );
	assert.deepEqual( tActual, tExpected, "empty partial args" );
} );

QUnit.test( "complement()", function t26(assert){
	function xPlusYEven(argsObj) { return (argsObj.x + argsObj.y) % 2 == 0; }

	var XY12 = { x: 1, y: 2 };
	var XY24 = { x: 2, y: 4 };

	var rActual = FPO.complement( {fn: xPlusYEven} )( XY12 );
	var pActual = FPO.complement()( {} )( { fn: xPlusYEven } )( XY24 );

	assert.expect( 2 );
	assert.strictEqual( rActual, true, "regular call" );
	assert.strictEqual( pActual, false, "curried" );
} );

QUnit.test( "std.complement()", function t27(assert){
	function argPlusArgEven(...args) { return (args[0] + args[1]) % 2 == 0; }

	var a12 = [1,2];
	var a24 = [2,4];

	var rActual = FPO.std.complement( argPlusArgEven )( ...a12 );
	var pActual = FPO.std.complement()( argPlusArgEven )( ...a24 );

	assert.expect( 2 );
	assert.strictEqual( rActual, true, "regular call" );
	assert.strictEqual( pActual, false, "curried" );
} );

QUnit.test( "apply()", function t28(assert){
	function foo(x,y,z) { return {x,y,z}; }

	var obj = { y: 2, z: 3, x: 1 };
	var rExpected = { x: 1, y: 2, z: 3 };
	var pExpected = { x: 3, y: 2, z: 1 };
	var qExpected = { x: 1, y: 2, z: 3 };
	var tExpected = { x: undefined, y: undefined, z: undefined };

	var rActual = FPO.apply( {fn: foo} )( obj );
	// NOTE: intentionally reversing applied prop order
	var pActual = FPO.apply()( {} )( {fn: foo, props: ["z","y","x"]} )( obj );
	var qActual = FPO.apply( {fn: foo, props: undefined} )( obj );
	var tActual = FPO.apply( {fn: foo, props: []} )( obj );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call without props" );
	assert.deepEqual( pActual, pExpected, "curried with reversed props" );
	assert.deepEqual( qActual, qExpected, "undefined props" );
	assert.deepEqual( tActual, tExpected, "empty props" );
} );

QUnit.test( "std.apply(..)", function t29(assert){
	function foo(...args) { return args; }

	var arr = [1,2,3];
	var rExpected = [1,2,3];
	var pExpected = [1,2,3];

	var rActual = FPO.std.apply( foo )( arr );
	var pActual = FPO.std.apply()( foo )( arr );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "unapply()", function t30(assert){
	function foo({x,y,z}) { return {x,y,z}; }

	var args = [1,2,3];
	var rExpected = { x: 1, y: 2, z: 3 };
	var pExpected = { x: 3, y: 2, z: 1 };
	var qExpected = { x: undefined, y: undefined, z: undefined };
	var tExpected = { x: undefined, y: undefined, z: undefined };

	var rActual = FPO.unapply( {fn: foo, props: ["x","y","z"]} )( ...args );
	// NOTE: intentionally reversing applied prop order
	var pActual = FPO.unapply()( {} )( {fn: foo, props: ["z","y","x"]} )( ...args );
	var qActual = FPO.unapply( {fn: foo, props: undefined} )( ...args );
	var tActual = FPO.unapply( {fn: foo, props: []} )( ...args );

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried with reversed props" );
	assert.deepEqual( qActual, qExpected, "undefined props" );
	assert.deepEqual( tActual, tExpected, "empty props" );
} );

QUnit.test( "std.unapply()", function t31(assert){
	function foo(args) { return args; }

	var arr = [1,2,3];
	var rExpected = [1,2,3];
	var pExpected = [1,2,3];

	var rActual = FPO.std.unapply( foo )( ...arr );
	var pActual = FPO.std.unapply()( foo )( ...arr );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "compose()", function t32(assert){
	function foo(x) { return `foo,${x}`; }
	function bar(x) { return `bar,${x}`; }
	function baz(x) { return `baz,${x}`; }

	var arr = [3,4];
	var rExpected = "foo,bar,baz,3";
	var pExpected = "foo,3";
	var qExpected = 3;
	var tExpected = 3;

	var rActual = FPO.compose( {fns: [foo,bar,baz]} )( ...arr );
	var pActual = FPO.compose()( {} )( {fns: [foo]} )( ...arr );
	var qActual = FPO.compose( {fns: undefined} )( ...arr );
	var tActual = FPO.compose( {fns: []} )( ...arr );

	assert.expect( 4 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "functions list undefined" );
	assert.strictEqual( tActual, tExpected, "functions list empty" );
} );

QUnit.test( "std.compose()", function t33(assert){
	function foo(x) { return `foo,${x}`; }
	function bar(x) { return `bar,${x}`; }
	function baz(x) { return `baz,${x}`; }

	var arr = [3,4];
	var rExpected = "foo,bar,baz,3";
	var pExpected = "foo,3";
	var qExpected = 3;
	var tExpected = 3;

	var rActual = FPO.std.compose( [foo,bar,baz] )( ...arr );
	var pActual = FPO.std.compose()( [foo] )( ...arr );
	var qActual = FPO.std.compose( undefined )( ...arr );
	var tActual = FPO.std.compose( [] )( ...arr );

	assert.expect( 4 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "functions list undefined" );
	assert.strictEqual( tActual, tExpected, "functions list empty" );
} );

QUnit.test( "pipe()", function t34(assert){
	function foo(x) { return `foo,${x}`; }
	function bar(x) { return `bar,${x}`; }
	function baz(x) { return `baz,${x}`; }

	var arr = [3,4];
	var rExpected = "foo,bar,baz,3";
	var pExpected = "foo,3";
	var qExpected = 3;
	var tExpected = 3;

	var rActual = FPO.pipe( {fns: [baz,bar,foo]} )( ...arr );
	var pActual = FPO.pipe()( {} )( {fns: [foo]} )( ...arr );
	var qActual = FPO.pipe( {fns: undefined} )( ...arr );
	var tActual = FPO.pipe( {fns: []} )( ...arr );

	assert.expect( 4 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "functions list undefined" );
	assert.strictEqual( tActual, tExpected, "functions list empty" );
} );

QUnit.test( "std.pipe()", function t35(assert){
	function foo(x) { return `foo,${x}`; }
	function bar(x) { return `bar,${x}`; }
	function baz(x) { return `baz,${x}`; }

	var arr = [3,4];
	var rExpected = "foo,bar,baz,3";
	var pExpected = "foo,3";
	var qExpected = 3;
	var tExpected = 3;

	var rActual = FPO.std.pipe( [baz,bar,foo] )( ...arr );
	var pActual = FPO.std.pipe()( [foo] )( ...arr );
	var qActual = FPO.std.pipe( undefined )( ...arr );
	var tActual = FPO.std.pipe( [] )( ...arr );

	assert.expect( 4 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "functions list undefined" );
	assert.strictEqual( tActual, tExpected, "functions list empty" );
} );

QUnit.test( "prop()", function t36(assert){
	var obj1 = { x: 1, y: 2, z: 3, w: 4 };
	var obj2 = { x: 1, y: 2 };

	var rExpected = 1;
	var pExpected = 2;
	var qExpected = 3;

	var f = FPO.prop( {prop: "z"} );
	var rActual = FPO.prop( {v: obj1, prop: "x"} );
	var pActual = FPO.prop()( {} )( {v: obj1} )()( {} )( {prop: "y"} );
	var qActual = f( {v: obj1} )
	var tActual = f( {v: obj2} );
	var sActual = FPO.prop( {prop: undefined, v: undefined} );
	var uActual = FPO.prop( {prop: "", v: {}} );

	assert.expect( 6 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "with obj1" );
	assert.strictEqual( tActual, undefined, "with obj2" );
	assert.strictEqual( sActual, undefined, "prop and object undefined" );
	assert.strictEqual( uActual, undefined, "prop and object empty" );
} );

QUnit.test( "std.prop()", function t37(assert){
	var obj1 = { x: 1, y: 2, z: 3, w: 4 };
	var obj2 = { x: 1, y: 2 };

	var rExpected = 1;
	var pExpected = 2;

	var rActual = FPO.std.prop( "x", obj1 );
	var pActual = FPO.std.prop()( "y" )( obj1 );
	var qActual = FPO.std.prop( undefined, undefined );
	var tActual = FPO.std.prop( "", {} );

	assert.expect( 4 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, undefined, "prop and object undefined" );
	assert.strictEqual( tActual, undefined, "prop and object empty" );
} );

QUnit.test( "setProp()", function t38(assert){
	var obj1 = { x: 1, y: 2, z: 3, w: 4 };
	var obj2 = { x: 1, y: 2 };
	var v10 = { v: 10 };

	var rExpected = { x: 10, y: 2, z: 3, w: 4 };
	var pExpected = { x: 1, y: 2, z: 10 };
	var qExpected = { "": 10 };
	var tExpected = { "": 10 };

	var rActual = FPO.setProp( {o: obj1, prop: "x"} )( v10 );
	var pActual = FPO.setProp()( v10 )( {} )( {prop: "z"} )( {} )( {o: obj2} );
	var qActual = FPO.setProp( v10 )( {prop: undefined, o: undefined} );
	var tActual = FPO.setProp( v10 )( {prop: "", o: {}} );

	assert.expect( 5 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "prop and object undefined" );
	assert.deepEqual( tActual, tExpected, "prop and object empty" );
	assert.notStrictEqual( rActual, obj1, "object is cloned, not mutated" );
} );

QUnit.test( "std.setProp()", function t39(assert){
	var obj1 = { x: 1, y: 2, z: 3, w: 4 };
	var obj2 = { x: 1, y: 2 };

	var rExpected = { x: 10, y: 2, z: 3, w: 4 };
	var pExpected = { x: 1, y: 2, z: 10 };
	var qExpected = { "": 10 };
	var tExpected = { "": 10 };

	var rActual = FPO.std.setProp( "x", obj1 )( 10 );
	var pActual = FPO.std.setProp()( "z" )()( obj2 )( 10 );
	var qActual = FPO.std.setProp( undefined, undefined, 10 );
	var tActual = FPO.std.setProp( "", {}, 10 );

	assert.expect( 5 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "prop and object undefined" );
	assert.deepEqual( tActual, tExpected, "prop and object empty" );
	assert.notStrictEqual( rActual, obj1, "object is cloned, not mutated" );
} );

QUnit.test( "filterIn()", function t40(assert){
	function checkParams({ v, i, arr }) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && _isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return false;
		}
		return true;
	}
	function isEven({ v }) { return v % 2 == 0; }
	function alwaysFalse() { return false; }

	var list = [1,2,3,4,5];

	var rExpected = [2,4];
	var pExpected = [2,4];
	var emptyArr = [];

	var rActual = FPO.filterIn( {fn: isEven, arr: list} );
	var pActual = FPO.filterIn()( {} )( {fn: isEven} )()( {arr: list} );
	var qActual = FPO.filterIn( {fn: alwaysFalse, arr: list} );
	var tActual = FPO.filterIn( {fn: isEven, arr: undefined} );
	var sActual = FPO.filterIn( {fn: isEven, arr: []} );
	var uActual = FPO.filterIn( {fn: checkParams, arr: list} );

	assert.expect( 6 );
	assert.ok( rActual, rExpected, "regular call" );
	assert.ok( pActual, pExpected, "curried" );
	assert.ok( qActual, emptyArr, "always false predicate" );
	assert.ok( tActual, emptyArr, "array undefined" );
	assert.ok( sActual, emptyArr, "array empty" );
	assert.ok( uActual, emptyArr, "predicate params check" );
} );

QUnit.test( "std.filterIn()", function t41(assert){
	function checkParams(v,i,arr) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && _isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return false;
		}
		return true;
	}
	function isEven(v) { return v % 2 == 0; }
	function alwaysFalse() { return false; }

	var list = [1,2,3,4,5];

	var rExpected = [2,4];
	var pExpected = [2,4];
	var emptyArr = [];

	var rActual = FPO.filterIn( isEven, list );
	var pActual = FPO.filterIn()( isEven )()( list );
	var qActual = FPO.filterIn( alwaysFalse, list );
	var tActual = FPO.filterIn( isEven, undefined );
	var sActual = FPO.filterIn( isEven, [] );
	var uActual = FPO.filterIn( checkParams, list );

	assert.expect( 6 );
	assert.ok( rActual, rExpected, "regular call" );
	assert.ok( pActual, pExpected, "curried" );
	assert.ok( qActual, emptyArr, "always false predicate" );
	assert.ok( tActual, emptyArr, "array undefined" );
	assert.ok( sActual, emptyArr, "array empty" );
	assert.ok( uActual, emptyArr, "predicate params check" );
} );

QUnit.test( "filterOut()", function t42(assert){
	function checkParams({ v, i, arr }) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && _isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return true;
		}
		return false;
	}
	function isEven({ v }) { return v % 2 == 0; }
	function alwaysTrue() { return true; }

	var list = [1,2,3,4,5];

	var rExpected = [2,4];
	var pExpected = [2,4];
	var emptyArr = [];

	var rActual = FPO.filterOut( {fn: isEven, arr: list} );
	var pActual = FPO.filterOut()( {} )( {fn: isEven} )()( {arr: list} );
	var qActual = FPO.filterOut( {fn: alwaysTrue, arr: list} );
	var tActual = FPO.filterOut( {fn: isEven, arr: undefined} );
	var sActual = FPO.filterOut( {fn: isEven, arr: []} );
	var uActual = FPO.filterOut( {fn: checkParams, arr: list} );

	assert.expect( 6 );
	assert.ok( rActual, rExpected, "regular call" );
	assert.ok( pActual, pExpected, "curried" );
	assert.ok( qActual, emptyArr, "always true predicate" );
	assert.ok( tActual, emptyArr, "array undefined" );
	assert.ok( sActual, emptyArr, "array empty" );
	assert.ok( uActual, emptyArr, "predicate params check" );
} );

QUnit.test( "std.filterOut()", function t43(assert){
	function checkParams(v,i,arr) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && _isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return true;
		}
		return false;
	}
	function isEven(v) { return v % 2 == 0; }
	function alwaysTrue() { return true; }

	var list = [1,2,3,4,5];

	var rExpected = [2,4];
	var pExpected = [2,4];
	var emptyArr = [];

	var rActual = FPO.filterIn( isEven, list );
	var pActual = FPO.filterIn()( isEven )()( list );
	var qActual = FPO.filterIn( alwaysTrue, list );
	var tActual = FPO.filterIn( isEven, undefined );
	var sActual = FPO.filterIn( isEven, [] );
	var uActual = FPO.filterIn( checkParams, list );

	assert.expect( 6 );
	assert.ok( rActual, rExpected, "regular call" );
	assert.ok( pActual, pExpected, "curried" );
	assert.ok( qActual, emptyArr, "always true predicate" );
	assert.ok( tActual, emptyArr, "array undefined" );
	assert.ok( sActual, emptyArr, "array empty" );
	assert.ok( uActual, emptyArr, "predicate params check" );
} );

QUnit.test( "map()", function t44(assert){
	function checkParams({ v, i, arr }) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && _isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return true;
		}
		return false;
	}
	function mul10({ v }) { return v * 10; }

	var list = [1,2];

	var rExpected = [10,20];
	var pExpected = [10,20];
	var qExpected = [];
	var tExpected = [];
	var sExpected = [true,true];

	var rActual = FPO.map( {fn: mul10, arr: list} );
	var pActual = FPO.map()( {} )( {fn: mul10} )()( {arr: list} );
	var qActual = FPO.map( {fn: mul10, arr: undefined} );
	var tActual = FPO.map( {fn: mul10, arr: []} );
	var sActual = FPO.map( {fn: checkParams, arr: list} );

	assert.expect( 5 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "array undefined" );
	assert.deepEqual( tActual, tExpected, "array empty" );
	assert.deepEqual( sActual, sExpected, "mapper params check" );
} );

QUnit.test( "std.map()", function t45(assert){
	function checkParams(v,i,arr) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && _isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return true;
		}
		return false;
	}
	function mul10(v) { return v * 10; }

	var list = [1,2];

	var rExpected = [10,20];
	var pExpected = [10,20];
	var qExpected = [];
	var tExpected = [];
	var sExpected = [true,true];

	var rActual = FPO.std.map( mul10, list );
	var pActual = FPO.std.map()( mul10 )()( list );
	var qActual = FPO.std.map( mul10, undefined );
	var tActual = FPO.std.map( mul10, [] );
	var sActual = FPO.std.map( checkParams, list );

	assert.expect( 5 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "array undefined" );
	assert.deepEqual( tActual, tExpected, "array empty" );
	assert.deepEqual( sActual, sExpected, "mapper params check" );
} );

QUnit.test( "flatMap()", function t46(assert){
	function checkParams({ v, i, arr }) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && _isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return true;
		}
		return false;
	}
	function mul10And100({ v }) {
		if (v <= 1) {
			return [v * 10,v * 100];
		}
		return v * 10;
	}

	var list = [1,2];

	var rExpected = [10,100,20];
	var pExpected = [10,100,20];
	var qExpected = [];
	var tExpected = [];
	var sExpected = [true,true];

	var rActual = FPO.flatMap( {fn: mul10And100, arr: list} );
	var pActual = FPO.flatMap()( {} )( {fn: mul10And100} )()( {arr: list} );
	var qActual = FPO.flatMap( {fn: mul10And100, arr: undefined} );
	var tActual = FPO.flatMap( {fn: mul10And100, arr: []} );
	var sActual = FPO.flatMap( {fn: checkParams, arr: list} );

	assert.expect( 5 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "array undefined" );
	assert.deepEqual( tActual, tExpected, "array empty" );
	assert.deepEqual( sActual, sExpected, "mapper params check" );
} );

QUnit.test( "std.flatMap()", function t47(assert){
	function checkParams(v,i,arr) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && _isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return true;
		}
		return false;
	}
	function mul10And100(v) {
		if (v <= 1) {
			return [v * 10,v * 100];
		}
		return v * 10;
	}

	var list = [1,2];

	var rExpected = [10,100,20];
	var pExpected = [10,100,20];
	var qExpected = [];
	var tExpected = [];
	var sExpected = [true,true];

	var rActual = FPO.std.flatMap( mul10And100, list );
	var pActual = FPO.std.flatMap()( mul10And100 )()( list );
	var qActual = FPO.std.flatMap( mul10And100, undefined );
	var tActual = FPO.std.flatMap( mul10And100, [] );
	var sActual = FPO.std.flatMap( checkParams, list );

	assert.expect( 5 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "array undefined" );
	assert.deepEqual( tActual, tExpected, "array empty" );
	assert.deepEqual( sActual, sExpected, "mapper params check" );
} );

QUnit.test( "reduce()", function t48(assert){
	function checkParams({ acc, v, i, arr }) {
		if (
			arr === list &&
			typeof acc == "string" && typeof v == "string" &&
			typeof i == "number" && _isArray( arr ) &&
			Number( v ) === (i + 1) && arr[i] === v
		) {
			return acc + v;
		}
		return NaN;
	}
	function concat({ acc, v }) { return acc + v; }

	var list = ["1","2","3","4","5"];

	var rExpected = "12345";
	var pExpected = "12345";
	var qExpected = "012345";
	var tExpected = undefined;
	var sExpected = "0";
	var uExpected = "12345";

	var rActual = FPO.reduce( {fn: concat, arr: list} );
	var pActual = FPO.reduce()( {} )( {fn: concat} )()( {arr: list} );
	var qActual = FPO.reduce( {fn: concat, arr: list, v: "0"} );
	var tActual = FPO.reduce( {fn: concat, arr: undefined} );
	var sActual = FPO.reduce( {fn: concat, arr: [], v: "0"} );
	var uActual = FPO.reduce( {fn: checkParams, arr: list} );

	assert.expect( 6 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "initial value" );
	assert.strictEqual( tActual, tExpected, "array undefined" );
	assert.strictEqual( sActual, sExpected, "array empty, initial value" );
	assert.strictEqual( uActual, uExpected, "reducer params check" );
} );

QUnit.test( "std.reduce()", function t49(assert){
	function checkParams(acc,v,i,arr) {
		if (
			arr === list &&
			typeof acc == "string" && typeof v == "string" &&
			typeof i == "number" && _isArray( arr ) &&
			Number( v ) === (i + 1) && arr[i] === v
		) {
			return acc + v;
		}
		return NaN;
	}
	function concat(acc,v) { return acc + v; }

	var list = ["1","2","3","4","5"];

	var rExpected = "12345";
	var pExpected = "12345";
	var qExpected = "012345";
	var tExpected = undefined;
	var sExpected = "0";
	var uExpected = "12345";

	var rActual = FPO.std.reduce( concat, undefined, list );
	var pActual = FPO.std.reduce()( concat )()( undefined )()( list );
	var qActual = FPO.std.reduce( concat, "0", list );
	var tActual = FPO.std.reduce( concat, undefined, undefined );
	var sActual = FPO.std.reduce( concat, "0", [] );
	var uActual = FPO.std.reduce( checkParams, undefined, list );

	assert.expect( 6 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "initial value" );
	assert.strictEqual( tActual, tExpected, "array undefined" );
	assert.strictEqual( sActual, sExpected, "array empty, initial value" );
	assert.strictEqual( uActual, uExpected, "reducer params check" );
} );

QUnit.test( "reduceRight()", function t50(assert){
	function checkParams({ acc, v, i, arr }) {
		if (
			arr === list &&
			typeof acc == "string" && typeof v == "string" &&
			typeof i == "number" && _isArray( arr ) &&
			Number( v ) === (i + 1) && arr[i] === v
		) {
			return acc + v;
		}
		return NaN;
	}
	function concat({ acc, v }) { return acc + v; }

	var list = ["1","2","3","4","5"];

	var rExpected = "54321";
	var pExpected = "54321";
	var qExpected = "654321";
	var tExpected = undefined;
	var sExpected = "6";
	var uExpected = "54321";

	var rActual = FPO.reduceRight( {fn: concat, arr: list} );
	var pActual = FPO.reduceRight()( {} )( {fn: concat} )()( {arr: list} );
	var qActual = FPO.reduceRight( {fn: concat, arr: list, v: "6"} );
	var tActual = FPO.reduceRight( {fn: concat, arr: undefined} );
	var sActual = FPO.reduceRight( {fn: concat, arr: [], v: "6"} );
	var uActual = FPO.reduceRight( {fn: checkParams, arr: list} );

	assert.expect( 6 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "initial value" );
	assert.strictEqual( tActual, tExpected, "array undefined" );
	assert.strictEqual( sActual, sExpected, "array empty, initial value" );
	assert.strictEqual( uActual, uExpected, "reducer params check" );
} );

QUnit.test( "std.reduceRight()", function t51(assert){
	function checkParams(acc,v,i,arr) {
		if (
			arr === list &&
			typeof acc == "string" && typeof v == "string" &&
			typeof i == "number" && _isArray( arr ) &&
			Number( v ) === (i + 1) && arr[i] === v
		) {
			return acc + v;
		}
		return NaN;
	}
	function concat(acc,v) { return acc + v; }

	var list = ["1","2","3","4","5"];

	var rExpected = "54321";
	var pExpected = "54321";
	var qExpected = "654321";
	var tExpected = undefined;
	var sExpected = "6";
	var uExpected = "54321";

	var rActual = FPO.std.reduceRight( concat, undefined, list );
	var pActual = FPO.std.reduceRight()( concat )()( undefined )()( list );
	var qActual = FPO.std.reduceRight( concat, "6", list );
	var tActual = FPO.std.reduceRight( concat, undefined, undefined );
	var sActual = FPO.std.reduceRight( concat, "6", [] );
	var uActual = FPO.std.reduceRight( checkParams, undefined, list );

	assert.expect( 6 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "initial value" );
	assert.strictEqual( tActual, tExpected, "array undefined" );
	assert.strictEqual( sActual, sExpected, "array empty, initial value" );
	assert.strictEqual( uActual, uExpected, "reducer params check" );
} );

QUnit.test( "flatten()", function t52(assert){
	var list = [1,2,[3,[4,5]]];

	var rExpected = [1,2,3,4,5];
	var pExpected = [1,2,3,4,5];
	var qExpected = [1,2,3,4,5];
	var tExpected = [1,2,3,4,5];
	var sExpected = [1,2,3,4,5];
	var uExpected = [1,2,3,[4,5]];
	var hExpected = [1,2,[3,[4,5]]];
	var jExpected = [1,2,[3,[4,5]]];
	var kExpected = [];
	var mExpected = [];

	var rActual = FPO.flatten( {v: list} );
	var pActual = FPO.flatten()( {} )( {v: list} );
	var qActual = FPO.flatten( {n: undefined, v: list} );
	var tActual = FPO.flatten( {n: 5, v: list} );
	var sActual = FPO.flatten( {n: 2, v: list} );
	var uActual = FPO.flatten( {n: 1, v: list} );
	var hActual = FPO.flatten( {n: 0, v: list} );
	var jActual = FPO.flatten( {n: "-whatever-", v: list} );
	var kActual = FPO.flatten( {v: undefined} );
	var mActual = FPO.flatten( {v: []} );

	assert.expect( 10 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "depth undefined" );
	assert.deepEqual( tActual, tExpected, "depth larger" );
	assert.deepEqual( sActual, sExpected, "depth equal" );
	assert.deepEqual( uActual, uExpected, "depth less" );
	assert.deepEqual( hActual, hExpected, "depth zero" );
	assert.deepEqual( jActual, jExpected, "depth not-a-number" );
	assert.deepEqual( kActual, kExpected, "array undefined" );
	assert.deepEqual( mActual, mExpected, "array empty" );
} );

QUnit.test( "std.flatten()", function t53(assert){
	var list = [1,2,[3,[4,5]]];

	var rExpected = [1,2,3,4,5];
	var pExpected = [1,2,3,4,5];
	var qExpected = [1,2,3,4,5];
	var tExpected = [1,2,3,4,5];
	var sExpected = [1,2,3,4,5];
	var uExpected = [1,2,3,[4,5]];
	var hExpected = [1,2,[3,[4,5]]];
	var jExpected = [1,2,[3,[4,5]]];
	var kExpected = [];
	var mExpected = [];

	var rActual = FPO.std.flatten( list );
	var pActual = FPO.std.flatten()( list );
	var qActual = FPO.std.flatten( list, undefined );
	var tActual = FPO.std.flatten( list, 5 );
	var sActual = FPO.std.flatten( list, 2 );
	var uActual = FPO.std.flatten( list, 1 );
	var hActual = FPO.std.flatten( list, 0 );
	var jActual = FPO.std.flatten( list, "-whatever-" );
	var kActual = FPO.std.flatten( undefined );
	var mActual = FPO.std.flatten( [] );

	assert.expect( 10 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "depth undefined" );
	assert.deepEqual( tActual, tExpected, "depth larger" );
	assert.deepEqual( sActual, sExpected, "depth equal" );
	assert.deepEqual( uActual, uExpected, "depth less" );
	assert.deepEqual( hActual, hExpected, "depth zero" );
	assert.deepEqual( jActual, jExpected, "depth not-a-number" );
	assert.deepEqual( kActual, kExpected, "array undefined" );
	assert.deepEqual( mActual, mExpected, "array empty" );
} );

QUnit.test( "zip()", function t54(assert){
	var list1 = [1,4,7];
	var list2 = [2,5,8];
	var list3 = [3,6];

	var rExpected = [[1,2],[4,5],[7,8]];
	var pExpected = [[1,2],[4,5],[7,8]];
	var qExpected = [[1,3],[4,6]];
	var tExpected = [[3,1],[6,4]];
	var sExpected = [];
	var uExpected = [];
	var hExpected = [];

	var rActual = FPO.zip( {arr1: list1, arr2: list2} );
	var pActual = FPO.zip()( {} )( {arr1: list1} )()( {} )( {arr2: list2} );
	var qActual = FPO.zip( {arr1: list1, arr2: list3} );
	var tActual = FPO.zip( {arr1: list3, arr2: list1} );
	var sActual = FPO.zip( {arr1: list1, arr2: undefined} );
	var uActual = FPO.zip( {arr1: undefined, arr2: undefined} );
	var hActual = FPO.zip( {arr1: [], arr2: []} );

	assert.expect( 7 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "longer list, shorter list" );
	assert.deepEqual( tActual, tExpected, "shorter list, longer list" );
	assert.deepEqual( sActual, sExpected, "one list undefined" );
	assert.deepEqual( uActual, uExpected, "both lists undefined" );
	assert.deepEqual( hActual, hExpected, "both lists empty" );
} );

QUnit.test( "std.zip()", function t55(assert){
	var list1 = [1,4,7];
	var list2 = [2,5,8];
	var list3 = [3,6];

	var rExpected = [[1,2],[4,5],[7,8]];
	var pExpected = [[1,2],[4,5],[7,8]];
	var qExpected = [[1,3],[4,6]];
	var tExpected = [[3,1],[6,4]];
	var sExpected = [];
	var uExpected = [];
	var hExpected = [];

	var rActual = FPO.std.zip( list1, list2 );
	var pActual = FPO.std.zip()( list1 )()( list2 );
	var qActual = FPO.std.zip( list1, list3 );
	var tActual = FPO.std.zip( list3, list1 );
	var sActual = FPO.std.zip( list1, undefined );
	var uActual = FPO.std.zip( undefined, undefined );
	var hActual = FPO.std.zip( [], [] );

	assert.expect( 7 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "longer list, shorter list" );
	assert.deepEqual( tActual, tExpected, "shorter list, longer list" );
	assert.deepEqual( sActual, sExpected, "one list undefined" );
	assert.deepEqual( uActual, uExpected, "both lists undefined" );
	assert.deepEqual( hActual, hExpected, "both lists empty" );
} );

QUnit.test( "trampoline()", function t56(assert){
	function sum(total,x) {
		if (x <= 1) return total + x;
		return () => sum( total + x, x - 1 );
	}

	var args = [0,5];

	var rActual = FPO.trampoline( {fn: sum} )( ...args );
	var pActual = FPO.trampoline()( {} )( {fn: sum} )( ...args );

	assert.expect( 2 );
	assert.strictEqual( rActual, 15, "regular call" );
	assert.strictEqual( pActual, 15, "curried" );
} );

QUnit.test( "std.trampoline()", function t57(assert){
	function sum(total,x) {
		if (x <= 1) return total + x;
		return () => sum( total + x, x - 1 );
	}

	var args = [0,5];

	var rActual = FPO.std.trampoline( sum )( ...args );
	var pActual = FPO.std.trampoline()( sum )( ...args );

	assert.expect( 2 );
	assert.strictEqual( rActual, 15, "regular call" );
	assert.strictEqual( pActual, 15, "curried" );
} );

QUnit.test( "transducers.map()", function t58(assert){
	function decrement({v: num}) { return num - 1; }
	function sum({acc: total, v: num}) { return total + num; }

	var args = {acc: 3, v: 8};
	var rExpected = 10;
	var pExpected = 10;

	var rActual = FPO.transducers.map( {fn: decrement} )( sum )( args );
	var pActual = FPO.transducers.map()( {} )( {fn: decrement} )( sum )( args );

	assert.expect( 2 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "std.transducers.map()", function t59(assert){
	function decrement(num) { return num - 1; }
	function sum(total,num) { return total + num; }

	var args = [3,8];
	var rExpected = 10;
	var pExpected = 10;

	var rActual = FPO.std.transducers.map( decrement )( sum )( ...args );
	var pActual = FPO.std.transducers.map()( decrement )( sum )( ...args );

	assert.expect( 2 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "transducers.filter()", function t60(assert){
	function isSmallEnough({v: num}) { return num <= 10; }
	function passThru({v}) { return v; }
	function alwaysFalse() { return false; }

	var args = { v: 4 };
	var rExpected = 4;
	var pExpected = 4;
	var qExpected = undefined;

	var rActual = FPO.transducers.filter( {fn: isSmallEnough} )( passThru )( args );
	var pActual = FPO.transducers.filter()( {} )( {fn: isSmallEnough} )( passThru )( args );
	var qActual = FPO.transducers.filter( {fn: alwaysFalse} )( passThru )( args );

	assert.expect( 3 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "with failing predicate" );
} );

QUnit.test( "std.transducers.filter()", function t61(assert){
	function isSmallEnough(num) { return num <= 10; }
	function passThru(acc,v) { return v; }
	function alwaysFalse() { return false; }

	var args = [undefined,4];
	var rExpected = 4;
	var pExpected = 4;
	var qExpected = undefined;

	var rActual = FPO.std.transducers.filter( isSmallEnough )( passThru )( ...args );
	var pActual = FPO.std.transducers.filter()( isSmallEnough )( passThru )( ...args );
	var qActual = FPO.std.transducers.filter( alwaysFalse )( passThru )( ...args );

	assert.expect( 3 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "with failing predicate" );
} );

QUnit.test( "transducers.string", function t62(assert){
	var str1 = "hello";
	var str2 = "world";
	var rExpected = "helloworld";
	var pExpected = "helloworld";

	var rActual = FPO.transducers.string( {acc: str1, v: str2} );
	var pActual = FPO.transducers.string()( {} )( {acc: str1} )( {v: str2} );

	assert.expect( 2 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "std.transducers.string", function t63(assert){
	var str1 = "hello";
	var str2 = "world";
	var rExpected = "helloworld";
	var pExpected = "helloworld";

	var rActual = FPO.std.transducers.string( str1, str2 );
	var pActual = FPO.std.transducers.string()( str1 )( str2 );

	assert.expect( 2 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "transducers.array", function t64(assert){
	var arr1 = [];
	var arr2 = [];
	var str = "hello";
	var rExpected = ["hello"];
	var pExpected = ["hello"];

	var rActual = FPO.transducers.array( {acc: arr1, v: str} );
	var pActual = FPO.transducers.array()( {} )( {acc: arr2} )( {v: str} );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "std.transducers.array", function t65(assert){
	var arr1 = [];
	var arr2 = [];
	var str = "hello";
	var rExpected = ["hello"];
	var pExpected = ["hello"];

	var rActual = FPO.std.transducers.array( arr1, str );
	var pActual = FPO.std.transducers.array()( arr2 )( str );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "transducers.number", function t66(assert){
	var num1 = 4;
	var num2 = 3;
	var rExpected = 7;
	var pExpected = 7;

	var rActual = FPO.transducers.number( {acc: num1, v: num2} );
	var pActual = FPO.transducers.number()( {} )( {acc: num1} )( {v: num2} );

	assert.expect( 2 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "std.transducers.number", function t67(assert){
	var num1 = 4;
	var num2 = 3;
	var rExpected = 7;
	var pExpected = 7;

	var rActual = FPO.std.transducers.number( num1, num2 );
	var pActual = FPO.std.transducers.number()( num1 )( num2 );

	assert.expect( 2 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "transducers.booleanAnd", function t68(assert){
	var bool1 = true;
	var bool2 = true;
	var bool3 = false;
	var rExpected = true;
	var pExpected = true;
	var qExpected = false;
	var tExpected = false;

	var rActual = FPO.transducers.booleanAnd( {acc: bool1, v: bool2} );
	var pActual = FPO.transducers.booleanAnd()( {} )( {acc: bool1} )( {v: bool2} );
	var qActual = FPO.transducers.booleanAnd( {acc: bool1, v: bool3} );
	var tActual = FPO.transducers.booleanAnd( {acc: bool3, v: bool3} );

	assert.expect( 4 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "mixed parity" );
	assert.strictEqual( tActual, tExpected, "both false" );
} );

QUnit.test( "std.transducers.booleanAnd", function t69(assert){
	var bool1 = true;
	var bool2 = true;
	var bool3 = false;
	var rExpected = true;
	var pExpected = true;
	var qExpected = false;
	var tExpected = false;

	var rActual = FPO.std.transducers.booleanAnd( bool1, bool2 );
	var pActual = FPO.std.transducers.booleanAnd()( bool1 )( bool2 );
	var qActual = FPO.std.transducers.booleanAnd( bool1, bool3 );
	var tActual = FPO.std.transducers.booleanAnd( bool3, bool3 );

	assert.expect( 4 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "mixed parity" );
	assert.strictEqual( tActual, tExpected, "both false" );
} );

QUnit.test( "transducers.booleanOr", function t70(assert){
	var bool1 = true;
	var bool2 = true;
	var bool3 = false;
	var rExpected = true;
	var pExpected = true;
	var qExpected = true;
	var tExpected = false;

	var rActual = FPO.transducers.booleanOr( {acc: bool1, v: bool2} );
	var pActual = FPO.transducers.booleanOr()( {} )( {acc: bool1} )( {v: bool2} );
	var qActual = FPO.transducers.booleanOr( {acc: bool1, v: bool3} );
	var tActual = FPO.transducers.booleanOr( {acc: bool3, v: bool3} );

	assert.expect( 4 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "mixed parity" );
	assert.strictEqual( tActual, tExpected, "both false" );
} );

QUnit.test( "std.transducers.booleanOr", function t71(assert){
	var bool1 = true;
	var bool2 = true;
	var bool3 = false;
	var rExpected = true;
	var pExpected = true;
	var qExpected = true;
	var tExpected = false;

	var rActual = FPO.std.transducers.booleanOr( bool1, bool2 );
	var pActual = FPO.std.transducers.booleanOr()( bool1 )( bool2 );
	var qActual = FPO.std.transducers.booleanOr( bool1, bool3 );
	var tActual = FPO.std.transducers.booleanOr( bool3, bool3 );

	assert.expect( 4 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried" );
	assert.strictEqual( qActual, qExpected, "mixed parity" );
	assert.strictEqual( tActual, tExpected, "both false" );
} );



QUnit.test( "transducers.default", function t72(assert){
	var arr = [1,2];
	var rExpected = [1,2];
	var pExpected = [1,2];

	var rActual = FPO.transducers.default( {acc: arr} );
	var pActual = FPO.transducers.default()( {} )( {acc: arr} );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "std.transducers.default", function t73(assert){
	var arr = [1,2];
	var rExpected = [1,2];
	var pExpected = [1,2];

	var rActual = FPO.std.transducers.default( arr );
	var pActual = FPO.std.transducers.default()( arr );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "transducers.transduce()", function t74(assert){
	function isSmallEnough({v: num}) { return num <= 10; }
	function isBigEnough({v: num}) { return num >= 5; }
	function decrement({v: num}) { return num - 1; }
	function mult({acc: product, v: num}) { return product * num; }
	function passThruReducer({ acc, v}) { acc.push( v ); return acc; }

	var nums = [3,7,2,5,11,10,4,6];
	var transducer = FPO.compose( {fns: [
		FPO.transducers.filter( {fn: isSmallEnough} ),
		FPO.transducers.filter( {fn: isBigEnough} ),
		FPO.transducers.map( {fn: decrement} )
	]} );

	var rExpected = 1080;
	var pExpected = 1080;
	var qExpected = [6,4,9,5];

	var rActual = FPO.transducers.transduce( {fn: transducer, co: mult, v: 1, arr: nums} );
	var pActual = FPO.transducers.transduce()( {} )( {fn: transducer, co: mult} )( {v: 1, arr: nums} );
	var qActual = FPO.transducers.transduce( {fn: transducer, co: passThruReducer, v: [], arr: nums} );

	assert.expect( 3 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried call" );
	assert.deepEqual( qActual, qExpected, "pass-thru reducer" );
} );

QUnit.test( "std.transducers.transduce()", function t75(assert){
	function isSmallEnough(num) { return num <= 10; }
	function isBigEnough(num) { return num >= 5; }
	function decrement(num) { return num - 1; }
	function mult(product,num) { return product * num; }
	function passThruReducer(acc,v) { acc.push( v ); return acc; }

	var nums = [3,7,2,5,11,10,4,6];
	var transducer = FPO.std.compose( [
		FPO.std.transducers.filter( isSmallEnough ),
		FPO.std.transducers.filter( isBigEnough ),
		FPO.std.transducers.map( decrement )
	] );

	var rExpected = 1080;
	var pExpected = 1080;
	var qExpected = [6,4,9,5];

	var rActual = FPO.std.transducers.transduce( transducer, mult, 1, nums );
	var pActual = FPO.std.transducers.transduce()( transducer, mult )( 1, nums );
	var qActual = FPO.std.transducers.transduce( transducer, passThruReducer, [], nums );

	assert.expect( 3 );
	assert.strictEqual( rActual, rExpected, "regular call" );
	assert.strictEqual( pActual, pExpected, "curried call" );
	assert.deepEqual( qActual, qExpected, "pass-thru reducer" );
} );

QUnit.test( "transducers.into()", function t76(assert){
	function isSmallEnough({v: num}) { return num <= 10; }
	function isBigEnough({v: num}) { return num >= 5; }
	function decrement({v: num}) { return num - 1; }

	var nums = [3,7,2,5,11,10,4,6];
	var bools = [true,true,true,true];
	var transducer = FPO.compose( {fns: [
		FPO.transducers.filter( {fn: isSmallEnough} ),
		FPO.transducers.filter( {fn: isBigEnough} ),
		FPO.transducers.map( {fn: decrement} )
	]} );

	var rExpected = "6495";
	var pExpected = "6495";
	var qExpected = [6,4,9,5];
	var tExpected = 24;
	var sExpected = true;
	var uExpected = false;

	var rActual = FPO.transducers.into( {fn: transducer, v: "", arr: nums} );
	var pActual = FPO.transducers.into()( {} )( {fn: transducer} )({ v: "", arr: nums} );
	var qActual = FPO.transducers.into( {fn: transducer, v: [], arr: nums} );
	var tActual = FPO.transducers.into( {fn: transducer, v: 0, arr: nums} );
	var sActual = FPO.transducers.into( {fn: transducer, v: true, arr: bools} );
	var uActual = FPO.transducers.into( {fn: transducer, v: false, arr: bools} );

	assert.expect( 6 );
	assert.strictEqual( rActual, rExpected, "regular call, string" );
	assert.strictEqual( pActual, pExpected, "curried, string" );
	assert.deepEqual( qActual, qExpected, "array" );
	assert.strictEqual( tActual, tExpected, "number" );
	assert.strictEqual( sActual, sExpected, "boolean true" );
	assert.strictEqual( uActual, uExpected, "boolean false" );
} );

QUnit.test( "std.transducers.into()", function t77(assert){
	function isSmallEnough(num) { return num <= 10; }
	function isBigEnough(num) { return num >= 5; }
	function decrement(num) { return num - 1; }

	var nums = [3,7,2,5,11,10,4,6];
	var bools = [true,true,true,true];
	var transducer = FPO.std.compose( [
		FPO.std.transducers.filter( isSmallEnough ),
		FPO.std.transducers.filter( isBigEnough ),
		FPO.std.transducers.map( decrement )
	] );

	var rExpected = "6495";
	var pExpected = "6495";
	var qExpected = [6,4,9,5];
	var tExpected = 24;
	var sExpected = true;
	var uExpected = false;

	var rActual = FPO.std.transducers.into( transducer, "", nums );
	var pActual = FPO.std.transducers.into()( transducer )( "", nums );
	var qActual = FPO.std.transducers.into( transducer, [], nums );
	var tActual = FPO.std.transducers.into( transducer, 0, nums );
	var sActual = FPO.std.transducers.into( transducer, true, bools );
	var uActual = FPO.std.transducers.into( transducer, false, bools );

	assert.expect( 6 );
	assert.strictEqual( rActual, rExpected, "regular call, string" );
	assert.strictEqual( pActual, pExpected, "curried, string" );
	assert.deepEqual( qActual, qExpected, "array" );
	assert.strictEqual( tActual, tExpected, "number" );
	assert.strictEqual( sActual, sExpected, "boolean true" );
	assert.strictEqual( uActual, uExpected, "boolean false" );
} );

QUnit.test( "std.flip()", function t78(assert){
	function foo(...args) { return args; }

	var args = [1,2,3,4];
	var rExpected = [2,1,3,4];
	var pExpected = [2,1,3,4];

	var rActual = FPO.std.flip( foo )( ...args );
	var pActual = FPO.std.flip()( foo )( ...args );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );

QUnit.test( "std.reverseArgs()", function t79(assert){
	function foo(...args) { return args; }

	var args = [1,2,3,4];
	var rExpected = [4,3,2,1];
	var pExpected = [4,3,2,1];

	var rActual = FPO.std.reverseArgs( foo )( ...args );
	var pActual = FPO.std.reverseArgs()( foo )( ...args );

	assert.expect( 2 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
} );






function _hasProp(obj,prop) {
	return Object.hasOwnProperty.call( obj, prop );
}

function _isFunction(v) {
	return typeof v == "function";
}

function _isObject(v) {
	return v && typeof v == "object" && !_isArray( v );
}

function _isArray(v) {
	return Array.isArray( v );
}
