const express = require("express")
const rootRouter = express.Router();
const studentRou = require("./student.router")
const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, process.cwd() + "/public/images")
    },
    filename:(req,file,cb)=>{
        const fileName = Date.now()+'_'+file.originalname; // save ngay thang nam
        cb(null,fileName)
    }
})
// ham upload sẽ được xửi lí ở middleware trước khi gợi tứi hàm callback chưa request và respone
const upload = multer({
    storage
})

rootRouter.post('/upload/:id', upload.single("image"), (req, res) => {
    res.status(200).send({ message: "Upload successful!", file: req.file });
});
rootRouter.use('/student', studentRou);


module.exports = rootRouter