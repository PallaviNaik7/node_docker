"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

module.exports = app;

app.get("/test/hello", (request, response) => {
  response
    .status(200)
    .send({ type: "success", message: `Hello ${process.env.NAME}` });
});

/*    In app.js of all services   */
process.on("SIGTERM", function () {
  // monitor for SIGTERM(^C)
  console.log("Shutting down service.");

  // Graceful shutdown: can close sockets, close DB connections, clean up resources etc.

  process.exit(); // process SHOULD exit by itself, after the OS sends kill code.
});

process.on("SIGINT", function () {
  // monitor for SIGTERM(^C)
  console.log("Shutting down service.");

  // Graceful shutdown: can close sockets, close DB connections, clean up resources etc.

  process.exit(); // process SHOULD exit by itself, after the OS sends kill code.
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
