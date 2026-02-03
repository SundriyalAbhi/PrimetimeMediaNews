const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const { connectdb } = require("./Config/db")
const morgan = require("morgan")
const AuthRouter = require("./routes/auth.routes")

const app = express()
app.use(cors())
app.use(bodyParser.json({
    limit:"30mb"
}))
dotenv.config({path:"./Config/config.env"})
connectdb()
app.get("/",(req,res)=>{
    try {
        res.send("Hello")
    } catch (error) {
        console.log(error);
    }
})
app.use(morgan("dev"))
app.use("/auth",AuthRouter)
app.listen(process.env.PORT,()=>{
    console.log("server is runing");
})