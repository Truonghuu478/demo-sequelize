const { createStudent, getStudents, updateStudent, deleteStudent } = require("../controllers/student.controllers");
const express = require("express");

const studentRouter = express.Router()


studentRouter.get('/get-list', async function (_, res) {
    await getStudents(res)

})

studentRouter.post('/create', async function (req, res) {
    await createStudent(req, res)

})

studentRouter.put('/update/:id', async function (req, res) {
    await updateStudent(req, res)

})
studentRouter.delete('/delete/:id', async function (req, res) {
    await deleteStudent(req, res)

})
module.exports = studentRouter
