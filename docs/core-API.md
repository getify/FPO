# Core API

These are the methods on the `FPO.*` namespace. For the `FPO.std.*` methods, consult the [Standard API documentation](std-API.md).

* [`FPO.ap(..)`](#fpoap)
* [`FPO.apply(..)`](#fpoapply) (aliases: `FPO.spread(..)`)
* [`FPO.binary(..)`](#fpobinary)
* [`FPO.complement(..)`](#fpocomplement)
* [`FPO.compose(..)`](#fpocompose) (aliases: `FPO.flowRight(..)`)
* [`FPO.constant(..)`](#fpoconstant) (aliases: `FPO.always(..)`)
* [`FPO.curry(..)`](#fpocurry)
* [`FPO.curryMultiple(..)`](#fpocurrymultiple)
* [`FPO.filterIn(..)`](#fpofilterin) (aliases: `FPO.filter(..)`, `FPO.keep(..)`)
* [`FPO.filterInObj(..)`](#fpofilterinobj) (aliases: `FPO.filterObj(..)`, `FPO.keepObj(..)`)
* [`FPO.filterOut(..)`](#fpofilterout) (aliases: `FPO.reject(..)`)
* [`FPO.filterOutObj(..)`](#fpofilteroutobj) (aliases: `FPO.rejectObj(..)`)
* [`FPO.flatMap(..)`](#fpoflatmap) (aliases: `FPO.chain(..)`)
* [`FPO.flatMapObj(..)`](#fpoflatmapobj) (aliases: `FPO.chainObj(..)`)
* [`FPO.flatten(..)`](#fpoflatten)
* [`FPO.head(..)`](#fpohead)
* [`FPO.identity(..)`](#fpoidentity)
* [`FPO.map(..)`](#fpomap)
* [`FPO.mapObj(..)`](#fpomapobj)
* [`FPO.memoize(..)`](#fpomemoize)
* [`FPO.nAry(..)`](#fponary)
* [`FPO.partial(..)`](#fpopartial) (aliases: `FPO.partialRight(..)`)
* [`FPO.pick(..)`](#fpopick)
* [`FPO.pickAll(..)`](#fpopickall)
* [`FPO.pipe(..)`](#fpopipe) (aliases: `FPO.flow(..)`, `FPO.sequence(..)`)
* [`FPO.prop(..)`](#fpoprop)
* [`FPO.reassoc(..)`](#fporeassoc)
* [`FPO.reduce(..)`](#fporeduce) (aliases: `FPO.fold(..)`, `FPO.foldL(..)`)
* [`FPO.reduceObj(..)`](#fporeduceobj) (aliases: `FPO.foldObj(..)`)
* [`FPO.reduceRight(..)`](#fporeduceright) (aliases: `FPO.foldR(..)`)
* [`FPO.remap(..)`](#fporemap)
* [`FPO.setProp(..)`](#fposetprop) (aliases: `FPO.assoc(..)`)
* [`FPO.tail(..)`](#fpotail)
* [`FPO.take(..)`](#fpotake)
* [`FPO.trampoline(..)`](#fpotrampoline)
* **Transducers**:
    - [`FPO.transducers.array(..)`](#fpotransducersarray)
    - [`FPO.transducers.booleanAnd(..)`](#fpotransducersbooleanand) (aliases: `FPO.transducers.boolean(..)`)
    - [`FPO.transducers.booleanOr(..)`](#fpotransducersbooleanor)
    - [`FPO.transducers.default(..)`](#fpotransducersdefault)
    - [`FPO.transducers.filter(..)`](#fpotransducersfilter)
    - [`FPO.transducers.into(..)`](#fpotransducersinto)
    - [`FPO.transducers.map(..)`](#fpotransducersmap)
    - [`FPO.transducers.number(..)`](#fpotransducersnumber)
    - [`FPO.transducers.string(..)`](#fpotransducersstring)
    - [`FPO.transducers.transduce(..)`](#fpotransducerstransduce)
* [`FPO.unapply(..)`](#fpounapply) (aliases: `FPO.gather(..)`)
* [`FPO.unary(..)`](#fpounary)
* [`FPO.uncurry(..)`](#fpouncurry)
* [`FPO.zip(..)`](#fpozip)

----

### `FPO.ap(..)`

([back to top](#core-api))

Produces a new list that is a concatenation of sub-lists, each produced by calling [`FPO.map(..)`](#fpomap) with each mapper function and the main list.

**Note:** From an equational reasoning perspective, `ap( x, y )` is equivalent to: `flatMap( curry(flip(map))(y), x )`.

* **Arguments:**
    - `fns`: array of functions to use as mapper functions (see [`FPO.map(..)`](#fpomap)); each is called with `v` (value), `i` (index), and `arr` (array) named arguments
    - `arr`: array to map against

* **Returns:** *array*

* **Example:**

    ```js
    function increment({ v }) { return v + 1; }
    function double({ v }) { return v * 2; }

    var nums = [1,2,3,4,5];

    FPO.ap( {fns: [increment,double], arr: nums} );
    // [2,3,4,5,6,2,4,6,8,10]
    ```

* **See Also:** [`FPO.map(..)`](#fpomap)

----

### `FPO.apply(..)`

([back to top](#core-api))

Wraps a function to spread out the properties from an object argument as individual positional arguments.

* **Arguments:**
    - `fn`: function to wrap
    - `props`: (optional) list of property names (strings) to indicate the order to spread properties as individual arguments. If omitted, the signature of `fn` is parsed for its parameter list to try to determine an ordered property list; this detection only works for simple parameters (including those with default parameter value settings).

* **Returns:** *function*

* **Example:**

    ```js
    function foo(x,y = 2) { return x + y; }
    function bar([a,b],c) { return a + b + c; }

    var f = FPO.apply( {fn: foo} );
    var p = FPO.apply( {fn: bar, props:["x","y"]} );

    f( {x: 1, y: 1} );  // 2
    f( {x: 3} );  // 5
    p( {x: [1,2], y: 3} ));  // 6
    ```

* **Aliases:** `FPO.spread(..)`

* **See Also:** [`FPO.unapply(..)`](#fpounapply)

----

### `FPO.binary(..)`

([back to top](#core-api))

Wraps a function to restrict its inputs to only two named arguments as specified.

* **Arguments:**
    - `fn`: function to wrap
    - `props`: array of two property names to allow as named arguments

* **Returns:** *function*

* **Example:**

    ```js
    function foo(argsObj) { return argsObj; }

    var f = FPO.binary( {fn: foo, props: ["x","y"]} );

    f( {x: 1, y: 2, z: 3} );
    // { x:1, y:2 }
    ```

* **See Also:** [`FPO.nAry(..)`](#fponary), [`FPO.unary(..)`](#fpounary)

----

### `FPO.complement(..)`

([back to top](#core-api))

Wraps a predicate function -- a function that produces `true` / `false` -- to negate its result.

* **Arguments:**
    - `fn`: function to wrap

* **Returns:** *function*

* **Example:**

    ```js
    var f = FPO.complement( {fn: () => false} );

    f();  // true
    ```

----

### `FPO.compose(..)`

([back to top](#core-api))

Produces a new function that's the composition of a list of functions. Functions are composed right-to-left (unlike [`FPO.pipe(..)`](#fpopipe)) from the array.

* **Arguments:**
    - `fns`: array of functions

* **Returns:** *function*

* **Example:**

    ```js
    var f = FPO.compose( {fns: [
        ({v}) => v + "3",
        ({v}) => v + "2",
        ({v}) => v + "1"
    ]} );

    f( {v: "0"} );  // "0123"
    ```

* **Aliases:** `FPO.flowRight(..)`

* **See Also:** [`FPO.pipe(..)`](#fpopipe)

----

### `FPO.constant(..)`

([back to top](#core-api))

Wraps a value in a function that returns the value.

* **Arguments:**
    - `v`: value to wrap

* **Returns:** *function*

* **Example:**

    ```js
    var f = FPO.constant( {v: 42} );

    f();  // 42
    ```

* **Aliases:** `FPO.always(..)`

* **See Also:** [`FPO.identity(..)`](#fpoidentity)

----

### `FPO.curry(..)`

([back to top](#core-api))

Curries a function so that you can pass one argument at a time, each time getting back another function to receive the next argument. Once all arguments are passed, the underlying function is called with the arguments.

Unlike [`FPO.curryMultiple(..)`](#fpocurrymultiple), you can only pass one property argument at a time to each curried function (see example below). If multiple properties are passed to a curried call, only the first property (in enumeration order) will be passed.

**Note:** Enumeration order of properties is not strictly guaranteed cross-environment. However, it's generally reliable as the order that properties were listed/added to the object in its definition.

* **Arguments:**
    - `fn`: function to curry
    - `n`: number of arguments to curry for

* **Returns:** *function*

* **Example:**

    ```js
    function foo({ x,y,z }) { return x + y + z; }

    var f = FPO.curry( {fn: foo, n: 3} );

    f( {y: "b" } )()( {} )()( {x: "a", z: "!"} )( {z: "c"} );
    // "abc"
    ```

* **See Also:** [`FPO.curryMultiple(..)`](#fpocurrymultiple), [`FPO.partial(..)`](#fpopartial), [`FPO.uncurry(..)`](#fpouncurry)

----

### `FPO.curryMultiple(..)`

([back to top](#core-api))

Just like [`FPO.curry(..)`](#fpocurry), except each curried function allows multiple arguments instead of just one.

* **Arguments:**
    - `fn`: function to curry
    - `n`: number of arguments to curry for

* **Returns:** *function*

* **Example:**

    ```js
    function foo({ x,y,z }) { return x + y + z; }

    var f = FPO.curryMultiple( {fn: foo, n: 3} );

    f( {y: "b" } )()( {} )()( {x: "a", z: "!"} );
    // "ab!"
    ```

* **See Also:** [`FPO.curry(..)`](#fpocurry), [`FPO.partial(..)`](#fpopartial), [`FPO.uncurry(..)`](#fpouncurry)

----

### `FPO.filterIn(..)`

([back to top](#core-api))

Commonly known as `filter(..)`, produces a new list by calling a predicate function with each value in the original list. For each value, if the predicate function returns true (or truthy), the value is included in (aka, filtered into) the new list. Otherwise, the value is omitted.

* **Arguments:**
    - `fn`: predicate function; called with `v` (value), `i` (index), and `arr` (array) named arguments
    - `arr`: array to filter against

* **Returns:** *array*

* **Example:**

    ```js
    function isOdd({ v }) { return v % 2 == 1; }

    var nums = [1,2,3,4,5];

    FPO.filterIn( {fn: isOdd, arr: nums} );
    // [1,3,5]
    ```

* **Aliases:** `FPO.filter(..)`, `FPO.keep(..)`

* **See Also:** [`FPO.filterInObj(..)`](#fpofilterinobj), [`FPO.filterOut(..)`](#fpofilterout)

----

### `FPO.filterInObj(..)`

([back to top](#core-api))

Produces a new object by calling a predicate function with each property value in the original object. For each value, if the predicate function returns true (or truthy), the value is included in (aka, filtered into) the new object at the same property name. Otherwise, the value is omitted.

* **Arguments:**
    - `fn`: predicate function; called with `v` (value), `i` (property name), and `o` (object) named arguments
    - `o`: object to filter against

* **Returns:** *object*

* **Example:**

    ```js
    function isOdd({ v }) { return v % 2 == 1; }

    var nums = {a: 1, b: 2, c: 3, d: 4, e: 5};

    FPO.filterInObj( {fn: isOdd, o: nums} );
    // {a: 1, c: 3, e: 5}
    ```

* **Aliases:** `FPO.filterObj(..)`, `FPO.keepObj(..)`

* **See Also:** [`FPO.filterIn(..)`](#fpofilterin), [`FPO.filterOutObj(..)`](#fpofilteroutobj)

----

### `FPO.filterOut(..)`

([back to top](#core-api))

The inverse of [`FPO.filterIn(..)`](#fpofilterin), produces a new list by calling a predicate function with each value in the original list. For each value, if the predicate function returns true (or truthy), the value is omitted from (aka, filtered out of) the new list. Otherwise, the value is included.

* **Arguments:**
    - `fn`: predicate function; called with `v` (value), `i` (index), and `arr` (array) named arguments
    - `arr`: array to filter against

* **Returns:** *array*

* **Example:**

    ```js
    function isOdd({ v }) { return v % 2 == 1; }

    var nums = [1,2,3,4,5];

    FPO.filterOut( {fn: isOdd, arr: nums} );
    // [2,4]
    ```

* **Aliases:** `FPO.reject(..)`

* **See Also:** [`FPO.filterOutObj(..)`](#fpofilteroutobj), [`FPO.filterIn(..)`](#fpofilterin)

----

### `FPO.filterOutObj(..)`

([back to top](#core-api))

The inverse of [`FPO.filterInObj(..)`](#fpofilterinobj), produces a new object by calling a predicate function with each property value in the original object. For each value, if the predicate function returns true (or truthy), the value is omitted from (aka, filtered out of) the new object. Otherwise, the value is included at the same property name.

* **Arguments:**
    - `fn`: predicate function; called with `v` (value), `i` (property name), and `o` (object) named arguments
    - `o`: object to filter against

* **Returns:** *object*

* **Example:**

    ```js
    function isOdd({ v }) { return v % 2 == 1; }

    var nums = {a: 1, b: 2, c: 3, d: 4, e: 5};

    FPO.filterOutObj( {fn: isOdd, o: nums} );
    // {b: 2, d: 4}
    ```

* **Aliases:** `FPO.rejectObj(..)`

* **See Also:** [`FPO.filterOut(..)`](#fpofilterout), [`FPO.filterInObj(..)`](#fpofilterinobj)

----

### `FPO.flatMap(..)`

([back to top](#core-api))

Similar to [`FPO.map(..)`](#fpomap), produces a new list by calling a mapper function with each value in the original list. If the mapper function returns an array, this array is flattened (one level) into the overall array.

* **Arguments:**
    - `fn`: mapper function; called with `v` (value), `i` (index), and `arr` (array) named arguments
    - `arr`: array to flat-map against

* **Returns:** *array*

* **Example:**

    ```js
    function splitChars({ v }) { return [...v]; }

    var words = ["hello","world"];

    splitChars( {v: words[0]} );
    // ["h","e","l","l","o"]

    FPO.map( {fn: splitChars, arr: words} );
    // [["h","e","l","l","o"],["w","o","r","l","d"]]

    FPO.flatMap( {fn: splitChars, arr: words} );
    // ["h","e","l","l","o","w","o","r","l","d"]
    ```

* **Aliases:** `FPO.chain(..)`

* **See Also:** [`FPO.flatMapObj(..)`](#fpoflatmapobj), [`FPO.map(..)`](#fpomap), [`FPO.flatten(..)`](#fpoflatten)

----

### `FPO.flatMapObj(..)`

([back to top](#core-api))

Similar to [`FPO.mapObj(..)`](#fpomapobj), produces a new object by calling a mapper function with each property value in the original object. If the mapper function returns an object, this object is flattened (one level) into the overall object, by copying its properties.

* **Arguments:**
    - `fn`: mapper function; called with `v` (value), `i` (property name), and `o` (object) named arguments
    - `o`: object to flat-map against

* **Returns:** *object*

* **Example:**

    ```js
    function splitEvensInHalf({ v, i }) {
        if (v % 2 == 0) {
            return { [i]: v/2, [i+"_2"]: v/2 };
        }
        return v;
    }

    var nums = {a: 1, b: 2, c: 3, d: 4};

    splitEvensInHalf( {v: 3, i: "c"} );
    // 3

    splitEvensInHalf( {v: 4, i: "d"} );
    // {d: 2, d_2: 2}

    FPO.mapObj( {fn: splitEvensInHalf, o: nums} );
    // {a: 1, b: {b: 1, b_2: 1}, c: 3, d: {d: 2, d_2: 2}}

    FPO.flatMapObj( {fn: splitEvensInHalf, o: nums} );
    // {a: 1, b: 1, b_2: 1, c: 3, d: 2, d_2: 2};
    ```

* **Aliases:** `FPO.chainObj(..)`

* **See Also:** [`FPO.flatMap(..)`](#fpoflatmap), [`FPO.mapObj(..)`](#fpomapobj)

----

### `FPO.flatten(..)`

([back to top](#core-api))

Flattens an array of nested arrays. Optionally, specify how many levels of nesting to flatten out.

* **Arguments:**
    - `v`: array to flat-map against
    - `n`: (optional) the number of levels of nesting to flatten out; if omitted, defaults to Infinity (to flatten any nested depth).

* **Returns:** *array*

* **Example:**

    ```js
    var nums = [1,2,[3,4],[5,[6,7]]];

    FPO.flatten( {v: nums} );
    // [1,2,3,4,5,6,7]

    FPO.flatten( {v: nums, n: 1} );
    // [1,2,3,4,5,[6,7]]

    FPO.flatten( {v: nums, n: 2} );
    // [1,2,3,4,5,6,7]
    ```

* **See Also:** [`FPO.flatMap(..)`](#fpoflatmap)

----

### `FPO.head(..)`

([back to top](#core-api))

Returns the element as accessed at index 0 of the value.

* **Arguments:**
    - `v`: array, string, object

* **Returns:** *any*

* **Example:**

    ```js
    var nums = [1,2,3,4];

    FPO.head( {v: nums} );
    // 1

    FPO.head( {v: []} );
    // undefined

    FPO.head( {v: "abc"} );
    // "a"

    FPO.head( {v: {0: 42}} );
    // 42
    ```

* **See Also:** [`FPO.tail(..)`](#fpotail)

----

### `FPO.identity(..)`

([back to top](#core-api))

Returns the value given to it. Useful as a default placeholder for certain opertaions (i.e., composition, reduction).

* **Arguments:**
    - `v`: value to return

* **Returns:** *-any-*

* **Example:**

    ```js
    FPO.identity( {v: 42} );  // 42
    ```

* **See Also:** [`FPO.constant(..)`](#fpoconstant)

----

### `FPO.map(..)`

([back to top](#core-api))

Produces a new list by calling a mapper function with each value in the original list. The value the mapper function returns is inserted in the new list at that same position. The new list will always be the same length as the original list.

* **Arguments:**
    - `fn`: mapper function; called with `v` (value), `i` (index), and `arr` (array) named arguments
    - `arr`: array to map against

* **Returns:** *array*

* **Example:**

    ```js
    function double({ v }) { return v * 2; }

    var nums = [1,2,3,4,5];

    FPO.map( {fn: double, arr: nums} );
    // [2,4,6,8,10]
    ```

* **See Also:** [`FPO.mapObj(..)`](#fpomapobj), [`FPO.flatMap(..)`](#fpoflatmap)

----

### `FPO.mapObj(..)`

([back to top](#core-api))

Produces a new object by calling a mapper function with each property value in the original object. The value the mapper function returns is inserted in the new object at that same property name. The new object will always have the same number of properties as the original object.

* **Arguments:**
    - `fn`: mapper function; called with `v` (value), `i` (property name), and `o` (object) named arguments
    - `o`: object to map against

* **Returns:** *object*

* **Example:**

    ```js
    function double({ v }) { return v * 2; }

    var nums = {a: 1, b: 2, c: 3, d: 4, e: 5};

    FPO.mapObj( {fn: double, o: nums} );
    // {a: 2, b: 4, c: 6, d: 8, e: 10};
    ```

* **See Also:** [`FPO.map(..)`](#fpomap)

----

### `FPO.memoize(..)`

([back to top](#core-api))

For performance optimization reasons, wraps a function such that it remembers each set of arguments passed to it, associated with that underlying return value. If the wrapped function is called subsequent times with the same set of arguments, the cached return value is returned instead of being recomputed. Each wrapped function instance has its own separate cache, even if wrapping the same original function multiple times.

A set of arguments is "remembered" by being hashed to a string value to use as a cache key. This hashing is done internally with `JSON.stringify(..)`, which is fast and works with many common JS value types. However, this hashing is by no means bullet-proof for all types, and does not guarantee collision-free. **Use caution:** generally, you should only use primitives (number, string, boolean, null, and undefined) or simple objects (object, array) as arguments. If you use objects, always make sure to list properties in the same order to ensure proper hashing.

By default, the function's arity (`fn.length`) will be detected as `n`. However, in JS certain techniques thwart this detection, such as the use of default parameters or parameter destructuring. Make sure to specify the correct `n` if detection is uncertain or unreliable.

Unary functions (single argument; `n` of `1`) with a primitive argument are the fastest for memoization, so if possible, try to design functions that way. In these cases, specifying `n` as `1` will help ensure the best possible performance.

**Warning:** Be aware that if `1` is initially specified (or detected) for `n`, additional arguments later passed to the wrapped function are **not considered** in the memoization hashing, though they will still be passed to the underlying function as-is. This may cause unexpected results (false-positives on cache hits); always make sure `n` matches the expected number of arguments.

* **Arguments:**
    - `fn`: function to wrap
    - `n`: number of arguments to memoize; if omitted, tries to detect the arity (`fn.length`) to use.

* **Returns:** *array*

* **Example:**

    ```js
    function sum(x,y) { console.log( "sum called!" ); return x + y; }
    function mult({x, y}) { console.log( "mult called!" ); return x * y; }

    var A = FPO.memoize( {fn: sum} );
    var B = FPO.memoize( {fn: sum, n: 1} );   // be careful here!
    var C = FPO.memoize( {fn: mult, n: 1} );

    A( 2, 3 );
    // sum called!
    // 5

    A( 2, 3 );     // no need to re-compute, value pulled from cache
    // 5

    B( 2, 3 );     // different instance, separate cache, re-computed
    // sum called!
    // 5

    B( 2, 100 );   // oops, memoization fail here!
    // 5

    C( {x: 3, y: 4} );
    // mult called!
    // 12

    C( {x: 3, y: 4} );
    // 12

    C( {y: 4, x: 3} );   // oops, cache hashing is different
    // mult called!
    // 12
    ```

----

### `FPO.nAry(..)`

([back to top](#core-api))

Wraps a function to restrict its inputs to only the named arguments as specified.

* **Arguments:**
    - `fn`: function to wrap
    - `props`: array of property names to allow as named arguments; if empty, produces a "nullary" function -- won't receive any arguments.

* **Returns:** *function*

* **Example:**

    ```js
    function foo(argsObj) { return argsObj; }

    var f = FPO.nAry( {fn: foo, props: ["x","y","z"]} );

    f( {x: 1, y: 2, z: 3, w: 4} );
    // { x:1, y:2, z:3 }
    ```

* **See Also:** [`FPO.binary(..)`](#fpobinary), [`FPO.unary(..)`](#fpounary)

----

### `FPO.partial(..)`

([back to top](#core-api))

Wraps a function with a new function that already has some of the arguments pre-specified, and is waiting for the rest of them on the next call. Unlike [`FPO.curry(..)`](#fpocurry), you must specify all the remaining arguments on the next call of the partially-applied function.

With traditional FP libraries, `partial(..)` works in left-to-right order (as does `FPO.std.partial(..)`). That's why typically you also need a `FPO.std.partialRight(..)` if you want to partially-apply from the opposite direction.

However, using named arguments style -- after all, that is the whole point of FPO! -- order doesn't matter. For familiarity sake, `FPO.partialRight(..)` is provided, but it's just an alias to `FPO.partial(..)`.

* **Arguments:**
    - `fn`: function to partially-apply
    - `args`: object containing the arguments to apply now

* **Returns:** *function*

* **Example:**

    ```js
    function foo({ x,y,z }) { return x + y + z; }

    var f = FPO.partial( {fn: foo, args: {x: "a"}} );

    f( {y: "b", z: "!"} );
    // "ab!"
    ```

* **Aliases:** `FPO.partialRight(..)`

* **See Also:** [`FPO.curry(..)`](#fpocurry), [`FPO.curryMultiple(..)`](#fpocurrymultiple)

----

### `FPO.pick(..)`

([back to top](#core-api))

Returns a new object with only the specified properties from the original object. Includes only properties from the original object.

* **Arguments:**
    - `v`: object to pick properties from
    - `props`: array of property names to pick from the object; if a property does not exist on the original object, it **is not** added to the new object, unlike [`FPO.pickAll(..)`](#fpopickall).

* **Returns:** *object*

* **Example:**

    ```js
    var obj = { x: 1, y: 2, z: 3 };

    FPO.pick( {v: obj, props: ["x","y","w"]} );
    // { x:1, y:2 }
    ```

* **See Also:** [`FPO.pickAll(..)`](#fpopickall), [`FPO.prop(..)`](#fpoprop)

----

### `FPO.pickAll(..)`

([back to top](#core-api))

Returns a new object with only the specified properties from the original object. Includes all specified properties.

* **Arguments:**
    - `v`: object to pick properties from
    - `props`: array of property names to pick from the object; even if a property does not exist on the original object, it **is** still added to the new object with an `undefined` value, unlike [`FPO.pick(..)`](#fpopick).

* **Returns:** *object*

* **Example:**

    ```js
    var obj = { x: 1, y: 2, z: 3 };

    FPO.pickAll( {v: obj, props: ["x","y","w"]} );
    // { x:1, y:2, w:undefined }
    ```

* **See Also:** [`FPO.pick(..)`](#fpopick)

----

### `FPO.pipe(..)`

([back to top](#core-api))

Produces a new function that's the composition of a list of functions. Functions are composed left-to-right (unlike [`FPO.compose(..)`](#fpocompose)) from the array.

* **Arguments:**
    - `fns`: array of functions

* **Returns:** *function*

* **Example:**

    ```js
    var f = FPO.pipe( {fns: [
        ({v}) => v + "3",
        ({v}) => v + "2",
        ({v}) => v + "1"
    ]} );

    f( {v: "4"} );  // "4321"
    ```

* **Aliases:** `FPO.flow(..)`, `FPO.sequence(..)`

* **See Also:** [`FPO.compose(..)`](#fpocompose)

----

### `FPO.prop(..)`

([back to top](#core-api))

Extracts a property's value from an object.

* **Arguments:**
    - `v`: object to pull the property value from
    - `prop`: property name to pull from the object

* **Returns:** *-any-*

* **Example:**

    ```js
    var obj = { x: 1, y: 2, z: 3 };

    FPO.prop( {v: obj, prop: "y"} );  // 2
    ```

* **See Also:** [`FPO.pick(..)`](#fpopick), [`FPO.setProp(..)`](#fposetprop)

----

### `FPO.reassoc(..)`

([back to top](#core-api))

Like a mixture between [`FPO.pick(..)`](#fpopick) and [`FPO.setProp(..)`](#fposetprop), creates a new object that has properties remapped from original names to new names. Any properties present on the original object that aren't remapped are copied with the same name.

* **Arguments:**
    - `props`: object whose key/value pairs are `sourceProp: targetProp` remappings
    - `v`: object to remap properties from

* **Returns:** *object*

* **Example:**

    ```js
    var obj = { x: 1, y: 2, z: 3 };

    FPO.reassoc( {v: obj, props: {x: "A", z: "__z__"}} );
    // { A: 1, __z__: 3, y: 2}
    ```

* **See Also:** [`FPO.pick(..)`](#fpopick), [`FPO.setProp(..)`](#fposetprop)

----

### `FPO.reduce(..)`

([back to top](#core-api))

Processes a list from left-to-right (unlike [`FPO.reduceRight(..)`](#fporeduceright)), successively combining (aka "reducing", "folding") two values into one, until the entire list has been reduced to a single value. An initial value for the reduction can optionally be provided.

* **Arguments:**
    - `fn`: reducer function; called with `acc` (accumulator), `v` (value), `i` (index), and `arr` (array) named arguments
    - `arr`: array to reduce
    - `v`: (optional) initial value to use for the reduction; if provided, the first reduction will pass to the reducer the initial value as the `acc` and the first value from the array as `v`. Otherwise, the first reduction has the first value of the array as `acc` and the second value of the array as `v`.

* **Returns:** *-any-*

* **Example:**

    ```js
    function strConcat({ acc, v }) { return acc + v; }

    var vowels = ["a","e","i","o","u","y"];

    FPO.reduce( {fn: strConcat, arr: vowels} );
    // "aeiouy"

    FPO.reduce( {fn: strConcat, arr: vowels, v: "vowels: "} );
    // "vowels: aeiouy"
    ```

* **Aliases:** `FPO.fold(..)`, `FPO.foldL(..)`

* **See Also:** [`FPO.reduceObj(..)`](#fporeduceobj), [`FPO.reduceRight(..)`](#fporeduceright)

----

### `FPO.reduceObj(..)`

([back to top](#core-api))

Processes an object's properties (in enumeration order), successively combining (aka "reducing", "folding") two values into one, until all the object's properties have been reduced to a single value. An initial value for the reduction can optionally be provided.

**Note:** Enumeration order of properties is not strictly guaranteed cross-environment. However, it's generally reliable as the order that properties were listed/added to the object in its definition.

* **Arguments:**
    - `fn`: reducer function; called with `acc` (accumulator), `v` (value), `i` (property name), and `o` (object) named arguments
    - `o`: object to reduce
    - `v`: (optional) initial value to use for the reduction; if provided, the first reduction will pass to the reducer the initial value as the `acc` and the first property value (in enumeration order) from the object as `v`. Otherwise, the first reduction has the first property value (in enumeration order) of the object as `acc` and the second property value (in enumeration order) of the object as `v`.

* **Returns:** *-any-*

* **Example:**

    ```js
    function strConcat({ acc, v }) { return acc + v; }

    var vowels = {a: "a", b: "e", c: "i", d: "o", e: "u", f: "y"};

    FPO.reduceObj( {fn: strConcat, o: vowels} );
    // "aeiouy"

    FPO.reduceObj( {fn: strConcat, o: vowels, v: "vowels: "} );
    // "vowels: aeiouy"
    ```

* **Aliases:** `FPO.foldObj(..)`

* **See Also:** [`FPO.reduce(..)`](#fporeduce)

----

### `FPO.reduceRight(..)`

([back to top](#core-api))

Processes a list from right-to-left (unlike [`FPO.reduce(..)`](#fporeduce)), successively combining (aka "reducing", "folding") two values into one, until the entire list has been reduced to a single value.

An initial value for the reduction can optionally be provided. If the array is empty, the initial value is returned (or `undefined` if it was omitted).

* **Arguments:**
    - `fn`: reducer function; called with `acc` (accumulator), `v` (value), `i` (index), and `arr` (array) named arguments
    - `arr`: array to reduce
    - `v`: (optional) initial value to use for the reduction; if provided, the first reduction will pass to the reducer the initial value as the `acc` and the first value from the array as `v`. Otherwise, the first reduction has the first value of the array as `acc` and the second value of the array as `v`.

* **Returns:** *-any-*

* **Example:**

    ```js
    function strConcat({ acc, v }) { return acc + v; }

    var vowels = ["a","e","i","o","u","y"];

    FPO.reduceRight( {fn: strConcat, arr: vowels} );
    // "yuoiea"

    FPO.reduceRight( {fn: strConcat, arr: vowels, v: "vowels: "} );
    // "vowels: yuoiea"
    ```

* **Aliases:** `FPO.foldR(..)`

* **See Also:** [`FPO.reduce(..)`](#fporeduce)

----

### `FPO.remap(..)`

([back to top](#core-api))

Remaps the expected named arguments of a function. This is useful to adapt a function to be used if the arguments passed in will be different than what the function expects.

A common usecase will be to adapt a function so it's suitable for use as a mapper/predicate/reducer function, or for composition.

* **Arguments:**
    - `fn`: function to remap
    - `args`: object whose key/value pairs represent the `origArgName: newArgName` mappings

* **Returns:** *function*

* **Example:**

    ```js
    function double({ x }) { return x * 2; }
    function increment({ y }) { return y + 1; }
    function div3({ z }) { return z / 3; }

    var f = FPO.remap( {fn: double, args: {x: "v"}} );
    var g = FPO.remap( {fn: increment, args: {y: "v"}} );
    var h = FPO.remap( {fn: div3, args: {z: "v"}} );

    f( {v: 3} );
    // 6

    FPO.map( {fn: g, arr: [5,10,15,20,25]} );
    // [6,11,16,21,26]

    var m = FPO.compose( {fns: [h,g,f]} );
    m( {v: 4} );
    // 3

    FPO.map( {fn: m, arr: [1,4,7,10,13]} );
    // [1,3,5,7,9]
    ```

* **See Also:** [`FPO.reassoc(..)`](#fporeassoc)

----

### `FPO.setProp(..)`

([back to top](#core-api))

Creates a shallow clone of an object, assigning the specified property value to the new object.

* **Arguments:**
    - `o`: (optional) object to clone; if omitted, defaults to a new empty object
    - `prop`: property name where to set the value on the new object
    - `v`: value

* **Returns:** *object*

* **Example:**

    ```js
    var obj = { x: 1, y: 2, z: 3 };

    FPO.setProp( {o: obj, prop: "w", v: 4} );
    // { x:1, y:2, z:3, w:4 }

    obj;
    // { x:1, y:2, z:3 }
    ```

* **Aliases:** `FPO.assoc(..)`

* **See Also:** [`FPO.prop(..)`](#fpoprop)

----

### `FPO.tail(..)`

([back to top](#core-api))

Returns everything else in the value except the element as accessed at index 0; basically the inverse of [`FPO.head(..)`](#fpohead).

* **Arguments:**
    - `v`: array, string, object

* **Returns:** *any*

* **Example:**

    ```js
    var nums = [1,2,3,4];

    FPO.tail( {v: nums} );
    // [2,3,4]

    FPO.tail( {v: []} );
    // undefined

    FPO.tail( {v: "abc"} );
    // "bc"

    FPO.tail( {v: {0: 42, 1: 10}} );
    // {1: 10}
    ```

* **See Also:** [`FPO.head(..)`](#fpohead)

----

### `FPO.take(..)`

([back to top](#core-api))

Returns the specified number of elements from the value, starting from the beginning.

* **Arguments:**
    - `v`: array / string
    - `n`: number of elements to take from the beginning of the value; if omitted, defaults to `1`.

* **Returns:** array / string

* **Example:**

    ```js
    var nums = [1,2,3,4];

    FPO.take( {v: nums, n: 2} );
    // [1,2]

    FPO.take( {v: nums} );
    // [1]

    FPO.take( {v: "abc", n: 2} );
    // "ab"

    FPO.take( {v: null} );
    // []
    ```

* **See Also:** [`FPO.head(..)`](#fpohead)

----

### `FPO.trampoline(..)`

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

    FPO.trampoline( {fn: sum} )( 0, 5 );
    // 15
    ```

----

### `FPO.transducers.array(..)`

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

    FPO.transducers.array( {acc: arr, v: 4} );
    // [1,2,3,4]

    arr;
    // [1,2,3,4] <-- was mutated as a side-effect!
    ```

* **See Also:** [`FPO.transducers.booleanAnd(..)`](#fpotransducersbooleanand), [`FPO.transducers.booleanOr(..)`](#fpotransducersbooleanor), [`FPO.transducers.default(..)`](#fpotransducersdefault), [`FPO.transducers.number(..)`](#fpotransducersnumber), [`FPO.transducers.string(..)`](#fpotransducersstring)

----

### `FPO.transducers.booleanAnd(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that takes two booleans and *AND*s them together. The result is the logical *AND* of the two values.

* **Arguments:**
    - `acc`: acculumator
    - `v`: value

* **Returns:** *true/false*

* **Example:**

    ```js
    FPO.transducers.booleanAnd( {acc: true, v: true} );
    // true

    FPO.transducers.booleanAnd( {acc: false, v: true} );
    // false
    ```

* **Aliases:** `FPO.transducers.boolean(..)`

* **See Also:** [`FPO.transducers.array(..)`](#fpotransducersarray), [`FPO.transducers.booleanOr(..)`](#fpotransducersbooleanor), [`FPO.transducers.default(..)`](#fpotransducersdefault), [`FPO.transducers.number(..)`](#fpotransducersnumber), [`FPO.transducers.string(..)`](#fpotransducersstring)

----

### `FPO.transducers.booleanOr(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that takes two booleans and *OR*s them together. The result is the logical *OR* of the two values.

* **Arguments:**
    - `acc`: acculumator
    - `v`: value

* **Returns:** *true/false*

* **Example:**

    ```js
    FPO.transducers.booleanOr( {acc: false, v: true} );
    // true

    FPO.transducers.booleanOr( {acc: false, v: false} );
    // false
    ```

* **See Also:** [`FPO.transducers.array(..)`](#fpotransducersarray), [`FPO.transducers.booleanAnd(..)`](#fpotransducersbooleanand), [`FPO.transducers.default(..)`](#fpotransducersdefault), [`FPO.transducers.number(..)`](#fpotransducersnumber), [`FPO.transducers.string(..)`](#fpotransducersstring)

----

### `FPO.transducers.default(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that's a default placeholder. It returns only the `acc` that's passed to it. The behavior here is almost the same as [`FPO.identity(..)`](#fpoidentity), except that returns `acc` instead of `v`.

* **Arguments:**
    - `acc`: acculumator
    - `v`: value

* **Returns:** *-any-*

* **Example:**

    ```js
    FPO.transducers.default( {acc: 3, v: 1} );
    // 3
    ```

* **See Also:** [`FPO.transducers.array(..)`](#fpotransducersarray), [`FPO.transducers.booleanAnd(..)`](#fpotransducersbooleanand), [`FPO.transducers.booleanOr(..)`](#fpotransducersbooleanOr), [`FPO.transducers.number(..)`](#fpotransducersnumber), [`FPO.transducers.string(..)`](#fpotransducersstring), [`FPO.identity(..)`](#fpoidentity)

----

### `FPO.transducers.filter(..)`

([back to top](#core-api))

For transducing purposes, wraps a predicate function as a filter-transducer. Typically, this filter-transducer is then composed with other filter-transducers and/or map-transducers. The resulting transducer is then passed to [`FPO.transducers.transduce(..)`](#fpotransducerstransduce).

The filter-transducer is not a reducer itself; it's expecting a combination function (reducer), which will then produce a filter-reducer. So alternately, you can manually create the filter-reducer and use it directly with a regular [`FPO.reduce(..)`](#fporeduce) reduction.

* **Arguments:**
    - `fn`: predicate function

* **Returns:** *function*

* **Example:**

    ```js
    function isOdd({ v }) { return v % 2 == 1; }
    function arrayPush({ acc, v }) { acc.push( v ); return acc; }

    var nums = [1,2,3,4,5];

    var filterTransducer = FPO.transducers.filter( {fn: isOdd} );

    FPO.transducers.transduce(
        {fn: filterTransducer, co: arrayPush, v: [], arr: nums}
    );
    // [1,3,5]

    // ******************

    var filterReducer = filterTransducer( {v: arrayPush} );

    filterReducer( {acc: [], v: 3} );
    // [3]

    filterReducer( {acc: [], v: 4} );
    // []

    FPO.reduce( {fn: filterReducer, v: [], arr: nums} );
    // [1,3,5]
    ```

* **See Also:** [`FPO.transducers.map(..)`](#fpotransducersmap)

----

### `FPO.transducers.into(..)`

([back to top](#core-api))

Selects an appropriate combination function (reducer) based on the provided initial value. Then runs [`FPO.transducers.transduce(..)`](#fpotransducerstransduce) under the covers.

Detects initial values of `boolean`, `number`, `string`, and `array` types, and dispatches to the appropriate combination function accordingly ([`FPO.transducers.number(..)`](#fpotransducersnumber), etc). **Note:** A `boolean` initial value selects [`FPO.transducers.booleanAnd(..)`](#fpotransducersboooleanand).

**Note:** When composing transducers, the effective order of operations is reversed from normal composition. Instead of expecting composition to be right-to-left, the effective order will be left-to-right (see below).

* **Arguments:**
    - `fn`: transducer function
    - `v`: initial value for the reduction; also used to select the appropriate combination function (reducer) for the transducing.
    - `arr`: the list for the reduction

* **Returns:** *-any-*

* **Example:**

    ```js
    function double({ v }) { return v * 2; }
    function isOdd({ v }) { return v % 2 == 1; }

    var nums = [1,2,3,4,5];

    var transducer = FPO.compose( {fns: [
        FPO.transducers.filter( {fn: isOdd} ),
        FPO.transducers.map( {fn: double} )
    ]} );

    FPO.transducers.into( {fn: transducer, v: [], arr: nums} );
    // [2,6,10]

    FPO.transducers.into( {fn: transducer, v: 0, arr: nums} );
    // 18

    FPO.transducers.into( {fn: transducer, v: "", arr: nums} );
    // "2610"
    ```

* **See Also:** [`FPO.transducers.transduce(..)`](#fpotransducerstransduce)

----

### `FPO.transducers.map(..)`

([back to top](#core-api))

For transducing purposes, wraps a mapper function as a map-transducer. Typically, this map-transducer is then composed with other filter-transducers and/or map-transducers. The resulting transducer is then passed to [`FPO.transducers.transduce(..)`](#fpotransducerstransduce).

The map-transducer is not a reducer itself; it's expecting a combination function (reducer), which will then produce a filter-reducer. So alternately, you can manually create the map-reducer and use it directly with a regular [`FPO.reduce(..)`](#fporeduce) reduction.

* **Arguments:**
    - `fn`: mapper function

* **Returns:** *function*

* **Example:**

    ```js
    function double({ v }) { return v * 2; }
    function arrayPush({ acc, v }) { acc.push( v ); return acc; }

    var nums = [1,2,3,4,5];

    var mapTransducer = FPO.transducers.map( {fn: double} );

    FPO.transducers.transduce(
        {fn: mapTransducer, co: arrayPush, v: [], arr: nums}
    );
    // [2,4,6,8,10]

    // ******************

    var mapReducer = mapTransducer( {v: arrayPush} );

    mapReducer( {acc: [], v: 3} );
    // [6]

    FPO.reduce( {fn: mapReducer, v: [], arr: nums} );
    // [2,4,6,8,10]
    ```

* **See Also:** [`FPO.transducers.filter(..)`](#fpotransducersfilter)

----

### `FPO.transducers.number(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that adds together the two numbers passed into it. The result is the sum.

* **Arguments:**
    - `acc`: acculumator
    - `v`: value

* **Returns:** *number*

* **Example:**

    ```js
    FPO.transducers.number( {acc: 3, v: 4} );
    // 7
    ```

* **See Also:** [`FPO.transducers.array(..)`](#fpotransducersarray), [`FPO.transducers.booleanAnd(..)`](#fpotransducersbooleanand), [`FPO.transducers.booleanOr(..)`](#fpotransducersbooleanOr), [`FPO.transducers.default(..)`](#fpotransducersdefault), [`FPO.transducers.string(..)`](#fpotransducersstring)

----

### `FPO.transducers.string(..)`

([back to top](#core-api))

A reducer function. For transducing purposes, a combination function that concats the two strings passed into it. The result is the concatenation.

* **Arguments:**
    - `acc`: acculumator
    - `v`: value

* **Returns:** *string*

* **Example:**

    ```js
    FPO.transducers.string( {acc: "hello", v: "world"} );
    // "helloworld"
    ```

* **See Also:** [`FPO.transducers.array(..)`](#fpotransducersarray), [`FPO.transducers.booleanAnd(..)`](#fpotransducersbooleanand), [`FPO.transducers.booleanOr(..)`](#fpotransducersbooleanOr), [`FPO.transducers.default(..)`](#fpotransducersdefault), [`FPO.transducers.number(..)`](#fpotransducersnumber)

----

### `FPO.transducers.transduce(..)`

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
    function double({ v }) { return v * 2; }
    function isOdd({ v }) { return v % 2 == 1; }
    function arrayPush({ acc, v }) { acc.push( v ); return acc; }

    var nums = [1,2,3,4,5];

    var transducer = FPO.compose( {fns: [
        FPO.transducers.filter( {fn: isOdd} ),
        FPO.transducers.map( {fn: double} )
    ]} );

    FPO.transducers.transduce(
        {fn: transducer, co: arrayPush, v: [], arr: nums}
    );
    // [2,6,10]
    ```

* **See Also:** [`FPO.transducers.into(..)`](#fpotransducersinto)

----

### `FPO.unapply(..)`

([back to top](#core-api))

Wraps a function to gather individual positional arguments into an object argument.

* **Arguments:**
    - `fn`: function to wrap
    - `props`: list of property names (strings) to indicate the order to gather individual positional arguments as properties.

* **Returns:** *function*

* **Example:**

    ```js
    function foo({ x, y }) { return x + y; }

    var f = FPO.unapply( {fn: foo, props:["x","y"]} );

    f( 1, 2 );  // 3
    ```

* **Aliases:** `FPO.gather(..)`

* **See Also:** [`FPO.apply(..)`](#fpoapply)

----

### `FPO.unary(..)`

([back to top](#core-api))

Wraps a function to restrict its inputs to only one named argument as specified.

* **Arguments:**
    - `fn`: function to wrap
    - `prop`: property name to allow as named argument

* **Returns:** *function*

* **Example:**

    ```js
    functino foo(argsObj) { return argsObj; }

    var f = FPO.unary( {fn: foo, prop: "y"} );

    f( {x: 1, y: 2, z: 3} );
    // { y:2 }
    ```

* **See Also:** [`FPO.nAry(..)`](#fponary), [`FPO.binary(..)`](#fpobinary)

----

### `FPO.uncurry(..)`

([back to top](#core-api))

Wraps a (strictly) curried function in a new function that accepts all the arguments at once, and provides them one at a time to the underlying curried function.

* **Arguments:**
    - `fn`: function to uncurry

* **Returns:** *function*

* **Example:**

    ```js
    function foo({ x,y,z }) { return x + y + z; }

    var f = FPO.curry( {fn: foo, n: 3} );

    var p = FPO.uncurry( {fn: f} );

    p( {x: 1, y: 2, z: 3} );  // 6
    ```

* **See Also:** [`FPO.curryMultiple(..)`](#fpocurrymultiple), [`FPO.partial(..)`](#fpopartial), [`FPO.uncurry(..)`](#fpouncurry)

----

### `FPO.zip(..)`

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

    FPO.zip( {arr1: nums1, arr2: nums2} );
    // [[1,2],[3,4],[5,6]]
    ```

* **See Also:** [`FPO.flatten(..)`](#fpoflatten)
