import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

export default function Register() {

  let navigate= useNavigate(); //hoke
  const [errorList, seterrorList]= useState([]); 
  const [user,setUser] =useState({
    first_name:'',
    last_name:'',
    age:0,
    email:'',
    password:''
  })
  const [error , setError]= useState('')
  const [isLoading, setisLoading] =useState(false)

async function sendRegisterDataToApi(){
  let {data}= await axios.post(`https://sticky-note-fe.vercel.app/signup`,user);
  if(data.message == 'success'){
    setisLoading(false)
    navigate('/login')

  }
  else{
    setisLoading(false)
    setError(data.message)
  }
}
function submitRegisterForm(e){
  e.preventDefault();
  setisLoading(true)
  let validation = validateRegisterForm();
  console.log(validation);
  if(validation.error){
    setisLoading(false)
    seterrorList(validation.error.details)

  }else{
    sendRegisterDataToApi();
  }

}

  function getUserData(e){
    let myUser={...user};
    myUser[e.target.name]= e.target.value;
    setUser(myUser);
    console.log(myUser);
  }

  function validateRegisterForm(){
    let scheme= Joi.object({
      first_name:Joi.string().min(3).max(10).required(),
      last_name:Joi.string().min(3).max(10).required(),
      age:Joi.number().min(12).max(80).required(),
      email:Joi.string().email({ tlds: { allow: ['com', 'net'] }}).required(),
      password:Joi.string().pattern(/^[a-z]{3,6}/)

    });
    return scheme.validate(user, {abortEarly:false});
  }
  return (
    <>
    <div className="d-flex min-vh-100">
    <div className="sign w-75 m-auto px-5 py-2">
    {errorList.map((err,index)=>{
      if(err.context.label ==='password'){
        return <div key={index} className="alert alert-danger my-2">password invalid ,should begain with 3 characters at least and numbers</div>
      }
      // else{
      //   return <div key={index} className="alert alert-danger my-2">{err.message}</div> 
      // }
    })}
    {error.length >0 ?<div className='alert alert-danger my-2'>{error}</div>:''}
    <form onSubmit={submitRegisterForm} className='my-3' action="">
      <label htmlFor="first_name">First Name :</label>
      <input onChange={getUserData} type="text" className='my-input my-2 form-control' name='first_name' id='first_name' />
      {errorList.filter((err)=> err.context.label == 'first_name')[0]?
      <div className="alert alert-danger my-2">{errorList.filter((err)=> err.context.label =='first_name')[0]?.message}</div>:''
      }
      <label htmlFor="last_name">Last Name :</label>
      <input onChange={getUserData} type="text" className='my-input my-2 form-control' name='last_name' id='last_name' />
      {errorList.filter((err)=> err.context.label == 'last_name')[0]?
      <div className="alert alert-danger my-2">{errorList.filter((err)=> err.context.label =='last_name')[0]?.message}</div>:''
      }
      <label htmlFor="age">Age :</label>
      <input onChange={getUserData} type="number" className='my-input my-2 form-control' name='age' id='age' />
      {errorList.filter((err)=> err.context.label == 'age')[0]?
      <div className="alert alert-danger my-2">{errorList.filter((err)=> err.context.label =='age')[0]?.message}</div>:''
      }
      <label htmlFor="email">Email :</label>
      <input onChange={getUserData} type="email" className='my-input my-2 form-control' name='email' id='email' />
      {errorList.filter((err)=> err.context.label == 'email')[0]?
      <div className="alert alert-danger my-2">{errorList.filter((err)=> err.context.label =='email')[0]?.message}</div>:''
      }
      <label htmlFor="password">Password :</label>
      <input onChange={getUserData} type="password" className='my-input my-2 form-control' name='password' id='password' />

      <button className='btn btn-sign'>
        {isLoading == true?<i class="fa-solid fa-spinner fa-spin"></i>:'register'}
      </button>
     </form>
     </div>
     </div>
    </>
  )
}
