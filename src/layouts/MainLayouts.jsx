import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'

function MainLayouts() {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default MainLayouts