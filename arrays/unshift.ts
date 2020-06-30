const ar: number[] = [11,22,33,44,55,33];

// Inserts new elements at the start of an array.
// unshift(elements_to_be_added_at_head)

ar.unshift(3,5,9); // three elements added at head
// ...[3,5,9]
ar.unshift(...[77,88])

console.log(ar); // two elements 77 88 added at head

// [77, 88, 3, 5, 9, 11, 22, 33, 44, 55, 33]
