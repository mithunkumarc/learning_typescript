class Greeting {
  constructor(private greeting: string){
  }
  greet() {
    return this.greeting;
  }
}

let g: Greeting = new Greeting("howdy")
console.log(g.greet())
