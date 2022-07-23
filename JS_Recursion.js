//          RECURSION



// function add(){
//     console.log('log');
//     add();
// }
// add()











//            --------->   22-07-2022     <-----------


//  power of a number    (without recursion)
// function getPower(base,exponential){
//     if(exponential<0) return -1;
//     if(exponential === 0)return 1;
//     let total = 1;
//     for(let i=0;i<exponential;i++){
//         total*=base;
//     }
//     return total;
// }
// console.log(getPower(2,7));



//using recursion
// function getPower(base,exponential){
//     if (exponential === 0) return 1;

//     return base * getPower(base , exponential - 1);

// }
// console.log(getPower(2,4));



//array flatenning    (imp)


// let arr = [1,2,[3,4,5],[6,7]];
// console.log(arr.flat(1));


function flatten(arr){
    let newArr = [];
    for(let i =0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            newArr = [...newArr, ...newArr(arr[i])]
        }
    }
    }
   

let arr = [[1,2,[3,4,5]]];
console.log(flatten(arr));