const {logEvents} = require('./logEvents');

const errorHandler = (err,req,res,next) => {
    logEvents(`${err.name}: ${err.message}`,'errLog.txt');
    // console.error(err.stack);
    // res.status(500).json({
    //     status:'Failure',
    //     message:err.message});
    // next();
}

module.exports = errorHandler