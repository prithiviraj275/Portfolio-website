const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const usermodel = require('./models/userModel');
const {logger} = require('./middlewares/logEvents');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');

const app = express();

app.use(logger);
// including env variables
dotenv.config();
const PORT = process.env.PORT || 3500;
const dbURL = 'mongodb://127.0.0.1:27017/Portfolio?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0'

// establish database connection
mongoose.connect(dbURL)
    .then( (connection) =>{
        console.log("connection established to database");
    }).catch(err => console.log(err));


// routing 

const userRouter = require("./routes/userRouter")


app.use(express.json());
app.use("/user",userRouter);


// console.log("value",usermodel.find());


// handler functions
// 404 route not found

app.use(function cb(req, res, next) {
    console.log("404 route not found")
    res.status(404).json({
        status:"failure",
        message:"route not found",
    });
})



// errorhandler catch the error and upadte in logs
app.use(errorHandler)
//server -> run on a port
app.listen(PORT, () =>{ console.log(`server running on port : ${PORT}`)});