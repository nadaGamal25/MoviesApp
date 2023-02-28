import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer  from '../Footer/Footer'

export default function Layout({userData,setuserData}) {

  let navigate= useNavigate();
  function logout(){
    localStorage.removeItem('userToken');
    setuserData(null);
    navigate('/login')
  }
  return (<>
  <Navbar userData={userData} logout={logout}/>
  <div className="container maxWidth p-0">
  <Outlet></Outlet>
  </div>
  <Footer/>
  </>)
}
