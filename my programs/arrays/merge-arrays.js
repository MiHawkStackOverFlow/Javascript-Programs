(function() {
   // merg two arrays without duplicates
   let array1 = [10,2,3,4,9];
   let array2 = [10,4,5,6,8];

   // solution 1
   let temp = array2.filter(item => !array1.includes(item));
   let array3 = array1.concat(temp);
   console.log("array3", array3);

   // solution 2
   let temp1 = array2.filter(item => array1.indexOf(item) < 0);
   let array4 = array1.concat(temp1);
   console.log("array4", array4);

   // es6 is pretty simple
   let array5 = Array.from(new Set(array1.concat(array2)));
   console.log("array5", array5);

   // optimized solution
   let array6 = [];
   let temp2 = array1.concat(array2);
   let len = temp2.length;

   while(len--) {
      let item = temp2[len];
      if(array6.indexOf(item) === -1) {
         array6.unshift(item);
      } 
   }

   console.log("array6", array6);
})();