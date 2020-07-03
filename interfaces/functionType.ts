// you can declare function type property in interface
// like field property , you don't give name to func property
// only input and output types are mentioned

/*
  interfaces are contract : force class implements properties defined in interface
  when to use: FunctionType interface : can be forced to function to follow specific signature i.e. input parameters type and output type
    
    
*/

interface Calculator{
  // function should have two parameters with type number and outpue as number
  (a: number, b: number): number
}

let add: Calculator;
add = function(a: number, b:number): number {
  return a + b;
}
console.log(add(4,45))

