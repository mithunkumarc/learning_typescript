// an enum is a way of giving more friendly names to sets of numeric values.
enum Color {
    Red = 10, 
    Green = 15,
    Blue = 25
}

let g : string = Color[15]; // index of 'green'
console.log(g); // green
