const Student = require("../Models/studentdata");

const createStudent = async (req, res) => {
  const reqData = req.body;

  try {
    const existingStudent = await Student.findOne({
      roll: reqData.roll,
      registration: reqData.registration,
    });
    if (existingStudent) {
      return res.status(400).json({
        success: false,
        data: [],
        message: "Student already exists",
      });
    }

    const newStudent = new Student(reqData);
    const student = await newStudent.save();
    res.status(200).json({
      success: true,
      data: student,
      message: "Student created successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: [],
      message: e.message,
    });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    if (students.length === 0) {
      return res
        .status(404)
        .json({ success: false, data: [], message: "Students not found" });
    }

    res.status(200).json({
      success: true,
      data: students,
      message: "Students fetched successfully",
    });
  } catch (e) {
    res.status(500).json({ success: false, data: [], message: e.message });
  }
};

const getSpecStudent = async (req, res) => {
  const roll = req.params.roll;
  try {
    const student = await Student.findOne({ roll: roll });
    if (!student) {
      return res
        .status(404)
        .json({ success: false, data: [], message: "Student not found" });
    }
    res.status(200).json({
      success: true,
      data: student,
      message: "Student fetched successfully",
    });
  } catch (e) {
    res.status(404).json({ success: false, data: [], message: e.message });
  }
};

const updateStudent = async (req, res) => {
  const roll = req.params.roll;
  try {
    const student = await Student.findOneAndUpdate({ roll: roll }, req.body, {
      new: true,
    });
    if (!student) {
      return res
        .status(404)
        .json({ success: false, data: [], message: "Student not found" });
    }
    res.status(200).json({
      success: true,
      data: student,
      message: "Student updated successfully",
    });
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  const roll = req.params.roll;
  try {
    const student = await Student.findOneAndDelete({ roll: roll });
    if (!student) {
      return res
        .status(404)
        .json({ success: false, data: [], message: "Student not found" });
    }
    res.status(200).json({
      success: true,
      data: student,
      message: "Student deleted successfully",
    });
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
};

module.exports = {
  createStudent,
  updateStudent,
  deleteStudent,
  getStudents,
  getSpecStudent,
};
