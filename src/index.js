const express = require("express")
const cors = require('cors');
const { sequelize } = require("./models")

const rootRouter = require("./routers/rootRouter");
const app = express()
const PORT = 8080


// set sequelize 
// đồng bộ 
const checkConnectDatabase = async () => {
    try {
        await sequelize.authenticate()
        console.log("connect successful");
    } catch (error) {
        console.log("errors" + error);

    }
}

checkConnectDatabase()

// force tao table moi 
// alter sua table 
sequelize.sync({ alter: true })


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    next()
})

app.use(express.json())
app.use(cors());

app.use(express.static('.'))

app.use("/api", rootRouter)

app.listen(PORT, () => {
    console.log("run localhost:" + PORT);
})


