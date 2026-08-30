"use strict";
// Create an object literal named testExecutionSummary
const testExecutionSummary = {
    suiteName: "TestLeaf",
    totalTests: 110,
    passedTests: 70,
    failedTests: 40,
    executionTime: '60s'
};
// Print all property values to the console.
console.log(`suiteName : ${testExecutionSummary.suiteName}`);
console.log(`totalTests : ${testExecutionSummary.totalTests}`);
console.log(`passedTests : ${testExecutionSummary.passedTests}`);
console.log(`failedTests : ${testExecutionSummary.failedTests}`);
console.log(`executionTime : ${testExecutionSummary.executionTime}`);
//3. Calculate and print the pass percentage.
let passPercentage = testExecutionSummary.passedTests / testExecutionSummary.totalTests * 100;
console.log(`Pass percentage : ${passPercentage}`);
console.log(`Execution Completed`);
if (testExecutionSummary.failedTests === 0) {
    console.log(`Execution Successful`);
}
else {
    console.log(`Execution completed with failures`);
}
