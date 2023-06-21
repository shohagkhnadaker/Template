
const Data = require('../Data/UserData')
const UserModel=require('../Schema/User.module')

const Seddinset=async(req,res,next)=>{
    try {
        await UserModel.deleteMany({})

        const user=await UserModel.insertMany(Data.user)
        if (!user) {
    return resizeBy.status(401).send({
        success:false,
        message:"faild"
    })
        }
    res.status(200).send({
        success:true,
        message:'success',
        user:user
    })

        
    } catch (error) {
        next(error)
    }
}

module.exports={Seddinset}