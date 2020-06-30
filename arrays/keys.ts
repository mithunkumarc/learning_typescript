// array.keys() ; returns iterable list of keys
// it.next() : {value:element,done:true/false}

const ar: number[] = [11,22,33,44,55];
//if u are running without nodejs env
const it = ar.keys()
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)// undefine : end
// u can use while loop too

// in nodejs enviroment u can use for...of

for(const key of ar.keys()){console.log(key)}
