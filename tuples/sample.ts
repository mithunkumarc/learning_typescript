// drawback of any
let scores : any;
// scores of 3 subjects
scores = [25,50,45]; // noproblem
scores = [45,"50","70"]; // strings should not be allowed

// use tuple : strict type checking
let scoresTuple: [number, number, number];
scoresTuple = [25,50,75];
// scoresTuple = [45,"43",43];// error, string not allowed

// tuple also allows mixed datatype
let user: [number, string];
user = [12, "rajat"];

// index based
console.log(user[0])
console.log(user[1])
// check length
console.log("lenght : ",user.length)
/*
  functions of array available to tuple too
 */
