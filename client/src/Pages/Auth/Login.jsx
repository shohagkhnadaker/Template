import React from 'react'
import {  Form, Input, message } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { hideLoding, showLoding } from '../../Redux/future/aleartSlice'
const Login = () => {

const dispatch=useDispatch()

const navigate=useNavigate()

const handelRejister=async(values)=>{
try {
  dispatch(showLoding())
  const res=await axios.post("/user/login",values)
dispatch(hideLoding())
  if (res.data.success) {
localStorage.setItem("token",res.data.token)
localStorage.setItem("userId",res.data.userId)

  message.success("Login successfully...")
  navigate("/Home")
}else{
  message.error('useror password not match')
}

} catch (error) {
dispatch(hideLoding())

  message.error('something wrong')
  
}
}

  return (
    <div className='rejister'>
<div  className=' container text-center rejiterbox '>

      <h3 className='align-center p-3'>Login here</h3>
<Form onFinish={handelRejister} layout='vertical'>
<FormItem label="Name:" name='name'>
    <Input placeholder='write your Name' required/>
</FormItem>
<FormItem label="Password:" name='password'>
    <Input placeholder='write your password' required/>
</FormItem>
<button type='submit' className='btn btn-outline-primary dashbutton'>Login</button>



<div className='p-3'>alredy don`t have a account? <a href="/">Click here</a></div>
</Form>
</div>

    </div>
  )
}

export default Login
