// function parameters can be union types

let stringIds:string[] = []
let numberIds:number[] = []

// accepts both number and string types
function saveUserIds(id: string|number) {
  if(typeof id === "string") {
    stringIds.push(id);
  } else if(typeof id === "number"){
    numberIds.push(id);
  } else{
    console.log("not a valid type")
  }
  console.log("stringid",stringIds);
  console.log("numberIds",numberIds);
}

saveUserIds(123); // ok
saveUserIds("234"); // ok
//saveUserIds(true); //error

