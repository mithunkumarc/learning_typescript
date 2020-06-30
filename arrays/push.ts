// push : Appends new elements to an array,
const ar: number[] = [11,22,33,44,55,33];

// adding one element
ar.push(66);
console.log(ar); // [11, 22, 33, 44, 55, 33, 66]

// adding more than one elements
ar.push(...[1,2,3])
console.log(ar) // [11, 22, 33, 44, 55, 33, 66, 1, 2, 3]
