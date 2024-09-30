import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import SignUp from './components/forms/SignUp'
import LogIn from './components/forms/LogIn'
import './App.css'
import RoutesProtection from './components/RoutesProtection/RoutesProtection'


function App() {
  return (
	<>
	<BrowserRouter>
	<Routes>
	<Route path='/' element={<SignUp/>}/>
	<Route path='/' element={<RoutesProtection/>}>
	<Route path='/home' element={<HomePage/>}/>
	</Route>
	
	<Route path='/login' element={<LogIn/>}/>
	</Routes>
	</BrowserRouter>
	  
	</>
  )
}

export default App
