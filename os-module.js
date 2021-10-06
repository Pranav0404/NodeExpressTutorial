const os = require("os");

//To get the user specification
const user = os.userInfo();
// console.log(user);

//To find the system's uptime, tells us how long the system is on

console.log(`The system uptime is ${os.uptime()} seconds`)

//To get the details about the current system

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalMemory(),
  freeMemory: os.freeMemory()
}

console.log(currentOS)
