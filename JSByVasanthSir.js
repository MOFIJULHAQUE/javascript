
// find maximum number from array

// let nums = [1,20,30,17,89,90,10,27,33,8];

// nums.sort((a,b) => a-b);

// console.log(nums);

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
// here 0 is graeter than all the -ve numbers that's why 0 is the output








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
// let nums = [1,2,1,2,1,3,4,5,4,3,7,5];

// for(let i=0; i<nums.length;i++){
//     if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
//         console.log(nums[i]);
//         break;
//     }
// }








// for first repeting number

// let nums = [1,2,1,2,1,3,4,5,5];

// for(let i=0; i<nums.length;i++){
//     if(nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])){
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

// let newArr = nums.filter((nummm) =>{
    
//     return nummm < 6;
// });
// console.log(newArr);


// or(with names)

// let names = ['mofijul', 'sabsd','gdssgvdgv','djgd'];
// let newArr = names.filter(function(num){
//     return num.length < 8;
// })
// console.log(newArr);
//or
// let names1 = ['mofijul', 'sabsd','gdssgvdgv','djgd'];
// let newArr1 = names.filter((num)=>{
//     return num.length < 8;
// })
// console.log(newArr1);

















// square of element using map(doubt)
// let nums = [1,2,3,4,5];
// let newArr = nums.map(function(num){
//     return num**2;
// })
// console.log(newArr);




// factorial of element using map
// let nums = [1,2,3,4,5];

// let factorial = nums.map((num)=>{
//     let fact =1;
//     for(let i=num;i>0;i--){
//         fact*=i
//     }
//     return fact;
// })
// console.log(factorial);






// remove all the false value and print truth values
// let nums = [1,'',false,true,'mofijul',null];
// let x = nums.filter(Boolean)
// console.log(x);




// ####################           upperpart is pushed in github on 8th july              ####################






// sum of all array element
// let nums = [1,2,3,4,5];
// let sum = 0;
// for(let i =0;i<=nums.length;i++){
//     sum+=i;
// }
// console.log(sum);






// or(default value of reduce is 0 and it is a inbuilt function)    (doubt)
// (reduce is converting a array into single digit number)

// let nums = [1,2,3,4,5];
// let sum = nums.reduce(function(prev,current){
//     return prev + current
// })
// console.log(sum);









// 'every function' in JS(if any one of the value is false then returns false because every value must be true else is returns false)(learn  it again)
// if all the numbers are greater then n
// false logic
// let nums = [1,2,3,4,5,6];

// let initial = true;

// for(let i = 0;i<nums.length;i++){
//     if(nums[i] > 5) initial = true;
// }
// console.log(initial);


// correct logic
// let nums = [1,2,3,4,5,6];
// console.log(nums.every((num)=>{
//     return num<=5
// }));









// 'some function' in JS(if any one of the value is true then it rerturn true)
// let nums = [1,2,3,4,5,6];
// console.log(nums.some((num)=>{
//     return num<=5
// }));









// ****************************  (11-07-2022) (Vasanth Sir)  ***************************

// let nums = [2,3,5,6,8];
// let target = 10;

// for(let i=0;i<nums.length;i++){

//     for(let j=i+1;j<nums.length;j++){
//         if(nums[i] + nums[j] === target){
//             console.log(nums[i],nums[j]);
//         }
//     }
// }
// output
// 3 6







// ****************************  (12-07-2022) (Vasanth Sir)  ***************************



// let matrix = [
//     [1,2,4,3,4],
//     [11,24,34,44],
//     [17,27,37,474],
//     [11,21,31,41],
// ]

// find 37
// console.log(matrix[2][2]);


// how many rows
// let rows = matrix.length;
// console.log(rows);


// how many columns
// let columns = matrix[0].length;
// console.log(columns);



// sum of all element

// let matrix = [
//     [1,2,3,4],
//     [11,24,34,44],
//     [17,27,37,474],
//     [11,21,31,41],
// ]

// let rows = matrix.length;
// let columns = matrix[0].length;

// let sum = 0;

// for (let i=0; i<rows;i++){
//     for(let j=0;j<columns;j++){
//         sum+=matrix[i][j];
//     }
// }
// console.log(sum);




// sum of digonal  elements
// let matrix = [
//     [1,2,3,4],
//     [11,24,34,44],
//     [17,27,37,474],
//     [11,21,31,41],
// ]


// 1+24+37+41


// let rows = matrix.length;
// let columns = matrix[0].length;

// let sum = 0;
// for(let i=0;i<rows;i++){
//     sum+=matrix[i][i];
// }console.log(sum);




// *********   or

