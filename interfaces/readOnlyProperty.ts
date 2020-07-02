// property modifiable only when object is first created
// while creating object, initialize userId

interface User {
  name: string;
  readonly userId: number;
}

let u: User = {name: "rajath", userId: 324};
u.name = "k rajath";
u.userId = 235; // error, not writable
