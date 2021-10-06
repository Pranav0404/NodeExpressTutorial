// const fs = require('fs')
// fs.readFileSync
console.log("starting this task");
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt", //path for the new file to be created
  `Here is the result: ${first}, ${second}`, // text or content for the file created above,
  { flag: "a" } //appends a file, now you can see that the entire text is repeated twice.
);

console.log("done with this task");
console.log("starting the next task");
/*Here you can see that all the code runs in a line
as in, in a synchronous way. All the console logs got 
exwcuted in a line. Now, go check the console logs of the
11-fs-async.js file. */
