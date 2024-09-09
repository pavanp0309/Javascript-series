// Arthematic operators

// + operator //string operator
// console.log(1+5) // 6
// console.log(1+"5") //15
// console.log("2"+6) //26
// console.log("2"+"6") //26
// console.log("2"+"6" + 6) //266

// console.log(+"2"+2) //unary plus
// console.log(+true) //unary plus
// console.log(+false) //unary plus
// console.log(+"1") //unary plus
// console.log("2" + +"0" +4)

// // - 
// console.log(6-4) //2
// console.log(6 -"4") //2
// console.log("6" - "4") //2

// // *
// console.log("6" * "4") //2
// console.log("6" / "4") //2
// console.log("6" % "4") //2
// console.log(2**2) // exponential opeartor 2^2

// Increment and Decrement operator
// it always increments and decrements the vlaue by 1
// Pre Increment  :pre-increment: increments the value by 1 before it used
// Post Increment 
// Pre decrement 
// Post decrement 


// let a=3
// let b=4 

// let res= ++a + b + b++ + a + ++a + ++b 
//         //   4  + 4 + 4 + 4 + 5 +  6
//         console.log(res)

// let res=++a - b++ + b + a-- + --a + ++b - --b + 10 + ++a + b++  
//         4- 4 + 5 + 4 + 2 +6 -5 +10 +3 +5 


// let a=4   //1
// let b=3   //1 
// let c=5  // 5

// let res=--a + b-- - c++ + c + --c + b + --a + --b - c + a + a-- + b++ //17
//           3 + 3 - 5 + 6 + 5 + 2 +  2 + 1 - 5 + 2 +2 + 1


// comparison operator 
// console.log(1==1) //true
// console.log(1=="1") //true
// console.log(1==="1") // stricly equal checks the Datatype
// console.log(10>10)
// console.log(10>=10) //true
// console.log(10<=10) //true
// console.log(10<='10') //true


// // assignment opeartor 

// let a=10
// let b=20
// // let c=a+b

// console.log(a+=b) // a=a+b
// console.log(a-=b) // a=a-b
// console.log(a*=b) // a=a*b


// Ternary Operator 

// if(isPrimeuser){
//    alert('😎😋😉 i am prime user')
// }else{
//     alert("not a prime user")
// }

// syntatic sugar of if-else conditional statements
 
// let res=(false)?"😎😋😉 i am prime user":"not a prime user"
// alert(res)

// let age=10
// let res1=(age>=18)?console.log("eligible to vote"):console.log("not eligible to vote")
// console.log(res1)


// logical opeartors 
// &&  logical and
// ||  logical oR
// ! logical not opeartor 
// let age=[]
// console.log(age.length)
// let isIndia=false
// console.log(true&& true) //true
// console.log((age>=18) || (isIndia))
// console.log(!isIndia)
// console.log(!!isIndia)
// console.log( age.length>0&& isIndia) // short-circuit
