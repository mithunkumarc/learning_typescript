interface Loading {
  display: "spinner"
}
interface Failure {
  code: string
}
interface Success {
  response: string
}

type UnionStatus = Loading & Failure & Success;

function setNetworkData(data: UnionStatus) {
    console.log(data);
}

let data : UnionStatus = {
  display: "spinner",
  code: "234",
  response: "data from backedn"
}

setNetworkData(data);
