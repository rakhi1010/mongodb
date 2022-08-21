const express = require("express");
const cors = require("cors");
const studentList = require("./StudentList.json");

const app = express();
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.get("/student/studentsList", (req, res) => {
  res.send(studentList);
});

const port = 3003;
app.listen(port, () => {
  console.log("Server is running on" + port);
});
