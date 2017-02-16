QUnit.test("core API",function t1(assert){
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

QUnit.test("std API",function t2(assert){
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

QUnit.test("API aliases",function t3(assert){
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

	v = FPO.std.identity( 2 );
	assert.ok( v === 2, "std: v === 2" );

	v = FPO.std.identity()( undefined );
	assert.ok( v === undefined, "std: v === undefined" );

	v = FPO.std.identity()( 3 );
	assert.ok( v === 3, "std: v === 3" );
});






