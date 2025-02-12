
let fName="Krishna"
console.log(age)
var age=12,c;
fName="Nandana"
const height=165
// var age=10
console.log(age)
c=5;
b=c/age;


//functions
function newFn(){
    console.log(fName)
    // var age=20
    age=20
    const places="tvm"
    console.log(age+"\n" +"name:"+fName)
}
newFn()
console.log(age)
// console.log(place)
function sum(a,b){
    var sum=a+b;
    return sum
}
console.log(sum(3,4))

//datatypes
let i;
console.log(i); 
let empty = null;
console.log(empty); 
let sym = Symbol('unique');
console.log(sym); 

let places= ["GFG", "Computer", "Hello"];
console.log(places);

let Student = {
    firstName: "Johnny",
    lastName: "Diaz", 
    age: 35, 
    mark: "blueEYE"
}
console.log(Student);

window.alert("Click OK");



//object
let obj1 = {
    name: "Sourav",
    age: 20,
    job: "Student",
    hello:function (){
        console.log(`hello ${this.name}`)
    }
};
console.log(obj1);
obj1.hello()

let obj2 = new Object();
obj2.name= "Sanvi",
obj2.age= 27,
obj2.job= "Teacher"
obj2.hello=function (){
    console.log("hi")
}
console.log(obj2);
obj2.hello()

console.log(obj1.name);
console.log(obj1["age"]);
obj1.age = 18;
obj1 = { City: "Tvm" };
console.log(obj1)
delete obj1.age;
console.log("color" in obj1);
console.log(obj1.hasOwnProperty("City"));


//statements
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