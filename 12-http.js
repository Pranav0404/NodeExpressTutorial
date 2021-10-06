const http = require("http");

/* Uncomment the single line comments till line 23 to get the
initial code coverage.*/

/* The below function creates a http server
that listens to server ports and gives a responce back to 
the client*/
// const server = http.createServer((req, res) => {
/*The first parameter represents the incoming requests
 */
// console.log(req);
/* The below method gives back a responce back to the client*/
// res.write("welcome to the home page");
/* The below method ends the responce */
// res.end();
// });
/* The server objects listens to the port on 5000, as in it creates
a server to display the output. */
// server.listen(5000);

/* Now we have successfully created a server and
which will be listening and working forever till we stop it 
*/

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home Page!");
  }
  if (req.url === "/about") {
    res.end("Here is the about page!");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you have requested.</p>
  <a href="/">Back to Home Page</a>
  `); 
});

server.listen(5000);
