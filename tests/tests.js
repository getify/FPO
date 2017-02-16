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

	var f = FPO.constant( {v: 2} );
	assert.ok( f() === 2, "core: f() === 2" );

	f = FPO.constant()( {} )( { v: undefined } );
	assert.ok( f() === undefined, "core: f() === undefined" );

	f = FPO.constant()( {} )( {v: 3} );
	assert.ok( f() === 3, "core: f() === 3" );

	// **************************************

	f = FPO.std.constant( 2 );
	assert.ok( f() === 2, "std: f() === 2" );

	f = FPO.std.constant()( undefined );
	assert.ok( f() === undefined, "std: f() === undefined" );

	f = FPO.std.constant()( 3 );
	assert.ok( f() === 3, "std: f() === 3" );
});

QUnit.test("pick()",function t6(assert){
	assert.expect( 18 );

	var obj = { x: 1, y: 2, z: 3, w: 4 };

	var o = FPO.pick( {v: obj, props: ["x","z","x","f"]} );
	assert.ok( o && typeof o == "object", "core: o is an object" );
	assert.ok(
		_hasProp( o, "x" ) && _hasProp( o, "z" ),
		"core: o has 'x' and 'z' properties"
	);
	assert.ok(
		!_hasProp( o, "y" ) && !_hasProp( o, "w" ) && !_hasProp( o, "f" ),
		"core: o does not have 'y', 'w', or 'f' properties"
	);
	assert.ok( Object.keys( o ).length === 2, "core: o has just 2 properties" );
	assert.ok( o.x === 1 && o.z === 3, "core: o.x === 1, o.z === 3" );

	var p = FPO.pick()( {} )( {v: obj} )( {props: ["y"]} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok( _hasProp( p, "y" ), "core: p has 'y' property" );
	assert.ok( Object.keys( p ).length == 1, "core: p has only 1 property" );
	assert.ok( p.y === 2, "core: p.y === 2" );


	// **************************************

	o = FPO.std.pick( ["x","z","x","f"], o );
	assert.ok( o && typeof o == "object", "std: o is an object" );
	assert.ok(
		_hasProp( o, "x" ) && _hasProp( o, "z" ),
		"std: o has 'x' and 'z' properties"
	);
	assert.ok(
		!_hasProp( o, "y" ) && !_hasProp( o, "w" ) && !_hasProp( o, "f" ),
		"std: o does not have 'y', 'w', or 'f' properties"
	);
	assert.ok( Object.keys( o ).length == 2, "std: o has only 2 properties" );
	assert.ok( o.x === 1 && o.z === 3, "std: o.x === 1, o.z === 3" );

	p = FPO.std.pick()( ["y"] )( obj );
	assert.ok( p && typeof p == "object", "std: p is an object" );
	assert.ok( _hasProp( p, "y" ), "std: p has 'y' property" );
	assert.ok( Object.keys( p ).length == 1, "std: p has only 1 property" );
	assert.ok( p.y === 2, "std: p.y === 2" );
});

QUnit.test("pickAll()",function t6(assert){
	assert.expect( 18 );

	var obj = { x: 1, y: 2, z: 3, w: 4 };

	var o = FPO.pickAll( {v: obj, props: ["x","z","x","f"]} );
	assert.ok( o && typeof o == "object", "core: o is an object" );
	assert.ok(
		_hasProp( o, "x" ) && _hasProp( o, "z" ) && _hasProp( o, "f" ),
		"core: o has 'x', 'z', and 'f' properties"
	);
	assert.ok(
		!_hasProp( o, "y" ) && !_hasProp( o, "w" ),
		"core: o does not have 'y' and 'w' properties"
	);
	assert.ok( Object.keys( o ).length === 3, "core: o has just 3 properties" );
	assert.ok( o.x === 1 && o.z === 3 && o.f === undefined, "core: o.x === 1, o.z === 3, o.f === undefined" );

	var p = FPO.pickAll()( {} )( {v: obj} )( {props: ["y"]} );
	assert.ok( p && typeof p == "object", "core: p is an object" );
	assert.ok( _hasProp( p, "y" ), "core: p has 'y' property" );
	assert.ok( Object.keys( p ).length == 1, "core: p has only 1 property" );
	assert.ok( p.y === 2, "core: p.y === 2" );


	// **************************************

	o = FPO.std.pickAll( ["x","z","x","f"], o );
	assert.ok( o && typeof o == "object", "std: o is an object" );
	assert.ok(
		_hasProp( o, "x" ) && _hasProp( o, "z" ) && _hasProp( o, "f" ),
		"std: o has 'x', 'z', and 'f' properties"
	);
	assert.ok(
		!_hasProp( o, "y" ) && !_hasProp( o, "w" ),
		"std: o does not have 'y' and 'w' properties"
	);
	assert.ok( Object.keys( o ).length === 3, "std: o has just 3 properties" );
	assert.ok( o.x === 1 && o.z === 3 && o.f === undefined, "std: o.x === 1, o.z === 3, o.f === undefined" );

	p = FPO.std.pickAll()( ["y"] )( obj );
	assert.ok( p && typeof p == "object", "std: p is an object" );
	assert.ok( _hasProp( p, "y" ), "std: p has 'y' property" );
	assert.ok( Object.keys( p ).length == 1, "std: p has only 1 property" );
	assert.ok( p.y === 2, "std: p.y === 2" );
});










function _hasProp(obj,prop) {
	return Object.hasOwnProperty.call( obj, prop );
}
