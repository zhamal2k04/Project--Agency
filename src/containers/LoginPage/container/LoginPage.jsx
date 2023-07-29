import React from 'react'
import loginImg from "../../../components/Images/login.jpg"
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from "react-icons/ai"

const LoginPage = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90 mb-20'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="loginImg" />


        <div className='flex justify-center items-center h-full'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                <h2 className='text-4xl font-bold text-center py-4'>BRAND.</h2>
                <div className='flex justify-between py-8'>
                    <p className='border shadow-lg hover:shadow-xl cursor-pointer px-6 py-2 relative flex items-center'><FcGoogle className='mr-2'/> Google</p>
                    <p className='border shadow-lg hover:shadow-xl cursor-pointer px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2'/> Facebook</p>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label>Username:</label>
                    <input className='border relative bg-gray-100 p-2' type="text" />
                </div>
                <div className='flex flex-col mb-4 '>
                    <label>Password:</label>
                    <input className='border relative bg-gray-100 p-2' type="password" />
                </div>
                <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
                <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
                <p className='text-center mt-8'>Not a member? <span className='text-center underline font-mono text-blue-500 font-bold'>Sign up now!</span></p>
            </form>
        </div>
    </div>
  )
}

export default LoginPage;