"use strict";

QUnit.test( "core API methods present", function t1(assert){
	assert.expect( 35 );

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
	assert.ok( _isFunction( FPO.transducers.default ), "transducers.default()" );
} );

QUnit.test( "std API methods present", function t2(assert){
	assert.expect( 35 );

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
	assert.ok( _isFunction( FPO.std.transducers.default ), "transducers.default()" );
} );

QUnit.test( "API aliases present", function t3(assert){
	assert.expect( 22 );

	assert.strictEqual( FPO.always, FPO.constant, "always -> constant" );
	assert.strictEqual( FPO.std.always, FPO.std.constant, "always -> constant" );
	assert.strictEqual( FPO.flow, FPO.pipe, "flow -> pipe" );
	assert.strictEqual( FPO.std.flow, FPO.std.pipe, "flow -> pipe" );
	assert.strictEqual( FPO.flowRight, FPO.compose, "flowRight -> compose" );
	assert.strictEqual( FPO.std.flowRight, FPO.std.compose, "flowRight -> compose" );
	assert.strictEqual( FPO.spread, FPO.apply, "spread -> apply" );
	assert.strictEqual( FPO.std.spread, FPO.std.apply, "spread -> apply" );
	assert.strictEqual( FPO.gather, FPO.unapply, "gather -> unapply" );
	assert.strictEqual( FPO.std.gather, FPO.std.unapply, "gather -> unapply" );
	assert.strictEqual( FPO.assoc, FPO.setProp, "assoc -> setProp" );
	assert.strictEqual( FPO.std.assoc, FPO.std.setProp, "assoc -> setProp" );
	assert.strictEqual( FPO.filter, FPO.filterIn, "filter -> filterIn" );
	assert.strictEqual( FPO.std.filter, FPO.std.filterIn, "filter -> filterIn" );
	assert.strictEqual( FPO.chain, FPO.flatMap, "chain -> flatMap" );
	assert.strictEqual( FPO.std.chain, FPO.std.flatMap, "chain -> flatMap" );
	assert.strictEqual( FPO.fold, FPO.reduce, "fold -> reduce" );
	assert.strictEqual( FPO.std.fold, FPO.std.reduce, "fold -> reduce" );
	assert.strictEqual( FPO.foldL, FPO.reduce, "foldL -> reduce" );
	assert.strictEqual( FPO.std.foldL, FPO.std.reduce, "foldL -> reduce" );
	assert.strictEqual( FPO.foldR, FPO.reduceRight, "foldR -> reduceRight" );
	assert.strictEqual( FPO.std.foldR, FPO.std.reduceRight, "foldR -> reduceRight" );
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

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "prop and object undefined" );
	assert.deepEqual( tActual, tExpected, "prop and object empty" );
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

	assert.expect( 4 );
	assert.deepEqual( rActual, rExpected, "regular call" );
	assert.deepEqual( pActual, pExpected, "curried" );
	assert.deepEqual( qActual, qExpected, "prop and object undefined" );
	assert.deepEqual( tActual, tExpected, "prop and object empty" );
} );

