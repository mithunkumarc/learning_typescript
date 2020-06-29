// an enum is a way of giving more friendly names to sets of numeric values.
enum Color {
    Red,  // starts index with zero, it can be changed to Red = 5//custom value
    Green,
    Blue
}
console.log(Color.Red); //index : 0
let c : Color = Color.Red;
console.log(c == Color.Red) // true
//print enum in string form
console.log(Color[0]); // Red 
//comparing in string form
console.log(Color[0] == 'Red') // true 
