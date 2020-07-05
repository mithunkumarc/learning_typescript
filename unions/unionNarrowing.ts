// use common property from all union. n

interface Loading {
  state: string
}
interface Failure {
  state: string,
  code: string      // not common
}
interface Success {
  state: string,
  response: string      // not common
}
function getNetworkStatus(status: Loading|Failure|Success) {
  // use common property in all union
  // switch(status.code) { // error , as all union dont have code}
  switch(status.state) {
    case "loading" : return "please wait , loading..";
    case "failed": return "disconnected";
    case "success": return "connected";
  }
}
console.log(getNetworkStatus({state:"success"})); // connected
