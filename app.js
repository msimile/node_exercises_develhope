const { createServer } = require("http");

function createApp() {
  return createServer((req, res) => {
    res.statusCode = 200;

    res.setHeader("Content-Type", "text/html");

    // const jsonResponseBody = JSON.stringify({ location: "Earth" });

    res.end("Welcome to the World Wide Web!");
  });
}

module.exports = createApp;
