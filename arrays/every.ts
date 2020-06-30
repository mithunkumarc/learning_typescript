const ar: number[] = [11,22,33,44,55];
// Determines whether all the members of 
// an array satisfy the specified test
console.log(ar.every(n => n > 10)) // true, all elements > 10
console.log(ar.every(n => n > 20)) // false , all elements not > 20
