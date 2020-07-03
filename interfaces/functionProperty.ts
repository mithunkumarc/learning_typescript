interface Calculator{ 
  title:string;
  add(a: number, b: number):number
}

class Addition implements Calculator {
  title:string;
  add(a: number, b: number) {
    return a+b;
  }
}
