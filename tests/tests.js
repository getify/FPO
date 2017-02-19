"use strict";

QUnit.test("core API methods present",function t1(assert){
	assert.expect( 35 );

	assert.ok( typeof FPO.identity == "function", "identity()" );
	assert.ok( typeof FPO.constant == "function", "constant()" );
	assert.ok( typeof FPO.pick == "function", "pick()" );
	assert.ok( typeof FPO.pickAll == "function", "pickAll()" );
	assert.ok( typeof FPO.nAry == "function", "nAry()" );
	assert.ok( typeof FPO.unary == "function", "unary()" );
	assert.ok( typeof FPO.binary == "function", "binary()" );
	assert.ok( typeof FPO.curry == "function", "curry()" );
	assert.ok( typeof FPO.curryMultiple == "function", "curryMultiple()" );
	assert.ok( typeof FPO.uncurry == "function", "uncurry()" );
	assert.ok( typeof FPO.partial == "function", "partial()" );
	assert.ok( typeof FPO.complement == "function", "complement()" );
	assert.ok( typeof FPO.apply == "function", "apply()" );
	assert.ok( typeof FPO.unapply == "function", "unapply()" );
	assert.ok( typeof FPO.compose == "function", "compose()" );
	assert.ok( typeof FPO.pipe == "function", "pipe()" );
	assert.ok( typeof FPO.prop == "function", "prop()" );
	assert.ok( typeof FPO.setProp == "function", "setProp()" );
	assert.ok( typeof FPO.filterIn == "function", "filterIn()" );
	assert.ok( typeof FPO.filterOut == "function", "filterOut()" );
	assert.ok( typeof FPO.map == "function", "map()" );
	assert.ok( typeof FPO.flatMap == "function", "flatMap()" );
	assert.ok( typeof FPO.reduce == "function", "reduce()" );
	assert.ok( typeof FPO.reduceRight == "function", "reduceRight()" );
	assert.ok( typeof FPO.flatten == "function", "flatten()" );
	assert.ok( typeof FPO.zip == "function", "zip()" );
	assert.ok( typeof FPO.trampoline == "function", "trampoline()" );
	assert.ok( FPO.transducers && typeof FPO.transducers == "object", "transducers" );
	assert.ok( typeof FPO.transducers.transduce == "function", "transducers.transduce()" );
	assert.ok( typeof FPO.transducers.into == "function", "transducers.into()" );
	assert.ok( typeof FPO.transducers.map == "function", "transducers.map()" );
	assert.ok( typeof FPO.transducers.filter == "function", "transducers.filter()" );
	assert.ok( typeof FPO.transducers.string == "function", "transducers.string()" );
	assert.ok( typeof FPO.transducers.array == "function", "transducers.array()" );
	assert.ok( typeof FPO.transducers.default == "function", "transducers.default()" );
});

