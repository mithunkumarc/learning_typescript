//
function printLabel(info: {label: string}) {
  console.log(info);
}

// mandatory property label
// extra properties are accepted
let info = {label: "hello world", title: "first program"};
printLabel(info); // {label: "hello world", title: "first program"}
