function displayEmpInfo(emp: {name: string,age: number}) {
  console.log(emp)
}
displayEmpInfo({name:"simha",age:32})

// or better way

interface Person {
  name: string;
  age: number
}
function displayPerson(person: Person) {
  console.log(person)
}
displayPerson({name: "avinash", age:32});
