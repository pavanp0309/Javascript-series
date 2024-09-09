// Rules To Decalare the Variables name  /Identifiers
// 1.Identifiers /variable name must not start with numbers and special Characters excpet $ and _
// 2.Identifiers /variable name  must not contain any revesed keyword   
        //   eg: for  while if function var let const date  swicth math etc 
// Identifiers /variable name should not contain spaces

// Examples :
// var 4data; //An identifier or keyword cannot immediately follow a numeric literal.
// var data2; /✔
// var &data ; //wrong way
// var $data ; // ✔
// var _data ; // ✔
// var for;  //'for' is not allowed as a variable declaration name
// var var;  //'for' is not allowed as a variable declaration name
// var full name //wrong way
// var full_name // ✔
// var fullname // ✔

// Terminology :

// Declaration : creation of the Variable we call decalaration
// var a;
// let b;
// const c=0 //'const' declarations must be initialized;

// Initialization  :initialization refers to the process of assigning an initial value to a variable when it is declared.
// var d=10;
// let e=20;
// const r=30

// Redeclaration : Redeclaration in JavaScript refers to declaring a variable with the same name more than once within the same scope.
// var dec;
// var dec;
// let d1;
// let d1; //Cannot redeclare block-scoped variable 'd1'


// scope : Lifetime Of variable
//  Different Types Of Scopes in Js  
    //  1.Global scope 
    //  2.local scope 
            //  🎯 Block scope  - {}
            //  🎯 function scope  -function data(){}
            //  🎯 module scope  




// Difference Between tha varaibles 
// decalaration : var and let 
//'const' declarations must be initialized;
// redecalaration : var , 
    // Note : redeclaration in let const are possible in different scopes 
// var let const are having global scope
// let and const are block scoped Variables
// var is function scoped varibales 



// global scope  : can be accessed everywhere

// var a="ravi"
// let b="ramu"
// const c="rani"
// console.log("g:",a)
// console.log("g:",b)
// console.log("g:",c)



// block scope
{
// var a="ravi"
// let b="ramu"
// const c="rani"
//     console.log("b:",a)
//     console.log("b:",b)
//     console.log("b:",c)
    
}


// console.log("ob:",a)
// console.log("ob:",b) //ReferenceError: b is not defined
// console.log("ob:",c) // ReferenceError: c is not defined

// function scope
// function example(){
//     var a="ravi"
//     let b="ramu"
//     const c="rani"
//     console.log("f:",a)
//     console.log("f:",b)
//     console.log("f:",c)
// }
// example()
// // console.log("0f:",a) //ReferenceError: a is not defined
// console.log("f:",b)


// {
//     debugger
//     var a=10
//     let b=20
//     const c=30
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// Hoisting : Moving all decalaration to top of there scope
// console.log("a:",a) //undefined
// console.log("b:",b)
// debugger
    // var a=10
    // let b=20            // Temporal Deadzone 
    // const c=30


    // Unlike var, which is initialized with undefined, 
    // let and const variables are not initialized during hoisting. They remain in a state called the Temporal Dead Zone (TDZ) until their declaration is reached in the code.

    // import d from ". /script.js";
    // console.log(d)

    // Day1 Qa 

// write the Printing statements in js 
// write the Difference Between var let and const  
// write the rules to declare the Varibales names /identifiers 
// what is scope, explain different types of scope in js
// what is Hoisting in js 
// what is TDZ (temporal deadzone)
// write difference b/w declaration initialization redeclaration 
// write the Difference between syntaxerror referenceError and typeError 