// let matrix = [
//     [1,2,3,4],
//     [11,24,34,44],
//     [17,27,37,474],
//     [11,21,31,41],
// ]


// 1+24+37+41


// let rows = matrix.length;
// let start = 0;

// let sum = 0;

// for(let i=0;i<rows;i++){
//     sum+=matrix[i][start];
//     start+=1;
// }console.log(sum);

// *****    or

// let matrix = [
//     [1,2,3,4],
//     [11,24,34,44],
//     [17,27,37,474],
//     [11,21,31,41],
// ]


// 1+24+37+41


// let rows = matrix.length;
// let start = 0;

// let sum = 0;

// for(let i=0;i<rows;i++){
//     sum+=matrix[start][i];
//     start+=1;
// }console.log(sum);





// sum of  elements in rows
// let matrix = [
//     [1,2,3,4],
//     [11,24,34,44],
//     [17,27,37,474],
//     [11,21,31,41],
// ]

// sum of first columns elements that's why I declare "let sum = 0" if we need 2nd columns sum then we have to declare "let sum = 2"


// let rows = matrix.length;
// let start = 0;

// let sum = 0;
// for(let i=0;i<rows;i++){
//     sum+=matrix[start][i];
// }console.log(sum);




// sum of  elements in columns
// let matrix = [
//     [1,2,3,4],
//     [11,24,34,44],
//     [17,27,37,474],
//     [11,21,31,41],
// ]

// let rows = matrix.length;
// let start = 0;

// sum of first row elements that's why I declare "let sum = 0" if we need 2nd row sum then we have to declare "let sum = 2"

// let sum = 0;
// for(let i=0;i<rows;i++){
//     sum+=matrix[i][start];
// }console.log(sum);











// sum of digonal  elements
// let matrix = [
//     [1,2,3,4],
//     [11,24,34,44],
//     [17,27,37,474],
//     [11,21,31,41],
// ]


// 4+34+27+11


// let rows = matrix.length;
// let start = matrix[0].length-1;



// let sum = 0;

// for(let i=0;i<rows;i++){
//     sum+=matrix[i][start];
//     start-=1;
// }console.log(sum);

// output
// 76







// print elements in reverse "S" format(revice)
// let matrix = [
//     [1,2,3,4],
//     [11,24,34,44],
//     [17,27,37,474],
//     [11,21,31,41],
// ]


// let rows = matrix.length;
// let columns = matrix[0].length;

// for(let i = 0; i < rows; i++){
//     if(i % 2 ==0){
//         for(let j = 0; j < columns; j++){
//             console.log(matrix[i][j]);
//         }
//     }else{
//         for(let j = columns-1;j>=0;j--){
//             console.log(matrix[i][j]);
//         }
//     }
// }
// output
// 1
// 2
// 3
// 4
// 44
// 34
// 24
// 11
// 17
// 27
// 37
// 474
// 41
// 31
// 21
// 11












// print elements in  "S" format(revice)
// let matrix = [
//     [1,2,3,4],
//     [11,24,34,44],
//     [17,27,37,474],
//     [11,21,31,41],
// ]


// let rows = matrix.length;
// let columns = matrix[0].length;

// for(let i = 0; i < rows; i++){
//     if(i % 2 !=0){
//         for(let j = 0; j < columns; j++){
//             console.log(matrix[i][j]);
//         }
//     }else{
//         for(let j = columns-1;j>=0;j--){
//             console.log(matrix[i][j]);
//         }
//     }
// }











// linear search

// let nums = [1,2,3,4,5,6,56,7,8];
// let target  = 56;

// function is(nums,target){
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===target) return true;
//     }
//     return false;
// }

// console.log(is(nums,target));







// binary search(doubt)

// let nums = [1,2,3,4,5,6,7,8];
// let target  = 56;







// ****************************  (13-07-2022) (Vasanth Sir)  ***************************



//spread opeartor
// let nums1 = [1,2,3];
// let nums2 = [41,52,53];
// let nums3 = [417,752,573];


// console.log(nums1.concat('mofijul',nums2,nums3));


//if we want ro put a array inside an array then....
// let array = [1,2,3,4,5,6];
// let newArr = [array];
// console.log(newArr);
//then the output like that [ [ 1, 2, 3, 4, 5, 6 ] ] but this is not the correct outout if we want correct output then we must have to use spread operator (...)
// console.log(...newArr);
//output is : - [ 1, 2, 3, 4, 5, 6 ]





// ===================   TOPIC - STRINGS   ======================
//strings are mutable

// let fname = 'Mofijul';
// let lname = 'Haque';