QUnit.test("std API methods present",function t2(assert){
	assert.expect( 35 );

	assert.ok( typeof FPO.std.identity == "function", "identity()" );
	assert.ok( typeof FPO.std.constant == "function", "constant()" );
	assert.ok( typeof FPO.std.pick == "function", "pick()" );
	assert.ok( typeof FPO.std.pickAll == "function", "pickAll()" );
	assert.ok( typeof FPO.std.nAry == "function", "nAry()" );
	assert.ok( typeof FPO.std.unary == "function", "unary()" );
	assert.ok( typeof FPO.std.binary == "function", "binary()" );
	assert.ok( typeof FPO.std.curry == "function", "curry()" );
	assert.ok( typeof FPO.std.curryMultiple == "function", "curryMultiple()" );
	assert.ok( typeof FPO.std.uncurry == "function", "uncurry()" );
	assert.ok( typeof FPO.std.partial == "function", "partial()" );
	assert.ok( typeof FPO.std.complement == "function", "complement()" );
	assert.ok( typeof FPO.std.apply == "function", "apply()" );
	assert.ok( typeof FPO.std.unapply == "function", "unapply()" );
	assert.ok( typeof FPO.std.compose == "function", "compose()" );
	assert.ok( typeof FPO.std.pipe == "function", "pipe()" );
	assert.ok( typeof FPO.std.prop == "function", "prop()" );
	assert.ok( typeof FPO.std.setProp == "function", "setProp()" );
	assert.ok( typeof FPO.std.filterIn == "function", "filterIn()" );
	assert.ok( typeof FPO.std.filterOut == "function", "filterOut()" );
	assert.ok( typeof FPO.std.map == "function", "map()" );
	assert.ok( typeof FPO.std.flatMap == "function", "flatMap()" );
	assert.ok( typeof FPO.std.reduce == "function", "reduce()" );
	assert.ok( typeof FPO.std.reduceRight == "function", "reduceRight()" );
	assert.ok( typeof FPO.std.flatten == "function", "flatten()" );
	assert.ok( typeof FPO.std.zip == "function", "zip()" );
	assert.ok( typeof FPO.std.trampoline == "function", "trampoline()" );
	assert.ok( FPO.std.transducers && typeof FPO.std.transducers == "object", "transducers" );
	assert.ok( typeof FPO.std.transducers.transduce == "function", "transducers.transduce()" );
	assert.ok( typeof FPO.std.transducers.into == "function", "transducers.into()" );
	assert.ok( typeof FPO.std.transducers.map == "function", "transducers.map()" );
	assert.ok( typeof FPO.std.transducers.filter == "function", "transducers.filter()" );
	assert.ok( typeof FPO.std.transducers.string == "function", "transducers.string()" );
	assert.ok( typeof FPO.std.transducers.array == "function", "transducers.array()" );
	assert.ok( typeof FPO.std.transducers.default == "function", "transducers.default()" );
});

QUnit.test("API aliases present",function t3(assert){
	assert.expect( 11 );

	assert.ok( FPO.always === FPO.constant && FPO.std.always === FPO.std.constant, "always -> constant" );
	assert.ok( FPO.flow === FPO.pipe && FPO.std.flow === FPO.std.pipe, "flow -> pipe" );
	assert.ok( FPO.flowRight === FPO.compose && FPO.std.flowRight === FPO.std.compose, "flowRight -> compose" );
	assert.ok( FPO.spread === FPO.apply && FPO.std.spread === FPO.std.apply, "spread -> apply" );
	assert.ok( FPO.gather === FPO.unapply && FPO.std.gather === FPO.std.unapply, "gather -> unapply" );
	assert.ok( FPO.assoc === FPO.setProp && FPO.std.assoc === FPO.std.setProp, "assoc -> setProp" );
	assert.ok( FPO.filter === FPO.filterIn && FPO.std.filter === FPO.std.filterIn, "filter -> filterIn" );
	assert.ok( FPO.chain === FPO.flatMap && FPO.std.chain === FPO.std.flatMap, "chain -> flatMap" );
	assert.ok( FPO.fold === FPO.reduce && FPO.std.fold === FPO.std.reduce, "fold -> reduce" );
	assert.ok( FPO.foldL === FPO.reduce && FPO.std.foldL === FPO.std.reduce, "foldL -> reduce" );
	assert.ok( FPO.foldR === FPO.reduceRight && FPO.std.foldR === FPO.std.reduceRight, "foldR -> reduceRight" );
});

QUnit.test("identity()",function t4(assert){
	assert.expect( 6 );

	var v = FPO.identity( {v: 2} );
	assert.ok( v === 2, "core: v === 2" );

	v = FPO.identity()( {} )( { v: undefined } );
	assert.ok( v === undefined, "core: v === undefined" );

	v = FPO.identity()( {} )( {v: 3} );
	assert.ok( v === 3, "core: v === 3" );

	// **************************************

	v = FPO.std.identity( 2 );
	assert.ok( v === 2, "std: v === 2" );

	v = FPO.std.identity()( undefined );
	assert.ok( v === undefined, "std: v === undefined" );

	v = FPO.std.identity()( 3 );
	assert.ok( v === 3, "std: v === 3" );
});

