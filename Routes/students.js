const express = require("express");
const { verifyToken } = require("../helpers/verifyToken");

const studentAct = require("../Controllers/students");
const router = express.Router();

router.get("/", verifyToken, studentAct.getStudents);
router.post("/", verifyToken, studentAct.createStudent);
router.get("/:roll", verifyToken, studentAct.getSpecStudent);
router.patch("/:roll", verifyToken, studentAct.updateStudent);
router.delete("/:roll", verifyToken, studentAct.deleteStudent);

module.exports = router;
