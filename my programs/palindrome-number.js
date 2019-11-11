function paliNum(num) {
    let originalNum = num;
    let reverse = 0;
    while (originalNum > 0) {
       let temp = originalNum % 10;
       reverse = reverse*10 + temp; 
       originalNum = Math.floor(originalNum / 10);
    }
    return reverse == num; 
}

console.log("121 is a palindrome? ", paliNum(123));