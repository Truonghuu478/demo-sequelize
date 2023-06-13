// @ts-nocheck
const { Sequelize } = require("sequelize");
const {DB,HOST,PASSWORD,USER,dialect} = require("../configs/db.config");
const { createStuModel } = require("./student");

// ket noi  
const sequelize = new Sequelize(DB, USER, PASSWORD,{
   HOST,dialect
})

createStuModel

module.exports  = {
    sequelize,
    Student: createStuModel(sequelize)
}