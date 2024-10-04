// //var-function-level-scope- variables declared with var are accessible throughout entire function
function exampleFunction(){
    if(true){
        var functionScopedVar="I am function-scoped";
    }
    console.log(functionScopedVar);
    }
exampleFunction();
console.log(functionScopedVar);//functionScopedVar not defined

////let or const does not allow variables with same keyword whereas var allows it
//let is block level scope- if declared outside block gives error
function exampleFunction(){
    if(true){
        let functionScopedVar="I am function-scoped";
        console.log(functionScopedVar);//inside block
    }
    // console.log(functionScopedVar);//error
    }
exampleFunction();
console.log(functionScopedVar);

const constantVar=" I am constant";
if(true){
    console.log(constantVar)
}

// //SHADOWING-local variables can shadow global variables with same name
var shadowedVar=" I am global";
function exampleFunction(){
    var shadowedVar="I am local";
    console.log(shadowedVar);
}
console.log(shadowedVar);

// //HOISTING-variables and functions can be used before they are declared in the code
// hoisting happening with var keyword
console.log(x); //undefined bec declaration is hoisted
var x=5;
console.log(x);//5

////hoisting with let(default initialization,x not defined error(reference error)) and var(shows undefined) give different errors for hoisting
console.log(x); 
let x=5;
console.log(x);
//good practise to declare variables above their scope to avoid confusion

//hoisting with functions
hello();
function hello(){
    console.log("hello world");
}

//DATA TYPES
//Java has no data types , it becomes of the data type the value is assigned
//primitive data types-
let str="lovely";//string-represents textual data
console.log(str);
console.log(typeof(str));//typeof-used to check data type
let age=25; 
let isStudent=true; //boolean
let undefinedVar; //undefined
let var=null;//null

//object- collection of key-value pairs
let person={
    name:"Alice", age: 30,  isStudent: false
};
console.log(person.name);
console.log(person.age);

// Arrays-ordered list of values- in java can have differentdata types
let fruits=[1,"banana","orange","mango", 8];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[3]);

function-a reusable block of code
function add(a,b)
{
    return a+b;
}
var a=add(2,3);
console.log(a);

//typeOf operatoir-determine data type of a variable
let exampleVar="Hello";
console.log(typeof(exampleVar));

//COERCION- values are automatically are converted to common type during an operation
let result=5+"5";
console.log(result);//string as result 55
let result=5+"5"-5;
console.log(result);//string as result 50
let result="2"+"2"-"2";
console.log(result);//string as result 20
let result="2"+"2"-"5";
console.log(result);//string as result 17
let result="2"*"2"+"5";
console.log(result);//45

// //logical operators
let p=true;
let q= false;
console.log(p&&q); //logical AND: false
console.log(p||q);//logical OR : true
console.log(!p);//logical NOT: false


////for loop 
for(let i=0; i<5;i++){
    console.log(i);
}

//while /entry control loop
let count=0;
while(count<5)
{
    console.log(count);
    count++;
}

//do while/exit control loop- ensures code block is executed once
let count=0;
do
{
    console.log(count);
    count++;
}while(count<5);

//for..in loop- iterates over the properties of an object 
let person={name:"John", age:30, occupation:"Developer"};
for( let key in person){
    console.log(key +":" + person[key]);
}

//anonymous function- a function without name
//object literal notation
let car={
    make: "Toyota",
    model: "Carry",
    year: 2022,
    isElectric: false,
    start :function(){
        console.log("Engine started!")
    }
};
//accessing properties
console.log(car.make);
console.log(car.year);
//calling a method
car.start();

//OBJECT CONSTRUCTOR-helps to initialize default properties of object
//Object constructor function
function Book(title, author, year){
    this.title =title;
    this.author= author;
    this.year= year;
}
//creating instances of the object
let book1= new Book("The Catcher in Rye", "J.D Salinger", 1951);
let book2= new Book ("To Kill a Mockingbird", "Harper Lee ", 1960);
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(book2.title);
console.log(book2.author);
console.log(book2.year);

//Working with arrays
let fruits=["apple","banana","orange","grape"];
console.log(fruits[2]);
console.log(fruits[0]);
console.log(fruits[1]);
//adding element to end
fruits.push("kiwi");
console.log(fruits);
//adding element to the begining
fruits.unshift("mango");
console.log(fruits);
//removing the last element
let removedLast= fruits.pop();
//removing the first element
let removedFirst= fruits.shift();
console.log(removedFirst);
console.log(fruits);
//finding index of an element
let indexOfrange=fruits.indexOf("orange");
console.log(indexOfrange);
//iterating using a loop
for(let i=0;i<fruits.length.length; i++){
    console.log(fruits[i]);
}
//Slicing an array
let citrus= fruits.slice(1,3);
console.log(citrus);
//splicing an array(modifying original array)
let removed = fruits.splice(1,2,"pear","melon");
console.log(fruits);
//concatenating arrays
let moreFruits=["grape","pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//FUNCTION EXPRESSINg 
const multiply= function(a,b){
    return a*b;
};
console.log(multiply(4,6));
//invocation
const product= multiply(4,6);
console.log('Function expression - product:', product);

//ARROW FUNCTION
const subtract =(a,b) => a-b;
//if multiple statements then use {}
//invocation
const difference= subtract(8,3);
console.log('Arrow function- difference: ', difference);

//Error handling- prevents course from crashing
try{
    //code that may throw an error
    throw new Error("An error");
}
catch(error){
    //code to handle the error
    console.error(error.message);
}
finally{//code runs regardless of error 
    console.log("Cleanup code prints");
}

// TIMERS -mechanisms through which you can execute a code after a certain delay
// Types Of Timers
// 1. setTimeout function- executes the code after a certain delay only once, acts as asynchronous
const delayedFunction=()=>{
    console.log('Delayed function executed!');
};
setTimeout(delayedFunction,2000); //executes after 2 sec

2.setInterval- executes the code after a certain interval of time again and again
const repeatedFunction=()=> {
    console.log('Repeated function executed!');
};
const intervalId= setInterval(repeatedFunction,1000);

//function to be executed at intervals
function repeatedFunction(){
    console.log('executing repeated function');
}
//set an interval (execute repeatedFunction every 1000 millisecond)
const intervalId= setInterval(repeatedFunction,1000);
//after sometime, stop the interval
setTimeout() => {
    clearInterval(intervalId);//stop the interval
    console.log('Interval stopped.');

},5000);

// synchronous callback function-executes randomly
function parentFunction(name, callback){
    callback();
    console.log("Hey"+name);
}
function randomFunction(){
    console.log("Hey I am callbackfunction");
}
parentFunction("Random String",randomFunction);

// asynchronouus callback function-executes at later time/ delay, later function can execute first
function parentFunction(name, callback){
    setTimeout(callback,1000);
    console.log("Hey"+name);
}
function randomFunction(){
    console.log("Hey I am callbackfunction");
}
parentFunction("Random String",randomFunction);

//if same function is declared anonymously
function parentFunction(name, callback){
    setTimeout(callback,1000);
    console.log("Hey"+name);
}
parentFunction("Random String", function(){
    console.log("Hey I am callbackfunction");
});

//using arrow funcyion to 
const parentFunction=(name, callback)=>(
    setTimeout(callback,1000),console.log("Hey"+name));
}
parentFunction("Random String",()=>(
    console.log("Hey I am callbackfunction");
);

