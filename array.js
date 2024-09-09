
// an array is a data structure or built in object that allows you to store 
// multiple values of different types under a single variable name.

// arrays are numbered indexed we can acces only th positions values(indexing no's)
// Why Use Arrays in JavaScript?
//  Grouping Data
//  Easy Access
//  Dynamic Size
//  Efficient Memory Usage
//  They are widely used in various algorithms, data processing, and data storage 
// applications.
// Where we use Arrays?
//  Storing a List of Numbers:
//  Displaying Dynamic Content
//  Storing and Manipulating Lists
//  Handling Form Data
//  Managing User Sessions and Authentication
//  Handling API Response

// let arr=[1,3,4,true,"etc..",{name:"raju"},1,3,4,5,6,78,90]
// let phonebook=[{name:"ramu",no:444555},{name:"ramu",no:444555},{name:"ramu",no:444555}]
// let logins=[{},{}]
// console.log(arr)


// different creating the arrays 
// using the arrays Literal 
// using the new key word 


// let a=[] array literal method 
// let b=new Array() new key word (not prefered as it slows down excution)
// let b=new Array('hello',999)
// console.log(b)


// properties and methods in the Arrays
// Property : length 

// Basic methods
//   push  : is used to add an element to last of an arrays 
//  pop : it removes an element form last of an arrays
//   shift : is used to remove an element form start of array
//   unshift : it adds an element to start of arrays 
// slice : it extracts the elements form certain part of an arrray
// splice : it used for adding and deleteing the elements from certain part of array


// let a=[1,2,3,4,"middle",6,7,8,"ls",10]
// console.log(a)
// console.table(a)
// a.push("last")//Appends new elements to the end of an array, and returns the new length of the array.
// a.push("😎😁")
// console.log("push",a)
// // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
// a.pop()
// console.log("pop",a)

// // shift:Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// a.shift() 
// a.shift() 
// console.log("shift",a)

// a.unshift("first") //Inserts new elements at the start of an array, and returns the new length of the array.
// console.log("unshift",a)

// slice(startindex,endindex)
// let res=a.slice(0)//extracts entire array
// let res1=a.slice()//extracts entire array
// let res2=a.slice(3)//extracts from start index to last
// let res3=a.slice(3,6)//extracts from start index to value before the end index
// let res4=a.slice(-2)//extracts from last index
// let res5=a.slice(-2,-6)//returns the empty array bz extraction takes place in forward direction

// console.log(res)//[1, 2, 3, 4, 'middle', 6, 7, 8, 'ls', 10]
// console.log(res1)//[1, 2, 3, 4, 'middle', 6, 7, 8, 'ls', 10]
// console.log(res2) //[4, 'middle', 6, 7, 8, 'ls', 10]
// console.log(res3)//[4, 'middle', 6]
// console.log(res4) //(2) ['ls', 10]
// console.log(res5) //[]


// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// splice(startindex,deletecount,elements to be added)
// let sp=a.splice(0)//extracts entire array
// let sp1=a.splice()//returns empty array
// let sp2=a.splice(1,3)//returns from start to end index
// let sp3=a.splice(1,3,"a","b")//returns from start to end index
// // console.log(sp)
// // console.log(sp1)
// // console.log(sp2)
// console.log(sp3)
// console.log(a)

// Higher Order Methods 
// Map()
// filter()
// reduce()
// foreach()
// findIndex()
// find()
// sort()
// reverse()
// lastIndexOf()
// indexOf()

// arr.map((ele,index,newarr)=>{}) // arrow function syntax
// arr.map(function(ele,index,newarr){}) // anonomous function syntax
// arr.map(data) // named function syntax

// function data(ele,index,newarr){}

// before es6 
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let a=[]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         a.push(arr[i])
//     }
// }
// console.log(a)

// after es6 
// var res=arr.map((ele,index,newarr)=>{
//     // console.log("ele:",ele)
//     // console.log("i:",index)
//     // console.log("newarr:",newarr)

//     return ele%2==0


// })

// var res2=arr.filter((ele,index,newarr)=>{
//     // console.log("ele:",ele)
//     // console.log("i:",index)
//     // console.log("newarr:",newarr)

//     return ele%2==0


// })

// console.log(res2)
// // foreach doesnt return new array but it only itrates through elements
// // map return new array  it also itrates through elements
// var res3=arr.forEach((ele,index,newarr)=>{
//     console.log("ele:",ele)
//     console.log("i:",index)
//     console.log("newarr:",newarr)

//     return ele*2
// })

// console.log(res3)



// console.log(res)


// let prices=[100,100,300,400,500]
// console.log(prices)
// let res1=prices.reduce((total,cur,index,newarray)=>{
//    console.log("t:",total)
//    console.log("cur:",cur)

//    return total+cur

// },0)

// console.log(res1)


let data=["helloworld gggg"]
let res4=data.find(ele=>ele=="b")
let res5=data.sort((a,b)=>a-b)
let res3=data.includes(8)
let res6=data.toString()
console.log(res6)
// console.log(`${res3}${res4}`)