QUnit.test("constant()",function t5(assert){
	assert.expect( 6 );

	var r = FPO.constant( {v: 2} )();
	assert.ok( r === 2, "core: r === 2" );

	r = FPO.constant()( {} )( { v: undefined } )();
	assert.ok( r === undefined, "core: r === undefined" );

	r = FPO.constant()( {} )( {v: 3} )();
	assert.ok( r === 3, "core: r === 3" );

	// **************************************

	r = FPO.std.constant( 2 )();
	assert.ok( r === 2, "std: r === 2" );

	r = FPO.std.constant()( undefined )();
	assert.ok( r === undefined, "std: r === undefined" );

	r = FPO.std.constant()( 3 )();
	assert.ok( r === 3, "std: r === 3" );
});

QUnit.test("pick()",function t6(assert){
	assert.expect( 18 );

	var obj = { x: 1, y: 2, z: 3, w: 4 };

	var r = FPO.pick( {v: obj, props: ["x","z","x","f"]} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "z" ),
		"core: r has 'x' and 'z' properties"
	);
	assert.ok(
		!_hasProp( r, "y" ) && !_hasProp( r, "w" ) && !_hasProp( r, "f" ),
		"core: r does not have 'y', 'w', or 'f' properties"
	);
	assert.ok( Object.keys( r ).length == 2, "core: r has only 2 properties" );
	assert.ok( r.x === 1 && r.z === 3, "core: r.x === 1, r.z === 3" );

	var p = FPO.pick()( {} )( {v: obj} )( {props: ["y"]} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok( _hasProp( p, "y" ), "core: p has 'y' property" );
	assert.ok( Object.keys( p ).length == 1, "core: p has only 1 property" );
	assert.ok( p.y === 2, "core: p.y === 2" );

	// **************************************

	r = FPO.std.pick( ["x","z","x","f"], obj );
	assert.ok( r && typeof r == "object", "std: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "z" ),
		"std: r has 'x' and 'z' properties"
	);
	assert.ok(
		!_hasProp( r, "y" ) && !_hasProp( r, "w" ) && !_hasProp( r, "f" ),
		"std: r does not have 'y', 'w', or 'f' properties"
	);
	assert.ok( Object.keys( r ).length == 2, "std: r has only 2 properties" );
	assert.ok( r.x === 1 && r.z === 3, "std: r.x === 1, r.z === 3" );

	p = FPO.std.pick()( ["y"] )( obj );
	assert.ok( p && typeof p == "object", "std: p is an object" );
	assert.ok( _hasProp( p, "y" ), "std: p has 'y' property" );
	assert.ok( Object.keys( p ).length == 1, "std: p has only 1 property" );
	assert.ok( p.y === 2, "std: p.y === 2" );
});

