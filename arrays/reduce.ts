const ar: number[] = [11,22,33,44,55,33];
const result = ar.reduce(
  (pv,cv,i,a) => {
  console.log(pv,cv,i,a)
  return pv + cv
})

console.log(result) // result : 198
