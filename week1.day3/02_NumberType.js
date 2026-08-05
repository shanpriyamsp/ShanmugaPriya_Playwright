//Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
//corresponding string indicating the type.

function validateNumbe(number) {
    let nResult;
    if (number > 0) {
        console.log("The number is positive");
        return nResult = "positive";
    }
    else if (number < 0) {
        console.log("The number is negative");
        return nResult = "negative";
    }
    else {
        console.log("The number is zero");
        return nResult = "zero";
    }
}

validateNumber(10);