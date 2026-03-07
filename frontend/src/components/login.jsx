import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className='h-screen w-screen pt-40 bg-black'>
            <h1 className="text-8xl font-bold m-auto w-80 text-white">Coding</h1>
            <h1 className="text-8xl font-bold text-white m-auto w-45">Gita</h1>
            <p className='text-white w-110 m-auto mt-5 mb-5'>Smart, simple, and reliable attendance for modern classrooms.</p>
            <div className='block not-first:bg-white rounded-md w-20 m-auto mb-5 p-1 text-center font-semibold '>Login
                {/* <Link to="/form">Login</Link> */}
            </div>
            <div className='flex m-auto justify-center  gap-4 p-3'> 
                <div className='text-white bg-black rounded-xl border-2 border-white p-4 w-100'>
                    <h3 className=''>Role-based dashboards</h3>
                    <p>Admin, Mentor, and Student experiences tailored to their needs.</p>
                </div>
                <div className='text-white bg-black rounded-2xl border-2 border-white p-4 w-100'>
                    <h3 className=''>Fast and secure access</h3>
                    <p>Encrypted sessions and streamlined navigation.</p>
                </div>
            </div>
        </div>
    )
}
