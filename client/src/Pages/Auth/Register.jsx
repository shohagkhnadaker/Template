import React, { useState } from 'react'
import {  Form, Input, message } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { hideLoding, showLoding } from '../../Redux/future/aleartSlice'
const Register = () => {
const navigate=useNavigate()
const dispatch=useDispatch()
const [image,setImage]=useState(null)

const handelRejister=async(values)=>{
  dispatch(showLoding())
try {

  const formData= new FormData()
  formData.append('name',values.name)
  formData.append('password',values.password)
  formData.append('image',image)



  const res=await axios.post("/user/Register-user",formData)

dispatch(hideLoding())
  if (res.data.success) {
  message.success("Rejister successfully...")
  navigate("/login")
}else{
  message.error('rejister not success')
}

} catch (error) {
  message.error('something wrong')
  dispatch(hideLoding())
}
}

  return (
    <div className='rejister'>
<div  className=' container text-center rejiterbox'>

      <h3 className='align-center p-3'>Registerpage</h3>
<Form onFinish={handelRejister} layout='vertical'>

<FormItem label="Name:" name='name'>
    <Input placeholder='write your Name' required/>
</FormItem>
<FormItem label="Password:" name='password'>
    <Input placeholder='write your password' required/>
</FormItem>
<FormItem label=" Choose profile picture:">
    <Input type='file' onChange={(e)=>setImage(e.target.files[0])} />
</FormItem>
<div>
  {/* <input type="file" /> */}

<button type='submit' className='btn btn-outline-primary dashbutton'>Register</button>

</div>


<div className='p-3'>alredy have a account? <a href="/login">Click here</a></div>
</Form>


</div>

    </div>
  )
}

export default Register
