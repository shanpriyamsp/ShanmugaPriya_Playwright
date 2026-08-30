"use strict";
function fibonacci(num) {
    if (num < 0) {
        try {
            throw new Error(`Number given : ${num} is negative`);
        }
        catch (e) {
            console.log(e.message);
            return num;
        }
    }
    let b = 1;
    let nResult = b;
    for (let i = 2; i <= num; i++) {
        nResult += i;
    }
    return nResult;
}
console.log(`fibonacci(5) = ${fibonacci(5)}`);
console.log(`fibonacci(8) = ${fibonacci(8)}`);
console.log(`fibonacci(-7) = ${fibonacci(-7)}`);
