const ar: number[] = [11,22,33,44,55,33];
// iterable list of values
const it = ar.values();
// use while loop for looping
console.log(it.next().value) // 11
console.log(it.next().value) // 22
console.log(it.next().value) // 33
console.log(it.next().value) // 44
console.log(it.next().value) // 55
console.log(it.next().value) // 33


// below code works in nodejs : new feature
for(const i of ar.values()){console.log(i)}

