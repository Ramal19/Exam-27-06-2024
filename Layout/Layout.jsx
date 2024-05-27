import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import { Header } from '../Home/Header'

export const Layout = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
