// access modifiers

/*
  public  : accessible everywhere
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
