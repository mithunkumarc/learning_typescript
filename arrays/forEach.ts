// forEach((element, index, array) => {//doYourThing})
// can be used for looping and also manipulate array of primitivies(watch below example) and array of objects
const ar: number[] = [11,22,33,44,55];

const square = (e) => e * e;
ar.forEach(square);
// drawback : it wont change directly
console.log(ar);//no change, so explicitly change using index
ar.forEach((e,i,a) => a[i] = square(e));
console.log(ar); // [121, 484, 1089, 1936, 3025]

// forEach with objects
const names = [{name:'arun'},{name:'ajay'}]
names.forEach(e => e.name = 'Mr.'+e.name)
console.log(names); // [{"name":"Mr.arun"},{"name":"Mr.ajay"}]
