QUnit.config.requireExpects = true;

QUnit.begin(begin);
QUnit.testDone(testDone);
QUnit.done(done);


// ******************************

function begin(details){
	if (details.totalTests > 0) {
		console.log(`FPO Test Suite (${details.totalTests})`);
		console.log("");
	}
	else {
		console.log(`FPO Test Suite: empty!`);
		process.exit(1);
	}
}

function testDone(results){
	if (results.failed > 0) {
		console.log(`Failed: '${results.name}' (${results.failed}/${results.total})`);
		for (let i = 0; i < results.assertions.length; i++) {
			if (results.assertions[i].result === false) {
				console.log(`  ${results.assertions[i].message}`);
			}
		}
	}
	else if (results.passed > 0) {
		console.log(`Passed: '${results.name}' (${results.passed}/${results.total})`);
	}
	else {
		console.log(`No assertions run: '${results.name}'`);
	}
}

function done(results){
	console.log("");

	if (results.failed > 0) {
		console.log(`Failed (${results.failed}/${results.total})`);
		process.exit(1);
	}
	else if (results.passed > 0) {
		console.log(`Passed (${results.passed}/${results.total})`);
	}
	else {
		console.log("No tests run!");
		process.exit(1);
	}
}
