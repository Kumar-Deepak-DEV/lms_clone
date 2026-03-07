import React from 'react'

export default function Login() {
    return (
        <div className='h-screen w-full bg-black text-white py-40'>
            <div className="m-auto border border-white/20  w-120 p-5 rounded-2xl text-center">
                <h1 className='text-4xl font-semibold '>Welcome Back</h1>
                <p className='text-white/60 font-light mb-5'>Sign in to your account</p>
                <div className="text-left mb-5">
                    <p className='font-semibold'>Role</p>
                    <div className="space-x-4">
                        <button className="border border-white/20 py-1.5 px-3 rounded-md">Student</button>
                        <button className="border border-white/20 py-1.5 px-3 rounded-md">Mentor</button>
                        <button className="border border-white/20 py-1.5 px-3 rounded-md">Admin</button>
                    </div>
                </div>
                <div className="text-left">
                    <div className="">
                        <p className='font-semibold'>University UID</p>
                        <input type="text" className='border border-white/20 p-1.5 w-full rounded-md' value="" minLength={6} maxLength={6} placeholder='Enter Your University UID' />
                    </div>
                    <div className="my-5">
                        <p className='font-semibold'>Password</p>
                        <input type="text" className='border border-white/20 p-1.5 w-full rounded-md'  name="" id="" required placeholder='********' />
                    </div>
                </div>
                <button  className='block bg-white rounded-md w-full m-auto mb-5 p-1 text-center text-black font-semibold cursor-pointer'>Sign In</button>
                <p className='text-white/60 font-semibold mb-5 text-xs'>Use your role based credentials. Contact Admin if you need help.</p>
            </div>
        </div>
    )
}
