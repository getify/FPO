# Standard API

These are the methods on the `FPO.std.*` namespace. For the `FPO.*` methods, consult the [Core API documentation](core-API.md).

* [`FPO.std.apply(..)`](#fpostdapply) (aliases: `FPO.std.spread(..)`)
* [`FPO.std.binary(..)`](#fpostdbinary)
* [`FPO.std.complement(..)`](#fpostdcomplement)
* [`FPO.std.compose(..)`](#fpostdcompose)
* [`FPO.std.constant(..)`](#fpostdconstant)
* [`FPO.std.curry(..)`](#fpostdcurry)
* [`FPO.std.curryMultiple(..)`](#fpostdcurrymultiple)
* [`FPO.std.filterIn(..)`](#fpostdfilterin) (aliases: `FPO.std.filter(..)`)
* [`FPO.std.filterOut(..)`](#fpostdfilterout)
* [`FPO.std.flatMap(..)`](#fpostdflatmap) (aliases: `FPO.std.chain(..)`)
* [`FPO.std.flatten(..)`](#fpostdflatten)
* [`FPO.std.flip(..)`](#fpostdflip)
* [`FPO.std.identity(..)`](#fpostdidentity)
* [`FPO.std.map(..)`](#fpostdmap)
* [`FPO.std.nAry(..)`](#fpostdnary)
* [`FPO.std.partial(..)`](#fpostdpartial)
* [`FPO.std.partialRight(..)`](#fpostdpartialright)
* [`FPO.std.pick(..)`](#fpostdpick)
* [`FPO.std.pickAll(..)`](#fpostdpickall)
* [`FPO.std.pipe(..)`](#fpostdpipe)
* [`FPO.std.prop(..)`](#fpostdprop)
* [`FPO.std.reduce(..)`](#fpostdreduce) (aliases: `FPO.std.fold(..)`, `FPO.std.foldL(..)`)
* [`FPO.std.reduceRight(..)`](#fpostdreduceright) (aliases: `FPO.std.foldR(..)`)
* [`FPO.std.reverseArgs(..)`](#fpostdreverseargs)
* [`FPO.std.setProp(..)`](#fpostdsetprop) (aliases: `FPO.std.assoc(..)`)
* [`FPO.std.trampoline(..)`](#fpostdtrampoline)
* **Transducers**:
	- [`FPO.std.transducers.array(..)`](#fpostdtransducersarray)
	- [`FPO.std.transducers.booleanAnd(..)`](#fpostdtransducersbooleanand) (aliases: `FPO.std.transducers.boolean(..)`)
	- [`FPO.std.transducers.booleanOr(..)`](#fpostdtransducersbooleanor)
	- [`FPO.std.transducers.default(..)`](#fpostdtransducersdefault)
	- [`FPO.std.transducers.filter(..)`](#fpostdtransducersfilter)
	- [`FPO.std.transducers.into(..)`](#fpostdtransducersinto)
	- [`FPO.std.transducers.map(..)`](#fpostdtransducersmap)
	- [`FPO.std.transducers.number(..)`](#fpostdtransducersnumber)
	- [`FPO.std.transducers.string(..)`](#fpostdtransducersstring)
	- [`FPO.std.transducers.transduce(..)`](#fpostdtransducerstransduce)
* [`FPO.std.unapply(..)`](#fpostdunapply) (aliases: `FPO.std.gather(..)`)
* [`FPO.std.unary(..)`](#fpostdunary)
* [`FPO.std.uncurry(..)`](#fpostduncurry)
* [`FPO.std.zip(..)`](#fpostdzip)

----

### `FPO.std.apply(..)`

([back to top](#core-api))

Wraps a function to spread out the elements from an array argument as individual positional arguments.

* **Arguments:**
	- `fn`: function to wrap

* **Returns:** *function*

* **Example:**

	```js
	function foo(x,y = 2) { return x + y; }
	function bar([a,b],c) { return a + b + c; }

	var f = FPO.std.apply( foo );
	var p = FPO.std.apply( bar );

	f( [1,1] );  // 2
	f( [3] );  // 5
	p( [[1,2],3] );  // 6
	```

* **Alias:** `FPO.std.spread(..)`

* **See Also:** [`FPO.std.unapply(..)`](#fpostdunapply)

----

### `FPO.std.binary(..)`

([back to top](#core-api))

Wraps a function to restrict its inputs to only arguments.

* **Arguments:**
	- `fn`: function to wrap

* **Returns:** *function*

* **Example:**

	```js
	function foo(...args) { return args; }

	var f = FPO.std.binary( foo );

	f( 1, 2, 3 );  // [1,2]
	```

* **See Also:** [`FPO.std.nAry(..)`](#fpostdnary), [`FPO.std.unary(..)`](#fpostdunary)

----

### `FPO.std.complement(..)`

([back to top](#core-api))

Wraps a predicate function -- a function that produces `true` / `false` -- to negate its result.

* **Arguments:**
	- `fn`: function to wrap

* **Returns:** *function*

* **Example:**

	```js
	var f = FPO.std.complement( () => false );

	f();  // true
	```

----

### `FPO.std.compose(..)`

([back to top](#core-api))

Produces a new function that's the composition of a list of functions. Functions are composed right-to-left (unlike [`FPO.std.pipe(..)`](#fpostdpipe)) from the array.

* **Arguments:**
	- `fns`: array of functions

* **Returns:** *function*

* **Example:**

	```js
	var f = FPO.std.compose( [
		v => v + "3",
		v => v + "2",
		v => v + "1"
	] );

	f( "0" );  // "0123"
	```

* **Alias:** `FPO.std.flowRight(..)`

* **See Also:** [`FPO.std.pipe(..)`](#fpostdpipe)

----

### `FPO.std.constant(..)`

([back to top](#core-api))

Wraps a value in a function that returns the value.

* **Arguments:**
	- `v`: value to wrap

* **Returns:** *function*

* **Example:**

	```js
	var f = FPO.std.constant( 42 );

	f();  // 42
	```

* **See Also:** [`FPO.std.identity(..)`](#fpostdidentity)

----

### `FPO.std.curry(..)`

([back to top](#core-api))

Curries a function so that you can pass one argument at a time, each time getting back another function to receive the next argument. Once all arguments are passed, the underlying function is called with the arguments.

* **Arguments:**
	- `fn`: function to curry
	- `n`: (optional) number of arguments to curry for; if omitted, tries to detect the arity (`fn.length`) to use.

* **Returns:** *function*

* **Example:**

	```js
	function foo(x,y,z) { return x + y + z; }

	var f = FPO.std.curry( foo, 3 );
	var p = FPO.std.curry( foo );

	f()( "a" )( "b" )()( "c" );
	// "abc"

	p( "a" )( "b" )( "c" );
	// "abc"
	```

* **See Also:** [`FPO.std.curryMultiple(..)`](#fpostdcurrymultiple), [`FPO.std.partial(..)`](#fpostdpartial), [`FPO.std.uncurry(..)`](#fpostduncurry)

----

### `FPO.std.curryMultiple(..)`

([back to top](#core-api))

Just like [`FPO.std.curry(..)`](#fpostdcurry), except each curried function allows multiple arguments instead of just one.

* **Arguments:**
	- `fn`: function to curry
	- `n`: (optional) number of arguments to curry for; if omitted, tries to detect the arity (`fn.length`) to use.

* **Returns:** *function*

* **Example:**

	```js
	function foo(x,y,z) { return x + y + z; }

	var f = FPO.std.curryMultiple( foo, 3 );
	var p = FPO.std.curryMultiple( foo );

	f()( "a" )()( "b", "c" );
	// "abc"

	p( "a" )( "b", "c" );
	// "abc"
	```

* **See Also:** [`FPO.std.curry(..)`](#fpostdcurry), [`FPO.std.partial(..)`](#fpostdpartial), [`FPO.std.uncurry(..)`](#fpostduncurry)

----

### `FPO.std.filterIn(..)`

([back to top](#core-api))

Commonly known as `filter(..)`, produces a new list by calling a predicate function with each value in the original list. For each value, if the predicate function returns true (or truthy), the value is included in (aka, filtered into) the new list. Otherwise, the value is omitted.

* **Arguments:**
	- `fn`: predicate function; called with `v` (value), `i` (index), and `arr` (array) arguments
	- `arr`: array to filter against

* **Returns:** *array*

* **Example:**

	```js
	function isOdd(v) { return v % 2 == 1; }

	var nums = [1,2,3,4,5];

	FPO.std.filterIn( isOdd, nums );
	// [1,3,5]
	```

* **Alias:** `FPO.std.filter(..)`

* **See Also:** [`FPO.std.filterOut(..)`](#fpostdfilterout)

----

### `FPO.std.filterOut(..)`

([back to top](#core-api))

The inverse of [`FPO.std.filterIn(..)`](#fpostdfilterin), produces a new list by calling a predicate function with each value in the original list. For each value, if the predicate function returns true (or truthy), the value is omitted from (aka, filtered out of) the new list. Otherwise, the value is included.

* **Arguments:**
	- `fn`: predicate function; called with `v` (value), `i` (index), and `arr` (array) arguments
	- `arr`: array to filter against

* **Returns:** *array*

* **Example:**

	```js
	function isOdd(v) { return v % 2 == 1; }

	var nums = [1,2,3,4,5];

	FPO.std.filterOut( isOdd, nums );
	// [2,4]
	```

* **See Also:** [`FPO.std.filterOut(..)`](#fpostdfilterout)

----

### `FPO.std.flatMap(..)`

([back to top](#core-api))

Similar to [`FPO.std.map(..)`], produces a new list by calling a mapper function with each value in the original list. If the mapper function returns an array, this array is flattened (one level) into the overall array.

* **Arguments:**
	- `fn`: mapper function; called with `v` (value), `i` (index), and `arr` (array) arguments
	- `arr`: array to flat-map against

* **Returns:** *array*

* **Example:**

	```js
	function splitChars(v) { return [...v]; }

	var words = ["hello","world"];

	splitChars( words[0] );
	// ["h","e","l","l","o"]

	FPO.std.map( splitChars, words );
	// [["h","e","l","l","o"],["w","o","r","l","d"]]

	FPO.std.flatMap( splitChars, words );
	// ["h","e","l","l","o","w","o","r","l","d"]
	```

* **Alias:** `FPO.std.chain(..)`

* **See Also:** [`FPO.std.map(..)`](#fpostdmap), [`FPO.std.flatten(..)`](#fpostdflatten)

----

### `FPO.std.flatten(..)`

([back to top](#core-api))

Flattens an array of nested arrays. Optionally, specify how many levels of nesting to flatten out.

* **Arguments:**
	- `arr`: array to flat-map against
	- `n`: (optional) the number of levels of nesting to flatten out; if omitted, defaults to Infinity (to flatten any nested depth).

* **Returns:** *array*

* **Example:**

	```js
	var nums = [1,2,[3,4],[5,[6,7]]];

	FPO.std.flatten( nums );
	// [1,2,3,4,5,6,7]

	FPO.std.flatten( nums, 1 );
	// [1,2,3,4,5,[6,7]]

	FPO.std.flatten( nums, 2 );
	// [1,2,3,4,5,6,7]
	```

* **See Also:** [`FPO.std.flatMap(..)`](#fpostdflatmap)

----

### `FPO.std.flip(..)`

([back to top](#core-api))

Wraps a function to flip (transpose) the first two arguments it receives.

* **Arguments:**
	- `fn`: function to wrap

* **Returns:** *function*

* **Example:**

	```js
	function foo(...args) { return args; }

	var f = FPO.std.flip( foo );

	f( 1, 2, 3, 4 );
	// [2,1,3,4]
	```

* **See Also:** [`FPO.std.reverseArgs(..)`](#fpostdreverseargs)

----

### `FPO.std.identity(..)`

([back to top](#core-api))

Returns the value given to it. Useful as a default placeholder for certain opertaions (i.e., composition, reduction).

* **Arguments:**
	- `v`: value to return

* **Returns:** *-any-*

* **Example:**

	```js
	FPO.std.identity( 42 );  // 42
	```

* **See Also:** [`FPO.std.constant(..)`](#fpostdconstant)

----

### `FPO.std.map(..)`

([back to top](#core-api))

Produces a new list by calling a mapper function with each value in the original list. The value the mapper function returns is inserted in the new list at that same position. The new list will always be the same length as the original list.

* **Arguments:**
	- `fn`: mapper function; called with `v` (value), `i` (index), and `arr` (array) arguments
	- `arr`: array to map against

* **Returns:** *array*

* **Example:**

	```js
	function double(v) { return v * 2; }

	var nums = [1,2,3,4,5];

	FPO.std.map( double, nums );
	// [2,4,6,8,10]
	```

* **See Also:** [`FPO.std.flatMap(..)`](#fpostdflatmap)

----

### `FPO.std.nAry(..)`

([back to top](#core-api))

Wraps a function to restrict its inputs to only the count specified.

* **Arguments:**
	- `fn`: function to wrap
	- `n`: desired arity count; if omitted, defaults to 0, which produces a "nullary" function -- won't receive any arguments.

* **Returns:** *function*

* **Example:**

	```js
	function foo(...args) { return args; }

	var f = FPO.std.nAry( foo, 3 );

	f( 1, 2, 3, 4 );  // [1,2,3]
	```

* **See Also:** [`FPO.std.binary(..)`](#fpostdbinary), [`FPO.std.unary(..)`](#fpostdunary)

----

### `FPO.std.partial(..)`

([back to top](#core-api))

Wraps a function with a new function that already has some of the arguments pre-specified, and is waiting for the rest of them on the next call. Unlike [`FPO.std.curry(..)`](#fpostdcurry), you must specify all the remaining arguments on the next call of the partially-applied function.

Partial application happens from left-to-right. If you'd need to partially-apply from the right, use [`FPO.std.partialRight(..)`](#fpostdpartialright)

* **Arguments:**
	- `fn`: function to partially-apply
	- `args`: array containing the arguments to apply now

* **Returns:** *function*

* **Example:**

	```js
	function foo(x,y,z) { return x + y + z; }

	var f = FPO.std.partial( foo, ["a"] );

	f( "b", "!" );
	// "ab!"
	```

* **See Also:** [`FPO.std.partialRight(..)`](#fpostdpartialright), [`FPO.std.curry(..)`](#fpostdcurry), [`FPO.std.curryMultiple(..)`](#fpostdcurrymultiple)

----

### `FPO.std.partialRight(..)`

([back to top](#core-api))

Wraps a function with a new function that already has some of the arguments pre-specified, and is waiting for the rest of them on the next call. Unlike [`FPO.std.curry(..)`](#fpostdcurry), you must specify all the remaining arguments on the next call of the partially-applied function.

Right-partial application happens from right-to-left. If you'd like to partially-apply from the left, use [`FPO.std.partial(..)`](#fpostdpartial)

* **Arguments:**
	- `fn`: function to partially-apply
	- `args`: array containing the arguments to apply now

* **Returns:** *function*

* **Example:**

	```js
	function foo(x,y,z) { return x + y + z; }

	var f = FPO.std.partialRight( foo, ["b","!"] );

	f( "a" );
	// "ab!"
	```

* **See Also:** [`FPO.std.partial(..)`](#fpostdpartial), [`FPO.std.curry(..)`](#fpostdcurry), [`FPO.std.curryMultiple(..)`](#fpostdcurrymultiple)
----

### `FPO.std.pick(..)`

([back to top](#core-api))

Returns a new object with only the specified properties from the original object. Includes only properties from the original object.

* **Arguments:**
	- `props`: array of property names to pick from the object; if a property does not exist on the original object, it **is not** added to the new object, unlike [`FPO.std.pickAll(..)`](#fpostdpickall).
	- `v`: object to pick properties from

* **Returns:** *object*

* **Example:**

	```js
	var obj = { x: 1, y: 2, z: 3 };

	FPO.std.pick( ["x","y","w"], obj );
	// { x:1, y:2 }
	```

* **See Also:** [`FPO.std.pickAll(..)`](#fpostdpickall), [`FPO.std.prop(..)`](#fpostdprop)

----

### `FPO.std.pickAll(..)`

([back to top](#core-api))

Returns a new object with only the specified properties from the original object. Includes all specified properties.

* **Arguments:**
	- `props`: array of property names to pick from the object; even if a property does not exist on the original object, it **is** still added to the new object with an `undefined` value, unlike [`FPO.std.pick(..)`](#fpostdpick).
	- `v`: object to pick properties from

* **Returns:** *object*

* **Example:**

	```js
	var obj = { x: 1, y: 2, z: 3 };

	FPO.std.pickAll( ["x","y","w"], obj );
	// { x:1, y:2, w:undefined }
	```

* **See Also:** [`FPO.std.pickAll(..)`](#fpostdpickall)

----

### `FPO.std.pipe(..)`

([back to top](#core-api))

Produces a new function that's the composition of a list of functions. Functions are composed left-to-right (unlike [`FPO.std.compose(..)`](#fpostdcompose)) from the array.

* **Arguments:**
	- `fns`: array of functions

* **Returns:** *function*

* **Example:**

	```js
	var f = FPO.std.pipe( [
		v => v + "3",
		v => v + "2",
		v => v + "1"
	] );

	f( "4" );  // "4321"
	```

* **Alias:** `FPO.std.flow(..)`

* **See Also:** [`FPO.std.compose(..)`](#fpostdcompose)

----

### `FPO.std.prop(..)`

([back to top](#core-api))

Extracts a property's value from an object.

* **Arguments:**
	- `prop`: property name to pull from the object
	- `v`: object to pull the property value from

* **Returns:** *-any-*

* **Example:**

	```js
	var obj = { x: 1, y: 2, z: 3 };

	FPO.std.prop( "y", obj );  // 2
	```

* **See Also:** [`FPO.std.pick(..)`](#fpostdpick), [`FPO.std.setProp(..)`](#fpostdsetprop)

----

### `FPO.std.reduce(..)`

([back to top](#core-api))

Processes a list from left-to-right (unlike [`FPO.std.reduceRight(..)`](#fpostdreduceright)), successively combining (aka "reducing", "folding") two values into one, until the entire list has been reduced to a single value. An initial value for the reduction can optionally be provided.

* **Arguments:**
	- `fn`: reducer function; called with `acc` (accumulator), `v` (value), `i` (index), and `arr` (array) arguments
	- `v`: (optional) initial value to use for the reduction; if provided, the first reduction will pass to the reducer the initial value as the `acc` and the first value from the array as `v`. Otherwise, the first reduction has the first value of the array as `acc` and the second value of the array as `v`.
	- `arr`: array to reduce

* **Returns:** *-any-*

* **Example:**

	```js
	function strConcat(acc,v) { return acc + v; }

	var vowels = ["a","e","i","o","u","y"];

	FPO.std.reduce( strConcat, undefined, vowels );
	// "aeiouy"

	FPO.std.reduce( strConcat, "vowels: ", vowels );
	// "vowels: aeiouy"
	```

* **Aliases:** `FPO.std.fold(..)`, `FPO.std.foldL(..)`

* **See Also:** [`FPO.std.reduceRight(..)`](#fpostdreduceright)

----

### `FPO.std.reduceRight(..)`

([back to top](#core-api))

Processes a list from right-to-left (unlike [`FPO.std.reduce(..)`](#fpostdreduce)), successively combining (aka "reducing", "folding") two values into one, until the entire list has been reduced to a single value.

An initial value for the reduction can optionally be provided. If the array is empty, the initial value is returned (or `undefined` if it was omitted).

* **Arguments:**
	- `fn`: reducer function; called with `acc` (accumulator), `v` (value), `i` (index), and `arr` (array) arguments
	- `arr`: array to reduce
	- `v`: (optional) initial value to use for the reduction; if provided, the first reduction will pass to the reducer the initial value as the `acc` and the first value from the array as `v`. Otherwise, the first reduction has the first value of the array as `acc` and the second value of the array as `v`.

* **Returns:** *-any-*

* **Example:**

	```js
	function strConcat(acc,v) { return acc + v; }

	var vowels = ["a","e","i","o","u","y"];

	FPO.std.reduceRight( strConcat, undefined, vowels );
	// "yuoiea"

	FPO.std.reduceRight( strConcat, "vowels: ", vowels );
	// "vowels: yuoiea"
	```

* **Aliases:** `FPO.std.foldR(..)`

* **See Also:** [`FPO.std.reduce(..)`](#fpostdreduce)

----

### `FPO.std.reverseArgs(..)`

([back to top](#core-api))

Wraps a function to reverse the order of all received arguments.

* **Arguments:**
	- `fn`: function to wrap

* **Returns:** *function*

* **Example:**

	```js
	function foo(...args) { return args; }

	var f = FPO.std.reverseArgs( foo );

	f( 1, 2, 3, 4 );
	// [4,3,2,1]
	```

* **See Also:** [`FPO.std.flip(..)`](#fpostdflip)

----

### `FPO.std.setProp(..)`

([back to top](#core-api))

Creates a shallow clone of an object, assigning the specified property value to the new object.

* **Arguments:**
	- `prop`: property name where to set the value on the new object
	- `o`: (optional) object to clone; if omitted, defaults to a new empty object
	- `v`: value

* **Returns:** *object*

* **Example:**

	```js
	var obj = { x: 1, y: 2, z: 3 };

	FPO.std.setProp( "w", obj, 4 );
	// { x:1, y:2, z:3, w:4 }

	obj;
	// { x:1, y:2, z:3 }
	```

* **See Also:** [`FPO.std.pick(..)`](#fpostdpick), [`FPO.std.setProp(..)`](#fpostdsetprop)

----

### `FPO.std.trampoline(..)`

([back to top](#core-api))

Wraps a continuation-returning recursive function in another function that will run it until it no longer returns another continuation function. Trampolines are an alternative to tail calls.

* **Arguments:**
	- `fn`: function to run

* **Returns:** *function*

* **Example:**

	```js
	function sum(total,x) {
		if (x <= 1) return total + x;
		return () => sum( total + x, x - 1 );
	}

	var f = FPO.std.trampoline( sum )

	f( 0, 5 );
	// 15
	```

----

### `FPO.std.transducers.array(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that takes an array and a value, and mutates the array by pushing the value onto the end of it. The mutated array is returned.

**This function has side-effects**, for performance reasons. It should be used with caution.

* **Arguments:**
	- `acc`: acculumator
	- `v`: value

* **Returns:** *array*

* **Example:**

	```js
	var arr = [1,2,3];

	FPO.std.transducers.array( arr, 4 );
	// [1,2,3,4]

	arr;
	// [1,2,3,4] <-- was mutated as a side-effect!
	```

* **See Also:** [`FPO.std.transducers.booleanAnd(..)`](#fpostdtransducersbooleanand),
* [`FPO.std.transducers.booleanOr(..)`](#fpostdtransducersbooleanor), [`FPO.std.transducers.default(..)`](#fpostdtransducersdefault), [`FPO.std.transducers.number(..)`](#fpostdtransducersnumber), [`FPO.std.transducers.string(..)`](#fpostdtransducersstring)

----

### `FPO.std.transducers.booleanAnd(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that takes two booleans and *AND*s them together. The result is the logical *AND* of the two values.

* **Arguments:**
	- `acc`: acculumator
	- `v`: value

* **Returns:** *true/false*

* **Example:**

	```js
	FPO.std.transducers.booleanAnd( true, true );
	// true

	FPO.std.transducers.booleanAnd( false, true );
	// false
	```

* **Aliases:** `FPO.std.transducers.boolean(..)`

* **See Also:** [`FPO.std.transducers.array(..)`](#fpostdtransducersarray),
* [`FPO.std.transducers.booleanOr(..)`](#fpostdtransducersbooleanor), [`FPO.std.transducers.default(..)`](#fpostdtransducersdefault), [`FPO.std.transducers.number(..)`](#fpostdtransducersnumber), [`FPO.std.transducers.string(..)`](#fpostdtransducersstring)

----

### `FPO.std.transducers.booleanOr(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that takes two booleans and *OR*s them together. The result is the logical *OR* of the two values.

* **Arguments:**
	- `acc`: acculumator
	- `v`: value

* **Returns:** *true/false*

* **Example:**

	```js
	FPO.std.transducers.booleanOr( false, true );
	// true

	FPO.std.transducers.booleanOr( false, false );
	// false
	```

* **See Also:** [`FPO.std.transducers.array(..)`](#fpostdtransducersarray),
* [`FPO.std.transducers.booleanAnd(..)`](#fpostdtransducersbooleanand), [`FPO.std.transducers.default(..)`](#fpostdtransducersdefault), [`FPO.std.transducers.number(..)`](#fpostdtransducersnumber), [`FPO.std.transducers.string(..)`](#fpostdtransducersstring)

----

### `FPO.std.transducers.default(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that's a default placeholder. It returns only the `acc` that's passed to it. The behavior here is almost the same as [`FPO.std.identity(..)`](#fpostdidentity), except that returns `acc` instead of `v`.

* **Arguments:**
	- `acc`: acculumator
	- `v`: value

* **Returns:** *-any-*

* **Example:**

	```js
	FPO.std.transducers.default( 3, 1 );
	// 3
	```

* **See Also:** [`FPO.std.transducers.array(..)`](#fpostdtransducersarray),
* [`FPO.std.transducers.booleanAnd(..)`](#fpostdtransducersbooleanand), [`FPO.std.transducers.booleanOr(..)`](#fpostdtransducersbooleanOr), [`FPO.std.transducers.number(..)`](#fpostdtransducersnumber), [`FPO.std.transducers.string(..)`](#fpostdtransducersstring), [`FPO.std.identity(..)`](#fpostdidentity)

----

### `FPO.std.transducers.filter(..)`

([back to top](#core-api))

For transducing purposes, wraps a predicate function as a filter-transducer. Typically, this filter-transducer is then composed with other filter-transducers and/or map-transducers. The resulting transducer is then passed to [`FPO.std.transducers.transduce(..)`](#fpostdtransducerstransduce).

The filter-transducer is not a reducer itself; it's expecting a combination function (reducer), which will then produce a filter-reducer. So alternately, you can manually create the filter-reducer and use it directly with a regular [`FPO.std.reduce(..)`](#fpostdreduce) reduction.

* **Arguments:**
	- `fn`: predicate function

* **Returns:** *function*

* **Example:**

	```js
	function isOdd(v) { return v % 2 == 1; }
	function arrayPush(acc,v) { acc.push( v ); return acc; }

	var nums = [1,2,3,4,5];

	var filterTransducer = FPO.std.transducers.filter( isOdd );

	FPO.std.transducers.transduce( filterTransducer, arrayPush, [], nums );
	// [1,3,5]

	// ******************

	var filterReducer = filterTransducer( arrayPush );

	filterReducer( [], 3 );
	// [3]

	filterReducer( [], 4 );
	// []

	FPO.std.reduce( filterReducer, [], nums );
	// [1,3,5]
	```

* **See Also:** [`FPO.std.transducers.map(..)`](#fpostdtransducersmap)

----

### `FPO.std.transducers.into(..)`

([back to top](#core-api))

Selects an appropriate combination function (reducer) based on the provided initial value. Then runs [`FPO.std.transducers.transduce(..)`](#fpostdtransducerstransduce) under the covers.

Detects initial values of `boolean`, `number`, `string`, and `array` types, and dispatches to the appropriate combination function accordingly ([`FPO.std.transducers.number(..)`](#fpostdtransducersnumber), etc). **Note:** A `boolean` initial value selects [`FPO.std.transducers.booleanAnd(..)`](#fpostdtransducersboooleanand).

**Note:** When composing transducers, the effective order of operations is reversed from normal composition. Instead of expecting composition to be right-to-left, the effective order will be left-to-right (see below).

* **Arguments:**
	- `fn`: transducer function
	- `v`: initial value for the reduction; also used to select the appropriate combination function (reducer) for the transducing.
	- `arr`: the list for the reduction

* **Returns:** *-any-*

* **Example:**

	```js
	function double(v) { return v * 2; }
	function isOdd(v) { return v % 2 == 1; }

	var nums = [1,2,3,4,5];

	var transducer = FPO.std.compose( [
		FPO.std.transducers.filter( isOdd ),
		FPO.std.transducers.map( double )
	] );

	FPO.std.transducers.into( transducer, [], nums );
	// [2,6,10]

	FPO.std.transducers.into( transducer, 0, nums );
	// 18

	FPO.std.transducers.into( transducer, "", nums );
	// "2610"
	```

* **See Also:** [`FPO.std.transducers.transduce(..)`](#fpostdtransducerstransduce)

----

### `FPO.std.transducers.map(..)`

([back to top](#core-api))

For transducing purposes, wraps a mapper function as a map-transducer. Typically, this map-transducer is then composed with other filter-transducers and/or map-transducers. The resulting transducer is then passed to [`FPO.std.transducers.transduce(..)`](#fpostdtransducerstransduce).

The map-transducer is not a reducer itself; it's expecting a combination function (reducer), which will then produce a filter-reducer. So alternately, you can manually create the map-reducer and use it directly with a regular [`FPO.std.reduce(..)`](#fpostdreduce) reduction.

* **Arguments:**
	- `fn`: mapper function

* **Returns:** *function*

* **Example:**

	```js
	function double(v) { return v * 2; }
	function arrayPush(acc,v) { acc.push( v ); return acc; }

	var nums = [1,2,3,4,5];

	var mapTransducer = FPO.std.transducers.map( double );

	FPO.std.transducers.transduce( mapTransducer, arrayPush, [], nums );
	// [2,4,6,8,10]

	// ******************

	var mapReducer = mapTransducer( arrayPush );

	mapReducer( [], 3 );
	// [6]

	FPO.std.reduce( mapReducer, [], nums );
	// [1,3,5]
	```

* **See Also:** [`FPO.std.transducers.filter(..)`](#fpostdtransducersfilter)

----

### `FPO.std.transducers.number(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that adds together the two numbers passed into it. The result is the sum.

* **Arguments:**
	- `acc`: acculumator
	- `v`: value

* **Returns:** *number*

* **Example:**

	```js
	FPO.std.transducers.number( 3, 4 );
	// 7
	```

* **See Also:** [`FPO.std.transducers.array(..)`](#fpostdtransducersarray),
* [`FPO.std.transducers.booleanAnd(..)`](#fpostdtransducersbooleanand), [`FPO.std.transducers.booleanOr(..)`](#fpostdtransducersbooleanOr), [`FPO.std.transducers.default(..)`](#fpostdtransducersdefault), [`FPO.std.transducers.string(..)`](#fpostdtransducersstring)

----

### `FPO.std.transducers.string(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that concats the two strings passed into it. The result is the concatenation.

* **Arguments:**
	- `acc`: acculumator
	- `v`: value

* **Returns:** *string*

* **Example:**

	```js
	FPO.std.transducers.string( "hello", "world" );
	// "helloworld"
	```

* **See Also:** [`FPO.std.transducers.array(..)`](#fpostdtransducersarray),
* [`FPO.std.transducers.booleanAnd(..)`](#fpostdtransducersbooleanand), [`FPO.std.transducers.booleanOr(..)`](#fpostdtransducersbooleanOr), [`FPO.std.transducers.default(..)`](#fpostdtransducersdefault), [`FPO.std.transducers.number(..)`](#fpostdtransducersnumber)

----

### `FPO.std.transducers.transduce(..)`

([back to top](#core-api))

Produces a reducer from a specified transducer and combination function. Then runs a reduction on a list, using that reducer, starting with the specified initial value.

**Note:** When composing transducers, the effective order of operations is reversed from normal composition. Instead of expecting composition to be right-to-left, the effective order will be left-to-right (see below).

* **Arguments:**
	- `fn`: transducer function
	- `co`: combination function for the transducer
	- `v`: initial value for the reduction
	- `arr`: the list for the reduction

* **Returns:** *-any-*

* **Example:**

	```js
	function double(v) { return v * 2; }
	function isOdd(v) { return v % 2 == 1; }
	function arrayPush(acc,v) { acc.push( v ); return acc; }

	var nums = [1,2,3,4,5];

	var transducer = FPO.std.compose( [
		FPO.std.transducers.filter( isOdd ),
		FPO.std.transducers.map( double )
	] );

	FPO.std.transducers.transduce( transducer, arrayPush, [], nums );
	// [2,6,10]
	```

* **See Also:** [`FPO.std.transducers.into(..)`](#fpostdtransducersinto)

----

### `FPO.std.unapply(..)`

([back to top](#core-api))

Wraps a function to gather individual positional arguments into an array argument.

* **Arguments:**
	- `fn`: function to wrap
	- `props`: list of property names (strings) to indicate the order to gather individual positional arguments as properties.

* **Returns:** *function*

* **Example:**

	```js
	function foo([ x,y ]) { return x + y; }

	var f = FPO.std.unapply( foo );

	f( 1, 2 );  // 3
	```

* **Alias:** `FPO.std.gather(..)`

* **See Also:** [`FPO.std.apply(..)`](#fpostdapply)

----

### `FPO.std.unary(..)`

([back to top](#core-api))

Wraps a function to restrict its inputs to only one argument.

* **Arguments:**
	- `fn`: function to wrap

* **Returns:** *function*

* **Example:**

	```js
	function foo(...args) { return args; }

	var f = FPO.std.unary( foo );

	f( 1, 2, 3 );  // [1]
	```

* **See Also:** [`FPO.std.nAry(..)`](#fpostdnary), [`FPO.std.binary(..)`](#fpostdbinary)

----

### `FPO.std.uncurry(..)`

([back to top](#core-api))

Wraps a (strictly) curried function in a new function that accepts all the arguments at once, and provides them one at a time to the underlying curried function.

* **Arguments:**
	- `fn`: function to uncurry

* **Returns:** *function*

* **Example:**

	```js
	function foo(x,y,z) { return x + y + z; }

	var f = FPO.std.curry( foo );

	var p = FPO.std.uncurry( f );

	p( 1, 2, 3 );  // 6
	```

* **See Also:** [`FPO.std.curryMultiple(..)`](#fpostdcurrymultiple), [`FPO.std.partial(..)`](#fpostdpartial), [`FPO.std.uncurry(..)`](#fpostduncurry)

----

### `FPO.std.zip(..)`

([back to top](#core-api))

Produces a new array where each element is an array containing the value from that position in each of the respective input arrays. Only processes up to the shorter of the two arrays.

* **Arguments:**
	- `arr1`: the first array
	- `arr2`: the second array

* **Returns:** *array*

* **Example:**

	```js
	var nums1 = [1,3,5,7];
	var nums2 = [2,4,6];

	FPO.std.zip( nums1, nums2 );
	// [[1,2],[3,4],[5,6]]
	```

* **See Also:** [`FPO.std.flatten(..)`](#fpostdflatten)
