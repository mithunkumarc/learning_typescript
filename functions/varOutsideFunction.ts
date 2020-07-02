const pi: number = 3.14;

// function can refer to variable outside function
function areaOfCircle(radius: number) : number {
  return 2 * pi * radius;
}

console.log(areaOfCircle(3.2)); // 20.96
