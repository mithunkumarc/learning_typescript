
interface LabelInfo {
  label: string
}

// contract, parameter must be of type LabelInfo
function printLabel(info: LabelInfo) {
  console.log(info);
}

// mandatory property label
// extra properties are accepted
let info = {label: "hello world", title: "first program"};
printLabel(info); // {label: "hello world", title: "first program"}
