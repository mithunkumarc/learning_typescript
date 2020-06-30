// reduceRight : same as reduce but from right to left
const ar: number[] = [11,22,33,44,55,33];
const result = ar.reduceRight((p,c) => p + c)
console.log(result)
