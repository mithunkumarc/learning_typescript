// function with implementation
function identity<T>(arg: T): T {
    return arg;
}

interface genericInterface {
  // input: output
  <T>(arg: T) : T;
}


let myIdentity: genericInterface = identity;

 


console.log(myIdentity("hello world"))
