const { listStudent } = require("./model");

const createStudent = async (req, reply) => {
  try {
    const addnewstudent = new listStudent({ ...req.body });
    return addnewstudent.save();
  } catch (err) {
    console.log(err);
  }
};

const readStudents = async (req, reply) => {
  try {
    const allstudents = await listStudent.find();
    return allstudents;
  } catch (err) {
    console.log(err);
  }
};

const updateStudent = async (req, reply) => {
  try {
    const { id } = req.params;
    const { student } = req.body;
    const { ...updateData } = student;
    const existuser = await listStudent.findOneAndUpdate({ id }, updateData, {
      new: true
    });
    return existuser;
  } catch (err) {
    console.log(err);
  }
};

const deleteStudent = async (req, reply) => {
  try {
    const { id } = req.params;
    const removestudent = await listStudent.findOneAndDelete({ id });
    return removestudent;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createStudent, readStudents, updateStudent, deleteStudent };
