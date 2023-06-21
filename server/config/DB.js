require('dotenv').config()
const mongoose=require ('mongoose')
const colors=require('colors')

const Databage= async()=>{
    try {
       await mongoose.connect(process.env.MONGODB)
        console.log(colors.bgWhite('Database id Connected..!'));
        mongoose.connection.on('error',(error)=>{
console.error(error)
        })
    } catch (error) {
console.error(error)
        
    }
}

module.exports=Databage