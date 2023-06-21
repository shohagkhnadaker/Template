import React, { useEffect } from 'react'
import axios from 'axios'
import { getUser } from '../Redux/future/user.Slice'
import { useDispatch, useSelector } from 'react-redux'
// import { Badge } from 'antd'
import { useNavigate } from 'react-router'

const Layaout = ({children}) => {
  

  const {user}=useSelector(state=>state.users)
const dispatch=useDispatch()
const navigate=useNavigate()


const userminu=[
{title:'Home',
id:0,
path:"/Home",
},


]

const Adminminu=[
  {title:'Home',
  id:0,
  path:"/Home",
  },
  {title:'Doctors',
  id:1,
  path:"/all-doctor",
  },
  {title:'Users',
  id:2,
  path:"/all-users",
  },

  ]
  
const Doctorminu=[
  {title:'Home',
  id:0,
  path:"/Home",
  },
  {title:'Apoinment',
  id:1,
  path:`/doctor/apoinment/${user?._id}`,
  },
  {
    title:"Profile",
    id:3,
    path:`/profile/${user?._id}`
  }
  
  ]
  


useEffect(()=>{

  const getProfilUser=async()=>{
    try {
  
      const id=localStorage.getItem("userId") 
      const res=await axios.get(`/user/get-Single-user/${id}`)
      if (res.data.success) {
      dispatch(getUser(res.data.data))
      }
      
      } catch (error) {
        
  }

}

getProfilUser()


},[])

const handelLogout=()=>{
  localStorage.clear("token")
  localStorage.clear("userId")
  navigate('/login')
  
}  
const mainminu=user?.isAdmin? Adminminu:user?.isDoctor?Doctorminu: userminu


  return (
    <div>
      <div className='navbaraaa'>
        <div>
        <nav className="navbar navbar-expand-lg bgnav">

<div className="container-fluid container">
  <div className='ulnav'>
<a className="navbar-brand " href="/">App Name</a>

  </div>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 ">
 
    {mainminu.map((items)=>{return <li className="nav-item  minuli" key={items.id} >
    <a className="nav-link active" aria-current="page" href={items.path}>{items.title}</a>
  </li>
})}
<li className='nav-item  minuli'>
<a className="nav-link " href='/login' onClick={handelLogout}>Log-out</a>

</li>
<li>


</li>
  </ul> 
  {/* <div className='ball userbell profilebar belll justify-content-start'>
<Badge  count={user?.notification.length}>
  <a href="/notification">
<i className="fa-solid fa-bell ball"></i>

  </a>
  </Badge>
  
  </div>
   */}
  <div className='profilebar ball userbell'>
   <i className="fa-solid fa-user"></i> {user?user.name:'user'}
  </div>

  <div className='liimage'><img src={`http://localhost:8080/${user?.image}`} alt="" /></div>



  </div>
</div>

</nav>

        </div>   
      </div>
<div>

<div className='pagebody container'>{children}</div>
</div>

<div className='footer'>

<div className='container footercontent'> <p className='text-center'>copy right by @ TA Shohag Khandaker</p></div>

</div>

    </div>)
}
export default Layaout
