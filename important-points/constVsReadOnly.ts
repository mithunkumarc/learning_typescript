// const and readonly , functionality is same
// can be initialized only once. if value is primitive value , cannot be changed.
// if the value is object, object's state can be changed. 
// difference : const used on variables, readonly used on properties


interface User {
  name: string;
  readonly userId: any; // while creating object, initialize userId
}
let u: User = {name: "rajath", userId: {id:43}};
u.name = "k rajath";
u.userId.id = 235; // object state is changed but still property userId points to same object
console.log(u.userId.id) // 235

const u1: User = {name: "ananth", userId: {id:43}};
u1.userId.id = 235; // object state is changed but still property userId points to same object
console.log(u1.userId.id) // 235

// primitive value
const i = 10;
i = 20; // error


interface Student {
  name: string;
  readonly studentId: any;
}
const s: Student = {name:"raj",studentId:34};
s.studentId = 34;  // error 

