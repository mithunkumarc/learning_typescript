problem in generics 

        function identity<T>(arg: T): T {
           console.log(arg.length); // compile time error, compiler says len doesn't exist
           return arg;
        }


fix : create interface with field length

          interface Length {
              length: number;
          }

          function identity<T extends Length>(arg: T): T {
             // length property can now be called
             console.log(arg.length);
             return arg;
          }
