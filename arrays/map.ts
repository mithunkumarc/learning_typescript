// map(element, index, array ) => {//doYourThing}
const ar: number[] = [11,22,33,44,55,33];
const result = ar.map((e,i,a) => {
  console.log(i,e);
  return e + 1
});
console.log(ar);// nochange : [11,22,33,44,55,33]
console.log(result); // [12, 23, 34, 45, 56, 34]
