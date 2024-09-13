// accessing the child 
let childEle=document.querySelector(".child")
let parentElement=document.querySelector(".parent")
// console.log(childEle)
// console.log(parentElement)

// // parent
// console.log(childEle.parentElement.parentElement.parentElement.parentElement)
// console.log(childEle.parentNode.parentNode.parentNode.parentNode.parentNode)

// // child
// console.log(parentElement.children) //TMLCollection(4) [p, p, h5.child, h5]
// console.log(parentElement.childNodes) //NodeList(11) [text, comment, text, p, text, p, text, h5.child, text, h5, text]

// console.log(parentElement.firstChild) //#text //returns the text value
// console.log(parentElement.lastChild) //#text //returns the text value
// console.log(parentElement.firstElementChild) //#returns only html elements
// console.log(parentElement.lastElementChild) //#returns only html elements

// // sibiling
// console.log(parentElement.firstChild.nextSibling.nextSibling.nextSibling)// it returns both text and elements also
// console.log(parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling) // it returns on html elements
// console.log(parentElement.lastChild.previousSibling.previousSibling.previousSibling) //  it returns both text and elements also
// console.log(parentElement.lastChild.previousElementSibling.previousElementSibling.previousElementSibling) //  // it returns on html elements

// example  for Traversing 
// console.log(childEle.nextElementSibling.parentElement.firstElementChild.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerText="domtraversing")


// Creation Of HTMl 
let h1ele=document.createElement('h1')
console.log(h1ele)
// inserting the Text -easy 
h1ele.innerText="hello"
h1ele.textContent="hello1"

// create the Text 
let textele=document.createTextNode("fs developers")
console.log(textele)

// append : adding something  
// remove :deleting 
// inserting the Created Text 
h1ele.appendChild(textele) // it will insert the only the Node values inside it
// h1ele.appendChild("hello everyone")//Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node
// h1ele.append("hello everyone") //it will insert both node and text values
// h1ele.append(textele) //it will insert both node and text values
h1ele.removeChild(textele)

document.body.append(h1ele)

// adding the attributes to Html elements

// creating the attributes
h1ele.setAttribute("id","id1")
h1ele.setAttribute("class","c1")
h1ele.setAttribute("style","color:red")

// checking the attribute and getting those values
console.log(h1ele.hasAttribute('id'))
console.log(h1ele.getAttribute('id'))

// setting the class attributes to html elements 
console.log(h1ele.className="c3")
console.log(h1ele.classList.add("c2"))
console.log(h1ele.classList.remove("c2"))

function add(){
    console.log(h1ele.classList.toggle("c2"))
}


// different ways to attach the created into the Body
let aele=document.createElement("a")
aele.setAttribute("href","g")
aele.innerText="click"
console.log(aele)
// parentElement.insertBefore(h1ele,parentElement.lastChild.previousElementSibling)
// parentElement.insertBefore(aele,parentElement.firstChild)
parentElement.insertAdjacentElement("afterbegin",aele)
parentElement.insertAdjacentElement("beforebegin",aele)
parentElement.insertAdjacentElement("beforeend",aele)
parentElement.insertAdjacentElement("afterend",aele)
