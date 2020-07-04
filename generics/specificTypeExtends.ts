interface Data {
  length: number;
}

function getLength<T extends Data>(t: T){
  return t.length;
}

const t = getLength({length:5,name:"rajat"})
console.log(t);
const t1 = getLength("helloworld") // string has lenght prop
console.log(t1); // 10

const t2 = getLength([1,2,3]);
console.log(t2); // 3
