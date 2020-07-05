interface Bird {
  layEggs(): void;
  fly(): void;
}

interface Fish {
  layEggs(): void;
  swim(): void;
}

function getSmallPet(): Fish | Bird {
  return {
    layEggs: () => console.log("bird lay eggs"),
    fly: () => console.log("bird fly")
  }; //as Bird;
}

getSmallPet().layEggs(); //works , both bird and fish has function
//getSmallPet().swim(); // error: only fish has this function


console.log("*".repeat(20))

// function parameters union types
function petStore(p: Bird|Fish) {
  p.layEggs() // no problem, both has layeggs funciton
  // p.swim() // problem, as both pets dont have swim method
  // use typegaurd
  if((p as Fish).swim !== undefined){
    (p as Fish).swim();
  }
  if((p as Bird).fly !== undefined){
    (p as Bird).fly();
  }
}

let b: Bird = {
  layEggs: () => console.log("bird lay eggs"),
  fly: () => console.log("bird fly")
}

let f: Fish = {
  layEggs: () => console.log("fish lay eggs"),
  swim: () => console.log("fish swim")
}

petStore(b);
petStore(f);
/*
bird lay eggs
bird fly
fish lay eggs
fish swim
 */
