// Functions : are Building block any js Application 
    //  eg: notification , adding items to cart ,to fetch the data 
// 🎯 Reuseabilty 
// 🎯 Less Code 
// 🎯 Increase in Reability and permance

// UserDefined Function  : these are function that are defined by user  
// 🎯Named Function 
// 🎯arrow Functions 
// 🎯anonomous function 
// 🎯Iffe(Immediately Invoked function expression) functions  befor es6
// 🎯Generator Functions
// Inbuilt Funtions : alert ,propmpt confirm random map  etc


// In js Function are excuted on How they are called not how they are defined /declared


// Declaration 
// function Data(){
   
//     console.log("hello")
// }
// let res1=Data() //calling the Function
// console.log(res1)


// function Data1(){
   
//     return 10
// }
// let res= Data1()
// console.log(res)

// the values that are passed in function declaration we callled params ,formal arguments ,paramaters
// The values that are passed in a function call we call it as actual argumantes

// function Example(a,b,c,d,cal){
//  console.log(a,b,c.name)
//  console.log(d())
//  console.log(cal()) // callback function //higher order functions
// }
// Example(2,true,{name:"raju"},function (){console.log('hello')},d)

// // one function passed as an argument to another function and returned as values those functions are called callback or higher order funtions 

// function d(){
//     console.log("hello😋😍😋😋")
//     return 1
// }


// Before Es6
// function Example1(a,b,c){
//     if(c==undefined || b==undefined){ //when the values is undefined it assign c with 4
//         c=4
//     }
// console.log(a,b,c)
// console.log(a+b+c)
// }

// Example1(1,3,6)
 
// // After Es6 "DEFAULT PARAMETER"
// function Example2(a=10,b=4,c=0){
  
// console.log(a,b,c)
// console.log(a+b+c)
// }

// Example2(1,2)

// Problem Before ES6
// function Example3(a,b,c,d,e ){
  
//     console.log(a,b,c,d,e)
//     console.log(a+b+c)
//     }
    
// Example3(1,2,7,6,7,8,9,9,9,9)

// AFter ES6
// function Example4(a,b,c,...rest){
  
//     console.log(a,b,c)
//     console.log("rest:",rest)
   
//     }
    
// Example4(1,2,7,6,7,8,9,9,9,9)

// function Example5(...rest,a,b,c,){ //SyntaxError: Rest parameter must be last formal parameter

  
//     console.log(a,b,c)
//     console.log("rest:",rest)
   
//     }
    
// Example5(1,2,7,6,7,8,9,9,9,9)


// it used for Pointing out the Object Locations 
// global scope
// console.log(this)


// // inside Function 
// function Explain(){
//     console.log(this)
// }
// Explain()


// // inside method 
// let Person={
//     name:"ramu",
//     age:24,
//     // method
//     details:function(){
//         console.log(this)
//     }
// }

// // this keyword returns the Cureent object when return inside the Method
// // calling the method 
// Person.details()


// Arrow Function :syntatic sugar of named functions

// function Data(a){
//    console.log("hello",a)
//    return a
// }
// let res=Data(2)
// console.log(res)

// arrow function doesnt reuire paranthesis  when sigle parameter is passed
// arrow function doesnt reuire curly braces  when sigle statemnt  is passed
// arrow function doesnt reuire return statement when single statement is passed it implicity return the value

// let arr=()=>{}

// // not require ()  & {} 
// let arr1=a=> console.log("hello",a)
// arr1("suresh")

// // not require return statement
// let arr2=a=>a

// let res1=arr2(2)
// console.log(res1)

// // reuire {} when multiple statement are passed
// // require () when multiple parameters are passed
// // require return when multiple statements are passed
// let arr4=(a,b=0)=>{
//     console.log("hello");
//     console.log("hello");
//     return a*b
// }
// let res3=arr4(5,6)
// console.log(res3)

// // arrow should not be used as methods in object because arrows functions doesnt have its own this bending

// let person1={
//     name:"suresh",
//     age:24,
//     details:()=>{console.log(this)}
// }

// person1.details()

// let data=[].map()

// global scope 
// var a=10 

// {
//     var a=20
// }

// console.log(a)

// iffe  before es6
// var a=20
// var res=(
//     function(){
//         var a=10
//         console.log("inside a",a)
//     }
// )()
// console.log(a)


// Hoisting : where all function declaration variable decalaration and class declarations etc are moved to top there scope
//  during compilation

// console.log(a) // undefined
// let a=10
// console.log(a) //10

// var re=b()
// console.log(re)
// function b(){
//     console.log("hello")
//     return 
// }
// // // b()
// // debugger
// console.log(a)
// var a=function(){console.log("hello")
//     return 
// }
// console.log(a)

// write the difference b/w named function and arrow functions 
// what are higher order functions
// explain the Difference b/w rest and spread parameters
// explain the Use of Default parameters 
// explain the concept of hoisting in function in js 
// explain this keyword in js 
// explain the call apply and bind methods in js [research]

// advanced  :
// explain what are callbacks 
// what is lexical scope 
// what is scope chain 
// what are  closures  
// explain what is call stack eventloop and webapis 