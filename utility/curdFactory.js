const logger = require('../middlewares/logEvents')
const errorhandle = require('../middlewares/errorHandler');

const createFactory = (ElementModel) => {
    return async function (req, res) {
        try {
            const elementDetails = req.body;
            // adding element to the database 
            const element = await ElementModel.create(elementDetails);

            res.status(201).json({
                status: "successfull",
                message: `added  the element `,
                element: element
            })
            logger('elements added to the database successfully')
        } catch (err) {
            errorhandle(err.message)
            res.status(404).json({
                status: "failure",
                message: err.message
            })
           
        }

    }
}

const getAllFactory = (ElementModel) =>{
    return async function(req,res){
        try{
            console.log("inside get method");
            const elementDataStore = await ElementModel.find()
            console.log("elementDataStore: " + elementDataStore);
            if (elementDataStore.length == 0){
                throw new Error("No element data store found")
            }else{
            res.status(200).json({
                status:'success',
                message:elementDataStore
            })
            }
            logger("elements found in the database successfully")
        }catch(err){
            errorhandle(err.message)
            res.status(404).json({
                status:"Failure",
                message: err.message
            });
            
        }
    }
}

const getByIdFactory = (ElementModel) => {
    
    return async function (req, res) {
        try {
            const idu = req.params.userId;
            // console.log("inside getById method");
            // console.log("elementId: " + typeof idu);
            // const elementDetails = await ElementModel.find({id:idu});
            const elementDetails = await ElementModel.findById(idu);            

            if (elementDetails == "no element found") {
                throw new Error(`element with ${elementId} not found`);
            } else {
                res.status(200).json({
                    status: "successfull",
                    message: elementDetails
                })
                logger("elements retrieved successfully")
            }
        } catch (err) {
            errorhandle(err.message)
            res.status(404).json({
                status: "failure",
                message: err.message
            })
           
        }
    }
}

const deleteByIdFactory = (ElementModel) => {
    return async function (req, res) {
        let  elementId  = req.params.userId;
        console.log("elementId: " + elementId);
        try {
            let element = await ElementModel.deleteOne({_id:elementId});
            res.status(200).json({
                status: "successfull element deleted",
                message: element
            });
            logger("element deleted successfully");
        } catch (err) {
            // console.error(err);
            errorhandle(err.message)
            res.status(404).json({
                status: "failure",
                message: err.message

            });
            
        }
    }
}


const updateByIdFactory = (ElementModel) =>{
    return async function (req, res) {
        try{
            const id = req.params.userId;
            const updateElement = req.body;
            console.log(id,updateElement)
            const elementdata = await ElementModel.updateOne(
                { _id: id },{$set: updateElement} // Filter to find the document to update                    
                     // Dynamic update object                    
                    )
            res.status(201).json({
                status:"Success",
                message:`Data updated ${elementdata}`
            })
            logger("data updated successfully")
        }
        catch(err){
            errorhandle(err.message)
            res.status(404).json({status: "failure", message: err.message});
           

        }
    }
}




module.exports = {getAllFactory,createFactory,getByIdFactory,deleteByIdFactory,updateByIdFactory}