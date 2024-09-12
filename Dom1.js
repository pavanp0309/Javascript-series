// Dom: document Object Model 
// document : nothing but html 
// in Dom every html Elements are treated as tree of Nodes (objects)
// The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document

// Nodes 
// Element Nodes 
// Text Nodes 
// comments nodes

// methods to access the Html Elements
// getElementById : access the Html Elements By Idattribute value
// getElementByClassName :access the Html Elements By classattribute Values
// getElementByTagName :access the Html Elements By Id value
// querySelector     ---> jquery methods :access the Html Elements By Id,class,tag  value
// QuerySelectorAll ----> jquery method :access the Html Elements By Id,class,tag  value


// Method1 document.getElementById("id1"): will return the First element that matches in the first Document
// let idElement=document.getElementById("id1")
// console.log(idElement)
// // changing the content inside It
// idElement.innerText='<h1>hello</h1>' // html elements are presented in text format only
// idElement.innerHTML='<h1>hello</h1>' // html elements are presented in element format only
// idElement.textContent='hello' // html elements are presented in text format only

// // applying the styles
// idElement.style.backgroundColor="red"
// idElement.style.padding="5px"
// idElement.style.textAlign="center"
// idElement.style.color="gold"

// Method2 : return the HTmlCollection values (array values)
// let classElement=document.getElementsByClassName("c1")
// console.log(classElement)

// // changing the content 
// classElement[0].innerText='fsdevelopers'

// // applying the styles
// classElement[0].style.backgroundColor="gold"
// classElement[0].style.padding="15px"


// for(let i=0;i<classElement.length;i++){
//     classElement[i].style.backgroundColor="gold"
// classElement[i].style.padding="15px"

// }


// method3 :returns the html collection of values (array values)
let tagElement=document.getElementsByTagName("h2")
console.log(tagElement)

// changing the content 
tagElement[0].innerText='fsdevelopers'

// applying the styles
tagElement[0].style.backgroundColor="gold"
tagElement[0].style.padding="15px"


// for(let i=0;i<tagElement.length;i++){
//     tagElement[i].style.backgroundColor="gold"
//     tagElement[i].style.padding="15px"
// }

// it is only applicable for queryselectorAll method 
// tagElement.forEach(ele=>ele.innerText='fsdevelopers')

// method4:queryselector : it returns the Firstelement that matches in the Document
// for accessing id values give the #idvalue eg:#id1
// for accessing class values give the .classvalue eg:.c1
// let queryEle=document.querySelector('h3') 
// console.log(queryEle)

// queryEle.innerText="hello"
// queryEle.style.backgroundColor="red"



// method5:it returns node list of collection values
let queryallEle=document.querySelectorAll('.c1 , #id1 ,h2') 
console.log(queryallEle)

queryallEle[0].innerText='fsdevelopers'
queryallEle[1].innerText='fsdevelopers'
queryallEle[2].innerText='fsdevelopers'

queryallEle.forEach(ele=>ele.innerText='fsdevelopers')