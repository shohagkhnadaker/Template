const express=require('express')
const router=express.Router()
const multer=require('multer')
const upload = multer({ dest: './uploads/' })


const { getUserPagination, singleUserBYID, deleteBYID, RegisterProcess, loginUser } = require('../controlars/User.controlar')



// GET User And Pagination
router.get("/user/get-User/pagination",getUserPagination)
// GET Single User BY ID
router.get("/user/get-Single-user/:id",singleUserBYID)
//Delete user BY ID
router.get("/user/delete-user/:id",deleteBYID)
//REgister process
router.post("/user/Register-user",upload.single('image'),RegisterProcess)
//Login
router.post('/user/login', loginUser)


module.exports=router