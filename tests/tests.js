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
	assert.expect( 26 );

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

	var q = FPO.pick()( {} )( {v: obj} )( {props: []} );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok( Object.keys( q ).length == 0, "core: q has no properties" );

	var t = FPO.pick()( {} )( {v: obj} )( {props: undefined} );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok( Object.keys( t ).length == 0, "core: t has no properties" );

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

	q = FPO.std.pick()( [] )( obj );
	assert.ok( q && typeof q == "object", "std: q is an object" );
	assert.ok( Object.keys( q ).length == 0, "std: q has no properties" );

	t = FPO.std.pick()( undefined )( obj );
	assert.ok( t && typeof t == "object", "std: t is an object" );
	assert.ok( Object.keys( t ).length == 0, "std: t has no properties" );
});

QUnit.test("pickAll()",function t7(assert){
	assert.expect( 26 );

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

	var q = FPO.pickAll()( {} )( {v: obj} )( {props: []} );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok( Object.keys( q ).length == 0, "core: q has no properties" );

	var t = FPO.pickAll()( {} )( {v: obj} )( {props: undefined} );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok( Object.keys( t ).length == 0, "core: t has no properties" );

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

	q = FPO.std.pickAll()( [] )( obj );
	assert.ok( q && typeof q == "object", "std: q is an object" );
	assert.ok( Object.keys( q ).length == 0, "std: q has no properties" );

	t = FPO.std.pickAll()( undefined )( obj );
	assert.ok( t && typeof t == "object", "std: t is an object" );
	assert.ok( Object.keys( t ).length == 0, "std: t has no properties" );
});

