// The fill() method fills the 
// specified elements in an array with a static value.


// fill(value, start_index, end_index + 1)
const ar: number[] = [11,22,33,44,55];
// -1 value will be filled between index 2 and 4
ar.fill(-1,2,4)
console.log(ar) //[11, 22, -1, -1, 55]
