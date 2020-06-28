calculator.ts : export components in order to import by other files

        export function addition(n1: number, n2: number): number {
          return n1 + n2;
        }
        
index.ts : 

        import {addition} from './calculator';    // same directory "./" if parent directory use "../"

        const result = addition(2,3)
        console.log(result);
