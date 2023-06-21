const express=require('express')
const { Seddinset } = require('../controlars/Sedd.controlar')
const router=express.Router()


router.post('/user/seed',Seddinset)



module.exports=router