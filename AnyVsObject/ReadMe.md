
any : takes any value/object. but there is a risk of runtime errors
Object : takes any primitive value or object



any vs Object : 

          // "any" :this  datatype may lead to run time errors
          const p : any = {};
          p.doSomething(); // no error at compile time, run time error : doSomething() not a function

          const q : Object = {};
          q.doSomething(); // compile time error , cool , now user can fix
