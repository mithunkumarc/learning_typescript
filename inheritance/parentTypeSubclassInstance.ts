class Animal {
    constructor(public name: string) {
        this.name;
        console.log("animal", this.name);
    }
    eat() {
        console.log("animal eat");
    }
}
class Dog extends Animal {
    constructor(public name: string) {
        super("parent name");
        this.name;
    }
    eat() {
        console.log("dog eat");
    }
}
let d: Animal = new Dog("tomm");

// opposite to java
// in TS, both field and state selected depends on object
// in Java, field depends on type and method depends on object
console.log(d.name);// tomm 
d.eat(); // dog eat
