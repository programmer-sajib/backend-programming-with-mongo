//jshint esversion:6
const express = require("express");

const app = express();
const hostName = "127.0.0.1";
const callBackFunction = (req, res) => {
  const object = {
    name: "John",
    age: 30,
  };
  const jsonFormat = JSON.stringify(object);
  const jsonParseFormat = JSON.parse(jsonFormat);
  res.send(jsonParseFormat.age.toString());
};
app.get("/", callBackFunction);

app.listen(3000, hostName, () => console.log(`server listening on port 3000`));