// fname[0]='H';(impossible)
// console.log(fname+ ' '+lname);
//or
// console.log(`"${fname}" '${lname}'`);          (doubt)

// length
// console.log(fname.length);

// find indexed element i strings
// console.log(fname[0],lname[2]);


// fname='jfh';
// console.log(fname);



// let fname = 'mofijul';
// for(let i=0;i<fname.length;i++){
//     console.log(fname[i]);
// }  
// output
// m
// o
// f
// i
// j
// u
// l



//print Mof
// let fname = 'Mofijul';
// console.log(fname.slice(0,3),fname);


//print Mof by -ve index 
// let fname = 'Mofijul';
// console.log(fname.slice(-7,3),fname);


// find indexed character
// let fname = 'Mofijul';
// console.log(fname.charAt(5));




// slice will print after that defined indexed value including with that index value
// let fname = 'Mofijul';
// console.log(fname.slice(5));




// substring in string (it's not very usefull)
// let fname = 'Mofijul';
// console.log(fname.substring(0,3));




// convert to upper and lower case string
// let fname = 'Mofijul';
// console.log(fname.toLowerCase());
// console.log(fname.toUpperCase());





// trim remove spces on both side if the input have some spaces ...............if we want to remove spaces at end
// let fname = '     Mofijul    ';
// console.log(fname.trim());
// console.log(fname.trimEnd());
// console.log(fname.trimStart());
// console.log(fname);   








// replace elemnt
// let fname = 'Mofijul';

// console.log(fname.replace('o','t'));
// output
// Mtfijul







// if input has more then one same element then we have to use replaceAll() ........but if we use only replace() then it will replace only the first getting element which want by user
// let fname = 'Mofiooojuoooool';

// console.log(fname.replaceAll('o','t'));

// output
// Mtfitttjutttttl



// if our desired changable item (i stands for insensetive) is differ in cse like upper-lower then we use this method
// let fname = 'Moffffffffiooojuoooool';

// console.log(fname.replace(/F/i,'t'));

// output
// Motfffffffiooojuoooool




// here we replace all / replace  f with t , if we use only replace with i then it only fff part,but when we use replace with ig then it takes all lower and upper F 
// let fname = 'Moffffffffiooojuooooo.  MofFFFfff';

// console.log(fname.replace(/F/ig,'t'));

// output
// Mottttttttiooojuooooo.  Motttttt










// split 
// let name = 'Mango is sweet. Watermelon is also sweet';
// console.log(name.split());
// console.log(name.split(' '));
// console.log(name.split('sweet'));









// ****************************  (14-07-2022) (Vasanth Sir)  ***************************

// find Mango without includes methods

// with includes methodes
// let nme = 'Mango is sweet. Watermelon is also sweet';
// let target = 'Mango';

// console.log(name.includes(target));


// without includes methodes
// let newArr = nme.split(' ');

// let isPresent = false;

// for(let i=0;i<newArr.length;i++){
//     if(newArr[i] === target){
//     isPresent = true;

//     }
// }

// console.log(isPresent);










// email is valid or not 
// let email = 'mofijulhoque995@gmail.com';

// if(email.endsWith('@gmail.com')){
//     console.log('valid email');
// }else{
//     console.log('invalid email');
// }


// no is start with +91 or not
// let no = '+918638873137';

// if(no.startsWith('+91')){
//     console.log('no valid');
// }else{
//     console.log('no invalid');
// }



// no is 13 digits or not
// let no = '+918638873137';

// if(no.length == 13){
//     console.log('no valid');
// }else{
//     console.log('no invalid');
// }



// no is 13 digits or not if it has space then we have to use trim property because if we not use trim then it will counted all the spaces along with the number. 
// let no = '    +918638873137         ';

// if(no.trim().length == 13){
//     console.log('no valid');
// }else{
//     console.log('no invalid');
// }



// remove 8
// let no = '+918638873137';

// console.log(no.replace(/8/g,''));



// reverse the no
// let no = '+918638873137';

// console.log(no.split('').reverse().join(''));



// reverse the no other way 
// let no = '+918638873137';

// let reverse = '';
// for(let i=0;i<no.length;i++){
//     reverse = no[i]+ reverse;
// }
// console.log(reverse);




// match property
// (method) String.match(matcher: {
// Matches a string or an object that supports being matched against, and returns an array containing the results of that search, or null if no matches are found.
// @param matcher — An object that supports being matched against.

// let names = 'Mofijul is a developer 87';
// console.log(names.match(/is/));
// console.log(names.match(/[A-Z,1-9]/));
// console.log(names.matchAll(/[A-Z,1-9]/g));











// anagram(not clear)(doubt)
// find frequency of letters

