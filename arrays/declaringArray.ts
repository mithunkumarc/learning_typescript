// declaring array
const n: number[] = [1,2,3]
const m: Array<number> = [4,5,6]; // generics way
const p: any = [7,8,9]


const q = p.length;
// type assertion : telling to compiler : trust me what i am doing
console.log((p as number[]).length);
/*
A type assertion is like a type cast in other languages, 
but performs no special checking or restructuring of data. 
It has no runtime impact, and is used purely by the compiler. 
TypeScript assumes that you, the programmer, have performed any special checks that you need.
 */

