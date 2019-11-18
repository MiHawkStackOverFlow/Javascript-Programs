function factorial(num) {
    if(num === 1) {
        return 1;
    }else {
        var result = 1;
        for(var i=1; i<=num; i++) {
            result *= i;
        }
        return result;
    }                       
}

console.log("Factorial of 5 without recursion is ", factorial(5));

function factorialRecursion(num) {
    if (num === 1) {
        return 1;
    }else {
        return num *(factorialRecursion(num - 1));
    }
}

console.log("Factorial of 5 with recursion is ", factorialRecursion(5));