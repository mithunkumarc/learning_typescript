
#### A union type describes a value that can be one of several types. We use the vertical bar (|) to separate each type

1. Unions allow you to express a value that can be one of several types.
2. You can declare a new type based on two or more existing types.

          let padding: string | number;
          padding = "medium";
          padding = 4;
          
          // another example
          class Student{}
          class Employee{}
          class Customer{}
          // person can be student , employee or customer
          let person: Student | Employee | Customer;
          person = new Student();
          person = new Employee();
          person = new Customer();
          
3. any vs union

          
          function process(data: any): string {
              if(typeof data === 'number'){
                  // some logic
                  return "number";
              } 
              if(typeof data === 'string'){
                  // some other logic
                  return "string"
              }
              //throw error for other datatypes
              throw new Error(`Expected string or number`); 
          }
          
replacing above with union, no need to throw error, union force user to give valid value at compile time
          
          function process(data: string|number): string | void {
              if(typeof data === 'number'){
                  // some logic
                  return "number";
              } 
              if(typeof data === 'string'){
                  // some other logic
                  return "string"
              }
              // no need to throw error for other datatypes
              // no return type here so adding void as return type
          }

          process(true); // error boolean not allowed
          
