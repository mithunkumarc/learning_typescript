// sorting with respect to object properties 

interface Person {
  name: string;
}

let people: Person[] = [
  {name: "raju"},
  {name: "sanju"},
  {name: "manju"},
  {name: "nanju"},
]

// ascending
people.sort((p1,p2) => p1.name.localeCompare(p2.name));
console.log(JSON.stringify(people));
// [{"name":"manju"},{"name":"nanju"},{"name":"raju"},{"name":"sanju"}]

// descending 
people.sort((p1,p2) => p2.name.localeCompare(p1.name));
console.log(JSON.stringify(people));
// [{"name":"sanju"},{"name":"raju"},{"name":"nanju"},{"name":"manju"}]
