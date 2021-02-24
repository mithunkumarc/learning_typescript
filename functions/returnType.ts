//A function whose declared type is neither 'void' nor 'any' must return a value

// never returnType don't expect any value, program may either throw error/infinite loop
function hello(): never {
    // not returning any value
    throw new Error("some error");
}

function hello4() : never {
    // not returning any value
    while(true){

    }
}

// undefined expects return value
function hello1(): undefined {
    return undefined;
}

// any and void dont need any return value
function hello2(): any {
    // no need to return any value
}

function hello5(): void {
    // no need to return any value
}

// unknown need return value
function hello3(): unknown {
    return 4;//any value is fine
}


