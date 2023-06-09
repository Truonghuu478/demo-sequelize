// @ts-nocheck
const { Student } = require("../models")
const { create, getList } = require("../services/student.services");
const { successCode, failCode, errorCode } = require("../utils/response");


/**
 *  getStudents
 * @returns {Array}
 */
// getStudents()
const getStudents = async (res) => {
    const taskList = await getList()
    if(taskList){
        successCode(res,"get list student success",taskList)
    }else{
        errorCode(res,"Loi he thong")
    }
}

const createStudent = async (req,res) => {

    try {
        const data = req.body
        if (data) {
             await create(data)
            successCode(res,
                { message: "add student successull :",
                    data }
            )
        } else {
            failCode(res,"student khong hop le!")
        }


    } catch (error) {
        errorCode(res,"Loi he Thong")
    }
}


module.exports = {
    getStudents,
    createStudent
}