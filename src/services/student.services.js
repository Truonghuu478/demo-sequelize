const { Student } = require("../models")

const create =  (data)=>{
   return  Student.create(data)
}
const getList =  ()=>{
 return  Student.findAll();
}

module.exports = {
    create,
    getList
}