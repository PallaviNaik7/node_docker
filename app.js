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
  response.status(200).send({ type: "success", message: "Hello" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
