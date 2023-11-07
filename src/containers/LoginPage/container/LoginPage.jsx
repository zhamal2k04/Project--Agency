import React from 'react'
import loginImg from "../../../components/Images/login.jpg"
import { useEffect, useState } from 'react'
import SignIn from '../GoogleSignIn/SignIn'
import SigninIn from '../FacebookSignIn/Signin'


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




  return (
    


    <div className='relative w-full h-screen bg-zinc-900/90 mb-20'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="loginImg" />


        <div className='flex justify-center items-center h-full'>
            <form action='/api' method='post' className='max-w-[400px] w-full mx-auto bg-white p-8'>
                <div className='flex flex-col justify-between py-8'>
                <h2 className='text-3xl font-bold text-indigo-900 text-center py-4'>Join Us Now !</h2>
                   <div className='flex flex-row items-center justify-between py-8'>
                    <SignIn/>
                    <SigninIn/>
                   </div>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label className='font-medium text-lg tracking-widest'>Username:</label>
                    {(nameDirty && nameError) && <div className='font-bold text-red-700 '>{nameError}</div>}
                    <input name="email" type="email" onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} className='border relative bg-gray-100 p-2 font-mono italic mt-3' placeholder='e.g John Wick'/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label className='font-medium text-lg tracking-widest'>Password:</label>
                    {(passwordDirty && passwordError) && <div className='font-bold text-red-700 '>{passwordError}</div>}
                    <input name='password' type='password' onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} className='border relative bg-gray-100 p-2 font-mono italic mt-3' placeholder='e.g 12345678'/>
                </div>
                <button disabled={!formValid} className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' type='submit'>Sign Up</button>
                <p className='flex items-center mt-2 font-bold font-sans'><input className='mr-2' type="checkbox" />Remember Me</p>
                <p className='text-center mt-8'>Not a member? <span className='text-center underline font-mono text-blue-500 font-bold'>Register now!</span></p>
            </form>
        </div>
    </div>
  )
}

export default LoginPage;