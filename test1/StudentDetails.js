class StudentDetails {
  studentDetails = [];

  constructor() {
    this.studentDetails = [
      {
        studentFirstName: "John",
        collegeName: "IIT",
        location: "Mumbai",
      },
    ];
  }

  addStudent(newStudent) {
    this.studentDetails.push(newStudent);
  }

  getStudentList() {
    return this.studentDetails;
  }
}

const studentDetails = new StudentDetails();

module.exports = { studentDetails };
