console.log("Ganesh");  
 
const hero =["ganesh", "nagraj"];

let myobj ={

    name : "ganesh",
    age:25,
}

const myFunction = function (){
  console.log("hello GAnesh");
}

console.log(typeof myobj);
console.log(myFunction);

//Stack(primitive)(Copy is made) and 
//HEap(NOn primitive)(reference is made)(changes is original) memory

const name = "Ganesh";
const sname = "wagh";
console.log(name +" " +  sname);

console.log(`Hello ${name} and ${sname}`);


const name1 = name.slice(-5,-3)

console.log(name1);
console.log(name1[0]);

//length , trim , charAt, slice, substring,replace, includes
// split('-')

const bal = new Number (200);
console.log(bal);
// toString , toPrecision, toFixed,toLocaleString

// Maths library//

//abs , ceil , round , floor, sqrt, min , max

console.log((Math.random()*10)+1);

