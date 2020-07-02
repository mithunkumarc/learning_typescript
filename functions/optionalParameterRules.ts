// optional property rule
// optional property should not appear first before mandatory
// below is an error code
// why it is desinged like this?
// because while sending param, firs param match to name, but age 
// .. wont get any value
function info(name?: string, age: number) {
  // error
}

// below code works fine
// optional param follow mandatory. works fine
function info1(name: string, age?: number) {
  // works
}

// if both param are optional , thery everything is fine
function info2(name?: string, age?: number) {
  // works
}
