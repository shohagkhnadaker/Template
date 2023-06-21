const  mongoose = require("mongoose");
const createError=require('http-errors');


const findBYid=async(model,id,option={})=>{

try {
    const user=await model.findById({_id:id},option)
    if (!user) {
      throw createError(401,`${model.modelName} not found`)
    }
    return user;


} catch (error) {
    if (error instanceof mongoose.Error) {
       throw createError(400,`invalid ${model.modelName} id`);
        return;
    } 
    throw error
}

}


module.exports=findBYid