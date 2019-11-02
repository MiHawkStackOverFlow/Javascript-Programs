function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
}

console.log("is 14 a prime? ", isPrime(14));
console.log("is 7 a prime? ", isPrime(7));