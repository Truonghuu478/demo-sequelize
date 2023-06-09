const express = require("express")
const cors = require('cors');
const rootRouter = require("./routers/rootRouter");

const PORT = 8080
const app = express()
app.use(express.json())
app.use(cors());
app.use(express.static('.'))


// set sequelize 
const { sequelize } = require("./models")
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



app.use("/api", rootRouter)

app.listen(PORT, () => {
    console.log("run localhost:" + PORT);
})
