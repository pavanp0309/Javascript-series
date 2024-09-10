

// mutable: we can change the value inside it
// IMmutable: we cant change the value inside it

// let a=[1,2,4]
// console.log(a)
// console.log(a[0]=9)
// console.log(a)

// strings are immutable
// strings are primitive Datatypes 
// let a1="hello"
// console.log(a1)
// console.log(a[0]="e")
// console.log(a1)


// method : it is used to perform some actions
// let data={
//     name:"ravi",
//     // method
//     edit:function(){
//         console.log(this.name.toUpperCase())
//     }
// }

// data.edit()

// strings are converted into non-primitive string object so all the method available on non-primitive string is also avaible on primitive strings

// Diffferent ways to create the Strings 
// using the String Literals --primitive Methods
    //   1.using the Single Quotes =''
    //   1.using the double Quotes = ""
    //   1.using the backticks (template literals)=``
// using the String Global Keyword====> primitive Methods
//    syntax: 
    //    let str=String("hello")
    //    console.log(typeof str) //string -primitive

// using the new Keyword  ====> non-primitive 
// Syntax 
//    let str1=new String("hello")
//    console.log(typeof str1)
//    console.log( str1)


// properties 
//  length 

// methods
//  Trim 
//  trimstart
//  trimEnd 
//  toUppercase
//  toLowercase
//  padStart
//  padEnd
// slice
// subStr
// indexOf
// lastIndexOf
// matchAll
// includes 
// replace
// replaceAll etc..


// let a=" javascript  "
// console.log(a.length)
// console.log(a)

// Trim methods are used for removing the white spaces at start and end
// let res=a.trim()
// console.log(res.length) //10
// let res1=a.trimStart() //removes white space at start
// let res2=a.trimEnd() // removes white space at end
// console.log(res1.length) //12
// console.log(res2.length) //11


// PadStart(totallength,newvalue)
// PadEnd
// let data="7995524942"
// let data1="7995524942"
// console.log(data.padStart(13,"+91"))
// console.log(data.padEnd(13,"**"))


// ToUpperCase
// ToLowerCase

// let str="raju"
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())


// // charAt(pos: number)
// let str1="fullstackdev"
// console.log(str1.length)
// console.log(str1.charAt()) //if no index-position is mention it returns the first character
// console.log(str1.charAt(13)) // if index-position>=length==empty
// console.log(str1.charAt(4)) // returns the value inside the specified position
// console.log(str1.charAt(-1)) // returns the Empty


// //  String.charCodeAt(index: number)
// console.log(str1.charCodeAt()) // returns ascii values
// console.log(str1.charCodeAt(13)) // if index-position>=length==NaN


// IndexOf method 
// String.indexOf(searchString: string, position?: number)
let str2="htmlteam"
let str3="javascript"
// console.log(str2.indexOf())// if no search value metioned it returns -1
// console.log(str2.indexOf("y"))// if no search value is not matched it returns -1
// console.log(str2.indexOf("t"))// it returns the index value
// console.log(str2.indexOf("t",3))// it returns the index value and search starts from specified index value
// console.log(str2.indexOf("t",-1))// it searchs the Value in forward direction

// console.log(str2.lastIndexOf("t"))// it searchs the Value from last and gives index no in forward direction
// console.log(str2.lastIndexOf("t",6))// it searchs the Value from last and gives index no in forward direction
// console.log(str3.lastIndexOf("a"))
// console.log(str3.lastIndexOf("a",2))


let a="javapython"
console.log(a.length)
console.log(a.slice())//returns the Entire string
console.log(a.slice(2))//returns from index value to last
console.log(a.slice(2,4))//returns from startindex value to previous value
console.log(a.slice(-2))//length+indexvalue ==>10+-2==8
console.log(a.slice(11))//index>stringlength==>empty
console.log(a.slice(5,2))//start>end==>empty








