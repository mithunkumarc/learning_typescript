
// adding manager and executive employees 

class Manager {
  constructor(public name: string) {  
  }
}

class Executive {
  constructor(public name: string) {  
  }
}

// department can store any objects
class Department<T> {
   //different types of employees
   private employees:Array<T> = new Array<T>();
   public add(employee: T): void {
      this.employees.push(employee);
  }
  public display(): void {
    console.log(this.employees);
   }
}

let m: Department<Manager> = new Department();
m.add(new Manager("arung"));
m.add(new Manager("vijay"));
m.display();
let e: Department<Executive> = new Department();
e.add(new Executive("asish"));
e.add(new Executive("madhu"));
e.display();



