"use strict";

const express = require("express")
const app = express()
const router = require("./routes/index")
const layouts = require("express-ejs-layouts")
const mongoose = require("mongoose")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1:27017/ryota")
    .then(() => {console.log("Success! connect mongoose")})
    .catch(error => {throw error})

app.set("port", process.env.PORT || 3000)
app.set("view engine", 'ejs')
app.set("token", process.env.TOKEN || "eito")

app.use(express.static("public"))
app.use(layouts)
app.use(
    express.urlencoded({
        extended: false
    })
)

app.use("/", router)

const server = app.listen(app.get("port"), () => {
    console.log(`Start http://localhost:${app.get("port")}`)
})