QUnit.test("nAry()",function t8(assert){
	assert.expect( 25 );

	function foo(argsObj) { return argsObj; }
	var obj = { x: 1, y: 2, z: 3, w: 4 };

	var r = FPO.nAry( {fn: foo, props: ["x","y","w"]} )( obj );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok(
		_hasProp( r, "x" ) && _hasProp( r, "y" ) && _hasProp( r, "w" ),
		"core: r has 'x', 'y', and 'w' properties"
	);
	assert.ok( !_hasProp( r, "z" ),	"core: r does not have 'z' property" );
	assert.ok( Object.keys( r ).length == 3, "core: r has only 3 properties" );
	assert.ok( r.x === 1 && r.y === 2 && r.w === 4, "core: r.x === 1, r.y === 2, r.w === 4" );

	var p = FPO.nAry()( {} )( {fn: foo} )( {props: ["w","z"]} )( obj );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok(
		_hasProp( p, "w" ) && _hasProp( p, "z" ),
		"core: p has 'w' and 'z' properties"
	);
	assert.ok( Object.keys( p ).length == 2, "core: p has only 2 properties" );
	assert.ok( p.z === 3 && p.w === 4, "core: p.z === 3 and p.w === 4" );

	var q = FPO.nAry()( {} )( {fn: foo} )( {props: []} )( obj );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok( Object.keys( q ).length == 0, "core: q has no properties" );

	var t = FPO.nAry()( {} )( {fn: foo} )( {props: undefined} )( obj );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok( Object.keys( t ).length == 0, "core: t has no properties" );

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

	q = FPO.std.nAry()( bar )( 0 )( obj );
	assert.ok( q && Array.isArray( q ), "std: q is an array" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "std: q is []" );

	t = FPO.std.nAry()( bar )( undefined )( obj );
	assert.ok( t && Array.isArray( t ), "std: t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "std: t is []" );
});

QUnit.test("unary()",function t9(assert){
	assert.expect( 22 );

	function foo(argsObj) { return argsObj; }
	var obj = { x: 1, y: 2, z: 3, w: 4 };

	var r = FPO.unary( {fn: foo, prop: "y"} )( obj );
	assert.ok( r && typeof r == "object", "core: r is an object" );
	assert.ok( _hasProp( r, "y" ), "core: r has 'y' property" );
	assert.ok(
		!_hasProp( r, "x" ) && !_hasProp( r, "z" ) && !_hasProp( r, "w" ),
		"core: r does not have 'x', 'z', or 'w' properties"
	);
	assert.ok( Object.keys( r ).length == 1, "core: r has only 1 property" );
	assert.ok( r.y === 2, "core: r.y === 2" );

	var p = FPO.unary()( {} )( {fn: foo} )( {prop: "w"} )( obj );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok( _hasProp( p, "w" ), "core: p has 'w' property" );
	assert.ok(
		!_hasProp( r, "x" ) && !_hasProp( r, "z" ) && !_hasProp( r, "w" ),
		"core: p does not have 'x', 'z', or 'w' properties"
	);
	assert.ok( Object.keys( p ).length == 1, "core: p has only 1 property" );
	assert.ok( p.w === 4, "core: p.w === 4" );

	var q = FPO.unary( {fn: foo} )( {prop: undefined} )( obj );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok( Object.keys( q ).length == 0, "core: q has no properties" );

	var t = FPO.unary( {fn: foo} )( {prop: "-- whatever --"} )( obj );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok( Object.keys( t ).length == 0, "core: t has no properties" );

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
	assert.expect( 24 );

	function foo(argsObj) { return argsObj; }
	var obj = { x: 1, y: 2, z: 3, w: 4 };

	var r = FPO.binary( {fn: foo, props: ["y","w"]} )( obj );
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

	var p = FPO.binary()( {} )( {fn: foo} )( {props: ["y","w"]} )( obj );
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

	var q = FPO.binary( {fn: foo} )( {props: undefined} )( obj );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok( Object.keys( q ).length == 0, "core: q has no properties" );

	var t = FPO.binary( {fn: foo} )( {props: []} )( obj );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok( Object.keys( t ).length == 0, "core: t has no properties" );

	var s = FPO.binary( {fn: foo} )( {props: [undefined,"-- whatever --"]} )( obj );
	assert.ok( s && typeof s == "object", "core: s is an object" );
	assert.ok( Object.keys( s ).length == 0, "core: s has no properties" );

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
	assert.expect( 32 );

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

	var q = FPO.curry()( {} )( {fn: foo, n: undefined} )( {x: 1, y: 2} );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok( _hasProp( q, "x" ), "core: q has 'x' property" );
	assert.ok( !_hasProp( q, "y" ), "core: q does not have 'y' property" );
	assert.ok( Object.keys( q ).length == 1, "core: q has only 1 property" );
	assert.ok( q.x === 1, "core: q.x === 1" );

	var t = FPO.curry()( {} )( {fn: foo, n: 0} )( {x: 1, y: 2} );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok( _hasProp( t, "x" ), "core: t has 'x' property" );
	assert.ok( !_hasProp( t, "y" ), "core: t does not have 'y' property" );
	assert.ok( Object.keys( t ).length == 1, "core: t has only 1 property" );
	assert.ok( t.x === 1, "core: t.x === 1" );

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

	q = FPO.std.curry( bar, 0 )( 1, 2 );
	assert.ok( q && Array.isArray( q ), "std: q is an array" );
	assert.ok( _hasProp( q, "0" ), "std: q has a filled slot at index 0" );
	assert.ok( Object.keys( q ).length == 1 && q.length == 1, "std: q has only 1 slot" );
	assert.ok( q[0] === 1, "std: q is [1]" );
});


QUnit.test("curryMultiple()",function t12(assert){
	assert.expect( 28 );

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

	var q = FPO.curryMultiple()( {} )( {fn: foo, n: undefined} )( {x: 1, y: 2} );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok(
		_hasProp( q, "x" ) && _hasProp( q, "y" ),
		"core: q has 'x' and 'y' properties"
	);
	assert.ok( Object.keys( q ).length == 2, "core: q has only 2 properties" );
	assert.ok( q.x === 1 && q.y === 2, "core: q.x === 1, q.y === 2" );

	var t = FPO.curryMultiple()( {} )( {fn: foo, n: 0} )( {x: 1, y: 2} );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok(
		_hasProp( t, "x" ) && _hasProp( t, "y" ),
		"core: t has 'x' and 'y' properties"
	);
	assert.ok( Object.keys( t ).length == 2, "core: t has only 2 properties" );
	assert.ok( t.x === 1 && t.y === 2, "core: t.x === 1, t.y === 2" );

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

	q = FPO.std.curryMultiple( bar, 0 )( 1, 2 );
	assert.ok( q && Array.isArray( q ), "std: q is an array" );
	assert.ok(
		_hasProp( q, "0" ) && _hasProp( q, "1" ),
		"std: q has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( q ).length == 2 && q.length == 2, "std: q has only 2 slots" );
	assert.ok( q[0] === 1 && q[1] === 2, "std: q is [1,2]" );
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
	assert.expect( 32 );

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

	var q = FPO.partial()( {} )( {fn: foo} )( {args: undefined} )( {x: 1} );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok( _hasProp( q, "x" ), "core: q has 'x' property" );
	assert.ok( Object.keys( q ).length == 1, "core: q has only 1 property" );
	assert.ok( q.x === 1, "core: q.x === 1" );

	var t = FPO.partial()( {} )( {fn: foo} )( {args: {}} )( {x: 1} );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok( _hasProp( t, "x" ), "core: t has 'x' property" );
	assert.ok( Object.keys( t ).length == 1, "core: t has only 1 property" );
	assert.ok( t.x === 1, "core: t.x === 1" );

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

	q = FPO.std.partial( bar, undefined )( 1, 2 );
	assert.ok( q && Array.isArray( q ), "std: q is an array" );
	assert.ok(
		_hasProp( q, "0" ) && _hasProp( q, "1" ),
		"std: p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( q ).length == 2 && q.length == 2, "std: q has only 2 slots" );
	assert.ok( q[0] === 1 && q[1] === 2, "std: q is [1,2]" );

	t = FPO.std.partial( bar, [] )( 1, 2 );
	assert.ok( t && Array.isArray( t ), "std: t is an array" );
	assert.ok(
		_hasProp( t, "0" ) && _hasProp( t, "1" ),
		"std: p has a filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( t ).length == 2 && t.length == 2, "std: t has only 2 slots" );
	assert.ok( t[0] === 1 && t[1] === 2, "std: t is [1,2]" );
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
	assert.expect( 24 );

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

	var q = FPO.apply( {fn: foo, props: undefined} )( {y: 2, z: 3, x: 1} );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok(
		_hasProp( q, "x" ) && _hasProp( q, "y" ) && _hasProp( q, "z" ),
		"core: q has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( q ).length == 3, "core: q has only 3 properties" );
	assert.ok( q.x === 1 && q.y === 2 && q.z === 3, "core: q.x === 1, q.y === 2, q.z === 3" );

	var t = FPO.apply( {fn: foo, props: []} )( {y: 2, z: 3, x: 1} );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok(
		_hasProp( t, "x" ) && _hasProp( t, "y" ) && _hasProp( t, "z" ),
		"core: q has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( t ).length == 3, "core: t has only 3 properties" );
	assert.ok( t.x === undefined && t.y === undefined && t.z === undefined, "core: t.x === undefined, t.y === undefined, t.z === undefined" );

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
	assert.expect( 24 );

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

	var q = FPO.unapply( {fn: foo, props: undefined} )( 1, 2, 3 );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok(
		_hasProp( q, "x" ) && _hasProp( q, "y" ) && _hasProp( q, "z" ),
		"core: q has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( q ).length == 3, "core: q has only 3 properties" );
	assert.ok( q.x === undefined && q.y === undefined && q.z === undefined, "core: q.x === undefined, q.y === undefined, q.z === undefined" );

	var t = FPO.unapply( {fn: foo, props: []} )( 1, 2, 3 );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok(
		_hasProp( t, "x" ) && _hasProp( t, "y" ) && _hasProp( t, "z" ),
		"core: t has 'x', 'y', and 'z' properties"
	);
	assert.ok( Object.keys( t ).length == 3, "core: t has only 3 properties" );
	assert.ok( t.x === undefined && t.y === undefined && t.z === undefined, "core: t.x === undefined, t.y === undefined, t.z === undefined" );

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
	assert.expect( 7 );

	function foo(x) { return `foo,${x}`; }
	function bar(x) { return `bar,${x}`; }
	function baz(x) { return `baz,${x}`; }

	var r = FPO.compose( {fns: [foo,bar,baz]} )( 3, 4 );
	assert.ok( r === "foo,bar,baz,3", "core: r === 'foo,bar,baz,3'" );

	var p = FPO.compose()( {} )( {fns: [foo]} )( 3, 4 );
	assert.ok( p === "foo,3", "core: p === 'foo,3'" );

	var q = FPO.compose()( {} )( {fns: undefined} )( 3, 4 );
	assert.ok( q === 3, "core: q === 3" );

	var t = FPO.compose()( {} )( {fns: []} )( 3, 4 );
	assert.ok( t === 3, "core: t === 3" );

	// **************************************

	r = FPO.std.compose( [foo,bar,baz] )( 3, 4 );
	assert.ok( r === "foo,bar,baz,3", "std: r === 'foo,bar,baz,3'" );

	p = FPO.std.compose()( [foo] )( 3, 4 );
	assert.ok( p === "foo,3", "std: p === 'foo,3'" );

	q = FPO.std.compose()( [] )( 3, 4 );
	assert.ok( q === 3, "std: q === 3" );
});

QUnit.test("pipe()",function t19(assert){
	assert.expect( 7 );

	function foo(x) { return `foo,${x}`; }
	function bar(x) { return `bar,${x}`; }
	function baz(x) { return `baz,${x}`; }

	var r = FPO.pipe( {fns: [baz,bar,foo]} )( 3, 4 );
	assert.ok( r === "foo,bar,baz,3", "core: r === 'foo,bar,baz,3'" );

	var p = FPO.pipe()( {} )( {fns: [foo]} )( 3, 4 );
	assert.ok( p === "foo,3", "p === 'foo,3'" );

	var q = FPO.pipe()( {} )( {fns: undefined} )( 3, 4 );
	assert.ok( q === 3, "core: q === 3" );

	var t = FPO.pipe()( {} )( {fns: []} )( 3, 4 );
	assert.ok( t === 3, "core: t === 3" );

	// **************************************

	r = FPO.std.pipe( [baz,bar,foo] )( 3, 4 );
	assert.ok( r === "foo,bar,baz,3", "std: r === 'foo,bar,baz,3'" );

	p = FPO.std.pipe()( [foo] )( 3, 4 );
	assert.ok( p === "foo,3", "std: p === 'foo,3'" );

	q = FPO.std.pipe()( [] )( 3, 4 );
	assert.ok( q === 3, "std: q === 3" );
});

QUnit.test("prop()",function t20(assert){
	assert.expect( 10 );

	var obj1 = { x: 1, y: 2, z: 3, w: 4 };
	var obj2 = { x: 1, y: 2 };

	var r = FPO.prop( {v: obj1} )( {prop: "x"} );
	assert.ok( r === 1, "core: r === 1" );

	var p = FPO.prop( {v: obj1} )()( {} )( {prop: "y"} );
	assert.ok( p === 2, "core: p === 2" );

	var f = FPO.prop( {prop: "z"} )()( {} );
	var q = f( {v: obj1} )
	assert.ok( q === 3, "core: q === 3" );

	var t = f( {v: obj2} );
	assert.ok( t === undefined, "core: t === undefined" );

	var s = FPO.prop( {prop: undefined, v: undefined} );
	assert.ok( s === undefined, "core: s === undefined" );

	var u = FPO.prop( {prop: "", v: {}} );
	assert.ok( u === undefined, "core: u === undefined" );

	// **************************************

	r = FPO.std.prop( "z" )( obj1 );
	assert.ok( r === 3, "std: r === 3" );

	p = FPO.std.prop()( "z" )()( obj2 );
	assert.ok( p === undefined, "std: p === undefined" );

	q = FPO.std.prop( undefined )( undefined );
	assert.ok( q === undefined, "std: q === undefined" );

	t = FPO.std.prop( "" )( {} );
	assert.ok( t === undefined, "std: t === undefined" );
});

QUnit.test("setProp()",function t21(assert){
	assert.expect( 36 );

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

	var q = FPO.setProp( {v: 10, prop: undefined, o: undefined} );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok( _hasProp( q, "" ), "core: q has '' property" );
	assert.ok( Object.keys( q ).length == 1, "core: q has only 1 property" );
	assert.ok( q[""] === 10, "core: q[''] === 10" );

	var t = FPO.setProp( {v: 10, prop: "", o: {}} );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok( _hasProp( t, "" ), "core: t has '' property" );
	assert.ok( Object.keys( t ).length == 1, "core: t has only 1 property" );
	assert.ok( t[""] === 10, "core: t[''] === 10" );

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

	q = FPO.std.setProp( undefined )( undefined )( 10 );
	assert.ok( q && typeof q == "object", "core: q is an object" );
	assert.ok( _hasProp( q, "" ), "core: q has '' property" );
	assert.ok( Object.keys( q ).length == 1, "core: q has only 1 property" );
	assert.ok( q[""] === 10, "core: q[''] === 10" );

	t = FPO.std.setProp( "" )( {} )( 10 );
	assert.ok( t && typeof t == "object", "core: t is an object" );
	assert.ok( _hasProp( t, "" ), "core: t has '' property" );
	assert.ok( Object.keys( t ).length == 1, "core: t has only 1 property" );
	assert.ok( t[""] === 10, "core: t[''] === 10" );
});

QUnit.test("filterIn()",function t22(assert){
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
	assert.ok( r && Array.isArray( r ), "core: r is an array" );
	assert.ok( r !== list, "core: r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"core: r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "core: r has only 2 slots" );
	assert.ok( r[0] === 2 && r[1] === 4, "core: r is [2,4]" );

	var p = FPO.filterIn()( {} )( {fn: objIsEven} )()( {arr: list} );
	assert.ok( p && Array.isArray( p ), "core: p is an array" );
	assert.ok( p !== list, "core: p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"core: p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "core: p has only 2 slots" );
	assert.ok( p[0] === 2 && p[1] === 4, "core: p is [2,4]" );

	var q = FPO.filterIn( {fn: alwaysFalse, arr: list} );
	assert.ok( q && Array.isArray( q ), "core: q is an array" );
	assert.ok( q !== list, "core: q is not list" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "core: q has no slots" );

	var t = FPO.filterIn( {fn: objIsEven, arr: undefined} );
	assert.ok( t && Array.isArray( t ), "core: t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "core: t has no slots" );

	var s = FPO.filterIn( {fn: objIsEven, arr: []} );
	assert.ok( s && Array.isArray( s ), "core: s is an array" );
	assert.ok( Object.keys( s ).length == 0 && s.length == 0, "core: s has no slots" );

	var u = FPO.filterIn( {fn: objCheckParams, arr: list} );
	assert.ok( u && Array.isArray( u ), "core: u is an array" );
	assert.ok( Object.keys( u ).length == 0 && u.length == 0, "core: u has no slots" );

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
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok( r !== list, "std: r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"std: r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "std: r has only 2 slots" );
	assert.ok( r[0] === 2 && r[1] === 4, "std: r is [2,4]" );

	p = FPO.std.filterIn()( isEven )()( list );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok( p !== list, "std: p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"std: p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "std: p has only 2 slots" );
	assert.ok( p[0] === 2 && p[1] === 4, "std: p is [2,4]" );

	q = FPO.std.filterIn( alwaysFalse, list );
	assert.ok( q && Array.isArray( q ), "std: q is an array" );
	assert.ok( q !== list, "std: q is not list" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "std: q has no slots" );

	t = FPO.std.filterIn( isEven, undefined );
	assert.ok( t && Array.isArray( t ), "std: t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "std: t has no slots" );

	s = FPO.std.filterIn( isEven, [] );
	assert.ok( s && Array.isArray( s ), "std: s is an array" );
	assert.ok( Object.keys( s ).length == 0 && s.length == 0, "std: s has no slots" );

	u = FPO.std.filterIn( checkParams, list );
	assert.ok( u && Array.isArray( u ), "std: u is an array" );
	assert.ok( Object.keys( u ).length == 0 && u.length == 0, "std: u has no slots" );
});

QUnit.test("filterOut()",function t23(assert){
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
	assert.ok( r && Array.isArray( r ), "core: r is an array" );
	assert.ok( r !== list, "core: r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"core: r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "core: r has only 2 slots" );
	assert.ok( r[0] === 2 && r[1] === 4, "core: r is [2,4]" );

	var p = FPO.filterOut()( {} )( {fn: objIsOdd} )()( {arr: list} );
	assert.ok( p && Array.isArray( p ), "core: p is an array" );
	assert.ok( p !== list, "core: p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"core: p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "core: p has only 2 slots" );
	assert.ok( p[0] === 2 && p[1] === 4, "core: p is [2,4]" );

	var q = FPO.filterOut( {fn: alwaysTrue, arr: list} );
	assert.ok( q && Array.isArray( q ), "core: q is an array" );
	assert.ok( q !== list, "core: q is not list" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "core: q has no slots" );

	var t = FPO.filterOut( {fn: objIsOdd, arr: undefined} );
	assert.ok( t && Array.isArray( t ), "core: t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "core: t has no slots" );

	var s = FPO.filterOut( {fn: objIsOdd, arr: []} );
	assert.ok( s && Array.isArray( s ), "core: s is an array" );
	assert.ok( Object.keys( s ).length == 0 && s.length == 0, "core: s has no slots" );

	var u = FPO.filterOut( {fn: objCheckParams, arr: list} );
	assert.ok( u && Array.isArray( u ), "core: u is an array" );
	assert.ok( Object.keys( u ).length == 0 && u.length == 0, "core: u has no slots" );

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
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok( r !== list, "std: r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"std: r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "std: r has only 2 slots" );
	assert.ok( r[0] === 2 && r[1] === 4, "std: r is [2,4]" );

	p = FPO.std.filterOut()( isOdd )()( list );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok( p !== list, "std: p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"std: p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "std: p has only 2 slots" );
	assert.ok( p[0] === 2 && p[1] === 4, "std: p is [2,4]" );

	q = FPO.std.filterOut( alwaysTrue, list );
	assert.ok( q && Array.isArray( q ), "std: q is an array" );
	assert.ok( q !== list, "std: q is not list" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "std: q has no slots" );

	t = FPO.std.filterOut( isOdd, undefined );
	assert.ok( t && Array.isArray( t ), "std: t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "std: t has no slots" );

	s = FPO.std.filterOut( isOdd, [] );
	assert.ok( s && Array.isArray( s ), "std: s is an array" );
	assert.ok( Object.keys( s ).length == 0 && s.length == 0, "std: s has no slots" );

	u = FPO.std.filterOut( checkParams, list );
	assert.ok( u && Array.isArray( u ), "std: u is an array" );
	assert.ok( Object.keys( u ).length == 0 && u.length == 0, "std: u has no slots" );
});

QUnit.test("map()",function t24(assert){
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
	assert.ok( r && Array.isArray( r ), "core: r is an array" );
	assert.ok( r !== list, "core: r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"core: r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "core: r has only 2 slots" );
	assert.ok( r[0] === 10 && r[1] === 20, "core: r is [10,20]" );

	var p = FPO.map()( {} )( {fn: objMul10} )()( {arr: list} );
	assert.ok( p && Array.isArray( p ), "core: p is an array" );
	assert.ok( p !== list, "core: p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"core: p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "core: p has only 2 slots" );
	assert.ok( p[0] === 10 && p[1] === 20, "core: p is [10,20]" );

	var q = FPO.map( {fn: objMul10, arr: undefined} );
	assert.ok( q && Array.isArray( q ), "core: q is an array" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "core: q has no slots" );

	var t = FPO.map( {fn: objMul10, arr: []} );
	assert.ok( t && Array.isArray( t ), "core: t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "core: t has no slots" );

	var s = FPO.map( {fn: objCheckParams, arr: list} );
	assert.ok( s && Array.isArray( s ), "core: s is an array" );
	assert.ok( s !== list, "core: s is not list" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ),
		"core: s has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( s ).length == 2 && s.length == 2, "core: s has only 2 slots" );
	assert.ok( s[0] === true && s[1] === true, "core: s is [true,true]" );

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
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok( r !== list, "std: r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ),
		"std: r has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( r ).length == 2 && r.length == 2, "std: r has only 2 slots" );
	assert.ok( r[0] === 10 && r[1] === 20, "std: r is [10,20]" );

	p = FPO.std.map()( mul10 )()( list );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok( p !== list, "std: p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ),
		"std: p has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( p ).length == 2 && p.length == 2, "std: p has only 2 slots" );
	assert.ok( p[0] === 10 && p[1] === 20, "std: p is [10,20]" );

	q = FPO.std.map( mul10, undefined );
	assert.ok( q && Array.isArray( q ), "std: q is an array" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "std: q has no slots" );

	t = FPO.std.map( mul10, [] );
	assert.ok( t && Array.isArray( t ), "std: t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "std: t has no slots" );

	s = FPO.std.map( checkParams, list );
	assert.ok( s && Array.isArray( s ), "std: s is an array" );
	assert.ok( s !== list, "std: s is not list" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ),
		"std: s has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( s ).length == 2 && s.length == 2, "std: s has only 2 slots" );
	assert.ok( s[0] === true && s[1] === true, "std: s is [true,true]" );
});

QUnit.test("flatMap()",function t25(assert){
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
	assert.ok( r && Array.isArray( r ), "core: r is an array" );
	assert.ok( r !== list, "core: r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"core: r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "core: r has only 3 slots" );
	assert.ok( r[0] === 10 && r[1] === 100 && r[2] === 20, "core: r is [10,100,20]" );

	var p = FPO.flatMap()( {} )( {fn: objMul10} )()( {arr: list} );
	assert.ok( p && Array.isArray( p ), "core: p is an array" );
	assert.ok( p !== list, "core: p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ),
		"core: p has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "core: p has only 3 slots" );
	assert.ok( p[0] === 10 && p[1] === 100 && p[2] === 20, "core: p is [10,100,20]" );

	var q = FPO.flatMap( {fn: objMul10, arr: undefined} );
	assert.ok( q && Array.isArray( q ), "core: q is an array" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "core: q has no slots" );

	var t = FPO.flatMap( {fn: objMul10, arr: []} );
	assert.ok( t && Array.isArray( t ), "core: t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "core: t has no slots" );

	var s = FPO.flatMap( {fn: objCheckParams, arr: list} );
	assert.ok( s && Array.isArray( s ), "core: s is an array" );
	assert.ok( s !== list, "core: s is not list" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ),
		"core: s has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( s ).length == 2 && s.length == 2, "core: s has only 2 slots" );
	assert.ok( s[0] === true && s[1] === true, "core: s is [true,true]" );

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
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok( r !== list, "std: r is not list" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ),
		"std: r has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "std: r has only 3 slots" );
	assert.ok( r[0] === 10 && r[1] === 100 && r[2] === 20, "std: r is [10,100,20]" );

	p = FPO.std.flatMap()( mul10 )()( list );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok( p !== list, "std: p is not list" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ),
		"std: p has filled slots at indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( r ).length == 3 && r.length == 3, "std: p has only 3 slots" );
	assert.ok( p[0] === 10 && p[1] === 100 && p[2] === 20, "std: p is [10,100,20]" );

	q = FPO.std.flatMap( mul10, undefined );
	assert.ok( q && Array.isArray( q ), "std: q is an array" );
	assert.ok( Object.keys( q ).length == 0 && q.length == 0, "std: q has no slots" );

	t = FPO.std.flatMap( mul10, [] );
	assert.ok( t && Array.isArray( t ), "std: t is an array" );
	assert.ok( Object.keys( t ).length == 0 && t.length == 0, "std: t has no slots" );

	s = FPO.std.flatMap( checkParams, list );
	assert.ok( s && Array.isArray( s ), "std: s is an array" );
	assert.ok( s !== list, "std: s is not list" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ),
		"std: s has filled slots at indexes 0 and 1"
	);
	assert.ok( Object.keys( s ).length == 2 && s.length == 2, "std: s has only 2 slots" );
	assert.ok( s[0] === true && s[1] === true, "std: s is [true,true]" );
});

QUnit.test("reduce()",function t26(assert){
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
	assert.ok( r === 15, "core: r === 15" );

	var p = FPO.reduce()( {} )( {fn: objSum} )()( {arr: list} );
	assert.ok( p === 15, "core: p === 15" );

	var q = FPO.reduce( {fn: objSum, arr: undefined} );
	assert.ok( q === undefined, "core: q === undefined" );

	var t = FPO.reduce( {fn: objSum, arr: [], v: 6} );
	assert.ok( t === 6, "core: t === 6" );

	var s = FPO.reduce( {fn: objCheckParams, arr: list} );
	assert.ok( s === 15, "core: s === 15" );

	var u = FPO.reduce( {fn: objSum, arr: list, v: 6} );
	assert.ok( u === 21, "core: u === 21" );

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
	assert.ok( r === 15, "std: r === 15" );

	p = FPO.std.reduce()( sum )( undefined )( list );
	assert.ok( p === 15, "std: p === 15" );

	q = FPO.std.reduce( sum, undefined, undefined );
	assert.ok( q === undefined, "std: q === undefined" );

	t = FPO.std.reduce( sum, 6, [] );
	assert.ok( t === 6, "std: t === 6" );

	s = FPO.std.reduce( checkParams, undefined, list );
	assert.ok( s === 15, "std: s === 15" );

	u = FPO.std.reduce( sum, 6, list );
	assert.ok( u === 21, "std: u === 21" );
});

QUnit.test("reduceRight()",function t27(assert){
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
	assert.ok( r === "54321", "core: r === '54321'" );

	var p = FPO.reduceRight()( {} )( {fn: objConcat} )()( {arr: list} );
	assert.ok( p === "54321", "core: p === '54321'" );

	var q = FPO.reduceRight( {fn: objConcat, arr: undefined} );
	assert.ok( q === undefined, "core: q === undefined" );

	var t = FPO.reduceRight( {fn: objConcat, arr: [], v: "6"} );
	assert.ok( t === "6", "core: t === '6'" );

	var s = FPO.reduceRight( {fn: objCheckParams, arr: list} );
	assert.ok( s === "54321", "core: s === '54321'" );

	var u = FPO.reduceRight( {fn: objConcat, arr: list, v: "6"} );
	assert.ok( u === "654321", "core: u === '654321'" );

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
	assert.ok( r === "54321", "std: r === '54321'" );

	p = FPO.std.reduceRight()( concat )( undefined )( list );
	assert.ok( p === "54321", "std: p === '54321'" );

	q = FPO.std.reduceRight( concat, undefined, undefined );
	assert.ok( q === undefined, "std: q === undefined" );

	t = FPO.std.reduceRight( concat, "6", [] );
	assert.ok( t === "6", "std: t === '6'" );

	s = FPO.std.reduceRight( checkParams, undefined, list );
	assert.ok( s === "54321", "std: s === '54321'" );

	u = FPO.std.reduceRight( concat, "6", list );
	assert.ok( u === "654321", "std: u === '654321'" );
});

QUnit.test("flatten()",function t28(assert){
	assert.expect( 102 );

	var list = [1,2,[3,[4,5]]];

	var r = FPO.flatten( {v: list} );
	assert.ok( r && Array.isArray( r ), "core: r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ) &&
		_hasProp( r, "3" ) && _hasProp( r, "4" ),
		"core: r has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( r ).length == 5 && r.length == 5, "core: r has only 5 slots" );
	assert.ok(
		r[0] === 1 && r[1] === 2 && r[2] === 3 && r[3] === 4 && r[4] === 5,
		"core: r is [1,2,3,4,5]"
	);

	var p = FPO.flatten()( {} )( {v: list} );
	assert.ok( p && Array.isArray( p ), "core: p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ) &&
		_hasProp( p, "3" ) && _hasProp( p, "4" ),
		"core: p has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( p ).length == 5 && p.length == 5, "core: p has only 5 slots" );
	assert.ok(
		p[0] === 1 && p[1] === 2 && p[2] === 3 && p[3] === 4 && p[4] === 5,
		"core: p is [1,2,3,4,5]"
	);

	var q = FPO.flatten( {n: undefined, v: list} );
	assert.ok( q && Array.isArray( q ), "core: q is an array" );
	assert.ok(
		_hasProp( q, "0" ) && _hasProp( q, "1" ) && _hasProp( q, "2" ) &&
		_hasProp( q, "3" ) && _hasProp( q, "4" ),
		"core: q has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( q ).length == 5 && q.length == 5, "core: q has only 5 slots" );
	assert.ok(
		q[0] === 1 && q[1] === 2 && q[2] === 3 && q[3] === 4 && q[4] === 5,
		"core: q is [1,2,3,4,5]"
	);

	var t = FPO.flatten( {n: 5, v: list} );
	assert.ok( t && Array.isArray( t ), "core: t is an array" );
	assert.ok(
		_hasProp( t, "0" ) && _hasProp( t, "1" ) && _hasProp( t, "2" ) &&
		_hasProp( t, "3" ) && _hasProp( t, "4" ),
		"core: t has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( t ).length == 5 && t.length == 5, "core: t has only 5 slots" );
	assert.ok(
		t[0] === 1 && t[1] === 2 && t[2] === 3 && t[3] === 4 && t[4] === 5,
		"core: t is [1,2,3,4,5]"
	);

	var s = FPO.flatten( {n: 2, v: list} );
	assert.ok( s && Array.isArray( s ), "core: s is an array" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ) && _hasProp( s, "2" ) &&
		_hasProp( s, "3" ) && _hasProp( s, "4" ),
		"core: s has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( s ).length == 5 && s.length == 5, "core: s has only 5 slots" );
	assert.ok(
		s[0] === 1 && s[1] === 2 && s[2] === 3 && s[3] === 4 && s[4] === 5,
		"core: s is [1,2,3,4,5]"
	);

	var u = FPO.flatten( {n: 1, v: list} );
	assert.ok( u && Array.isArray( u ), "core: u is an array" );
	assert.ok(
		_hasProp( u, "0" ) && _hasProp( u, "1" ) && _hasProp( u, "2" ) && _hasProp( u, "3" ),
		"core: u has filled slots as indexes 0, 1, 2, and 3"
	);
	assert.ok( Object.keys( u ).length == 4 && u.length == 4, "core: u has only 4 slots" );
	assert.ok( u[3] && Array.isArray( u[3] ), "core: u[3] is an array" );
	assert.ok(
		_hasProp( u[3], "0" ) && _hasProp( u[3], "1" ),
		"core: u[3] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( u[3] ).length == 2 && u[3].length == 2, "core: u[3] has only 2 slots" );
	assert.ok(
		u[0] === 1 && u[1] === 2 && u[2] === 3 && u[3][0] === 4 && u[3][1] === 5,
		"core: u is [1,2,3,[4,5]]"
	);

	var h = FPO.flatten( {n: 0, v: list} );
	assert.ok( h && Array.isArray( h ), "core: h is an array" );
	assert.ok(
		_hasProp( h, "0" ) && _hasProp( h, "1" ) && _hasProp( h, "2" ),
		"core: h has filled slots as indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( h ).length == 3 && h.length == 3, "core: h has only 3 slots" );
	assert.ok( h[2] && Array.isArray( h[2] ), "core: h[2] is an array" );
	assert.ok(
		_hasProp( h[2], "0" ) && _hasProp( h[2], "1" ),
		"core: h[2] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( h[2] ).length == 2 && h[2].length == 2, "core: h[2] has only 2 slots" );
	assert.ok( h[2][1] && Array.isArray( h[2][1] ), "core: h[2][1] is an array" );
	assert.ok(
		_hasProp( h[2][1], "0" ) && _hasProp( h[2][1], "1" ),
		"core: h[2][1] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( h[2][1] ).length == 2 && h[2][1].length == 2, "core: h[2][1] has only 2 slots" );
	assert.ok(
		h[0] === 1 && h[1] === 2 && h[2][0] === 3 && h[2][1][0] === 4 && h[2][1][1] === 5,
		"core: h is [1,2,[3,[4,5]]]"
	);

	var j = FPO.flatten( {n: "-whatever-", v: list} );
	assert.ok( j && Array.isArray( j ), "core: j is an array" );
	assert.ok(
		_hasProp( j, "0" ) && _hasProp( j, "1" ) && _hasProp( j, "2" ),
		"core: j has filled slots as indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( j ).length == 3 && j.length == 3, "core: j has only 3 slots" );
	assert.ok( j[2] && Array.isArray( j[2] ), "core: j[2] is an array" );
	assert.ok(
		_hasProp( j[2], "0" ) && _hasProp( j[2], "1" ),
		"core: j[2] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( j[2] ).length == 2 && j[2].length == 2, "core: j[2] has only 2 slots" );
	assert.ok( j[2][1] && Array.isArray( j[2][1] ), "core: j[2][1] is an array" );
	assert.ok(
		_hasProp( j[2][1], "0" ) && _hasProp( j[2][1], "1" ),
		"core: j[2][1] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( j[2][1] ).length == 2 && j[2][1].length == 2, "core: j[2][1] has only 2 slots" );
	assert.ok(
		j[0] === 1 && j[1] === 2 && j[2][0] === 3 && j[2][1][0] === 4 && j[2][1][1] === 5,
		"core: j is [1,2,[3,[4,5]]]"
	);

	var k = FPO.flatten( {v: undefined} );
	assert.ok( k && Array.isArray( k ), "core: k is an array" );
	assert.ok( Object.keys( k ).length == 0 && k.length == 0, "core: k is []" );

	var m = FPO.flatten( {v: []} );
	assert.ok( m && Array.isArray( m ), "core: m is an array" );
	assert.ok( Object.keys( m ).length == 0 && m.length == 0, "core: m is []" );

	// **************************************

	r = FPO.std.flatten( list );
	assert.ok( r && Array.isArray( r ), "std: r is an array" );
	assert.ok(
		_hasProp( r, "0" ) && _hasProp( r, "1" ) && _hasProp( r, "2" ) &&
		_hasProp( r, "3" ) && _hasProp( r, "4" ),
		"std: r has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( r ).length == 5 && r.length == 5, "std: r has only 5 slots" );
	assert.ok(
		r[0] === 1 && r[1] === 2 && r[2] === 3 && r[3] === 4 && r[4] === 5,
		"std: r is [1,2,3,4,5]"
	);

	p = FPO.std.flatten()( list );
	assert.ok( p && Array.isArray( p ), "std: p is an array" );
	assert.ok(
		_hasProp( p, "0" ) && _hasProp( p, "1" ) && _hasProp( p, "2" ) &&
		_hasProp( p, "3" ) && _hasProp( p, "4" ),
		"std: p has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( p ).length == 5 && p.length == 5, "std: p has only 5 slots" );
	assert.ok(
		p[0] === 1 && p[1] === 2 && p[2] === 3 && p[3] === 4 && p[4] === 5,
		"std: p is [1,2,3,4,5]"
	);

	q = FPO.std.flatten( list, undefined );
	assert.ok( q && Array.isArray( q ), "std: q is an array" );
	assert.ok(
		_hasProp( q, "0" ) && _hasProp( q, "1" ) && _hasProp( q, "2" ) &&
		_hasProp( q, "3" ) && _hasProp( q, "4" ),
		"std: q has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( q ).length == 5 && q.length == 5, "std: q has only 5 slots" );
	assert.ok(
		q[0] === 1 && q[1] === 2 && q[2] === 3 && q[3] === 4 && q[4] === 5,
		"std: q is [1,2,3,4,5]"
	);

	t = FPO.std.flatten( list, 5 );
	assert.ok( t && Array.isArray( t ), "std: t is an array" );
	assert.ok(
		_hasProp( t, "0" ) && _hasProp( t, "1" ) && _hasProp( t, "2" ) &&
		_hasProp( t, "3" ) && _hasProp( t, "4" ),
		"std: t has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( t ).length == 5 && t.length == 5, "std: t has only 5 slots" );
	assert.ok(
		t[0] === 1 && t[1] === 2 && t[2] === 3 && t[3] === 4 && t[4] === 5,
		"std: t is [1,2,3,4,5]"
	);

	s = FPO.std.flatten( list, 2 );
	assert.ok( s && Array.isArray( s ), "std: s is an array" );
	assert.ok(
		_hasProp( s, "0" ) && _hasProp( s, "1" ) && _hasProp( s, "2" ) &&
		_hasProp( s, "3" ) && _hasProp( s, "4" ),
		"std: s has filled slots as indexes 0, 1, 2, 3, and 4"
	);
	assert.ok( Object.keys( s ).length == 5 && s.length == 5, "std: s has only 5 slots" );
	assert.ok(
		s[0] === 1 && s[1] === 2 && s[2] === 3 && s[3] === 4 && s[4] === 5,
		"std: s is [1,2,3,4,5]"
	);

	u = FPO.std.flatten( list, 1 );
	assert.ok( u && Array.isArray( u ), "std: u is an array" );
	assert.ok(
		_hasProp( u, "0" ) && _hasProp( u, "1" ) && _hasProp( u, "2" ) && _hasProp( u, "3" ),
		"std: u has filled slots as indexes 0, 1, 2, and 3"
	);
	assert.ok( Object.keys( u ).length == 4 && u.length == 4, "std: u has only 4 slots" );
	assert.ok( u[3] && Array.isArray( u[3] ), "std: u[3] is an array" );
	assert.ok(
		_hasProp( u[3], "0" ) && _hasProp( u[3], "1" ),
		"std: u[3] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( u[3] ).length == 2 && u[3].length == 2, "std: u[3] has only 2 slots" );
	assert.ok(
		u[0] === 1 && u[1] === 2 && u[2] === 3 && u[3][0] === 4 && u[3][1] === 5,
		"std: u is [1,2,3,[4,5]]"
	);

	h = FPO.std.flatten( list, 0 );
	assert.ok( h && Array.isArray( h ), "std: h is an array" );
	assert.ok(
		_hasProp( h, "0" ) && _hasProp( h, "1" ) && _hasProp( h, "2" ),
		"std: h has filled slots as indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( h ).length == 3 && h.length == 3, "std: h has only 3 slots" );
	assert.ok( h[2] && Array.isArray( h[2] ), "std: h[2] is an array" );
	assert.ok(
		_hasProp( h[2], "0" ) && _hasProp( h[2], "1" ),
		"std: h[2] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( h[2] ).length == 2 && h[2].length == 2, "std: h[2] has only 2 slots" );
	assert.ok( h[2][1] && Array.isArray( h[2][1] ), "std: h[2][1] is an array" );
	assert.ok(
		_hasProp( h[2][1], "0" ) && _hasProp( h[2][1], "1" ),
		"std: h[2][1] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( h[2][1] ).length == 2 && h[2][1].length == 2, "std: h[2][1] has only 2 slots" );
	assert.ok(
		h[0] === 1 && h[1] === 2 && h[2][0] === 3 && h[2][1][0] === 4 && h[2][1][1] === 5,
		"std: h is [1,2,[3,[4,5]]]"
	);

	j = FPO.std.flatten( list, "-whatever-" );
	assert.ok( j && Array.isArray( j ), "std: j is an array" );
	assert.ok(
		_hasProp( j, "0" ) && _hasProp( j, "1" ) && _hasProp( j, "2" ),
		"std: j has filled slots as indexes 0, 1, and 2"
	);
	assert.ok( Object.keys( j ).length == 3 && j.length == 3, "std: j has only 3 slots" );
	assert.ok( j[2] && Array.isArray( j[2] ), "std: j[2] is an array" );
	assert.ok(
		_hasProp( j[2], "0" ) && _hasProp( j[2], "1" ),
		"std: j[2] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( j[2] ).length == 2 && j[2].length == 2, "std: j[2] has only 2 slots" );
	assert.ok( j[2][1] && Array.isArray( j[2][1] ), "std: j[2][1] is an array" );
	assert.ok(
		_hasProp( j[2][1], "0" ) && _hasProp( j[2][1], "1" ),
		"std: j[2][1] has filled slots as indexes 0 and 1"
	);
	assert.ok( Object.keys( j[2][1] ).length == 2 && j[2][1].length == 2, "std: j[2][1] has only 2 slots" );
	assert.ok(
		j[0] === 1 && j[1] === 2 && j[2][0] === 3 && j[2][1][0] === 4 && j[2][1][1] === 5,
		"std: j is [1,2,[3,[4,5]]]"
	);

	k = FPO.std.flatten( undefined );
	assert.ok( k && Array.isArray( k ), "std: k is an array" );
	assert.ok( Object.keys( k ).length == 0 && k.length == 0, "std: k is []" );

	m = FPO.std.flatten( [] );
	assert.ok( m && Array.isArray( m ), "std: m is an array" );
	assert.ok( Object.keys( m ).length == 0 && m.length == 0, "std: m is []" );
});








function _hasProp(obj,prop) {
	return Object.hasOwnProperty.call( obj, prop );
}
