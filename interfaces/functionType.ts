// you can declare function type property in interface
// like field property , you don't give name to func property
// only input and output types are mentioned
interface Calculator{
  (a: number, b: number): number
}

let add: Calculator;
add = function(a: number, b:number): number {
  return a + b;
}
console.log(add(4,45))

// i dont know
// if u add one more function in interface, i dont know how to
// create object for this interface
