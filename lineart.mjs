import figlet from "figlet";
import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("Request received");

  res.statusCode = 200;

  res.setHeader("Content-Type", "application/json");

  figlet("Hi Bernard , this is Marco!", function (err, data) {
    if (err) {
      console.log("An error has occurred...");
      console.dir(err);
      return;
    }
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
