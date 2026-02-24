const express = require("express");
const router = express.Router();

const {
    createStudent,
    getStudents,
} = require("../Controller/studentController");

router.post("/add", createStudent);
router.get("/all", getStudents);

module.exports = router;