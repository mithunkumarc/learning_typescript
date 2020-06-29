const t : string = "i java love javascript java";
// with /g : returns number of times matching word appears
console.log(t.match(/java/g)); // [ "java", "java", "java" ] 
// without /g : returns first matching "java"
console.log(t.match(/java/)); // ["java"]