QUnit.test("pickAll()",function t7(assert){
	assert.expect( 18 );

	var obj = { x: 1, y: 2, z: 3, w: 4 };

	var r = FPO.pickAll( {v: obj, props: ["x","z","x","f"]} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "z" ) && _hasProp( r, "f" ),
		"core: r has 'x', 'z', and 'f' properties"
	);
	assert.ok(
		!_hasProp( r, "y" ) && !_hasProp( r, "w" ),
		"core: r does not have 'y' and 'w' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "core: r has only 3 properties" );
	assert.ok( r.x === 1 && r.z === 3 && r.f === undefined, "core: r.x === 1, r.z === 3, r.f === undefined" );

	var p = FPO.pickAll()( {} )( {v: obj} )( {props: ["y"]} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok( _hasProp( p, "y" ), "core: p has 'y' property" );
	assert.ok( Object.keys( p ).length == 1, "core: p has only 1 property" );
	assert.ok( p.y === 2, "core: p.y === 2" );

	// **************************************

	r = FPO.std.pickAll( ["x","z","x","f"], obj );
	assert.ok( r && typeof r == "object", "std: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "z" ) && _hasProp( r, "f" ),
		"std: r has 'x', 'z', and 'f' properties"
	);
	assert.ok(
		!_hasProp( r, "y" ) && !_hasProp( r, "w" ),
		"std: r does not have 'y' and 'w' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "std: r has only 3 properties" );
	assert.ok( r.x === 1 && r.z === 3 && r.f === undefined, "std: r.x === 1, r.z === 3, r.f === undefined" );

	p = FPO.std.pickAll()( ["y"] )( obj );
	assert.ok( p && typeof p == "object", "std: p is an object" );
	assert.ok( _hasProp( p, "y" ), "std: p has 'y' property" );
	assert.ok( Object.keys( p ).length == 1, "std: p has only 1 property" );
	assert.ok( p.y === 2, "std: p.y === 2" );
});

QUnit.test("nAry()",function t8(assert){
	assert.expect( 17 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.nAry( {fn: foo, props: ["x","y","w"]} )( {x: 1, y: 2, z: 3, w: 4} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "w" ),
		"core: r has 'x', 'y', and 'w' properties"
	);
	assert.ok( !_hasProp( r, "z" ),	"core: r does not have 'z' property" );
	assert.ok( Object.keys( r ).length == 3, "core: r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.w === 4, "core: r.x === 1, r.y === 2, r.w === 4" );

	var p = FPO.nAry()( {} )( {fn: foo} )( {props: ["w","z"]} )( {x: 1, y: 2, z: 3, w: 4} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok(
		_hasProp( p, "w" ) && _hasProp( p, "z" ),
		"core: p has 'w' and 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 2, "core: p has only 2 properties" );
	assert.ok( p.z === 3 && p.w === 4, "core: p.z === 3 and p.w === 4" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.nAry( bar, 3 )( 1, 2, 3, 4 );
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"std: r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "std: r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "std: r is [1,2,3]" );

	p = FPO.std.nAry()( bar )( 3 )( 1, 2, 3, 4 );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ),
		"std: p has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( p ).length == 3 && p.length == 3, "std: p has only 3 slots" );
	assert.ok( p[0] === 1 && p[1] === 2 && p[2] === 3, "std: p is [1,2,3]" );
});

QUnit.test("unary()",function t9(assert){
	assert.expect( 18 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.unary( {fn: foo, prop: "y"} )( {x: 1, y: 2, z: 3, w: 4} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok( _hasProp( r, "y" ), "core: r has 'y' property" );
	assert.ok(
		!_hasProp( r, "x" ) && !_hasProp( r, "z" ) && !_hasProp( r, "w" ),
		"core: r does not have 'x', 'z', or 'w' properties"
	);
	assert.ok( Object.keys( r ).length == 1, "core: r has only 1 property" );
	assert.ok( r.y === 2, "core: r.y === 2" );

	var p = FPO.unary()( {} )( {fn: foo} )( {prop: "w"} )( {x: 1, y: 2, z: 3, w: 4} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok( _hasProp( p, "w" ), "core: p has 'w' property" );
	assert.ok(
		!_hasProp( r, "x" ) && !_hasProp( r, "z" ) && !_hasProp( r, "w" ),
		"core: p does not have 'x', 'z', or 'w' properties"
	);
	assert.ok( Object.keys( p ).length == 1, "core: p has only 1 property" );
	assert.ok( p.w === 4, "core: p.w === 4" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.unary( bar )( 1, 2, 3 );
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok( _hasProp( r, "0" ), "std: r has a filled slot at index 0" );
	assert.ok( Object.keys( r ).length == 1 && r.length == 1, "std: r has only 1 slots" );
	assert.ok( r[0] === 1, "std: r is [1]" );

	p = FPO.std.unary()( bar )( 1, 2, 3 );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok( _hasProp( p, "0" ), "std: p has a filled slot at index 0" );
	assert.ok( Object.keys( p ).length == 1 && p.length == 1, "std: p has only 1 slot" );
	assert.ok( p[0] === 1, "std: p is [1]" );
});

QUnit.test("binary()",function t10(assert){
	assert.expect( 18 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.binary( {fn: foo, props: ["y","w"]} )( {x: 1, y: 2, z: 3, w: 4} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "y" ) && _hasProp( r, "w" ),
		"core: r has 'y' and 'w' properties"
	);
	assert.ok(
		!_hasProp( r, "x" ) && !_hasProp( r, "z" ),
		"core: r does not have 'x' or 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 2, "core: r has only 2 properties" );
	assert.ok( r.y === 2 && r.w === 4, "core: r.y === 2, r.w === 4" );

	var p = FPO.binary()( {} )( {fn: foo} )( {props: ["y","w"]} )( {x: 1, y: 2, z: 3, w: 4} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok(
		_hasProp( p, "y" ) && _hasProp( p, "w" ),
		"core: p has 'y' and 'w' properties"
	);
	assert.ok(
		!_hasProp( r, "x" ) && !_hasProp( p, "z" ),
		"core: p does not have 'x' or 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 2, "core: p has only 2 properties" );
	assert.ok( p.y === 2 && p.w === 4, "core: p.y === 2, p.w === 4" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.binary( bar )( 1, 2, 3 );
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"std: r has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "std: r has only 2 slots" );
	assert.ok( r[0] === 1 && r[1] === 2, "std: r is [1,2]" );

	p = FPO.std.binary()( bar )( 1, 2, 3 );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"std: p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "std: p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "std: p is [1,2]" );
});

QUnit.test("curry()",function t11(assert){
	assert.expect( 18 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.curry( {fn: foo, n: 3} )( {x: 1} )( {y: 2, z: 3} )( {w: 4} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "w" ),
		"core: r has 'x', 'y', and 'w' properties"
	);
	assert.ok( !_hasProp( r, "z" ), "core: r does not have 'z' property" );
	assert.ok( Object.keys( r ).length == 3, "core: r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.w === 4, "core: r.x === 1, r.y === 2, r.w === 4" );

	var p = FPO.curry()( {} )( {fn: foo} )()( {} )( {x: 1, y: 2} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok( _hasProp( p, "x" ), "core: p has 'x' property" );
	assert.ok( !_hasProp( p, "y" ), "core: p does not have 'y' property" );
	assert.ok( Object.keys( p ).length == 1, "core: p has only 1 property" );
	assert.ok( p.x === 1, "core: p.x === 1" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.curry( bar, 3 )( 1 )( 2, 3 )( 4 );
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"std: r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "std: r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 4, "std: r is [1,2,4]" );

	p = FPO.std.curry()( bar )()( 1, 2 );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok( _hasProp( p, "0" ), "std: p has a filled slot at index 0" );
	assert.ok( Object.keys( p ).length == 1 && p.length == 1, "std: p has only 1 slot" );
	assert.ok( p[0] === 1, "std: p is [1]" );
});


QUnit.test("curryMultiple()",function t12(assert){
	assert.expect( 16 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.curryMultiple( {fn: foo, n: 3} )( {x: 1} )( {y: 2, z: 3} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ),
		"core: r has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "core: r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.z === 3, "core: r.x === 1, r.y === 2, r.z === 3" );

	var p = FPO.curryMultiple()( {} )( {fn: foo} )()( {} )( {x: 1, y: 2} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ),
		"core: p has 'x' and 'y' properties"
	);
	assert.ok( Object.keys( p ).length == 2, "core: p has only 2 properties" );
	assert.ok( p.x === 1 && p.y === 2, "core: p.x === 1, p.y === 2" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.curryMultiple( bar, 3 )( 1 )( 2, 3 );
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"std: r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "std: r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "std: r is [1,2,3]" );

	p = FPO.std.curryMultiple()( bar )()( 1, 2 );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"std: p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "std: p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "std: p is [1,2]" );
});

QUnit.test("uncurry()",function t13(assert){
	assert.expect( 16 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.uncurry( {fn: FPO.curry( {fn: foo, n: 3} )} )( {x: 1, y: 2, z: 3} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ),
		"core: r has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "core: r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.z === 3, "core: r.x === 1, r.y === 2, r.z === 3" );

	var p = FPO.uncurry()( {} )( {fn: FPO.curry( {fn: foo, n: 2} )} )( {x: 1, y: 2} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ),
		"core: p has 'x' and 'y' properties"
	);
	assert.ok( Object.keys( p ).length == 2, "core: p has only 2 properties" );
	assert.ok( p.x === 1 && p.y === 2, "core: p.x === 1, p.y === 2" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.uncurry( FPO.std.curry( bar, 3 ) )( 1, 2, 3 );
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"std: r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "std: r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "std: r is [1,2,3]" );

	p = FPO.std.uncurry()( FPO.std.curry( bar, 2 ) )( 1, 2 );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"std: p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "std: p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "std: p is [1,2]" );
});

QUnit.test("partial()",function t14(assert){
	assert.expect( 16 );

	function foo(argsObj) { return argsObj; }

	var r = FPO.partial( {fn: foo, args: {z:3}} )( {x: 1, y: 2} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ),
		"core: r has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "core: r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.z === 3, "core: r.x === 1, r.y === 2, r.z === 3" );

	var p = FPO.partial()( {} )( {fn: foo} )( {args: {y:2}} )( {x: 1} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ),
		"core: p has 'x' and 'y' properties"
	);
	assert.ok( Object.keys( p ).length == 2, "core: p has only 2 properties" );
	assert.ok( p.x === 1 && p.y === 2, "core: p.x === 1, p.y === 2" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.partial( bar, [1] )( 2, 3 );
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"std: r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "std: r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "std: r is [1,2,3]" );

	p = FPO.std.partial()( bar )( [1] )( 2 );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"std: p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "std: p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "std: p is [1,2]" );
});

QUnit.test("complement()",function t15(assert){
	assert.expect( 4 );

	function xPlusYEven(argsObj) { return (argsObj.x + argsObj.y) % 2 == 0; }

	var xPlusYOdd = FPO.complement( {fn: xPlusYEven} );
	assert.ok( xPlusYOdd( {x: 1, y: 2} ) === true, "core: xPlusYOdd({x:1,y:2}) === true" );

	xPlusYOdd = FPO.complement()( {} )( {fn: xPlusYEven} );
	assert.ok( xPlusYOdd( {x: 2, y: 4} ) === false, "core: xPlusYOdd({x:2,y:4}) === false" );

	// **************************************

	function argPlusArgEven(...args) { return (args[0] + args[1]) % 2 == 0; }

	var argPlusArgOdd = FPO.std.complement( argPlusArgEven );
	assert.ok( argPlusArgOdd( 1, 2 ) === true, "std: argPlusArgOdd(1,2) === true" );

	argPlusArgOdd = FPO.std.complement()( argPlusArgEven );
	assert.ok( argPlusArgOdd( 2, 4 ) === false, "std: argPlusArgOdd(2,4) === false" );
});

QUnit.test("apply()",function t16(assert){
	assert.expect( 16 );

	function foo(x,y,z) { return {x,y,z}; }

	var r = FPO.apply( {fn: foo} )( {y: 2, z: 3, x: 1} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ),
		"core: r has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "core: r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.z === 3, "core: r.x === 1, r.y === 2, r.z === 3" );

	// NOTE: intentionally reversing applied prop order
	var p = FPO.apply()( {} )( {fn: foo, props: ["z","y","x"]} )( {y: 2, z: 3, x: 1} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ) && _hasProp( p, "z" ),
		"core: p has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 3, "core: p has only 3 properties" );
	assert.ok( p.x === 3 && p.y === 2 && p.z === 1, "core: p.x === 3, p.y === 2, p.z === 1" );

	// **************************************

	function bar(...args) { return args; }

	r = FPO.std.apply( bar )( [1,2,3] );
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"std: r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "std: r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "std: r is [1,2,3]" );

	p = FPO.std.apply()( bar )( [1,2] );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"std: p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "std: p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "std: p is [1,2]" );
});

QUnit.test("unapply()",function t17(assert){
	assert.expect( 16 );

	function foo({x,y,z}) { return {x,y,z}; }

	var r = FPO.unapply( {fn: foo, props: ["x","y","z"]} )( 1, 2, 3 );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ),
		"core: r has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( r ).length == 3, "core: r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.z === 3, "core: r.x === 1, r.y === 2, r.z === 3" );

	// NOTE: intentionally reversing (un)applied prop order
	var p = FPO.unapply()( {} )( {fn: foo} )( {props: ["z","y","x"]} )( 1, 2, 3 );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ) && _hasProp( p, "z" ),
		"core: p has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 3, "core: p has only 3 properties" );
	assert.ok( p.x === 3 && p.y === 2 && p.z === 1, "core: p.x === 3, p.y === 2, p.z === 1" );

	// **************************************

	function bar(args) { return args; }

	r = FPO.std.unapply( bar )( 1, 2, 3 );
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"std: r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "std: r has only 3 slots" );
	assert.ok( r[0] === 1 && r[1] === 2 && r[2] === 3, "std: r is [1,2,3]" );

	p = FPO.std.unapply()( bar )( 1, 2 );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"std: p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "std: p has only 2 slots" );
	assert.ok( p[0] === 1 && p[1] === 2, "std: p is [1,2]" );
});

