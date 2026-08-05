//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
//`runTests` with `switch` for test type messages.

function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("Launching Chrome browser...");
    } else if (browserName === "Firefox") {
        console.log("Launching Firefox browser...");
    } else if (browserName === "Safari") {
        console.log("Launching Safari browser...");
    } else {
        console.log("Unsupported browser.");
    }
}

function runTests(testType) {
    switch (testType) {
        case "sanity":
            console.log("Running sanity tests...");
            break;
        case "regression":
            console.log("Running regression tests...");
            break;
        default:
            console.log("Running smoke tests.");
    }
}

launchBrowser("Chrome");
runTests("");