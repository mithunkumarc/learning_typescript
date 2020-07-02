// same as variable arguments concept
// varargs in java, packing and unpacking in python

// scores : rest parameter
// first parameter is mandatory
// any parameter after first parameter considered as rest parameter and groupted into array
function studentInfo(name: string, ...scores: number[]) {
  return [name,scores.reduce((a,b) => a+b)/scores.length];
}
console.log(studentInfo("rajat",34,23,45,12,50)) // ["rajat", 32.8]
