const express = require('express');
const userRouter = express.Router();
const {getAllUserDatahandler,createDatahandler,getByIdDatahandler,deleteByIdDatahandler,updateByIdDatahandler} = require("../controllers/userController")
const {checkInput} = require("../middlewares/middlewares");

// routes 
// users
userRouter.get("/", getAllUserDatahandler);// Get all users
userRouter.get("/:userId",getByIdDatahandler);// get user by id
//chaining
userRouter.post("/",checkInput,createDatahandler);// create user
userRouter.delete("/:userId",deleteByIdDatahandler) // delete user
userRouter.put("/:userId",updateByIdDatahandler);


module.exports = userRouter; 



