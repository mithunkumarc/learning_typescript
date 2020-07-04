// any can be used as generic, but it is not typesafe
// so generics are used
function input<T>(n: T): boolean {
  //do something
  return Boolean(n);
}

console.log(input<string>("hello")); // true
console.log(input<number>(0)); // false
