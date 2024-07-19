import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

function MainLayouts() {
  return (
    <>
    <NavBar />
    <Outlet />
    <ToastContainer/>
    </>
  )
}

export default MainLayouts