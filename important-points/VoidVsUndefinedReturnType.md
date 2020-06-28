if method/funcation has return type as void, funciton/method no need to return anything.  
if method/funcation has return type as undefine, function/method has to return undefined or just return statement.

#### void as return type : doesn't require function to return anything

        class Point {
          constructor(private x?: number, private y?:number) {
          }
          mark(): void
            console.log('x : ',this.x);
            //no need to return anything
          }
        }
        
#### undefined as return type : function/method has to return undefined or just return statement.


        class Point {
          constructor(private x?: number, private y?:number) {
          }
          mark(): undefined {
            console.log('x : ',this.x);
            return undefined;
          }
        }

        //or
        
        class Point {
          constructor(private x?: number, private y?:number) {
          }
          mark(): undefined {
            console.log('x : ',this.x);
            return;
          }
        }
