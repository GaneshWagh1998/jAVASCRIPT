const juser = {
    name : "Ganesh",
    age : 23,
    location : "pune",
    


}

console.log(juser["location"]);
//Object.freeze(object_name)

juser.greeting = function(){
    console.log("Hello Ganesh");
}

juser.greeting2 = function(){
    console.log(`Hello ${this.name} and age is ${this.age}`);
}

juser.greeting();
juser.greeting2();

// console.log(juser);
