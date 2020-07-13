// declare function with overloaded parameters
// input combination must be number and string : return string
function demo(x: number, y: string): string;    // lets say rule 1
// input : string, boolean , output : number
function demo(x: string, y: boolean): number;  // lets say rule 2

// should accept rule 1 (input : number/string, output : string), rule 2 (input: string/boolean , output : number)
function demo(x: any, y: any): any {
  //should return number/string , dependns type of param combination
}

//demo(true,"hello") // no matching combination of params
demo("hello",true) // works
demo(32,"world") //works
