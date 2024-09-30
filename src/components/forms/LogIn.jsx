import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function LogIn() {
  const navigate = useNavigate();
   const [input, setInput]=useState({
    email:'',
    password:''
   })

  const handleChange = (e) => {
    const updatedInput = { ...input, [e.target.name]: e.target.value }
    setInput(updatedInput)
  }

  const handleLogin=()=>{
    const getDetails = JSON.parse(localStorage.getItem('details')) || []

    if(getDetails.length>0){
      const LoggedUser= getDetails.find((details)=> details.email===input.email && details.password===input.password)
      if (LoggedUser){
        localStorage.setItem('LoggedIn', true)
        localStorage.setItem('LoggedInuserEmail', input.email)
        localStorage.setItem('loggedInUserPassword', input.password)
   
        navigate('/home');
        alert("Logged In")
   
        // Clear input only after successful login
        setInput({ email: '', password: '' });
       } else {
         alert("Invalid credentials")
       }
    }
    else{
      alert('No User found, please signup first')
    }
    
  }

  


  return (
  
    <>
      <div className='bg-gray-200 w-screen h-screen m-0 p-0 flex justify-center items-center' >
     <div className='w-96 h-auto  border-gray-400 border px-3'>
     <h1 className='text-4xl font-semibold text-center my-3'>Log in</h1>
     <div className='flex flex-col '>
      <label className='ml-2 font-semibold'>Email</label>
      <input  className='m-2 p-2 rounded border border-gray-400' name='email' value={input.email} onChange={handleChange} type='email'/>
      <label className='ml-2 font-semibold'>Password</label>
      <input  className='m-2 p-2 rounded border border-gray-400' name='password' value={input.password} onChange={handleChange} type='password'/>
      <button className='bg-blue-300 ease-in-out duration-200 transition-colors hover:bg-blue-400 m-2 p-2 rounded font-semibold' onClick={handleLogin}>Login</button>
     </div>
     <div>
      <p className='text-center m-3 font-semibold text-black'>Don't have an account? <span className='text-blue-700'><Link to='/'>Signup</Link></span></p>
     </div>
     </div>
      </div>
    </>
  )
}

export default LogIn
