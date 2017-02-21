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
	assert.strictEqual( pActual, undefined, "curried call with undefined" );
	assert.strictEqual( qActual, 3, "curried call with value" );
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
	assert.deepEqual( rActual, rExpected, "regular call with 4 props" );
	assert.deepEqual( pActual, pExpected, "curried with 1 prop" );
	assert.deepEqual( qActual, emptyObj, "curried with empty props" );
	assert.deepEqual( tActual, emptyObj, "curried with undefined props" );
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
	assert.deepEqual( rActual, rExpected, "regular call with 4 props" );
	assert.deepEqual( pActual, pExpected, "curried with 1 prop" );
	assert.deepEqual( qActual, emptyObj, "curried with empty props" );
	assert.deepEqual( tActual, emptyObj, "curried with undefined props" );
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
	assert.deepEqual( rActual, rExpected, "regular call with 4 props" );
	assert.deepEqual( pActual, pExpected, "curried with 1 prop" );
	assert.deepEqual( qActual, emptyObj, "curried with empty props" );
	assert.deepEqual( tActual, emptyObj, "curried with undefined props" );
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
	assert.deepEqual( rActual, rExpected, "regular call with 4 props" );
	assert.deepEqual( pActual, pExpected, "curried with 1 prop" );
	assert.deepEqual( qActual, emptyObj, "curried with empty props" );
	assert.deepEqual( tActual, emptyObj, "curried with undefined props" );
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
	assert.deepEqual( rActual, rExpected, "regular call with 3 props" );
	assert.deepEqual( pActual, pExpected, "curried with 2 props" );
	assert.deepEqual( qActual, emptyObj, "curried with empty props" );
	assert.deepEqual( tActual, emptyObj, "curried with undefined props" );
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
	assert.deepEqual( rActual, rExpected, "regular call with arity 3" );
	assert.deepEqual( pActual, pExpected, "curried with arity 2" );
	assert.deepEqual( qActual, emptyArr, "curried with arity 0 (nullary)" );
	assert.deepEqual( tActual, emptyArr, "curried with undefined arity" );
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
	assert.deepEqual( qActual, emptyObj, "curried with undefined prop" );
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
	assert.deepEqual( rActual, rExpected, "regular call with 3 props" );
	assert.deepEqual( pActual, pExpected, "curried with 2 props" );
	assert.deepEqual( qActual, emptyObj, "curried with empty props" );
	assert.deepEqual( tActual, emptyObj, "curried with undefined props" );
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

