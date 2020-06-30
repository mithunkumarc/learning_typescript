const ar1: string[] = ['z','o','l','f'];

// ascending callback optional
ar1.sort((a,b) => a.localeCompare(b));
console.log(ar1);                       // ["f", "l", "o", "z"]

// descending callback funciton
ar1.sort((a,b) => b.localeCompare(a));
console.log(ar1);                       // ["z", "o", "l", "f"]
