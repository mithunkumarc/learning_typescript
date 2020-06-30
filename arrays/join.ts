// join: joins all elements of array with given pattern/delimeter
const ar: number[] = [11,22,33,44,55];
const result = ar.join('-->')
console.log(result);// 11-->22-->33-->44-->55

// join characters to word, delimeter is blank
const chrs: string[] = ['w','o','r','l','d'];
console.log(chrs.join(''))// world
