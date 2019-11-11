function palindrome(str) {
  let strMod = str.replace(/[^A-Z0-9]/ig, '').toLowerCase();
  let joinedArrayStrings = strMod.split('').reverse().join(''); 
  return joinedArrayStrings === strMod;         
}    

console.log("Is 'racecar' a palindrome ? ", palindrome("racecar"));
console.log("Is 'A man, a plan, a canal. Panama' palindrome ? ", palindrome("A man, a plan, a canal. Panama"));
console.log("Is '0_0 (: /-\ :) 0-0' a palindrome ?", palindrome("0_0 (: /-\ :) 0-0"));