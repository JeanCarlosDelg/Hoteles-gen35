import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectecRouteCode = () => {
  
  if (localStorage.getItem('code')) {
    return <Outlet />
  } else {
    return <Navigate to='/' />
  }
}

export default ProtectecRouteCode