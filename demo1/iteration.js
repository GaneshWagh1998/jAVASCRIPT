// for (let a = 0; a < 10; a++) {
//     const element = a;
//     console.log(element);
// }

//break and continue
// const arr = "hello"
//  for (const i of arr) {
//     console.log(i);
//  }
//Maps

// const map = new Map();
// map.set('india',"maharshtra")
// map.set('usa', 'los angelos');

//console.log(map);

// for (const [key,value] of map) {
//     console.log(key," ",value);
    
// }


//for in loop

// for (const key in object) {
    
        
//     }

//for each

const array1= ['abc','abn','abcx','adfgx'];
// 
// array.forEach(element => {
//     console.log(element);
    
// });

// const newnum = array.filter((item)=>{
//   return item
// })


// console.log(newnum);

const array= ['abc','abn','abcx','adfgx'];
const it= " ";

const swit = array.reduce((acc, item)=>{

    return acc + item


} ,it)

console.log(swit);



