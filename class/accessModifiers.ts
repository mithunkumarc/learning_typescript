// access modifiers

/*
  cannot be applied on class/interface, only applied on member of class
  public  : accessible everywhere : default access modifier
  protected : same class and subclass
  private : same class
*/

class Animal {
  public name: string = "rangu";
  protected color: string = "kandu";
  private weight: number = 20;
}
// subclass
class Dog extends Animal {
  accessAnimalProperties() {
    console.log(this.name);
    console.log(this.color);
    //console.log(this.weight); // compile error
  }
}
// non subclass
class Zoo {
  constructor() {
    console.log('zoo reading animal public prop: ',new Animal().name);
    //console.log(new Animal().color); // compile time error
    //console.log(new Animal().weight); // compile time error
  }
}

let d:Dog = new Dog();
d.accessAnimalProperties();
let z:Zoo = new Zoo();



/*
  private constructor
  cannot be instantiated using new operator outside class
  but object literal can be create
*/
class Person {
    private constructor(name: string){}
}
// object literal ok
let p: Person = {name:'rangu'};
console.log(p);

// using new opearator : error
let p1: Person = new Person("ranju");
