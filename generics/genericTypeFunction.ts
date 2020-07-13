// function with implementation
function identity<T>(arg: T): T {
    return arg;
}


// generic type funciton
let myIdentity: <T>(arg: T) => T = identity;


console.log(myIdentity("hello world"))