QUnit.test("compose()",function t18(assert){
	assert.expect( 6 );

	function foo(x) { return `foo,${x}`; }
	function bar(x) { return `bar,${x}`; }
	function baz(x) { return `baz,${x}`; }

	var r = FPO.compose( {fns: [foo,bar,baz]} )( 3, 4 );
	assert.ok( r === "foo,bar,baz,3", "core: [foo,bar,baz] --> 'foo,bar,baz,3'" );

	r = FPO.compose()( {} )( {fns:[foo]} )( 3, 4 );
	assert.ok( r === "foo,3", "core: [foo] --> 'foo,3'" );

	r = FPO.compose()( {} )( {fns:[]} )( 3, 4 );
	assert.ok( r === 3, "core: [] --> 3" );

	// **************************************

	r = FPO.std.compose( [foo,bar,baz] )( 3, 4 );
	assert.ok( r === "foo,bar,baz,3", "std: [foo,bar,baz] --> 'foo,bar,baz,3'" );

	r = FPO.std.compose()( [foo] )( 3, 4 );
	assert.ok( r === "foo,3", "std: [foo] --> 'foo,3'" );

	r = FPO.std.compose()( [] )( 3, 4 );
	assert.ok( r === 3, "std: [foo] --> 3" );
});

QUnit.test("pipe()",function t19(assert){
	assert.expect( 6 );

	function foo(x) { return `foo,${x}`; }
	function bar(x) { return `bar,${x}`; }
	function baz(x) { return `baz,${x}`; }

	var r = FPO.pipe( {fns: [baz,bar,foo]} )( 3, 4 );
	assert.ok( r === "foo,bar,baz,3", "core: [foo,bar,baz] --> 'foo,bar,baz,3'" );

	r = FPO.pipe()( {} )( {fns:[foo]} )( 3, 4 );
	assert.ok( r === "foo,3", "core: [foo] --> 'foo,3'" );

	r = FPO.pipe()( {} )( {fns:[]} )( 3, 4 );
	assert.ok( r === 3, "core: [] --> 3" );

	// **************************************

	r = FPO.std.pipe( [baz,bar,foo] )( 3, 4 );
	assert.ok( r === "foo,bar,baz,3", "std: [foo,bar,baz] --> 'foo,bar,baz,3'" );

	r = FPO.std.pipe()( [foo] )( 3, 4 );
	assert.ok( r === "foo,3", "std: [foo] --> 'foo,3'" );

	r = FPO.std.pipe()( [] )( 3, 4 );
	assert.ok( r === 3, "std: [foo] --> 3" );
});

