// @ts-nocheck
const { Student } = require("../models")
const { create, getList, remove, update, getStudent } = require("../services/student.services");
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

const updateStudent = async (req,res) => {

    try {
        const data = req.body
        const {  id } = req.params

        const student = await getStudent(id)
        if (student && id) {
            
            await update(id,data)
            successCode(res,
                { message: "update student successull :",
                    data }
            )
        } else {
            failCode(res,"student khong hop le!")
        }


    } catch (error) {
        errorCode(res,"Loi he Thong")
    }   
}

const deleteStudent = async (req, res) => {

    try {
        const { id } = req.params
        const student = await getStudent(id)
        console.log('student', student);
        if (id) {
            if (student) {
                await remove(id)
                successCode(res,
                    {
                        message: `remove student id : ${id}  successfully`
                    }
                )
            } else {
                failCode(res, `id ${id} không tìm thấy!`);
            }
        } else {
            failCode(res, `id ${id} không hợp lệ!`);
        }
    } catch (error) {
        errorCode(res, "Lỗi hệ thống" + error)
    }
}


module.exports = {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent
}