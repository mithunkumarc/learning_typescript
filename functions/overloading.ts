// declare function with overloaded parameters
// input combination must be number and string : return string
function demo(x: number, y: string): string;
// input : string, boolean , output : number
function demo(x: string, y: boolean): number;

// x : either number or string
function demo(x: any, y: any): any {
  //should return number/string , dependns type of param combination
}

//demo(true,"hello") // no matching combination of params
demo("hello",true) // works
demo(32,"world") //works
