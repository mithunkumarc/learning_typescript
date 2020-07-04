// parameter properties: constructor parameters can be converted to properties. use access modifiers before parameter.

class Person {
  //no need to delclare name age here
  // parameter are converted to properties
  // access modifier public is used before name and age
  constructor(public name: string, public age: number) {

  }
}

let p: Person = new Person("raj",23);
console.log(p.name); // raj
console.log(p.age); // 23
