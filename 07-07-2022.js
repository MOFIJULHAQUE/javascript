
// find maximum number from array

// let nums = [1,20,30,17,89,90,10,27,33,8];

// nums.sort((a,b) => a-b);

// console.log(nums.length-1)

// let max = 0;
// for(let i=0;i<nums.length;i++){
//     let currentValue = nums[i];
//     if(max < currentValue){
//         max = currentValue;
//     }
// }
// console.log(max);


// find maximum number from array for negative number

// let nums = [-1,-20,-30,-17,-89,-90,-10,-27,-33,-8];
// let max = 0;
// for(let i=0;i<nums.length;i++){
//     let currentValue = nums[i];
//     if(max < currentValue){
//         max = currentValue;
//     }
// }
// console.log(max);
// here 0 is graeter than all the -ve numbers 





// find maximum number from array for negative number

// let nums = [-1,-20,-30,-17,-89,-90,-10,-27,-33,-8];
// let max = nums[0]; -->
// for(let i=0;i<nums.length;i++){
//     let currentValue = nums[i];
//     if(max < currentValue){
//         max = currentValue;
//     }
// }
// console.log(max);
// here -1 is graeter than all the -ve numbers 







// find minimum number from array

// let nums = [1,20,30,17,89,90,-2,10,27,33,8];






// let min = nums[0];
// for(let i=1;i<nums.length;i++){
//     let currentValue = nums[i];
//     if(min > currentValue){
//         min = currentValue;
//     }
// }
// console.log(max);






// find index of a element & last index of a number

// let nums = [1,20,30,17,89,90,10,27,90,90,5,4,90,33,8];

// console.log(nums.indexOf(90));

// console.log(nums.lastIndexOf(90));

// console.log(nums[4]);






// first non repeting number
// let nums = [1,2,1,2,1,3,4,5,5];

// for(let i=0; i<nums.length;i++){
//     if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
//         console.log(nums[i]);
//         break;
//     }
// }









// for first repeting number

// let nums = [1,2,1,2,1,3,4,5,5];

// for(let i=0; i<nums.length;i++){
//     if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
//         console.log(nums[i]);
//         break;
//     }
// }





// with function

// let nums = [1,2,1,2,1,3,4,5,5];
// function getFirstNonRepeatingNo(nums){
//     for(let i=0; i<nums.length;i++){
//         if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
//             console.log(nums[i]);
//             return nums[i];
//         }
//     }
// }
// console.log(getFirstNonRepeatingNo(nums));






// converts to string(join is also use for convert array element to string)

// let names = ['a','b','c','d'];

// console.log(names);

// console.log(names.toString());

// console.log(names.join()); 

// console.log(names.join('*')); 

// console.log(names.join('-')); 




// let names = ['a','b','c','d'];

// let nums = [1,2,3,4];

// console.log(names.join(nums));

// console.log(names.concat(nums));







// filter element
// let nums = [1,5,2,3,7,4,5,8,6,9,1];

// let newArr = [];

// for(let i = 0; i<nums.length;i++){
//     if(nums[i] < 3){
//         newArr.push(nums[i]);
//     }
// }console.log(newArr)




// prime  number of element using filter(H/w)



// or(in shortcut)

// let nums = [4,7,4,5,8,6,9,1];

// let newArr = nums.filter((num) =>{
//     console.log(num);
//     return num < 6;
// });
// console.log(newArr);


// or(with names)

// let names = ['mofijul', 'sabsd','gdssgvdgv','djgd'];
// let newArr = names.filter(function(num){
//     console.log(num);
//     return num.length < 5;
// })
// console.log(newArr);





// square of element using map(doubt)
// let nums = [1,2,3,4,5];
// let newArr = nums.map(functopn(num){
//     console.log(num);
//     return num;
// })
// console.log(nums);




// factorial of element using map
// let nums = [1,2,3,4,5];

// let factorial = nums.map((num)=>{
//     let fact =1;
//     for(let i=num;i>0;i--){
//         fact*=i
//     }
//     return fact;
// })
// console.log(factorial,nums);






// remove all the false value and print truth values
// let nums = [1,'',false,true,'mofijul',null];
// let x = nums.filter(Boolean)
// console.log(x);






