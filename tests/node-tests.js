#!/usr/bin/env node

global.FPO = require("../lib/fpo.src.js");
global.QUnit = require("qunitjs");

require("./qunit.config.js");
require("./tests.js");

QUnit.start();
