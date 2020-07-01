interface Person {
  name: string;
}
interface Mobile {
  brand: string;
}

// error, Person has no city
// let t:[Person,Person,Mobile] = [
//   {name: "arun"}, {city: "vidisha"}, {brand: "micromax"}
// ]

// works
let k:[Person,Person,Mobile] = [
  {name: "arun"}, {name: "vidisha"}, {brand: "micromax"}
]
console.log(k); // [{"name":"arun"},{"name":"vidisha"},{"brand":"micromax"}]
