import React from 'react'
import {Navigate}  from 'react-router-dom'

export default function ProtectedRoute({userData,children}) {
  // && (localStorage.getItem('userToken') == null)
  if(userData == null){
    console.log('yes')
    return <Navigate to='/login'/>
 }
  else{
    console.log('no')
    return children;
  }

}
