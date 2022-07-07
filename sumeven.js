function printNumbers(a, b,sum) {
   
   while (a <= b) {
      let sum = 0;
      if (a % 2 == 0) {
         console.log(a);
         sum = sum + a;
         return sum;
         
      }return printNumbers(a + 1, sum);
      
      
   }

}
return(printNumbers(3, 20,0));
