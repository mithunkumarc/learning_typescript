similar to typecaseting :  

Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.   

Usually this will happen when you know the type of some entity could be more specific than its current type.  

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”   


          interface Employee {
            name: string;
            age : number;
          }

          let e: any = {name:'raj',age:32};
          function getEmployee() : Employee {
            // e may be coming from api/db
            return e as Employee;
          }
