// properties 
//    innerHeight ,innerWidth ,length localStorage sessionStorage outerHeight,outerWidth screen
//    location ,history,navigator  etc

// Methods 
//   setTimeout ,setInterval , clearInterval ,clearTimeout , alert  prompt , confirm ,open close  etc 

// console.log(window.innerHeight)
// console.log(window.innerWidth)
// console.log(window.outerWidth)
// console.log(window.outerHeight)

// console.log(window.screen)
// console.log(window.screen.pixelDepth)
// console.log(window.screen.colorDepth=24)
// // if(window.screen.orientation.type="portrait-primary"){
// //     alert("tilt the screen")
// // }
// console.log(window.screen.orientation)


// Location 
// console.log(window.location.protocol) //http:
// console.log(window.location.port) //5500
// console.log(window.location.pathname)// /Bom.html
// console.log(window.location.href)
// // console.log(window.location.reload())

// example
// function captcha(){
//     // location.reload() //reloading the page
//     // location.href="www.amazon.in"
//     location.replace("www.amazon.in")

// }

// HREF:This method directly sets the URL of the current page, causing the browser to navigate to the new location.
// It also adds the new URL to the browser history, allowing the user to navigate back to the previous page using the back button. 
// 
//REPLACEL This method replaces the current page in the browser history with the new URL

// console.log(Math.random()*10)

// django :8000
// react :4000
// java :8080
// localserver:5500
// jsonserver-3000 or any port no


// if(window.location.protocol="http"){
//    let res= confirm("this site is harmful are u ready to proceced")
//    if(res){
//     console.log("ok")
//    }
// }


// History : back and Forward
// console.log(window.history) 

// Navigator 
// console.log(window.navigator.appVersion)
// console.log(window.navigator.appCodeName)
// console.log(window.navigator.appName)
// console.log(window.navigator.cookieEnabled)
// console.log(window.navigator.geolocation)

// which is  for making the js async
// let a=setTimeout(() => {
//     console.log("hello")
// },1000);

// clearTimeout(a)
// let a1=setInterval(() => {
//     console.log("hello")
// },1000);

// clearTimeout(a1)

// function data(){
// //     window.open('https://www.linkedin.com/jobs/' ,"_blank",left=100,top=100,width=100,height=100)
// // }
// // function data1(){
// //     window.close()
// // }


// localStorage  : 10mb  -15mb 
// SetItem 
// removeItem 
// getItem
// adding/creating the Items 
// console.log(localStorage.setItem("name","ravi"))
// console.log(localStorage.setItem("age",15))

// // reteriving the Items
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))


// deleting the data
// console.log(localStorage.removeItem("age"))
// console.log(localStorage.removeItem("name"))

// console.log(localStorage.clear())

// storing the The objects and arrays into localStorage 
// console.log(localStorage.setItem("data",["raju",{details:"hyderabad"}]))
// console.log(localStorage.getItem("data"))



// JSON  :JAVASCRIPT OBJECT NOTATION 
    // JSON.stringify() : it converts arrays and objects ,etc into strigified format 
//    JSON.parse() : converting strings to text format (human readable format)
// Object
    // let data={
    //     name:"ramu"
    // }

    // // JSON
    // let data1={
    //     "name":"ramu"
    // }


    // console.log(localStorage.setItem("data1",JSON.stringify(["raju",{details:"hyderabad"}])))
//  let res=JSON.parse(localStorage.getItem("data1"))
//  console.log(res[0][0])


//  sessionStorage 5mb

// console.log(sessionStorage.setItem("data1",JSON.stringify(["raju",{details:"hyderabad"}])))
// let res1=JSON.parse(sessionStorage.getItem("data1"))