const p : string = "i love javascript";
// slice(start_index, end_index) : returns sub string
console.log(p.slice(2,6)); // love 

// negetive index start at the end of the string
// substring : negetive index
// similar to pythong slicing [start: end : <interval, not available in js>]
console.log(p.slice(-6)) // "script"
console.log(p.slice(-16,-11)) // "love"
