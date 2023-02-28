import React from 'react'

export default function Profile({userData}) {
    let{first_name,last_name,age,email}=userData
  return (
<div className="d-flex min-vh-100">
    <div className="sign w-75 m-auto p-5">
    <div className='profile'>
      <h1 className='text-center pb-4'>Your Profile Info</h1>
        <h3>Name :<span> {first_name} {last_name}</span></h3>
        <h3>Age :<span> {age}</span></h3>
        <h3>Email :<span> {email}</span> </h3>
    </div>
    </div>
    </div>
  )
}
