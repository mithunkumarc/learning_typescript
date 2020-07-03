// Indexable Types : similar to array with type
// index is nothing but keys which are used to access values
// similar to array uses index to access  elements
// only number and string are allowed
interface Product {
  // object can be array(default 0's based index used to access values)
  // or key value , where key is number and value is string
  [index:number]:string;
}

let p : Product = ["productone", "producttwo", "productthree"];
console.log(p[0]);
console.log(p[1]);
console.log(p[2]);

// example 2 : index type number
interface City {
  // key is number, value is string
  [index: number]:string;
}
let c: City = {1:"bangalore",2:"holenarsipura",3:"arakalagudu"}
console.log(c[1])
console.log(c[2])
console.log(c[3])

