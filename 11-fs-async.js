const { readFile, writeFile } = require("fs");

console.log("starting this task")

//Here we can see how asynchronously we performed the actions like that in the previous file './content/result-sync.txt;.

/*We have used callBack functions here and asynchronously
 performed the actions the first callback is used to store 
 data into the "first" named variable. */
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  /* Here is the second callback function that will store 
  the data into the "second" variable*/
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    /* Here is the final callback assigned to create a file and 
    embebd the data stored in the first and second variable into
    the new file created*/
    writeFile(
      "./content/result-async.txt",
      `here is the content: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("task completed successfully");
        /* If you observe proprely we can see that a callback hell
      is created. */
      }
    );
  });
});

console.log("moving to the next task");

/* Here we can see that all the console logs have been executed 
in a async way where the order of execution is 1,3,2 and so
this also tells that callback functions have a async nature in 
node js enviroment. */
