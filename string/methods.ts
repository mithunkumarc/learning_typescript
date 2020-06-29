const u = "chair"; // implicit type inferred as string 
const v : string = 'world'; // single quote
const t : string = "hello"; // double quote

// string index based
console.log(t[0])   // h

// charAt
console.log("char at : " ,t.charAt(0)) // h

// endsWith
console.log(t.endsWith("llo"));// true, "hello" ends with "llo"

// includes : can be used to search part of string
console.log("includes : ",t.includes("ell")); // true

// indexOf : index of first appearing character
console.log("indexOf  : ",t.indexOf("l")); // 2, first appearing "l" in hello is at "2"

// lastIndexOf() :
console.log("lastIndexOf : ",t.lastIndexOf("l")); // 3, last

//t.length() : number of characters 

// compares two strings in locale(browser language) // output : 1 , 0 , -1
console.log("localeCompare : ",t.localeCompare("world")); // -1 , "hello" comes before "world" in dict


