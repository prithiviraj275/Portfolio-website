const {getAllFactory,createFactory,getByIdFactory,deleteByIdFactory,updateByIdFactory} = require('../utility/curdFactory') // importing factory
const userModel = require('../models/userModel'); // importing model


const getAllUserDatahandler = getAllFactory(userModel);
const createDatahandler = createFactory(userModel);
const getByIdDatahandler = getByIdFactory(userModel);
const deleteByIdDatahandler = deleteByIdFactory(userModel);
const updateByIdDatahandler = updateByIdFactory(userModel);


module.exports = { getAllUserDatahandler,createDatahandler,getByIdDatahandler,deleteByIdDatahandler,updateByIdDatahandler };