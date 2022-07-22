



//                 TOPIC : OBJECTS IN JAVASCRIPT


// const circle = {
//     radius :4,
//     location : {
//         x  : 5,
//         y :7
//     },
// };

// console.log(circle['location']['x']);
//we can return it like console.log and also using  '.' operator but this 'console.log' is very affective not the ''. operator,because it not return us error when we are trying to return the output . The '.' operator is useful when know the key 100% otherwise just use log methode. see below example -----
// let loca = 'location';
// console.log(circle[loca]['x'], circle.loca.x);

//we can also add function and return it in function .............let see

// const circle = {
//     radius :4,
//     location : {
//         x  : 5,
//         y :7
//     },
//     draw : function(){
//         console.log('in the function');
//     },
// };

// console.log(circle.draw());
//in the case of function feel free to use dot(.) operator 





//instead of writing different objects for different person we simply create a function and return what we want  shown in below example
// function createPerson(name,job,location){
//     return {
//         name : name,
//         job : job,
//         location : location,
//     };
// }
// let Mofijul = createPerson('Mofijul Haque','Not working','Naojan');
// console.log(Mofijul);    
// { name: 'Mofijul', job: 'Not working', location: 'Naojan' }      <---- //output
// console.log(Mofijul.name);
// Mofijul Haque         <---- //output
// console.log(Mofijul.location);
// Naojan    <---- //output









// *******************   20-07-2022(vasanth sir)*****************
// let obj = {
//     name : "mofijul",
//     age : 20,
//     country : " India",
// };

