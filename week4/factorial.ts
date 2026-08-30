function factorial(num :number) : string {
    if(num < 0){
        try {
         throw new Error(`The given number = ${num} is negative. Hence unable to do Factorial`)
        }
        catch(e :any){
            console.error(e.message)
            return e.message
        }
    }

    let result = 1
    for(let i =2;i<=num;i++){
        result *= i;
    }
    let nResult = `Factorial value of ${num} : ${result}` 
    console.log(nResult)
    return nResult;
}

factorial(10)
factorial(-5)
factorial(5)