// function with implementation
function identity<T>(arg: T): T {
    return arg;
}


// generic type as object literal
// { key(as input) : value( as output)}
let myIdentity: {<T>(arg: T) : T} = identity;

console.log(myIdentity("hello world"))