QUnit.test( "curry()", function t11(assert){
	assert.expect( 32 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.curry( {fn: foo, n: 3} )( {x: 1} )( {y: 2, z: 3} )( {w: 4} );
	assert.ok( r && typeof r == "object", "r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "w" ),
		"r has 'x', 'y', and 'w' properties"
	);
	assert.ok( !_hasProp( r, "z" ), "r does not have 'z' property" );
	assert.ok( Object.keys( r ).length == 3, "r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.w === 4, "r.x === 1, r.y === 2, r.w === 4" );

	var p = FPO.curry()( {} )( {fn: foo} )()( {} )( {x: 1, y: 2} );
	assert.ok( p && typeof p == "object", "p is an object" );
	assert.ok( _hasProp( p, "x" ), "p has 'x' property" );
	assert.ok( !_hasProp( p, "y" ), "p does not have 'y' property" );
	assert.ok( Object.keys( p ).length == 1, "p has only 1 property" );
	assert.strictEqual( p.x, 1, "p.x === 1" );

	var q = FPO.curry()( {} )( {fn: foo, n: undefined} )( {x: 1, y: 2} );
	assert.ok( q && typeof q == "object", "q is an object" );
	assert.ok( _hasProp( q, "x" ), "q has 'x' property" );
	assert.ok( !_hasProp( q, "y" ), "q does not have 'y' property" );
	assert.ok( Object.keys( q ).length == 1, "q has only 1 property" );
	assert.strictEqual( q.x, 1, "q.x === 1" );

	var t = FPO.curry()( {} )( {fn: foo, n: 0} )( {x: 1, y: 2} );
	assert.ok( t && typeof t == "object", "t is an object" );
	assert.ok( _hasProp( t, "x" ), "t has 'x' property" );
	assert.ok( !_hasProp( t, "y" ), "t does not have 'y' property" );
	assert.ok( Object.keys( t ).length == 1, "t has only 1 property" );
	assert.strictEqual( t.x, 1, "t.x === 1" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.curry( bar, 3 )( 1 )( 2, 3 )( 4 );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 4, "r is [1,2,4]" );

	p = FPO.std.curry()( bar )()( 1, 2 );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok( _hasProp( p, "0" ), "p has a filled slot at index 0" );
	assert.ok( Object.keys( p ).length == 1 && p.length == 1, "p has only 1 slot" );
	assert.strictEqual( p[0], 1, "p is [1]" );

	q = FPO.std.curry( bar, 0 )( 1, 2 );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok( _hasProp( q, "0" ), "q has a filled slot at index 0" );
	assert.ok( Object.keys( q ).length == 1 && q.length == 1, "q has only 1 slot" );
	assert.strictEqual( q[0], 1, "q is [1]" );
} );


QUnit.test( "curryMultiple()", function t12(assert){
	assert.expect( 28 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.curryMultiple( {fn: foo, n: 3} )( {x: 1} )( {y: 2, z: 3} );
	assert.ok( r && typeof r == "object", "r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ),
		"r has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.z === 3, "r.x === 1, r.y === 2, r.z === 3" );

	var p = FPO.curryMultiple()( {} )( {fn: foo} )()( {} )( {x: 1, y: 2} );
	assert.ok( p && typeof p == "object", "p is an object" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ),
		"p has 'x' and 'y' properties"
	);
	assert.ok( Object.keys( p ).length == 2, "p has only 2 properties" );
	assert.ok( p.x === 1 && p.y === 2, "p.x === 1, p.y === 2" );

	var q = FPO.curryMultiple()( {} )( {fn: foo, n: undefined} )( {x: 1, y: 2} );
	assert.ok( q && typeof q == "object", "q is an object" );
	assert.ok(
		_hasProp( q, "x" ) && _hasProp( q, "y" ),
		"q has 'x' and 'y' properties"
	);
	assert.ok( Object.keys( q ).length == 2, "q has only 2 properties" );
	assert.ok( q.x === 1 && q.y === 2, "q.x === 1, q.y === 2" );

	var t = FPO.curryMultiple()( {} )( {fn: foo, n: 0} )( {x: 1, y: 2} );
	assert.ok( t && typeof t == "object", "t is an object" );
	assert.ok(
		_hasProp( t, "x" ) && _hasProp( t, "y" ),
		"t has 'x' and 'y' properties"
	);
	assert.ok( Object.keys( t ).length == 2, "t has only 2 properties" );
	assert.ok( t.x === 1 && t.y === 2, "t.x === 1, t.y === 2" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.curryMultiple( bar, 3 )( 1 )( 2, 3 );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "r is [1,2,3]" );

	p = FPO.std.curryMultiple()( bar )()( 1, 2 );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "p is [1,2]" );

	q = FPO.std.curryMultiple( bar, 0 )( 1, 2 );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok(
		_hasProp( q, "0" ) && _hasProp( q, "1" ),
		"q has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( q ).length == 2 && q.length == 2, "q has only 2 slots" );
	assert.ok( q[0] === 1 && q[1] === 2, "q is [1,2]" );
} );

QUnit.test( "uncurry()", function t13(assert){
	assert.expect( 16 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.uncurry( {fn: FPO.curry( {fn: foo, n: 3} )} )( {x: 1, y: 2, z: 3} );
	assert.ok( r && typeof r == "object", "r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ),
		"r has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.z === 3, "r.x === 1, r.y === 2, r.z === 3" );

	var p = FPO.uncurry()( {} )( {fn: FPO.curry( {fn: foo, n: 2} )} )( {x: 1, y: 2} );
	assert.ok( p && typeof p == "object", "p is an object" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ),
		"p has 'x' and 'y' properties"
	);
	assert.ok( Object.keys( p ).length == 2, "p has only 2 properties" );
	assert.ok( p.x === 1 && p.y === 2, "p.x === 1, p.y === 2" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.uncurry( FPO.std.curry( bar, 3 ) )( 1, 2, 3 );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "r is [1,2,3]" );

	p = FPO.std.uncurry()( FPO.std.curry( bar, 2 ) )( 1, 2 );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "p is [1,2]" );
} );

QUnit.test( "partial()", function t14(assert){
	assert.expect( 32 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.partial( {fn: foo, args: {z:3}} )( {x: 1, y: 2} );
	assert.ok( r && typeof r == "object", "r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ),
		"r has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.z === 3, "r.x === 1, r.y === 2, r.z === 3" );

	var p = FPO.partial()( {} )( {fn: foo} )( {args: {y:2}} )( {x: 1} );
	assert.ok( p && typeof p == "object", "p is an object" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ),
		"p has 'x' and 'y' properties"
	);
	assert.ok( Object.keys( p ).length == 2, "p has only 2 properties" );
	assert.ok( p.x === 1 && p.y === 2, "p.x === 1, p.y === 2" );

	var q = FPO.partial()( {} )( {fn: foo} )( {args: undefined} )( {x: 1} );
	assert.ok( q && typeof q == "object", "q is an object" );
	assert.ok( _hasProp( q, "x" ), "q has 'x' property" );
	assert.ok( Object.keys( q ).length == 1, "q has only 1 property" );
	assert.strictEqual( q.x, 1, "q.x === 1" );

	var t = FPO.partial()( {} )( {fn: foo} )( {args: {}} )( {x: 1} );
	assert.ok( t && typeof t == "object", "t is an object" );
	assert.ok( _hasProp( t, "x" ), "t has 'x' property" );
	assert.ok( Object.keys( t ).length == 1, "t has only 1 property" );
	assert.strictEqual( t.x, 1, "t.x === 1" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.partial( bar, [1] )( 2, 3 );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "r is [1,2,3]" );

	p = FPO.std.partial()( bar )( [1] )( 2 );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "p is [1,2]" );

	q = FPO.std.partial( bar, undefined )( 1, 2 );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok(
		_hasProp( q, "0" ) && _hasProp( q, "1" ),
		"p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( q ).length == 2 && q.length == 2, "q has only 2 slots" );
	assert.ok( q[0] === 1 && q[1] === 2, "q is [1,2]" );

	t = FPO.std.partial( bar, [] )( 1, 2 );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok(
		_hasProp( t, "0" ) && _hasProp( t, "1" ),
		"p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( t ).length == 2 && t.length == 2, "t has only 2 slots" );
	assert.ok( t[0] === 1 && t[1] === 2, "t is [1,2]" );
} );

QUnit.test( "complement()", function t15(assert){
	assert.expect( 4 );

	function xPlusYEven(argsObj) { return (argsObj.x + argsObj.y) % 2 == 0; }

	var xPlusYOdd = FPO.complement( {fn: xPlusYEven} );
	assert.ok( xPlusYOdd( {x: 1, y: 2} ) === true, "xPlusYOdd({x:1,y:2}) === true" );

	xPlusYOdd = FPO.complement()( {} )( {fn: xPlusYEven} );
	assert.ok( xPlusYOdd( {x: 2, y: 4} ) === false, "xPlusYOdd({x:2,y:4}) === false" );

	// **************************************

	function argPlusArgEven(...args) { return (args[0] + args[1]) % 2 == 0; }

	var argPlusArgOdd = FPO.std.complement( argPlusArgEven );
	assert.ok( argPlusArgOdd( 1, 2 ) === true, "argPlusArgOdd(1,2) === true" );

	argPlusArgOdd = FPO.std.complement()( argPlusArgEven );
	assert.ok( argPlusArgOdd( 2, 4 ) === false, "argPlusArgOdd(2,4) === false" );
} );

QUnit.test( "apply()", function t16(assert){
	assert.expect( 24 );

	function foo(x,y,z) { return {x,y,z}; }

	var r = FPO.apply( {fn: foo} )( {y: 2, z: 3, x: 1} );
	assert.ok( r && typeof r == "object", "r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ),
		"r has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.z === 3, "r.x === 1, r.y === 2, r.z === 3" );

	// NOTE: intentionally reversing applied prop order
	var p = FPO.apply()( {} )( {fn: foo, props: ["z","y","x"]} )( {y: 2, z: 3, x: 1} );
	assert.ok( p && typeof p == "object", "p is an object" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ) && _hasProp( p, "z" ),
		"p has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 3, "p has only 3 properties" );
	assert.ok( p.x === 3 && p.y === 2 && p.z === 1, "p.x === 3, p.y === 2, p.z === 1" );

	var q = FPO.apply( {fn: foo, props: undefined} )( {y: 2, z: 3, x: 1} );
	assert.ok( q && typeof q == "object", "q is an object" );
	assert.ok(
		_hasProp( q, "x" ) && _hasProp( q, "y" ) && _hasProp( q, "z" ),
		"q has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( q ).length == 3, "q has only 3 properties" );
	assert.ok( q.x === 1 && q.y === 2 && q.z === 3, "q.x === 1, q.y === 2, q.z === 3" );

	var t = FPO.apply( {fn: foo, props: []} )( {y: 2, z: 3, x: 1} );
	assert.ok( t && typeof t == "object", "t is an object" );
	assert.ok(
		_hasProp( t, "x" ) && _hasProp( t, "y" ) && _hasProp( t, "z" ),
		"q has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( t ).length == 3, "t has only 3 properties" );
	assert.ok( t.x === undefined && t.y === undefined && t.z === undefined, "t.x === undefined, t.y === undefined, t.z === undefined" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.apply( bar )( [1,2,3] );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "r is [1,2,3]" );

	p = FPO.std.apply()( bar )( [1,2] );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "p is [1,2]" );
} );

QUnit.test( "unapply()", function t17(assert){
	assert.expect( 24 );

	function foo({x,y,z}) { return {x,y,z}; }

	var r = FPO.unapply( {fn: foo, props: ["x","y","z"]} )( 1, 2, 3 );
	assert.ok( r && typeof r == "object", "r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ),
		"r has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.z === 3, "r.x === 1, r.y === 2, r.z === 3" );

	// NOTE: intentionally reversing (un)applied prop order
	var p = FPO.unapply()( {} )( {fn: foo} )( {props: ["z","y","x"]} )( 1, 2, 3 );
	assert.ok( p && typeof p == "object", "p is an object" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ) && _hasProp( p, "z" ),
		"p has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 3, "p has only 3 properties" );
	assert.ok( p.x === 3 && p.y === 2 && p.z === 1, "p.x === 3, p.y === 2, p.z === 1" );

	var q = FPO.unapply( {fn: foo, props: undefined} )( 1, 2, 3 );
	assert.ok( q && typeof q == "object", "q is an object" );
	assert.ok(
		_hasProp( q, "x" ) && _hasProp( q, "y" ) && _hasProp( q, "z" ),
		"q has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( q ).length == 3, "q has only 3 properties" );
	assert.ok( q.x === undefined && q.y === undefined && q.z === undefined, "q.x === undefined, q.y === undefined, q.z === undefined" );

	var t = FPO.unapply( {fn: foo, props: []} )( 1, 2, 3 );
	assert.ok( t && typeof t == "object", "t is an object" );
	assert.ok(
		_hasProp( t, "x" ) && _hasProp( t, "y" ) && _hasProp( t, "z" ),
		"t has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( t ).length == 3, "t has only 3 properties" );
	assert.ok( t.x === undefined && t.y === undefined && t.z === undefined, "t.x === undefined, t.y === undefined, t.z === undefined" );

	// **************************************

	function bar(args) { return args; }

	r = FPO.std.unapply( bar )( 1, 2, 3 );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "r is [1,2,3]" );

	p = FPO.std.unapply()( bar )( 1, 2 );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "p is [1,2]" );
} );

QUnit.test( "compose()", function t18(assert){
	assert.expect( 7 );

	function foo(x) { return `foo,${x}`; }
	function bar(x) { return `bar,${x}`; }
	function baz(x) { return `baz,${x}`; }

	var r = FPO.compose( {fns: [foo,bar,baz]} )( 3, 4 );
	assert.strictEqual( r, "foo,bar,baz,3", "r === 'foo,bar,baz,3'" );

	var p = FPO.compose()( {} )( {fns: [foo]} )( 3, 4 );
	assert.strictEqual( p, "foo,3", "p === 'foo,3'" );

	var q = FPO.compose()( {} )( {fns: undefined} )( 3, 4 );
	assert.strictEqual( q, 3, "q === 3" );

	var t = FPO.compose()( {} )( {fns: []} )( 3, 4 );
	assert.strictEqual( t, 3, "t === 3" );

	// **************************************

	r = FPO.std.compose( [foo,bar,baz] )( 3, 4 );
	assert.strictEqual( r, "foo,bar,baz,3", "r === 'foo,bar,baz,3'" );

	p = FPO.std.compose()( [foo] )( 3, 4 );
	assert.strictEqual( p, "foo,3", "p === 'foo,3'" );

	q = FPO.std.compose()( [] )( 3, 4 );
	assert.strictEqual( q, 3, "q === 3" );
} );

QUnit.test( "pipe()", function t19(assert){
	assert.expect( 7 );

	function foo(x) { return `foo,${x}`; }
	function bar(x) { return `bar,${x}`; }
	function baz(x) { return `baz,${x}`; }

	var r = FPO.pipe( {fns: [baz,bar,foo]} )( 3, 4 );
	assert.strictEqual( r, "foo,bar,baz,3", "r === 'foo,bar,baz,3'" );

	var p = FPO.pipe()( {} )( {fns: [foo]} )( 3, 4 );
	assert.strictEqual( p, "foo,3", "p === 'foo,3'" );

	var q = FPO.pipe()( {} )( {fns: undefined} )( 3, 4 );
	assert.strictEqual( q, 3, "q === 3" );

	var t = FPO.pipe()( {} )( {fns: []} )( 3, 4 );
	assert.strictEqual( t, 3, "t === 3" );

	// **************************************

	r = FPO.std.pipe( [baz,bar,foo] )( 3, 4 );
	assert.strictEqual( r, "foo,bar,baz,3", "r === 'foo,bar,baz,3'" );

	p = FPO.std.pipe()( [foo] )( 3, 4 );
	assert.strictEqual( p, "foo,3", "p === 'foo,3'" );

	q = FPO.std.pipe()( [] )( 3, 4 );
	assert.strictEqual( q, 3, "q === 3" );
} );

QUnit.test( "prop()", function t20(assert){
	assert.expect( 10 );

	var obj1 = { x: 1, y: 2, z: 3, w: 4 };
	var obj2 = { x: 1, y: 2 };

	var r = FPO.prop( {v: obj1} )( {prop: "x"} );
	assert.strictEqual( r, 1, "r === 1" );

	var p = FPO.prop( {v: obj1} )()( {} )( {prop: "y"} );
	assert.strictEqual( p, 2, "p === 2" );

	var f = FPO.prop( {prop: "z"} )()( {} );
	var q = f( {v: obj1} )
	assert.strictEqual( q, 3, "q === 3" );

	var t = f( {v: obj2} );
	assert.strictEqual( t, undefined, "t === undefined" );

	var s = FPO.prop( {prop: undefined, v: undefined} );
	assert.strictEqual( s, undefined, "s === undefined" );

	var u = FPO.prop( {prop: "", v: {}} );
	assert.strictEqual( u, undefined, "u === undefined" );

	// **************************************

	r = FPO.std.prop( "z" )( obj1 );
	assert.strictEqual( r, 3, "r === 3" );

	p = FPO.std.prop()( "z" )()( obj2 );
	assert.strictEqual( p, undefined, "p === undefined" );

	q = FPO.std.prop( undefined )( undefined );
	assert.strictEqual( q, undefined, "q === undefined" );

	t = FPO.std.prop( "" )( {} );
	assert.strictEqual( t, undefined, "t === undefined" );
} );

QUnit.test( "setProp()", function t21(assert){
	assert.expect( 36 );

	var obj1 = { x: 1, y: 2, z: 3, w: 4 };
	var obj2 = { x: 1, y: 2 };

	var r = FPO.setProp( {o: obj1, prop: "x"} )( {v: 10} );
	assert.ok( r && typeof r == "object", "r is an object" );
	assert.ok( r !== obj1, "r is not obj1" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ) && _hasProp( r, "w" ),
		"r has 'x', 'y', 'z', and 'w' properties"
	);
	assert.ok( Object.keys( r ).length == 4, "r has only 4 properties" );
	assert.ok( r.x === 10 && r.y === 2 && r.z === 3 && r.w === 4, "r.x === 10, r.y === 2, r.z === 3, r.w === 4" );

	var p = FPO.setProp()( {v: 10} )()( {prop: "z"} )( {} )( {o: obj2} );
	assert.ok( p && typeof p == "object", "p is an object" );
	assert.ok( p !== obj2, "p is not obj2" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ) && _hasProp( p, "z" ),
		"p has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 3, "p has only 3 properties" );
	assert.ok( p.x === 1 && p.y === 2 && p.z === 10, "p.x === 1, p.y === 2, p.z === 10" );

	var q = FPO.setProp( {v: 10, prop: undefined, o: undefined} );
	assert.ok( q && typeof q == "object", "q is an object" );
	assert.ok( _hasProp( q, "" ), "q has '' property" );
	assert.ok( Object.keys( q ).length == 1, "q has only 1 property" );
	assert.strictEqual( q[""], 10, "q[''] === 10" );

	var t = FPO.setProp( {v: 10, prop: "", o: {}} );
	assert.ok( t && typeof t == "object", "t is an object" );
	assert.ok( _hasProp( t, "" ), "t has '' property" );
	assert.ok( Object.keys( t ).length == 1, "t has only 1 property" );
	assert.strictEqual( t[""], 10, "t[''] === 10" );

	// **************************************

	r = FPO.std.setProp( "x", obj1 )( 10 );
	assert.ok( r && typeof r == "object", "r is an object" );
	assert.ok( r !== obj1, "r is not obj1" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ) && _hasProp( r, "w" ),
		"r has 'x', 'y', 'z', and 'w' properties"
	);
	assert.ok( Object.keys( r ).length == 4, "r has only 4 properties" );
	assert.ok( r.x === 10 && r.y === 2 && r.z === 3 && r.w === 4, "r.x === 10, r.y === 2, r.z === 3, r.w === 4" );

	p = FPO.std.setProp()( "z" )()( obj2 )()( 10 );
	assert.ok( p && typeof p == "object", "p is an object" );
	assert.ok( p !== obj2, "p is not obj2" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ) && _hasProp( p, "z" ),
		"p has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 3, "p has only 3 properties" );
	assert.ok( p.x === 1 && p.y === 2 && p.z === 10, "p.x === 1, p.y === 2, p.z === 10" );

	q = FPO.std.setProp( undefined )( undefined )( 10 );
	assert.ok( q && typeof q == "object", "q is an object" );
	assert.ok( _hasProp( q, "" ), "q has '' property" );
	assert.ok( Object.keys( q ).length == 1, "q has only 1 property" );
	assert.strictEqual( q[""], 10, "q[''] === 10" );

	t = FPO.std.setProp( "" )( {} )( 10 );
	assert.ok( t && typeof t == "object", "t is an object" );
	assert.ok( _hasProp( t, "" ), "t has '' property" );
	assert.ok( Object.keys( t ).length == 1, "t has only 1 property" );
	assert.strictEqual( t[""], 10, "t[''] === 10" );
} );

QUnit.test( "filterIn()", function t22(assert){
	assert.expect( 38 );

	function objCheckParams({ v, i, arr }) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return false;
		}
		return true;
	}
	function objIsEven({ v }) { return v % 2 == 0; }
	function alwaysFalse() { return false; }
	var list = [1,2,3,4,5];

	var r = FPO.filterIn( {fn: objIsEven, arr: list} );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok( r !== list, "r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "r has only 2 slots" );
	assert.ok( r[0] === 2 && r[1] === 4, "r is [2,4]" );

	var p = FPO.filterIn()( {} )( {fn: objIsEven} )()( {arr: list} );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok( p !== list, "p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 2 && p[1] === 4, "p is [2,4]" );

	var q = FPO.filterIn( {fn: alwaysFalse, arr: list} );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok( q !== list, "q is not list" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "q has no slots" );

	var t = FPO.filterIn( {fn: objIsEven, arr: undefined} );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "t has no slots" );

	var s = FPO.filterIn( {fn: objIsEven, arr: []} );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok( Object.keys( s ).length == 0 && s.length == 0, "s has no slots" );

	var u = FPO.filterIn( {fn: objCheckParams, arr: list} );
	assert.ok( u && Array.isArray( u ), "u is an array" );
	assert.ok( Object.keys( u ).length == 0 && u.length == 0, "u has no slots" );

	// **************************************

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

	r = FPO.std.filterIn( isEven, list );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok( r !== list, "r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "r has only 2 slots" );
	assert.ok( r[0] === 2 && r[1] === 4, "r is [2,4]" );

	p = FPO.std.filterIn()( isEven )()( list );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok( p !== list, "p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 2 && p[1] === 4, "p is [2,4]" );

	q = FPO.std.filterIn( alwaysFalse, list );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok( q !== list, "q is not list" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "q has no slots" );

	t = FPO.std.filterIn( isEven, undefined );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "t has no slots" );

	s = FPO.std.filterIn( isEven, [] );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok( Object.keys( s ).length == 0 && s.length == 0, "s has no slots" );

	u = FPO.std.filterIn( checkParams, list );
	assert.ok( u && Array.isArray( u ), "u is an array" );
	assert.ok( Object.keys( u ).length == 0 && u.length == 0, "u has no slots" );
} );

QUnit.test( "filterOut()", function t23(assert){
	assert.expect( 38 );

	function objCheckParams({ v, i, arr }) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return true;
		}
		return false;
	}
	function objIsOdd({ v }) { return v % 2 == 1; }
	function alwaysTrue() { return true; }
	var list = [1,2,3,4,5];

	var r = FPO.filterOut( {fn: objIsOdd, arr: list} );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok( r !== list, "r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "r has only 2 slots" );
	assert.ok( r[0] === 2 && r[1] === 4, "r is [2,4]" );

	var p = FPO.filterOut()( {} )( {fn: objIsOdd} )()( {arr: list} );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok( p !== list, "p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 2 && p[1] === 4, "p is [2,4]" );

	var q = FPO.filterOut( {fn: alwaysTrue, arr: list} );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok( q !== list, "q is not list" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "q has no slots" );

	var t = FPO.filterOut( {fn: objIsOdd, arr: undefined} );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "t has no slots" );

	var s = FPO.filterOut( {fn: objIsOdd, arr: []} );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok( Object.keys( s ).length == 0 && s.length == 0, "s has no slots" );

	var u = FPO.filterOut( {fn: objCheckParams, arr: list} );
	assert.ok( u && Array.isArray( u ), "u is an array" );
	assert.ok( Object.keys( u ).length == 0 && u.length == 0, "u has no slots" );

	// **************************************

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
	function isOdd(v) { return v % 2 == 1; }

	r = FPO.std.filterOut( isOdd, list );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok( r !== list, "r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "r has only 2 slots" );
	assert.ok( r[0] === 2 && r[1] === 4, "r is [2,4]" );

	p = FPO.std.filterOut()( isOdd )()( list );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok( p !== list, "p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 2 && p[1] === 4, "p is [2,4]" );

	q = FPO.std.filterOut( alwaysTrue, list );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok( q !== list, "q is not list" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "q has no slots" );

	t = FPO.std.filterOut( isOdd, undefined );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "t has no slots" );

	s = FPO.std.filterOut( isOdd, [] );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok( Object.keys( s ).length == 0 && s.length == 0, "s has no slots" );

	u = FPO.std.filterOut( checkParams, list );
	assert.ok( u && Array.isArray( u ), "u is an array" );
	assert.ok( Object.keys( u ).length == 0 && u.length == 0, "u has no slots" );
} );

QUnit.test( "map()", function t24(assert){
	assert.expect( 38 );

	function objCheckParams({ v, i, arr }) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return true;
		}
		return false;
	}
	function objMul10({ v }) { return v * 10; }
	var list = [1,2];

	var r = FPO.map( {fn: objMul10, arr: list} );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok( r !== list, "r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "r has only 2 slots" );
	assert.ok( r[0] === 10 && r[1] === 20, "r is [10,20]" );

	var p = FPO.map()( {} )( {fn: objMul10} )()( {arr: list} );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok( p !== list, "p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 10 && p[1] === 20, "p is [10,20]" );

	var q = FPO.map( {fn: objMul10, arr: undefined} );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "q has no slots" );

	var t = FPO.map( {fn: objMul10, arr: []} );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "t has no slots" );

	var s = FPO.map( {fn: objCheckParams, arr: list} );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok( s !== list, "s is not list" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ),
		"s has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( s ).length == 2 && s.length == 2, "s has only 2 slots" );
	assert.ok( s[0] === true && s[1] === true, "s is [true,true]" );

	// **************************************

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

	r = FPO.std.map( mul10, list );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok( r !== list, "r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "r has only 2 slots" );
	assert.ok( r[0] === 10 && r[1] === 20, "r is [10,20]" );

	p = FPO.std.map()( mul10 )()( list );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok( p !== list, "p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "p has only 2 slots" );
	assert.ok( p[0] === 10 && p[1] === 20, "p is [10,20]" );

	q = FPO.std.map( mul10, undefined );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "q has no slots" );

	t = FPO.std.map( mul10, [] );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "t has no slots" );

	s = FPO.std.map( checkParams, list );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok( s !== list, "s is not list" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ),
		"s has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( s ).length == 2 && s.length == 2, "s has only 2 slots" );
	assert.ok( s[0] === true && s[1] === true, "s is [true,true]" );
} );

QUnit.test( "flatMap()", function t25(assert){
	assert.expect( 38 );

	function objCheckParams({ v, i, arr }) {
		if (
			arr === list &&
			typeof v == "number" && typeof i == "number" && Array.isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return true;
		}
		return false;
	}
	function objMul10({ v }) {
		if (v <= 1) {
			return [v * 10,v * 100];
		}
		return v * 10;
	}

	var list = [1,2];

	var r = FPO.flatMap( {fn: objMul10, arr: list} );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok( r !== list, "r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "r has only 3 slots" );
	assert.ok( r[0] === 10 && r[1] === 100 && r[2] === 20, "r is [10,100,20]" );

	var p = FPO.flatMap()( {} )( {fn: objMul10} )()( {arr: list} );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok( p !== list, "p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ),
		"p has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "p has only 3 slots" );
	assert.ok( p[0] === 10 && p[1] === 100 && p[2] === 20, "p is [10,100,20]" );

	var q = FPO.flatMap( {fn: objMul10, arr: undefined} );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "q has no slots" );

	var t = FPO.flatMap( {fn: objMul10, arr: []} );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "t has no slots" );

	var s = FPO.flatMap( {fn: objCheckParams, arr: list} );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok( s !== list, "s is not list" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ),
		"s has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( s ).length == 2 && s.length == 2, "s has only 2 slots" );
	assert.ok( s[0] === true && s[1] === true, "s is [true,true]" );

	// **************************************

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
	function mul10(v) {
		if (v <= 1) {
			return [v * 10,v * 100];
		}
		return v * 10;
	}

	r = FPO.std.flatMap( mul10, list );
	assert.ok( r && Array.isArray( r ), "r is an array" );
	assert.ok( r !== list, "r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "r has only 3 slots" );
	assert.ok( r[0] === 10 && r[1] === 100 && r[2] === 20, "r is [10,100,20]" );

	p = FPO.std.flatMap()( mul10 )()( list );
	assert.ok( p && Array.isArray( p ), "p is an array" );
	assert.ok( p !== list, "p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ),
		"p has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "p has only 3 slots" );
	assert.ok( p[0] === 10 && p[1] === 100 && p[2] === 20, "p is [10,100,20]" );

	q = FPO.std.flatMap( mul10, undefined );
	assert.ok( q && Array.isArray( q ), "q is an array" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "q has no slots" );

	t = FPO.std.flatMap( mul10, [] );
	assert.ok( t && Array.isArray( t ), "t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "t has no slots" );

	s = FPO.std.flatMap( checkParams, list );
	assert.ok( s && Array.isArray( s ), "s is an array" );
	assert.ok( s !== list, "s is not list" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ),
		"s has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( s ).length == 2 && s.length == 2, "s has only 2 slots" );
	assert.ok( s[0] === true && s[1] === true, "s is [true,true]" );
} );

QUnit.test( "reduce()", function t26(assert){
	assert.expect( 12 );

	function objCheckParams({ acc, v, i, arr }) {
		if (
			arr === list &&
			typeof acc == "number" && typeof v == "number" &&
			typeof i == "number" && Array.isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return acc + v;
		}
		return NaN;
	}
	function objSum({ acc, v }) { return acc + v; }
	var list = [1,2,3,4,5];

	var r = FPO.reduce( {fn: objSum, arr: list} );
	assert.strictEqual( r, 15, "r === 15" );

	var p = FPO.reduce()( {} )( {fn: objSum} )()( {arr: list} );
	assert.strictEqual( p, 15, "p === 15" );

	var q = FPO.reduce( {fn: objSum, arr: undefined} );
	assert.strictEqual( q, undefined, "q === undefined" );

	var t = FPO.reduce( {fn: objSum, arr: [], v: 6} );
	assert.strictEqual( t, 6, "t === 6" );

	var s = FPO.reduce( {fn: objCheckParams, arr: list} );
	assert.strictEqual( s, 15, "s === 15" );

	var u = FPO.reduce( {fn: objSum, arr: list, v: 6} );
	assert.strictEqual( u, 21, "u === 21" );

	// **************************************

	function checkParams(acc,v,i,arr) {
		if (
			arr === list &&
			typeof acc == "number" && typeof v == "number" &&
			typeof i == "number" && Array.isArray( arr ) &&
			v === (i + 1) && arr[i] === v
		) {
			return acc + v;
		}
		return NaN;
	}
	function sum(acc,v) { return acc + v; }

	r = FPO.std.reduce( sum, undefined, list );
	assert.strictEqual( r, 15, "r === 15" );

	p = FPO.std.reduce()( sum )( undefined )( list );
	assert.strictEqual( p, 15, "p === 15" );

	q = FPO.std.reduce( sum, undefined, undefined );
	assert.strictEqual( q, undefined, "q === undefined" );

	t = FPO.std.reduce( sum, 6, [] );
	assert.strictEqual( t, 6, "t === 6" );

	s = FPO.std.reduce( checkParams, undefined, list );
	assert.strictEqual( s, 15, "s === 15" );

	u = FPO.std.reduce( sum, 6, list );
	assert.strictEqual( u, 21, "u === 21" );
} );

QUnit.test( "reduceRight()", function t27(assert){
	assert.expect( 12 );

	function objCheckParams({ acc, v, i, arr }) {
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
	function objConcat({ acc, v }) { return acc + v; }
	var list = ["1","2","3","4","5"];

	var r = FPO.reduceRight( {fn: objConcat, arr: list} );
	assert.strictEqual( r, "54321", "r === '54321'" );

	var p = FPO.reduceRight()( {} )( {fn: objConcat} )()( {arr: list} );
	assert.strictEqual( p, "54321", "p === '54321'" );

	var q = FPO.reduceRight( {fn: objConcat, arr: undefined} );
	assert.strictEqual( q, undefined, "q === undefined" );

	var t = FPO.reduceRight( {fn: objConcat, arr: [], v: "6"} );
	assert.strictEqual( t, "6", "t === '6'" );

	var s = FPO.reduceRight( {fn: objCheckParams, arr: list} );
	assert.strictEqual( s, "54321", "s === '54321'" );

	var u = FPO.reduceRight( {fn: objConcat, arr: list, v: "6"} );
	assert.strictEqual( u, "654321", "u === '654321'" );

	// **************************************

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

	r = FPO.std.reduceRight( concat, undefined, list );
	assert.strictEqual( r, "54321", "r === '54321'" );

	p = FPO.std.reduceRight()( concat )( undefined )( list );
	assert.strictEqual( p, "54321", "p === '54321'" );

	q = FPO.std.reduceRight( concat, undefined, undefined );
	assert.strictEqual( q, undefined, "q === undefined" );

	t = FPO.std.reduceRight( concat, "6", [] );
	assert.strictEqual( t, "6", "t === '6'" );

	s = FPO.std.reduceRight( checkParams, undefined, list );
	assert.strictEqual( s, "54321", "s === '54321'" );

	u = FPO.std.reduceRight( concat, "6", list );
	assert.strictEqual( u, "654321", "u === '654321'" );
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
