import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function SignUp() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const updatedInput = { ...input, [e.target.name]: e.target.value }
    setInput(updatedInput)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name || !input.email || !input.password) {
      alert(" Inputs feilds are empty")
    } else {
      const existingDetails = JSON.parse(localStorage.getItem('details')) || [];

      // Create new detail object
      const newDetail = { name: input.name, email: input.email, password: input.password };

      // Update details array
      const updatedData = [...existingDetails, newDetail];

      // Save updated data to local storage
      localStorage.setItem('details', JSON.stringify(updatedData));

      alert(" you've successfully registered")
      navigate('/login')
      setInput('')
    }
  }
  return (
    <>
      <div className='bg-gray-200 w-screen h-screen m-0 p-0 flex justify-center items-center' >
        <div className='w-96 h-auto  border-gray-400 border px-3'>
          <h1 className='text-4xl font-semibold text-center my-3'>sign up</h1>
          <div className='flex flex-col '>
            <label className='ml-2 font-semibold'>Your name</label>
            <input className='m-2 p-2 rounded border border-gray-400' name='name' value={input.name} onChange={handleChange} type='text' />
            <label className='ml-2 font-semibold'>Email</label>
            <input className='m-2 p-2 rounded border border-gray-400' name='email' value={input.email} onChange={handleChange} type='email' />
            <label className='ml-2 font-semibold'>Password</label>
            <input className='m-2 p-2 rounded border border-gray-400' name='password' value={input.password} onChange={handleChange} type='password' />
            <button className='bg-blue-300 ease-in-out duration-200 transition-colors hover:bg-blue-400 m-2 p-2 rounded font-semibold' onClick={handleSubmit}>Submit</button>
          </div>
          <div>
            <p className='text-center m-3 font-semibold text-black'>Already have an account? <span className='text-blue-700'><Link to='/login'>Login</Link></span></p>
          </div>
        </div>
      </div>
    </>
  )

}

export default SignUp
