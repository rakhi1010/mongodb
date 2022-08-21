const { studentDetails } = require("./StudentDetails");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/student/getDetails", (_req, res) => {
  const studentList = studentDetails.getStudentList();
  res.send(studentList);
});

app.post("/student/add", (req, res) => {
  const newStudent = req.body;
  studentDetails.addStudent(newStudent);
  res.send({ message: "Successful" });
});

const port = 3006;
app.listen(port, () => {
  console.log("Server is running on " + port);
});
