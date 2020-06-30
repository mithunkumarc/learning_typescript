const ar: number[] = [11,22,33,44,55,33];
//default sort ascending
ar.sort()
console.log(ar)

const ar1: number[] = [45,44,43,42];
// ascending callback optional
ar1.sort((a,b) => a - b);
console.log(ar1);// [42, 43, 44, 45]
// descending callback funciton
ar1.sort((a,b) => b - a);
console.log(ar1); // [45, 44, 43, 42]
