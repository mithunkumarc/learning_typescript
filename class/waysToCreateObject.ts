// 1. new opeartor
class Greeting {
  constructor(private greeting: string){
  }
  greet() {
    return this.greeting;
  }
}
// new operator
let g: Greeting = new Greeting("howdy")
console.log(g.greet())


//2. you can use object literals to create objects 
// this approach works if class have public fields and no methods
class Person {
    constructor(public name: string){
    }
}

class Customer {
    constructor(public name: string){   
    }
}
// object literal
let p: Person = {name: "rajath"}



// LIMITATION of above approach
class Transmitter {
  constructor(private transmitMessage: string){
  }
  transmit() {
    return this.transmitMessage;
  }
}
// error: transmitMessage is private and other function exp not assignable to transmit
let t: Transmitter = {transmitMessage:"hello",transmit:() => "hello"};
