import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Movies from './components/Movies/Movies'
import TV from './components/TV/TV'
import People from './components/People/People'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import './index.css'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import Profile from './components/Profile/Profile';
import { Offline, Online } from "react-detect-offline";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ItemDetails from './components/ItemDetails/ItemDetails';
import MediaContextProvider from './Context/MediaContext';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import About from './components/About/About';


function App() {

  let {userData, setuserData}= useContext(AuthContext);

  useEffect(()=>{
    if(localStorage.getItem('userToken') !== null){
      saveUserData();
    }
  },[])


  function saveUserData(){
    let encodedToken =localStorage.getItem('userToken')
    let decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken);
    setuserData(decodedToken)
  }

  let routers =createBrowserRouter([
    {path:'/', element:<Layout setuserData={setuserData} userData={userData}/>,children:[
      {index: true ,element:<ProtectedRoute userData={userData}> <Home/></ProtectedRoute>},
      {path:'movies',element:<ProtectedRoute userData={userData}><Movies/></ProtectedRoute>},
      {path:'tv',element:<ProtectedRoute userData={userData}><TV/></ProtectedRoute> },
      {path:'people',element:<ProtectedRoute userData={userData}><People/></ProtectedRoute>},
      {path:'about',element:<ProtectedRoute userData={userData}><About/></ProtectedRoute>},
      {path:'itemdetails/:id/:media_type',element:<ProtectedRoute userData={userData}><ItemDetails/></ProtectedRoute>},
      {path:'profile',element:<ProtectedRoute userData={userData}><Profile userData={userData}/></ProtectedRoute>},
      {path:'login',element:<Login saveUserData={saveUserData}/>},
      {path:'register' ,element:<Register/>}
    ]}  
  ])

  return (<>
  <div>
    <Offline><div className="offline">you are offline</div></Offline>
  </div>
  <RouterProvider router={routers} basename="/MoviesApp"/>
  
</> 
  );
}

export default App;
