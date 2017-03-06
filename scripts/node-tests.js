#!/usr/bin/env node

global.FPO = require("../src/fpo.src.js");
global.QUnit = require("qunitjs");

require("../tests/qunit.config.js");
require("../tests/tests.js");

QUnit.start();
