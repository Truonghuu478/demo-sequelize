const { DataTypes, Sequelize } = require("sequelize");



const createStuModel = (sequelize)=>{
    const Student = sequelize.define("Student", {
        fullName: {
            type: DataTypes.STRING, // default 255
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false

        },
        class: {
            type: DataTypes.STRING,
            allowNull: false

        }
    }, {
        timestamps: true, // unable create and update,
        tableName: "Students"
    }
    )
    return Student
}

module.exports ={
    createStuModel
}