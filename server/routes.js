const {
  createStudent,
  readStudents,
  updateStudent,
  deleteStudent
} = require("./controller");

const routes = [
  {
    method: "POST",
    url: "/listStudents",
    handler: createStudent
  },
  {
    method: "GET",
    url: "/listStudents",
    handler: readStudents
  },
  {
    method: "PUT",
    url: "/listStudents/:id",
    handler: updateStudent
  },
  {
    method: "DELETE",
    url: "/listStudents/:id",
    handler: deleteStudent
  }
];

module.exports = routes;
