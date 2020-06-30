// copy and paste elements with in the array
// total length of array will be same

const ar : number[] = [1, 2,3,4, 5];

// copyWithin(target_index, start_copy_index, stop_copy_index)
// stopCopyIndex is (n-1) last will be discarded

ar.copyWithin(1,0,3);

// starting target from index 1, which is elment 2 in array
// copy part of arry from index 0 to 3 : [1,2,3]
// [1,2,3] will be pasted at target element 2(index 1), 
// existing elements from target element 2 will be lost

console.log(ar); // [1, 1, 2, 3, 5]
