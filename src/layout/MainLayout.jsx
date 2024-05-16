import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function MainLayout() {
  return (
    <>
    <Navbar/>
<main>
    <Outlet/>
</main>
<Hero/>
    </>
  )
}

export default MainLayout