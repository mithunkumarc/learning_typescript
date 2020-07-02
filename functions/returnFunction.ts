function getAddLogic(): Function {
  return (a,b)  => a+b
}

let add: Function = getAddLogic()
console.log(add(3,6)) // 9
