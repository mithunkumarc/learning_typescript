const e = {}
//e.name = "raju"; // error: name does not exist on type e 

interface Person {
    name: string
}
// type casting e as Person 
(e as Person).name = "raju";
console.log((e as Person).name); // "raju"
