const { createStudent, getStudents } = require("../controllers/student.controllers");
const express = require("express");

const studentRouter = express.Router()


studentRouter.get('/get-list', async function (_, res) {
    await getStudents(res)

})

studentRouter.post('/create', async function (req, res) {
    await createStudent(req, res)

})

module.exports = studentRouter
