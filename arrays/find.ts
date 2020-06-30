const ar: number[] = [11,22,33,44,55];
/*
Returns the value of the first element in the array where predicate is true, and undefined otherwise.
can be used to search element
*/

const result = ar.find(element => element == 33)
console.log(result);
