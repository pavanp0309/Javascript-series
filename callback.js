// // sync : line by line (default js sync)
// // async  : after sometime (code excutes after a period of time
//     //  BOM - setInterval ,setTimeout
//     //   async operations  :cliking the button ,loading the content, timers

//     // callback function   one function passed as  argument to another function and called inside another functions
// //   function are excuted on how they are called not how they are defined
// // debugger
// // var a=10
// // var b=20
// // let a1=10
// // console.log(a)
// // console.log(b)
// // debugger
// // console.log("hello")
// // console.log("start")

// function Data(callback){
//     callback("hello")
//     var a=10
//     console.log("hello-function1")
// }

// function Data1(a){
//     console.log("hello-function2",a)
// }

// Data(Data1)

// //     setTimeout(()=>{
// //      console.log("timer")
// //     },0)

// //     console.log("end")

// //     function data3(){
// //         console.log("f3")
// //     }
// //  data3()

// setTimeout(()=>{
//  console.log("select the Item")
//  setTimeout(() => {
//     console.log("add the Item")
//     setTimeout(() => {
//         console.log("fill the adress")
//         setTimeout(() => {
//             console.log("procced to payment")
//             setTimeout(() => {
//                 console.log("order is placed")
//                 setTimeout(() => {
//                     console.log("order out for")
//                 }, 1000);
//             }, 2000);
//         }, 3000);
//     }, 4000);
//  },5000);
// },6000)

// callbacks
//    usecases : fetching the data from servers servers data1 data2 dat3

// Promises :  pending
// fullfilled state
//  rejected state


// The return value from the first then() method is provided to the second then() method, and you can keep calling the then() method over and over again; this mechanism of calling then() methods like this is known as a promise chain.

// let data = new Promise((resolve, rejected) => {
//   let status = 200;
//   if (status == 200) {
//     resolve(1);
//   } else {
//     rejected("rejected");
//   }
// })
//   .then((a) => {
//     console.log("a:", a);
//     return a * 2;
//   })
//   .then((c) => {
//     console.log("c", c);
//     return c * 2;
//   })
//   .then((d) => {
//     console.log("d", d);
//     return d * 2;
//   })
//   .then((e) => {
//     console.log("e", e);
//     return e * 2;
//   })
//   .then((f) => {
//     console.log("f", f);
//     return f * 2;
//   })
//   .then((h) => {
//     console.log("h", h);
//     return h * 2;
//   })
//   .catch((b) => {
//     console.log("b:", b);
//   });


//  async function serverdata(){
//     return await 1 
   
// }

// let res=serverdata()
// console.log(res)
//  res.then((a)=>console.log(a))

//  console.log("hellos")

// let a= fetch(`https://fakestoreapi.com/products`)
// console.log(a)
// a.then((res=>res.json()))
//   .then(da=>document.write(da[0].price))


  try {
    console.logf("hello")
   console.log("hello")
  } catch (error) {
    console.log(error.message)
  }
  console.log("hello")

  async function serverda() {
     try {
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
     } catch (error) {
        // console.log(error.message)
     }
  }
  console.log("hello")

  var data=false
  if(data){
   
   
    
  }else{
    throw new Error("nnnn");
  }