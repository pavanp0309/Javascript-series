// Datatypes : values stored in  variables 
//   There two types of Datatypes  
//    1.primitive : these lowest level language implementation which doesnt have any methods and properties
        // these are immutable( cant the change the value once created)
         
        //EG: Number  string boolean Undefined Null bigint(Es6+) symbol

//    2.non-primitive : which consits of methods and properties  and these values are mutable
            // (can the change the value once created)

        // EG : Arrays, objects ,functions ,Date methods etc


       
// numbers 
// let a=10.6
// console.log(a)
// // operator : type of
// console.log(typeof a)

// To collect the Data from users
// prompt : the collected in promt will string format
//  let b=parseFloat(prompt("enter a value"))
//  console.log(b)
//  console.log(typeof b)


// STrings 
// using the String Literal 
    //  using single Quotes
    //  using Double Quotes
    //  using Template Literals (backticks ``)

// using The New Keyword / global string keyword

// let name='raj\nu'
// let name1="raju"
// let name2=`raju`
// console.log( name) //primitive method
// console.log(typeof name1)
// console.log(`${name} ${name1}`)
// console.log(name + name1)

// let name3=new String("raju")
// console.log(name3)
// console.log(typeof name3)


// Undefined  : it is the value assigned to variable or function at time declaration
// var b;
// console.log(b)
// console.log( typeof b)
 

// var c=null 
// console.log(c)
// console.log( typeof c)


// var bigdata=Number.MAX_SAFE_INTEGER
// console.log(typeof bigdata)

// var bigdata1=10n //1way
// console.log( bigdata1)
// console.log(typeof bigdata1)

// var bigdata2=BigInt(10)
// console.log(bigdata2-6) //TypeError: Cannot mix BigInt and other types, use explicit conversions

// symbol values created are unique
// let sy=Symbol('id')
// let sy1=Symbol('id')

// console.log(sy==sy1)
// console.log(sy.description)


// Non-primitive 
//  Object : it is  real world entity which has some Properties and methods (key: value pairs)
//  using the Object Literal 
//  using the New keyword
// using the function constructor
// using the Class
// using the Object.create() method

// const person={
//     // property: value(string ,number ,boolean, array ,object,function(method))
//     // key :value
//     name:"ramu",
//     age:24,
//     deg:"btech",
//     spec:["fs","ds","aws"],//array values
//     address:{
//      city:"hyderabad",
//      mobile: 79999999
//      },
//     //  method : which can perform actions
//     driving:function(){console.log(`method:${this.name}`)}
// }


// console.log(person)
// document.write(person,"<br/>")



// // accessing properties : objects are always named
// // syntax: objectName.propertyname
// document.write(`name:${person.name} <br/>`)
// document.write(person.age,"<br/>")
// document.write(person.deg,"<br/>")
// document.write(person.spec,"<br/>")
// document.write(person['spec'][0],"<br/>") //array inside object
// document.write(person['name'],"<br/>")
// console.log(person.address.mobile) // object inside object
// console.log(person.address['mobile'])

// // accessing the Method
// person.driving()


// document.write(person.spec[0],"<br/>")

// let res=Object.keys(person)
// let res1=Object.values(person)
// let res2=Object.entries(person)
// console.log(res2)


// Arrays : numbered indexed
// using the Array Literal 
// using the New Keyword

// let arr=[1,false,"string ",{name:'raju'}]

// console.log(typeof arr) // object
// console.log(arr[3].name)



// Function : builiding block of an apllication 
// different types function  
//  named Functions 
// arrow function  [es6]
// anonomous function : function without name
// IFFE function (Immediately Invoked function expression)

// Default parameter =es6
// rest parameter =es6
function CardComponent( ){ // the Values or variables that are passed in function decalartion we call it has paramaters ,params formal paramaters formal arguments
    console.log("hello")
    return 18 // function Excution stops at return statement
    console.log("hello")
}

// Calling the functions
var d=CardComponent( ) // arguments : the Values or varibles ,function that is passed in function calling we call it as argumnets


console.log(d-1)

