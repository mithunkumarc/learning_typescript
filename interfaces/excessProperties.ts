// below interface allows color and width property
// excess property not allowed
interface SquareConfig {
    color?: string;
    width?: number;
}

// below code gives error ,as only color and width are allowed
let sc: SquareConfig = {colour:"red", width:32};

// excess property where key is either string / number
interface ColorTv {
  brand?: string;
  cost?:number;
  [propName:string]:any; // value doesn't matter
}

// works fine
// note : both digits and strings are considered as keys.
let ct: ColorTv = {company: "sony", cost: 4346,34:"hello"}
console.log(ct)


// excess property where key as number
interface Watch {
  brand?:string;
  [propName:number]:string; // value only string allowed
}

// below raise error as string propName not allowed
let w: Watch = {company:"casio", 123:"serialNumber"}
// below works fine
let w1: Watch = {brand:"casio",12:"serialnumber",234:"produceid"}
