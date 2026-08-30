"use strict";
var Environment;
(function (Environment) {
    Environment["LOCAL"] = "local";
    Environment["DEVELOPMENT"] = "dev";
    Environment["STAGING"] = "stage";
    Environment["PRODUCTION"] = "prod";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log(`The test running = ${env}`);
}
runTests(Environment.PRODUCTION);
runTests(Environment.DEVELOPMENT);
