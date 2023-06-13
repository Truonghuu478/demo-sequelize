const { Student } = require("../models")

const getStudent = async value => {
    return await Student.findOne({
        [value]: value
    })
}
const create =  (data)=>{
   return  Student.create(data)
}
const getList =  ()=>{
 return  Student.findAll();
}

const update = async(id,data) => {
    await Student.update(data,{
        where :{
            id
        }
    })
}
const remove = async(id) => {
   await  Student.destroy({
        where:{
            id
        }
    })
}

module.exports = {
    getStudent,
    create,
    getList,
    update,
    remove
}