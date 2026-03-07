import React from 'react'

export default function Form() {
  return (
    <div>
        <h1>Welcome Back</h1>
        <p>Sign in to your account</p>
        <div className="">
            <p>Role</p>
            <div className="">Student</div>
            <div className="">Mentor</div>
            <div className="">Admin</div>
        </div>
        <div className="">
            <p>University UID</p>
            <input type="number" value="" minLength={6} maxLength={6} />    
        </div>
        <div className="">
            <p>Password</p>
            <input type="number" name="" id="" required/>
        </div>
        <button>Sign In</button>
        <p>Use your role based credentials. Contact Admin if you need help.</p>
    </div>
  )
}
