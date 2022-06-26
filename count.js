// Write a Javascript program to count the number of digits a given number has using recursion.
function countDigits(num,count){
    if(num>0){
        count++;
        num = Math.floor(num/10);
        return countDigits(num,count);
    }
    console.log(count);
}
countDigits(54564,0);