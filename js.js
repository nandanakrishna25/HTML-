
//variables
let fName="Krishna"
var age=12,c;
fName="Nandana"
const height=165
c=3;
b=c/age;
console.log(age)
// console.log("hi")

// function a1(){
//     var age=10
//     console.log(age)
//     let v=2
//     let a=3
//     const y=4
// }
// a1()
// console.log(age)

// // //variables
// // "use strict"
// // let fName="Krishna"
// // console.log(age)
// // var age=12,c;
// // fName="Nandana"
// // const height=165
// // var age=10
// // console.log(age)
// // c=5;
// // b=c/age;
// // console.log(age)

// // //functions
// // function newFn(age){
// //     console.log(fName)
// //     age=20
// //     const places="tvm"
// //     console.log(age+"\n" +"name:"+fName)
// // }
// // newFn()
// // console.log(age)
// // // console.log(place)

// // //datatypes
// // let i;
// // console.log(i); 
// // let empty = null;
// // console.log(empty); 
// // let sym = Symbol('unique');
// // console.log(sym); 

// // let places= ["GFG", "Computer", "Hello"];
// // console.log(places);

// // let Student = {
// //     firstName: "Johnny",
// //     lastName: "Diaz", 
// //     age: 35, 
// //     mark: "blueEYE"
// // }
// // console.log(Student);

// // window.alert("Click OK");

if (age= 15) 
    console.log("Age is 15");
else if(age>15)
    console.log("Age greater than 15");
else
console.log("age less than 15");

switch (c) {
    case 1:
        fName = "Neha";
        break;
    case 2:
        fName = "Mia";
        break;
    case 3:
        fName = "Nandana";
        break;
    default:
        dayName = "Invalid";
}
console.log(fName);

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) break;
    console.log(i);
}

let obj = {
    name: "Sourav",
    age: 20,
    job: "Student"
};
console.log(obj);

let obj2 = new Object();
obj.name= "Sanvi",
obj.age= 27,
obj.job= "Teacher"

console.log(obj);

console.log(obj.name);
console.log(obj["age"]);
obj.age = 18;
console.log(obj);
let obj = { City: "Tvm" };
console.log(obj)
delete obj.age;
console.log("color" in obj);
console.log(obj.hasOwnProperty("City"));