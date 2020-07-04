// super() call is mandatory in child class constructor.
class Animal {
  constructor() {
    console.log("animal constructor")
  }
}
class Dog extends Animal {
  constructor() {
    console.log("dog constructor: any stat can appear here except 'this' keyword")
    super() // mandatory, if u do not provide any constructor , default constructor will handle this.
  }
}

let d:Animal = new Dog();
