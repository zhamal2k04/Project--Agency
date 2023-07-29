import React from 'react'
import loginImg from "../../../components/Images/login.jpg"
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from "react-icons/ai"
import { useEffect, useState } from 'react'

const LoginPage = () => {
    const [name, setName] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError, setNameError] = useState("Name Hole Not Filled !")
    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordError, setPasswordError] = useState("Password Hole Not Filled !")
    const [formValid, setFormValid] = useState(false)
    
    useEffect(()=>{
        if(nameError || passwordError) {
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [nameError, passwordError])

    const nameHandler = (e) =>{
        setName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 25) {
            setNameError("Length must be more than 3 or 25")
            if(!e.target.value){
                setNameError("Please Fill Name Hole!")
            }
        }else{
            setNameError('')
        }
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError("Legnth must be more than 3 and 8")
            if (!e.target.value) {
                setPasswordError("Please Fill Password Hole!")
            }
        }else{
           setPasswordError('')
        }
    }

    const blurHandler = (e) =>{
        switch(e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case "password":
                setPasswordDirty(true)
                break
        } 
    }


    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(`Login & Password: ${name}\nPassword: ${password}`);
        window.location.replace('#/home')
    }

  return (
    


    <div className='relative w-full h-screen bg-zinc-900/90 mb-20'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="loginImg" />


        <div className='flex justify-center items-center h-full'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                <h2 className='text-4xl font-bold text-indigo-900 text-center py-4'>Join Us Now !</h2>
                <div className='flex justify-between py-8'>
                    <p className='border shadow-lg hover:shadow-xl cursor-pointer px-6 py-2 relative flex items-center'><FcGoogle className='mr-2'/> Google</p>
                    <p className='border shadow-lg hover:shadow-xl cursor-pointer px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2'/> Facebook</p>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label className='font-medium text-lg tracking-widest'>Username:</label>
                    {(nameDirty && nameError) && <div className='font-bold text-red-700 '>{nameError}</div>}
                    <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} className='border relative bg-gray-100 p-2 font-mono italic mt-3' type="text" name='name' placeholder='e.g John Wick'/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label className='font-medium text-lg tracking-widest'>Password:</label>
                    {(passwordDirty && passwordError) && <div className='font-bold text-red-700 '>{passwordError}</div>}
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} className='border relative bg-gray-100 p-2 font-mono italic mt-3' type="password" name='password' placeholder='e.g 12345678'/>
                </div>
                <button onClick={submitHandler} disabled={!formValid} className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' type='submit'>Sign In</button>
                <p className='flex items-center mt-2 font-bold font-sans'><input className='mr-2' type="checkbox" />Remember Me</p>
                <p className='text-center mt-8'>Not a member? <span className='text-center underline font-mono text-blue-500 font-bold'>Sign up now!</span></p>
            </form>
        </div>
    </div>
  )
}

export default LoginPage;