// Usecase : Conditional statements (controls the flow of excution of code)
// it what to display in the Ui of the Application
// ex: logins,adding items to cart ,search filters,payment ,crud ,location etc

// different types of conditional statement
// 1.if-else
// 2.else-if ladder
// 3.nested if
// 4.switch case
// 5.ternary operator(shorthand of if-else)

// if-else conditional statements

// if(condition){
// // this block of code excutes when condition is true
// }else{
// // this block of code excutes when condition is false
// }

// let isIndian=false
// debugger
// if(isIndian){
//     console.log("not eligible for applying the passport")
// }else{
//     console.log("not eligible for passport")
// }

// let isEven=10
// debugger
// if(isEven%2==0){
//     console.log("even")
// }else{
//     console.log("odd no")
// }

// printing grade

// if(condition){
//     // this block of code will excute if the first condition is True

// }else if(condition){
// // this block of code will excute if the first condition is false and second is true
// }else if(condition){
// // this block of code will excute if the second condition is false and third condition true
// }else{
// //   if all the cases fail these block of code is excutes
// }

// let marks=50
// let grade;
// debugger


function Grades(marks){
    if(marks>=90){
            grade="A"
        }else if(marks>=80 && marks<90){
           grade="B"
        }else if(marks>=70 && marks<80){
            grade="B"
         }else if(marks>=50 && marks<70){
            grade="c"
         }else{
            grade="Fail"
         }
         console.log(grade)

}


// let operator=prompt("enter a operator")
// let a=parseInt(prompt("ennter a value1"))
// let b=parseInt(prompt("ennter a value2"))
// let result;
// if(operator=="+"){
//     result=a+b
// }else if(operator=="-"){
//     result=a-b
// }else if(operator=="*"){
//     result=a*b
// }else if(operator=="/"){
//     result=a/b
// }else if(operator=="%"){
//     result=a%b
// }else{
//     result="error"
// }
// console.log(result)

// let isloggedIn=true
// let isPrimeuser=false
// let  payment=false
// let purchaseamount=100
// if(isloggedIn){
//     if(isPrimeuser){
//         if(purchaseamount>10000){
//             console.log("user eligible for prime offers")
//         }else{
//             console.log("not eligible for prime offers")
//         }
//     }else{
//         console.log("upgrade to prime accout for fastt deals")
//     }

// }else{
//     console.log("please login in the account")
// }

let vegItem = "vegbirayni";
let type="rice"
switch (vegItem) {
  case "vegbirayni":
    if(type=="rice"){
     console.log("u choose the Rice items")
    }else{
        console.log("u choose the other items")
    }
    console.log("i choose veg");
    break
  case "chickenbirayni":
    console.log("i choose non-veg");
    break;
  case "fishbirayany":
    console.log("i choose fish");
    break;

  default:
    console.log("i choose food items");
    break;
}