QUnit.test( "filterIn()", function t40(assert){
	function checkParams({ v, i, arr }) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
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
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
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
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
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
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
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
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
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
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
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
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
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
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
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
			typeof i == "number" && Array.isArray( arr ) &&
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
			typeof i == "number" && Array.isArray( arr ) &&
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
			typeof i == "number" && Array.isArray( arr ) &&
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
			typeof i == "number" && Array.isArray( arr ) &&
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

QUnit.test( "flatten()", function t28(assert){
	assert.expect( 102 );

	var list = [1,2,[3,[4,5]]];

	var r = FPO.flatten( {v: list} );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ) &&
		_hasProp( r, "3" ) && _hasProp( r, "4" ),
		"r has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( r ).length == 5 && r.length == 5, "r has only 5 slots" );
	assert.ok(
		r[0] === 1 && r[1] === 2 && r[2] === 3 && r[3] === 4 && r[4] === 5,
		"r is [1,2,3,4,5]"
	);

	var p = FPO.flatten()( {} )( {v: list} );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ) &&
		_hasProp( p, "3" ) && _hasProp( p, "4" ),
		"p has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( p ).length == 5 && p.length == 5, "p has only 5 slots" );
	assert.ok(
		p[0] === 1 && p[1] === 2 && p[2] === 3 && p[3] === 4 && p[4] === 5,
		"p is [1,2,3,4,5]"
	);

	var q = FPO.flatten( {n: undefined, v: list} );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok(
		_hasProp( q, "0" ) && _hasProp( q, "1" ) && _hasProp( q, "2" ) &&
		_hasProp( q, "3" ) && _hasProp( q, "4" ),
		"q has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( q ).length == 5 && q.length == 5, "q has only 5 slots" );
	assert.ok(
		q[0] === 1 && q[1] === 2 && q[2] === 3 && q[3] === 4 && q[4] === 5,
		"q is [1,2,3,4,5]"
	);

	var t = FPO.flatten( {n: 5, v: list} );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok(
		_hasProp( t, "0" ) && _hasProp( t, "1" ) && _hasProp( t, "2" ) &&
		_hasProp( t, "3" ) && _hasProp( t, "4" ),
		"t has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( t ).length == 5 && t.length == 5, "t has only 5 slots" );
	assert.ok(
		t[0] === 1 && t[1] === 2 && t[2] === 3 && t[3] === 4 && t[4] === 5,
		"t is [1,2,3,4,5]"
	);

	var s = FPO.flatten( {n: 2, v: list} );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ) && _hasProp( s, "2" ) &&
		_hasProp( s, "3" ) && _hasProp( s, "4" ),
		"s has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( s ).length == 5 && s.length == 5, "s has only 5 slots" );
	assert.ok(
		s[0] === 1 && s[1] === 2 && s[2] === 3 && s[3] === 4 && s[4] === 5,
		"s is [1,2,3,4,5]"
	);

	var u = FPO.flatten( {n: 1, v: list} );
	assert.ok( u && Array.isArray( u ), "u is an array" );
	assert.ok(
		_hasProp( u, "0" ) && _hasProp( u, "1" ) && _hasProp( u, "2" ) && _hasProp( u, "3" ),
		"u has filled slots as indexes 0, 1, 2, and 3"
	);
	assert.ok( Object.keys( u ).length == 4 && u.length == 4, "u has only 4 slots" );
	assert.ok( u[3] && Array.isArray( u[3] ), "u[3] is an array" );
	assert.ok(
		_hasProp( u[3], "0" ) && _hasProp( u[3], "1" ),
		"u[3] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( u[3] ).length == 2 && u[3].length == 2, "u[3] has only 2 slots" );
	assert.ok(
		u[0] === 1 && u[1] === 2 && u[2] === 3 && u[3][0] === 4 && u[3][1] === 5,
		"u is [1,2,3,[4,5]]"
	);

	var h = FPO.flatten( {n: 0, v: list} );
	assert.ok( h && Array.isArray( h ), "h is an array" );
	assert.ok(
		_hasProp( h, "0" ) && _hasProp( h, "1" ) && _hasProp( h, "2" ),
		"h has filled slots as indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( h ).length == 3 && h.length == 3, "h has only 3 slots" );
	assert.ok( h[2] && Array.isArray( h[2] ), "h[2] is an array" );
	assert.ok(
		_hasProp( h[2], "0" ) && _hasProp( h[2], "1" ),
		"h[2] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( h[2] ).length == 2 && h[2].length == 2, "h[2] has only 2 slots" );
	assert.ok( h[2][1] && Array.isArray( h[2][1] ), "h[2][1] is an array" );
	assert.ok(
		_hasProp( h[2][1], "0" ) && _hasProp( h[2][1], "1" ),
		"h[2][1] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( h[2][1] ).length == 2 && h[2][1].length == 2, "h[2][1] has only 2 slots" );
	assert.ok(
		h[0] === 1 && h[1] === 2 && h[2][0] === 3 && h[2][1][0] === 4 && h[2][1][1] === 5,
		"h is [1,2,[3,[4,5]]]"
	);

	var j = FPO.flatten( {n: "-whatever-", v: list} );
	assert.ok( j && Array.isArray( j ), "j is an array" );
	assert.ok(
		_hasProp( j, "0" ) && _hasProp( j, "1" ) && _hasProp( j, "2" ),
		"j has filled slots as indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( j ).length == 3 && j.length == 3, "j has only 3 slots" );
	assert.ok( j[2] && Array.isArray( j[2] ), "j[2] is an array" );
	assert.ok(
		_hasProp( j[2], "0" ) && _hasProp( j[2], "1" ),
		"j[2] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( j[2] ).length == 2 && j[2].length == 2, "j[2] has only 2 slots" );
	assert.ok( j[2][1] && Array.isArray( j[2][1] ), "j[2][1] is an array" );
	assert.ok(
		_hasProp( j[2][1], "0" ) && _hasProp( j[2][1], "1" ),
		"j[2][1] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( j[2][1] ).length == 2 && j[2][1].length == 2, "j[2][1] has only 2 slots" );
	assert.ok(
		j[0] === 1 && j[1] === 2 && j[2][0] === 3 && j[2][1][0] === 4 && j[2][1][1] === 5,
		"j is [1,2,[3,[4,5]]]"
	);

	var k = FPO.flatten( {v: undefined} );
	assert.ok( k && Array.isArray( k ), "k is an array" );
	assert.ok( Object.keys( k ).length == 0 && k.length == 0, "k is []" );

	var m = FPO.flatten( {v: []} );
	assert.ok( m && Array.isArray( m ), "m is an array" );
	assert.ok( Object.keys( m ).length == 0 && m.length == 0, "m is []" );

	// **************************************

	r = FPO.std.flatten( list );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ) &&
		_hasProp( r, "3" ) && _hasProp( r, "4" ),
		"r has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( r ).length == 5 && r.length == 5, "r has only 5 slots" );
	assert.ok(
		r[0] === 1 && r[1] === 2 && r[2] === 3 && r[3] === 4 && r[4] === 5,
		"r is [1,2,3,4,5]"
	);

	p = FPO.std.flatten()( list );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ) &&
		_hasProp( p, "3" ) && _hasProp( p, "4" ),
		"p has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( p ).length == 5 && p.length == 5, "p has only 5 slots" );
	assert.ok(
		p[0] === 1 && p[1] === 2 && p[2] === 3 && p[3] === 4 && p[4] === 5,
		"p is [1,2,3,4,5]"
	);

	q = FPO.std.flatten( list, undefined );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok(
		_hasProp( q, "0" ) && _hasProp( q, "1" ) && _hasProp( q, "2" ) &&
		_hasProp( q, "3" ) && _hasProp( q, "4" ),
		"q has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( q ).length == 5 && q.length == 5, "q has only 5 slots" );
	assert.ok(
		q[0] === 1 && q[1] === 2 && q[2] === 3 && q[3] === 4 && q[4] === 5,
		"q is [1,2,3,4,5]"
	);

	t = FPO.std.flatten( list, 5 );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok(
		_hasProp( t, "0" ) && _hasProp( t, "1" ) && _hasProp( t, "2" ) &&
		_hasProp( t, "3" ) && _hasProp( t, "4" ),
		"t has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( t ).length == 5 && t.length == 5, "t has only 5 slots" );
	assert.ok(
		t[0] === 1 && t[1] === 2 && t[2] === 3 && t[3] === 4 && t[4] === 5,
		"t is [1,2,3,4,5]"
	);

	s = FPO.std.flatten( list, 2 );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ) && _hasProp( s, "2" ) &&
		_hasProp( s, "3" ) && _hasProp( s, "4" ),
		"s has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( s ).length == 5 && s.length == 5, "s has only 5 slots" );
	assert.ok(
		s[0] === 1 && s[1] === 2 && s[2] === 3 && s[3] === 4 && s[4] === 5,
		"s is [1,2,3,4,5]"
	);

	u = FPO.std.flatten( list, 1 );
	assert.ok( u && Array.isArray( u ), "u is an array" );
	assert.ok(
		_hasProp( u, "0" ) && _hasProp( u, "1" ) && _hasProp( u, "2" ) && _hasProp( u, "3" ),
		"u has filled slots as indexes 0, 1, 2, and 3"
	);
	assert.ok( Object.keys( u ).length == 4 && u.length == 4, "u has only 4 slots" );
	assert.ok( u[3] && Array.isArray( u[3] ), "u[3] is an array" );
	assert.ok(
		_hasProp( u[3], "0" ) && _hasProp( u[3], "1" ),
		"u[3] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( u[3] ).length == 2 && u[3].length == 2, "u[3] has only 2 slots" );
	assert.ok(
		u[0] === 1 && u[1] === 2 && u[2] === 3 && u[3][0] === 4 && u[3][1] === 5,
		"u is [1,2,3,[4,5]]"
	);

	h = FPO.std.flatten( list, 0 );
	assert.ok( h && Array.isArray( h ), "h is an array" );
	assert.ok(
		_hasProp( h, "0" ) && _hasProp( h, "1" ) && _hasProp( h, "2" ),
		"h has filled slots as indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( h ).length == 3 && h.length == 3, "h has only 3 slots" );
	assert.ok( h[2] && Array.isArray( h[2] ), "h[2] is an array" );
	assert.ok(
		_hasProp( h[2], "0" ) && _hasProp( h[2], "1" ),
		"h[2] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( h[2] ).length == 2 && h[2].length == 2, "h[2] has only 2 slots" );
	assert.ok( h[2][1] && Array.isArray( h[2][1] ), "h[2][1] is an array" );
	assert.ok(
		_hasProp( h[2][1], "0" ) && _hasProp( h[2][1], "1" ),
		"h[2][1] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( h[2][1] ).length == 2 && h[2][1].length == 2, "h[2][1] has only 2 slots" );
	assert.ok(
		h[0] === 1 && h[1] === 2 && h[2][0] === 3 && h[2][1][0] === 4 && h[2][1][1] === 5,
		"h is [1,2,[3,[4,5]]]"
	);

	j = FPO.std.flatten( list, "-whatever-" );
	assert.ok( j && Array.isArray( j ), "j is an array" );
	assert.ok(
		_hasProp( j, "0" ) && _hasProp( j, "1" ) && _hasProp( j, "2" ),
		"j has filled slots as indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( j ).length == 3 && j.length == 3, "j has only 3 slots" );
	assert.ok( j[2] && Array.isArray( j[2] ), "j[2] is an array" );
	assert.ok(
		_hasProp( j[2], "0" ) && _hasProp( j[2], "1" ),
		"j[2] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( j[2] ).length == 2 && j[2].length == 2, "j[2] has only 2 slots" );
	assert.ok( j[2][1] && Array.isArray( j[2][1] ), "j[2][1] is an array" );
	assert.ok(
		_hasProp( j[2][1], "0" ) && _hasProp( j[2][1], "1" ),
		"j[2][1] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( j[2][1] ).length == 2 && j[2][1].length == 2, "j[2][1] has only 2 slots" );
	assert.ok(
		j[0] === 1 && j[1] === 2 && j[2][0] === 3 && j[2][1][0] === 4 && j[2][1][1] === 5,
		"j is [1,2,[3,[4,5]]]"
	);

	k = FPO.std.flatten( undefined );
	assert.ok( k && Array.isArray( k ), "k is an array" );
	assert.ok( Object.keys( k ).length == 0 && k.length == 0, "k is []" );

	m = FPO.std.flatten( [] );
	assert.ok( m && Array.isArray( m ), "m is an array" );
	assert.ok( Object.keys( m ).length == 0 && m.length == 0, "m is []" );
} );

QUnit.test( "zip()", function t29(assert){
	assert.expect( 68 );

	var list1 = [1,4,7];
	var list2 = [2,5,8];
	var list3 = [3,6];

	var r = FPO.zip( {arr1: list1, arr2: list2} );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "r has only 3 slots" );
	assert.ok(
		r[0] && Array.isArray( r[0] ) &&
		r[1] && Array.isArray( r[1] ) &&
		r[2] && Array.isArray( r[2] ),
		"r[0]/r[1]/r[2] are each arrays"
	);
	assert.ok(
		_hasProp( r[0], "0" ) && _hasProp( r[0], "1" ) &&
		_hasProp( r[1], "0" ) && _hasProp( r[1], "1" ) &&
		_hasProp( r[2], "0" ) && _hasProp( r[2], "1" ),
		"r[0]/r[1]/r[2] each have filled slots at indexes 0 and 1"
	);
	assert.ok(
		Object.keys( r[0] ).length == 2 && r[0].length == 2 &&
		Object.keys( r[1] ).length == 2 && r[1].length == 2 &&
		Object.keys( r[2] ).length == 2 && r[2].length == 2,
		"r[0]/r[1]/r[2] each have only 2 slots"
	);
	assert.ok(
		r[0][0] === 1 && r[0][1] === 2 &&
		r[1][0] === 4 && r[1][1] === 5 &&
		r[2][0] === 7 && r[2][1] === 8,
		"r is [[1,2],[4,5],[7,8]]"
	);

	var p = FPO.zip()( {} )( {arr1: list1} )()( {} )( {arr2: list2} );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ),
		"p has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( p ).length == 3 && p.length == 3, "p has only 3 slots" );
	assert.ok(
		p[0] && Array.isArray( p[0] ) &&
		p[1] && Array.isArray( p[1] ) &&
		p[2] && Array.isArray( p[2] ),
		"p[0]/p[1]/p[2] are each arrays"
	);
	assert.ok(
		_hasProp( p[0], "0" ) && _hasProp( p[0], "1" ) &&
		_hasProp( p[1], "0" ) && _hasProp( p[1], "1" ) &&
		_hasProp( p[2], "0" ) && _hasProp( p[2], "1" ),
		"p[0]/p[1]/p[2] each have filled slots at indexes 0 and 1"
	);
	assert.ok(
		Object.keys( p[0] ).length == 2 && p[0].length == 2 &&
		Object.keys( p[1] ).length == 2 && p[1].length == 2 &&
		Object.keys( p[2] ).length == 2 && p[2].length == 2,
		"p[0]/p[1]/p[2] each have only 2 slots"
	);
	assert.ok(
		p[0][0] === 1 && p[0][1] === 2 &&
		p[1][0] === 4 && p[1][1] === 5 &&
		p[2][0] === 7 && p[2][1] === 8,
		"p is [[1,2],[4,5],[7,8]]"
	);

	var q = FPO.zip( {arr1: list1, arr2: list3} );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok(
		_hasProp( q, "0" ) && _hasProp( q, "1" ),
		"q has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( q ).length == 2 && q.length == 2, "q has only 2 slots" );
	assert.ok(
		q[0] && Array.isArray( q[0] ) &&
		q[1] && Array.isArray( q[1] ),
		"q[0]/q[1] are each arrays"
	);
	assert.ok(
		_hasProp( q[0], "0" ) && _hasProp( q[0], "1" ) &&
		_hasProp( q[1], "0" ) && _hasProp( q[1], "1" ),
		"q[0]/q[1] each have filled slots at indexes 0 and 1"
	);
	assert.ok(
		Object.keys( q[0] ).length == 2 && q[0].length == 2 &&
		Object.keys( q[1] ).length == 2 && q[1].length == 2,
		"q[0]/q[1] each have only 2 slots"
	);
	assert.ok(
		q[0][0] === 1 && q[0][1] === 3 &&
		q[1][0] === 4 && q[1][1] === 6,
		"q is [[1,3],[4,6]]"
	);

	var t = FPO.zip( {arr1: list3, arr2: list1} );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok(
		_hasProp( t, "0" ) && _hasProp( t, "1" ),
		"t has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( t ).length == 2 && t.length == 2, "t has only 2 slots" );
	assert.ok(
		t[0] && Array.isArray( t[0] ) &&
		t[1] && Array.isArray( t[1] ),
		"t[0]/t[1] are each arrays"
	);
	assert.ok(
		_hasProp( t[0], "0" ) && _hasProp( t[0], "1" ) &&
		_hasProp( t[1], "0" ) && _hasProp( t[1], "1" ),
		"t[0]/t[1] each have filled slots at indexes 0 and 1"
	);
	assert.ok(
		Object.keys( t[0] ).length == 2 && t[0].length == 2 &&
		Object.keys( t[1] ).length == 2 && t[1].length == 2,
		"t[0]/t[1] each have only 2 slots"
	);
	assert.ok(
		t[0][0] === 3 && t[0][1] === 1 &&
		t[1][0] === 6 && t[1][1] === 4,
		"t is [[3,1],[6,4]]"
	);

	var s = FPO.zip( {arr1: list1, arr2: undefined} );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok( Object.keys( s ).length == 0 && s.length == 0, "s is []" );

	var u = FPO.zip( {arr1: undefined, arr2: undefined} );
	assert.ok( u && Array.isArray( u ), "u is an array" );
	assert.ok( Object.keys( u ).length == 0 && u.length == 0, "u is []" );

	var h = FPO.zip( {arr1: [], arr2: []} );
	assert.ok( h && Array.isArray( h ), "h is an array" );
	assert.ok( Object.keys( h ).length == 0 && h.length == 0, "h is []" );

	// **************************************

	r = FPO.std.zip( list1, list2 );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "r has only 3 slots" );
	assert.ok(
		r[0] && Array.isArray( r[0] ) &&
		r[1] && Array.isArray( r[1] ) &&
		r[2] && Array.isArray( r[2] ),
		"r[0]/r[1]/r[2] are each arrays"
	);
	assert.ok(
		_hasProp( r[0], "0" ) && _hasProp( r[0], "1" ) &&
		_hasProp( r[1], "0" ) && _hasProp( r[1], "1" ) &&
		_hasProp( r[2], "0" ) && _hasProp( r[2], "1" ),
		"r[0]/r[1]/r[2] each have filled slots at indexes 0 and 1"
	);
	assert.ok(
		Object.keys( r[0] ).length == 2 && r[0].length == 2 &&
		Object.keys( r[1] ).length == 2 && r[1].length == 2 &&
		Object.keys( r[2] ).length == 2 && r[2].length == 2,
		"r[0]/r[1]/r[2] each have only 2 slots"
	);
	assert.ok(
		r[0][0] === 1 && r[0][1] === 2 &&
		r[1][0] === 4 && r[1][1] === 5 &&
		r[2][0] === 7 && r[2][1] === 8,
		"r is [[1,2],[4,5],[7,8]]"
	);

	p = FPO.std.zip()( list1 )()( list2 );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ),
		"p has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( p ).length == 3 && p.length == 3, "p has only 3 slots" );
	assert.ok(
		p[0] && Array.isArray( p[0] ) &&
		p[1] && Array.isArray( p[1] ) &&
		p[2] && Array.isArray( p[2] ),
		"p[0]/p[1]/p[2] are each arrays"
	);
	assert.ok(
		_hasProp( p[0], "0" ) && _hasProp( p[0], "1" ) &&
		_hasProp( p[1], "0" ) && _hasProp( p[1], "1" ) &&
		_hasProp( p[2], "0" ) && _hasProp( p[2], "1" ),
		"p[0]/p[1]/p[2] each have filled slots at indexes 0 and 1"
	);
	assert.ok(
		Object.keys( p[0] ).length == 2 && p[0].length == 2 &&
		Object.keys( p[1] ).length == 2 && p[1].length == 2 &&
		Object.keys( p[2] ).length == 2 && p[2].length == 2,
		"p[0]/p[1]/p[2] each have only 2 slots"
	);
	assert.ok(
		p[0][0] === 1 && p[0][1] === 2 &&
		p[1][0] === 4 && p[1][1] === 5 &&
		p[2][0] === 7 && p[2][1] === 8,
		"p is [[1,2],[4,5],[7,8]]"
	);

	q = FPO.std.zip( list1, list3 );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok(
		_hasProp( q, "0" ) && _hasProp( q, "1" ),
		"q has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( q ).length == 2 && q.length == 2, "q has only 2 slots" );
	assert.ok(
		q[0] && Array.isArray( q[0] ) &&
		q[1] && Array.isArray( q[1] ),
		"q[0]/q[1] are each arrays"
	);
	assert.ok(
		_hasProp( q[0], "0" ) && _hasProp( q[0], "1" ) &&
		_hasProp( q[1], "0" ) && _hasProp( q[1], "1" ),
		"q[0]/q[1] each have filled slots at indexes 0 and 1"
	);
	assert.ok(
		Object.keys( q[0] ).length == 2 && q[0].length == 2 &&
		Object.keys( q[1] ).length == 2 && q[1].length == 2,
		"q[0]/q[1] each have only 2 slots"
	);
	assert.ok(
		q[0][0] === 1 && q[0][1] === 3 &&
		q[1][0] === 4 && q[1][1] === 6,
		"q is [[1,3],[4,6]]"
	);

	t = FPO.std.zip( list3, list1 );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok(
		_hasProp( t, "0" ) && _hasProp( t, "1" ),
		"t has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( t ).length == 2 && t.length == 2, "t has only 2 slots" );
	assert.ok(
		t[0] && Array.isArray( t[0] ) &&
		t[1] && Array.isArray( t[1] ),
		"t[0]/t[1] are each arrays"
	);
	assert.ok(
		_hasProp( t[0], "0" ) && _hasProp( t[0], "1" ) &&
		_hasProp( t[1], "0" ) && _hasProp( t[1], "1" ),
		"t[0]/t[1] each have filled slots at indexes 0 and 1"
	);
	assert.ok(
		Object.keys( t[0] ).length == 2 && t[0].length == 2 &&
		Object.keys( t[1] ).length == 2 && t[1].length == 2,
		"t[0]/t[1] each have only 2 slots"
	);
	assert.ok(
		t[0][0] === 3 && t[0][1] === 1 &&
		t[1][0] === 6 && t[1][1] === 4,
		"t is [[3,1],[6,4]]"
	);

	s = FPO.std.zip( list1, undefined );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok( Object.keys( s ).length == 0 && s.length == 0, "s is []" );

	u = FPO.std.zip( undefined, undefined );
	assert.ok( u && Array.isArray( u ), "u is an array" );
	assert.ok( Object.keys( u ).length == 0 && u.length == 0, "u is []" );

	h = FPO.std.zip( [], [] );
	assert.ok( h && Array.isArray( h ), "h is an array" );
	assert.ok( Object.keys( h ).length == 0 && h.length == 0, "h is []" );
} );

QUnit.test( "trampoline()", function t30(assert){
	assert.expect( 4 );

	function sum(total,x) {
		if (x <= 1) return total + x;
		return () => sum( total + x, x - 1 );
	}

	var r = FPO.trampoline( {fn: sum} )( 0, 5 );
	assert.strictEqual( r, 15, "r === 15" );

	var p = FPO.trampoline()( {} )( {fn: sum} )( 0, 5 );
	assert.strictEqual( p, 15, "p === 15" );

	// **************************************

	r = FPO.std.trampoline( sum )( 0, 5 );
	assert.strictEqual( r, 15, "r === 15" );

	p = FPO.std.trampoline()( sum )( 0, 5 );
	assert.strictEqual( p, 15, "p === 15" );
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
