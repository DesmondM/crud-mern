const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const CONNECTION_URL = "mongodb+srv://dbDes:poppie@cluster0.zklft.mongodb.net/crudDB?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useFindAndModify: false}, ()=> console.log("Connected to Mongoose DataBase good to go"));

/* app.use("/create", async (req, res)=>{
    const response = await new User({
        name:req.body.name,
        age: req.body.age,
        city: req.body.city,
        country: req.body.country,
    }).save();
    res.status(200).send("Data inserted");
}); */

const create = require("./router/create.js");
const get = require("./router/get.js");
const update = require("./router/update.js");

app.use("/create", create);
app.use("/get", get);
app.use("/update", update);

app.listen(5000, ()=> console.log("Running on port 5000"));