// function with implementation
function identity<T>(arg: T): T {
    return arg;
}


// generic type funciton
let myIdentity: <T>(arg: T) => T = identity;

// generic parameter T can be changed to U
// or let myIdentity: <U>(arg: U) => U = identity; // works too,


console.log(myIdentity("hello world"))
