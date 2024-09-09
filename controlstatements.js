// loops : used for repeating the tasks ,performance ,code-readibilty space-complecity
// usescases: repeating the api data ,logins validations  ,captcha validation ,
// 🎯 for loop : if no of itteration are known before we use this loop
// 🎯 while loop : repeat some code while condition is true (if no of itteration are unknown)
// 🎯  do-while : alteast once the code excutes even the condition is false
// ------> ES6<------
// 🎯 for in  : used for itteration through properties of an objects
// 🎯  for of : used for itteration through innummerable properties of an objects (strings ,arrays etc)
// ------> ES6<------


// syntax 
// for(initilazation;condition;increment/decrement){
//      //excutes the block of code
// }


// for(let i=1;i<=10;i++){
//    if(i%2!==0){
//     console.log(i)
//    }
// }

// let a=[1,2,3,4,5,5,6,7,8,9,10]
// for(let i=0;i<a.length;i++){
//        if(i%2!==0){
//     console.log(i)
//    }
// }

// let n=5

// for(let i=0 ;i<n;i++){

//     for(let j=0;j<n;j++){
//       document.write("* &nbsp;")
//     }
//     document.write("<Br/>" )
// }

// document.write("<Br/>" )

// for(let i=0 ;i<n;i++){

//     for(let j=0;j<i;j++){
//       document.write(" &nbsp; &nbsp;")
//     }
//     for(let j=i;j<n;j++){
//         document.write("*  &nbsp;")
//       }
//     document.write("<Br/>" )
// }

// let isloggedIn=false
// let user='';
// let password=''

// while(!isloggedIn){
//   user=prompt("enter a value")
//   password=prompt("enter a value")

//   if(user=="ravi" && password=="1234"){
//     console.log("user logged in")
//     isloggedIn=true
//   }else{
//     console.log("given wrong crenditials")
//   }
// }


// let person={
//     name:"dj",
//     center:"ganesh mandapam"

// }


// for(let key in person){
//     console.log(key)
// }

// let a="hello"
// console.log(a)

// for(let i of a){
//     console.log(i)
// }