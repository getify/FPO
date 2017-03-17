# FPO.js

[![Build Status](https://travis-ci.org/getify/fpo.svg?branch=master)](https://travis-ci.org/getify/fpo)
[![npm Module](https://badge.fury.io/js/fpo.svg)](https://www.npmjs.org/package/fpo)
[![Dependencies](https://david-dm.org/getify/fpo.svg)](https://david-dm.org/getify/fpo)
[![devDependencies](https://david-dm.org/getify/fpo/dev-status.svg)](https://david-dm.org/getify/fpo)
[![Coverage Status](https://coveralls.io/repos/github/getify/fpo/badge.svg?branch=master)](https://coveralls.io/github/getify/fpo?branch=master)

FPO (/ˈefpō/) is an FP Library for JavaScript. The main aesthetic difference is that the [`FPO.*` core API methods](docs/core-API.md) are all styled to use named-arguments (object parameter destructuring) instead of individual positional arguments.

```js
// positional arguments
foo( 1, 2, 3 );

// named arguments
foo({ z: 3, x: 1, y: 2 });
```

Not only do named-arguments eliminate having to remember a method signature's parameter order -- named arguments can be provided in any order! -- they also make skipping optional parameters (to apply defaults) simple.

This elimination of ordering concern and/or skipping arguments particularly comes in handy when you're currying. You don't have to juggle the parameter order at all; just pass in whichever named argument(s) you want, in whatever sequence you need!

The other benefit is that these API methods will automatically work with your program's named-argument style functions. If you need to interoperate between both styles of function parameters in your program, adapt either style to the other using the [`FPO.apply(..)`](docs/core-API.md#fpoapply) and [`FPO.unapply(..)`](docs/core-API.md#fpounapply) methods.

For convenience and familiarity sake, FPO also exposes all its methods in the traditional positional argument form, under [`FPO.std.*`](docs/std-API.md). These methods are very similar to their equivalents in Ramda, for example.

**Note:** If you're not fully confident in your FP skills, I've written a book on FP in JavaScript: [Functional-Light JavaScript](https://github.com/getify/functional-light-js). Go check it out!

## Environment Support

This library uses ES6+ features. If you need to support ES<=5 environments, transpile it first (with Babel, etc).

## At A Glance

```js
// the classic/traditional method style
// (on the `FPO.std.*` namespace)
FPO.std.reduce(
	(acc,v) => acc + v,
	undefined,
	[3,7,9]
);  // 19

// FPO named-argument method style
FPO.reduce({
	arr: [3,7,9],
	fn: ({acc,v}) => acc + v
}); // 19
```

Instead of needing to provide an `undefined` placeholder in the second argument position to skip specifying an initial value, named-argument style allows us to just omit that argument. We also specified `arr` first and `fn` second just to show order doesn't matter anymore!

As with most FP libraries, all public FPO methods are curried. Currying with named-arguments (in any sequence!) is a breeze:

```js
var f = FPO.reduce({ arr: [3,7,9] });

// later:
f( {fn: ({acc,v}) => acc + v} );  // 19
f( {fn: ({acc,v}) => acc * v} );  // 189
```

The equivalent using a standard FP library would look like:

```js
var f = curry( flip( partialRight( reduce, [[3,7,9]] ) ) )( 0 );

f( (acc,v) => acc + v );  // 19
```

Phew, that's a lot of argument juggling! FPO eliminates all that noisy distraction.

## API

* See [Core API](docs/core-API.md) for documentation on all the methods in the `FPO.*` namespace.
* See [Standard API](docs/std-API.md) for documenation on the methods in the `FPO.std.*` namespace.

	All core methods have a standard positional-parameter form available under the `FPO.std.*` namespace. In many respects, their conceptual behavior is the same, but in some cases there's some differences to be aware of.

	There are also a few methods on the `FPO.std.*` namespace that have no equivalent in the core API as they are unnecessary or don't make sense.

## Adapting

What if you have a traditional parameter-style function you want to use with one of the object-parameter style FPO API methods? Adapt it using the object-parameter-aware [`FPO.apply(..)`](docs/core-API.md#fpoapply):

```js
// traditional-parameter style function
function add(acc,v) { return acc + v; }

FPO.reduce({
	arr: [3,7,9],
	fn: FPO.apply( {fn: add} )
});  // 19
```

Adapting isn't limited to just interoperating with FPO methods. You can use [`FPO.apply(..)`](docs/core-API.md#fpoapply) and [`FPO.unapply(..)`](docs/core-API.md#fpounapply) to seamlessly adapt between functions of both styles in your own application code:

```js
// note: cb is expected to be an "error-first" style
// traditional callback function
function ajax(url,cb) { .. }

// our object-parameter style function
function onResponse({ resp, err }) {
	if (!err) {
		console.log( resp );
	}
}

// create an object-parameter style adapter for `ajax(..)`:
var request = FPO.apply( {fn: ajax} );

request({
	url: "http://some.url",
	cb: FPO.unapply( {fn: onResponse, props:["err","resp"]} )
});
```

### Remapping Functions

What if you have a function that expects a certian named parameter, but it will be passed a differently named argument? For example:

```js
function uppercase({ str }) { return str.toUpperCase(); }

FPO.map( {fn: uppercase, arr: ["hello","world"]} );
// TypeError (`str` is undefined)
```

The problem here is that [`FPO.map(..)`](docs/core-API.md#fpomap) expects to call its mapper function with a `v` named argument, but `uppercase(..)` expects `str`.

[`FPO.remap(..)`](docs/core-API.md#fporemap) -- despite the name similarity, no particular relationship to [`FPO.map(..)`](docs/core-API.md#fpomap), except that it's our example -- lets you adapt a function to remap its expected named parameters:

```js
function uppercase({ str }) { return str.toUpperCase(); }

FPO.map( {
	fn: FPO.remap( {fn: uppercase, args: {str: "v"}} ),
	arr: ["hello","world"]
} );
// ["HELLO","WORLD"]
```

**Note:** The [`FPO.remap(..)`](docs/core-API.md#fporemap) helper also passes through any non-remapped arguments as-is.

## Not Order, But Names

The exchange we make for not needing to remember or juggle argument order is that we need to know/remember the parameter names. For example, [`FPO.reduce(..)`](docs/core-API.md#fporeduce) expects named arguments of `fn`, `v`, and `arr`. If you don't use those names, it won't work correctly.

To aid in getting used to that tradeoff in usability, FPO uses straightforward conventions for parameter names; once learned, it should be mostly trivial to use any of the API methods.

The named argument naming conventions (in order of precedence):

* When a method expects a function, the named argument is `fn`.
* When a method expects a number, the named argument is `n`.
* When a method expects a value, the named argument is `v`.
* When a method expects an array of functions, the named argument is `fns`.
* When a method expects a single array, the named argument is `arr`.
* When a method expects two arrays, the named arguments are `arr1` and `arr2`.
* When a method expects a single object-property name, the named argument is `prop`.
* When a method expects a list of object-property names, the named argument is `props`.
* When a mapper function is called, it will be passed these named arguments: `v` (value), `i` (index), `arr` (array).
* When a predicate function is called, it will be passed these named arguments: `v` (value), `i` (index), `arr` (array).
* When a reducer function is called, it will be passed these named arguments: `acc` (accumulator), `v` (value), `i` (index), `arr` (array).
* When a transducer combination function is called, it will be passed these named arguments: `acc` (accumulator), `v` (value).

Some exceptions to these naming conventions:

* [`FPO.setProp(..)`](docs/core-API.md#fposetprop) expects: `prop` (object-property name), `o` (object), `v` (value).
* [`FPO.partial(..)`](docs/core-API.md#fpopartial) expects: `fn` (function), `args` (object containing the named-argument/value pairs to partially apply).
* [`FPO.flatten(..)`](docs/core-API.md#fpoflatten) expects: `v` (array), `n` (count of nesting levels to flatten out).
* [`FPO.transduce(..)`](docs/core-API.md#fpotransduce) expects: `fn` (transducer function), `co` (combination function), `v` (initial value), `arr` (array).
* [`FPO.compose(..)`](docs/core-API.md#fpocompose) and [`FPO.pipe(..)`](core.API.md#fpopipe) produce functions that expect a `{ v: .. }` object argument. These utilities further assume that each function in the composition expects the output of the previous function to be rewrapped in a `{ v: .. }`-style object argument.

	This also applies to transducers. [`FPO.transducers.filter(..)`](docs/core-API.md#fpotransducersfilter) and [`FPO.transducers.map(..)`](docs/core-API.md#fpotransducersmap), whether composed together or used standalone, are curried to expect the combination function to be passed to them as a `{ v: .. }`-style object argument.
* [`FPO.reassoc(..)`](docs/core-API.md#fporeassoc) expects: `props` (object with `sourceProp: targetProp` remapping key/value pairs), `v` (object)

## Arity

Arity is typically defined as the number of declared parameters (expected arguments) for a function. With traditional style functions, this is just a simple numeric count.

For named-argument style functions, the situation is more nuanced. One interpretation of arity would be a raw count of named-arguments (how many properties present). Another interpretation would limit this counting to only the set of expected named-arguments.

For currying, FPO assumes the straight numeric count interpretation. [`FPO.curry( {fn: foo, n: 3} )`](docs/core-API.md#fpocurry) makes a curried function that accepts the first 3 properties, one at a time, regardless of what they're named.

For [`unary(..)`](docs/core-API.md#fpounary), [`binary(..)`](docs/core-API.md#fpobinary), and [`nAry(..)`](docs/core-API.md#fponary), FPO requires a list of properties (`props`) to filter through for the underlying function. `FPO.binary({fn: foo, props:["x","y"]})` makes a function that only lets `x` and `y` named arguments through to `foo(..)`.

## Currying

The strictest definition of currying is that each call only allows through one argument (`foo(1)(2)(3)`). That's consistent with how currying works in Haskell, for example.

However, for convenience, most FP libraries in JS use a looser definition of currying where multiple arguments can be passed in with each call (`foo(1,2)(3)`).

FPO supports both approaches. [`FPO.curry(..)`](docs/core-API.md#fpocurry) (and [`FPO.std.curry(..)`](docs/std-API.md#fpostdcurry)) use the stricter one-at-a-time definition -- subsequent arguments in each call are ignored -- while [`FPO.curryMultiple(..)`](docs/core-API.md#fpocurrymultiple) (and [`FPO.std.curryMultiple(..)`](docs/std-API.md#fpostdcurrymultiple)) use the looser multiple-arguments definition.

All FPO methods are multiple-curried for convenience.

## Builds

[![Build Status](https://travis-ci.org/getify/fpo.svg?branch=master)](https://travis-ci.org/getify/fpo)
[![npm Module](https://badge.fury.io/js/fpo.svg)](https://www.npmjs.org/package/fpo)

The distribution library file (`dist/fpo.js`) comes pre-built with the npm package distribution, so you shouldn't need to rebuild it under normal circumstances.

However, if you download this repository via Git:

1. The included build utility (`scripts/build-core.js`) builds (and ~~minifies~~) `dist/fpo.js` from source. **Note:** Minification is currently disabled. **The build utility expects Node.js version 6+.**

2. To install the build and test dependencies, run `npm install` from the project root directory.

3. Because of how npm lifecyle events (currently: npm v4) work, `npm install` will have the side effect of automatically running the build and test utilities for you. So, no further action should be needed on your part. Starting with npm v5, the build utility will still be run automatically on `npm install`, but the test utility will not.

To run the build utility with npm:

```
npm run build
```

To run the build utility directly without npm:

```
node scripts/build-core.js
```

## Tests

A comprehensive test suite is included in this repository, as well as the npm package distribution. The default test behavior runs the test suite using `src/fpo.src.js`.

1. You can run the tests in a browser by opening up `tests/index.html` (**requires ES6+ browser environment**).

2. The included Node.js test utility (`scripts/node-tests.js`) runs the test suite. **This test utility expects Node.js version 6+.**

3. Ensure the Node.js test utility dependencies are installed by running `npm install` from the project root directory.

4. Because of how npm lifecyle events (currently: npm v4) work, `npm install` will have the side effect of automatically running the build and test utilities for you. So, no further action should be needed on your part. Starting with npm v5, the build utility will still be run automatically on `npm install`, but the test utility will not.

To run the test utility with npm:

```
npm test
```

Other npm test scripts:

* `npm run test:dist` will run the test suite against `dist/fpo.js`.

* `npm run test:package` will run the test suite as if the package had just been installed via npm. This ensures `package.json`:`main` properly references `dist/fpo.js` for inclusion.

* `npm run test:all` will run all three modes of the test suite. This is what's automatically run when you first `npm install` the build and test dependencies.


To run the test utility directly without npm:

```
node scripts/node-tests.js
```

### Test Coverage

[![Coverage Status](https://coveralls.io/repos/github/getify/fpo/badge.svg?branch=master)](https://coveralls.io/github/getify/fpo?branch=master)

If you have [Istanbul](https://github.com/gotwarlost/istanbul) already installed on your system (requires v1.0+), you can use it to check the test coverage:

```
npm run coverage
```

Then open up `coverage/lcov-report/index.html` in a browser to view the report.

To run Istanbul directly without npm:

```
istanbul cover scripts/node-tests.js
```

**Note:** The npm script `coverage:report` is only intended for use by project maintainers. It sends coverage reports to [Coveralls](https://coveralls.io/).

## License

All code and documentation are (c) 2017 Kyle Simpson and released under the [MIT License](http://getify.mit-license.org/). A copy of the MIT License [is also included](LICENSE.txt).
