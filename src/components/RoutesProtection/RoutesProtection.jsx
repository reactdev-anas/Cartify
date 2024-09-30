import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
function RoutesProtection() {
    const auth = JSON.parse(localStorage.getItem('LoggedIn'))
  return (
      auth? <Outlet/>:<Navigate to={'login'}/>
  )
}

export default RoutesProtection
