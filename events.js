// events are actions or occurance that happens when some action performed like 
// clicking the Mouse ,pressing the Keys in keyboard , searching , reloading the page 
// resizing the browsers etc 

// actions are performed with the help of js functions  

// different types of events 
// MouseEvents : onclick ,ondblclick ,onmousedown,onmouseenter,onmouseleave,onmousemove etc .. 
// keyboardevents: onkeydown,onkeyup etc .. 
// formevents : onfocus,onsubmit,onchange  etc..
// browserEvents : onload ,DocumentContentLoad,onresize,onscroll etc ... 

// In JavaScript, event listeners and handlers are mechanisms that allow you to respond to user interactions and other events that occur in the browser.

// eventHandler : nothing but js functions which excutes a block of code when an event is triggered(fired/called)
// 🏹They are passed an event object as an argument, which contains useful information about the event, such as the target element, mouse coordinates, and more.

// eventListeners : listens to particular event
// Event listeners are functions that "listen" for specific events to happen on a particular element.
// When the specified event occurs, the associated event handler function is executed.

// different ways to attach /add the events to elements
// 1.through html Attributes 
// 2.adding to dom objects /attributes
// 3.by using the addeventlisteners

// 1st way 
// event handlers
// function getData(){
//     alert("hii user")
// }

// function getData1(){
//     alert("hii user2")
// }

// // 2nd way 
// let btnele=document.getElementById("id1")
// let btnele1=document.getElementById("id2")
// console.log(btnele)

// btnele.onclick=getData
// btnele.onclick=function data(){
//     alert("1nd type ")
// }

// // 3rd way :benefits :we can mutiple events to same elements without overriding
// btnele1.addEventListener("click",getData)
// btnele1.addEventListener("load",function(){
//     alert("i am user-3")
// })

// // element: The HTML element you want to attach the listener to.
// // eventType: A string representing the type of event you want to listen for (e.g., "click", "mouseover", "keydown", etc.).
// // eventHandler: The function to be executed when the event occurs.
// // options: An optional object containing configuration settings for the listener.


// // eventpropagation :Movement of Events through the DOM

// //     
// //    1.event Bubbling phase
// //    2.eventCapturing phase 
// //    3.target phase

// let pele=document.querySelector(".parent")
// let cele=document.querySelector(".child")
// let bele=document.querySelector("#btn1")
// let bele1=document.querySelector("#btn2")

// pele.addEventListener("click",function(e){
//     // console.log(e.stopPropagation())
//     // console.log(e.stopImmediatePropagation())
//     console.log("i am parent")
// },{capture:false})

// // pele.addEventListener("click",function(){
// //     console.log("i am parent")
// // },{capture:true})

// cele.addEventListener("click",function(){
//     console.log("i am child")
// },{capture:true})
// bele.addEventListener("click",function(){
//     console.log("i am btn ele")
// })
// bele1.addEventListener("click",function(){
//     console.log("i am btn ele-1")
// })


// EventDelegation : Event Delegation is basically a pattern to handle events efficiently
let ulpele=document.querySelector(".ulparent")
console.log(ulpele)
ulpele.addEventListener("click",(e)=>{
   console.log(e.target.innerText)
})