// let word1='god';
// let word2 = 'ogd';

// if(word1.split('').sort().join('') == word2.split('').sort().join('')){
//     console.log('anagram');

// }else{
//     console.log('not anagram');

// }











// count total number of 'a'

// let word = ' Mofijul Haqaaue';
// let target = 'a';
// let count = 0;

// for(let i=0;i<word.length;i++){
//     if(word[i] === target){
//         count += 1;
//     }
// }
// console.log(count)






// 
// console.log('Mofijul');
// setTimeout(() => {
//     console.log('inside');
// },2000)

// setTimeout(() => {
//     console.log('outside');
// },0)

// console.log('Haque');







// closure property 
// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }
// output
// 0
// 1
// 2
// 3
// 4






// closure property 
// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }
// output
// 5
// 5
// 5
// 5
// 5







// of operator and  for each loop(in array)--------this of operator take the each value and passed inside the loop 
// let nums = [1,2,3,4,5];

// for (let num of nums){
//     console.log(num);
// }
// output
// 1
// 2
// 3
// 4
// 5







// for each in string
// let nums = 'mofijul';
// for(let name of nums){
//     console.log(name);
// }
// outputs
// m
// o
// f
// i
// j
// u
// l












// ************************(*******    16-07-2022(Vasanth Sir)    *******************************




// unique characters
// let chars = ["a","b","c","d","b"];
// let unique =[];
// for (let i = 0;i<chars.length;i++){
//     if(!unique.includes(chars[i])){
//         unique.push(chars[i]);
//     }
// }
// console.log(unique);


//output
// [ 'a', 'b', 'c', 'd' ]


//        or


// using callback methodes by unique chars 
// let chars = ["a","b","c","d","b"];
// let unique = chars.filter((char,index)=>{
//     return chars.indexOf(char) === index;
// });

// console.log(unique);//output
// [ 'a', 'b', 'c', 'd' ]





// using callback methodes by duplicate chars 
// let chars = ["a","b","c","d","b"];
// let unique = chars.filter((char,index)=>{
//     return chars.indexOf(char) !== index;
// });

// console.log(unique);
//output
// [ 'b' ]






//print largest number if the array has non repeting no
// let nums = [5,54,21,8,54,77,47];

// nums.sort((a,b) => a - b);    //this one print in ascending order but if b - a then it will print descending order
// console.log(nums[nums.length - 2]);






//print largest number if the array has repeting no
// let nums = [5,54,21,8,54,77,47];
// let unique = nums.filter((char,index)=>{
//         return nums.indexOf(char) !== index;
//     });
//     unique.sort((a,b) => a - b); 
// console.log(nums[nums.length - 2]);








//valid paranthesis or not (doubt)
// function isValidParanthesis(string) {
//     let map = {
//         "{": "}",
//         "[": "]",
//         "(": ")",

//     };

//     console.log(map["["]);

// }
// console.log(isValidParanthesis("{([])}"));









// reverse the sentence each word in the same order
// let news = "Mofijul is a web developer";

// let newArr = news.split(" ");
// console.log(newArr);

// for(let i=0; i< newArr.length; i++){
//     newArr[i] = newArr[i].split("").reverse().join("");
// }
// console.log(newArr.join(" "));
// output
// lujifoM si a bew repoleved





// rotate the string by one character
// let string = "Mofijul";

// let rotatingString = string.slice(0,4);
// let slicedString = string.slice(1);
// console.log(`${slicedString}${rotatingString}`);

// output
// ofijulMofi






// Rest Snake direction 
// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ];

//
// let top = 0, bottom = 3, left = 0, right = 3, direction = 0;

// while (left <= right && top <= bottom) {
//     if (direction == 0) {
//         for (let i = left; i <= right; i++) {
//             console.log(matrix[top][i]);
//         }
//         top += 1;
//         direction = 1;
//     }

//     if (direction == 1) {
//         for (let i = top; i <= bottom; i++) {
//             console.log(matrix[i][right]);
//         }
//         right -= 1;
//         direction = 2;
//     }

//     if (direction == 2) {
//         for (let i = right; i >= left; i--) {
//             console.log(matrix[bottom][i]);
//         }
//         bottom -= 1;
//         direction = 3;
//     }

//     if (direction == 3) {
//         for (let i = bottom; i >= top; i--) {
//             console.log(matrix[i][left]);
//         }
//         left += 1;
//         direction = 0
//     }
// }
// output
// 1
// 2 
// 3 
// 4 
// 8 
// 12
// 16
// 15
// 14
// 13
// 9
// 5
// 6
// 7
// 11
// 10
