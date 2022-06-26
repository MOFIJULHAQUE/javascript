
// function sumEven(a,b){
//     while(a<=b){
//         let sum = 0;
//         if(a%2==0){
//             sum += a;
            
//             return sumEven(a+1,b);
//         }else{
//             return sum;
//         }
//     }
// }
// console.log(sumEven(3,20));




const recursiveEvenSum = (num, sum = 0) => {
    num = num % 2 === 0 ? num : num - 1;
    if(num){
       return recursiveEvenSum(num - 2, sum+num);
    }
    return sum;
 };console.log(recursiveEvenSum(12));