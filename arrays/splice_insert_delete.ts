/* 
  Removes elements from an array and, if necessary, 
  inserts new elements in their place, returning the deleted elements.
*/

// splice(starting_index, num_elemets_tobe_deleted)
const ar: number[] = [11,22,33,44,55,33];
ar.splice(2,2); // from index 2, delete two elements
// 33, 44 deleted
console.log(ar); // [11, 22, 55, 33]


// to insert/add elements
// splice(start_index, 0 , elements to be added) , 0 means no elements deleted

const c: string[] = ['red','green','yello','blue'];
c.splice(2,0,"purple","pink");            // 2 : insert at index 2, 0 : no elements deleted , purple and pink elements tobe added
console.log(c);                           // ["red", "green", "purple", "pink", "yello", "blue"]
