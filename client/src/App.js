
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import Home from './Pages/Home';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import { useSelector } from 'react-redux';
import Spenner from './components/Spenner';


function App() {
  const {loding}=useSelector(state=>state.alerts)
  return (

<BrowserRouter>
{loding ?<Spenner/>:<Routes>

<Route path='/' element={<Register/>}/>
<Route path='/Home' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>

</Routes>

}


</BrowserRouter>
  );
}


export default App;

{/* <Route path='/notification' element={<Notifivation/>}/> */}
{/* <Route path='/profile/:id' element={<Profile/>}/> */}

{/* <Route path='/all-doctor' element={<AllDoctors/>}/> */}
{/* <Route path='/all-users' element={<AllUser/>}/> */}
{/* <Route path='/apply-doctor' element={<ApplyDoctor/>}/> */}

