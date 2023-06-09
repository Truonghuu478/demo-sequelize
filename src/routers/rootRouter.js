const express = require("express")
const rootRouter = express.Router();
const studentRou = require("./student.router")




rootRouter.use('/student', studentRou);


module.exports = rootRouter