QUnit.test("prop()",function t20(assert){
	assert.expect( 6 );

	var obj1 = { x: 1, y: 2, z: 3, w: 4 };
	var obj2 = { x: 1, y: 2 };

	var r = FPO.prop( {v: obj1} )( {prop: "x"} );
	assert.ok( r === 1, "core: r === 1" );

	r = FPO.prop( {v: obj1} )()( {} )( {prop: "y"} );
	assert.ok( r === 2, "core: r === 2" );

	var f = FPO.prop( {prop: "z"} )()( {} );
	var p = f( {v: obj1} )
	assert.ok( p === 3, "core: p === 3" );

	p = f( {v: obj2} );
	assert.ok( p === undefined, "core: p === undefined" );

	// **************************************

	r = FPO.std.prop( "z" )( obj1 );
	assert.ok( r === 3, "std: r === 3" );

	p = FPO.std.prop()( "z" )()( obj2 );
	assert.ok( p === undefined, "std: p === undefined" );
});

QUnit.test("setProp()",function t21(assert){
	assert.expect( 20 );

	var obj1 = { x: 1, y: 2, z: 3, w: 4 };
	var obj2 = { x: 1, y: 2 };

	var r = FPO.setProp( {o: obj1, prop: "x"} )( {v: 10} );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok( r !== obj1, "core: r is not obj1" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ) && _hasProp( r, "w" ),
		"core: r has 'x', 'y', 'z', and 'w' properties"
	);
	assert.ok( Object.keys( r ).length == 4, "core: r has only 4 properties" );
	assert.ok( r.x === 10 && r.y === 2 && r.z === 3 && r.w === 4, "core: r.x === 10, r.y === 2, r.z === 3, r.w === 4" );

	var p = FPO.setProp()( {v: 10} )()( {prop: "z"} )( {} )( {o: obj2} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok( p !== obj2, "core: p is not obj2" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ) && _hasProp( p, "z" ),
		"core: p has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 3, "core: p has only 3 properties" );
	assert.ok( p.x === 1 && p.y === 2 && p.z === 10, "core: p.x === 1, p.y === 2, p.z === 10" );

	// **************************************

	r = FPO.std.setProp( "x", obj1 )( 10 );
	assert.ok( r && typeof r == "object", "std: r is an object" );
	assert.ok( r !== obj1, "std: r is not obj1" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "z" ) && _hasProp( r, "w" ),
		"std: r has 'x', 'y', 'z', and 'w' properties"
	);
	assert.ok( Object.keys( r ).length == 4, "std: r has only 4 properties" );
	assert.ok( r.x === 10 && r.y === 2 && r.z === 3 && r.w === 4, "std: r.x === 10, r.y === 2, r.z === 3, r.w === 4" );

	p = FPO.std.setProp()( "z" )()( obj2 )()( 10 );
	assert.ok( p && typeof p == "object", "std: p is an object" );
	assert.ok( p !== obj2, "std: p is not obj2" );
	assert.ok(
		_hasProp( p, "x" ) && _hasProp( p, "y" ) && _hasProp( p, "z" ),
		"std: p has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 3, "std: p has only 3 properties" );
	assert.ok( p.x === 1 && p.y === 2 && p.z === 10, "std: p.x === 1, p.y === 2, p.z === 10" );
});





function _hasProp(obj,prop) {
	return Object.hasOwnProperty.call( obj, prop );
}
