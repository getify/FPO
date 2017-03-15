#!/usr/bin/env node

var path = require("path");

if (process.env.TEST_DIST) {
	global.FPO = require(path.join("..","dist","fpo.js"));
}
else if (process.env.TEST_PACKAGE) {
	global.FPO = require(path.join(".."));
}
else {
	global.FPO = require(path.join("..","src","fpo.src.js"));
}

global.QUnit = require("qunitjs");

require("../tests/qunit.config.js");
require("../tests/tests.js");

QUnit.start();
