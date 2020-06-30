// this feature runs if you are using js new features supported transpiler // nodejs
// returns iterator
//const it = ar.entries()


const ar = [11,22,33]
for(const a of ar.entries()){
  console.log(a)
}

// [ 0, 11 ]
// [ 1, 22 ]
// [ 2, 33 ]


// if you are not using nodejs, manually iterate
// each element is in the format : { value: [index,element] , done: false/true }
// loop iterator till u reach end of iterator i.e, done = true;

const helper: any;
const it = ar.entries();
while(!(helper = it.next()).done) {
  console.log(helper.value[1])
}
