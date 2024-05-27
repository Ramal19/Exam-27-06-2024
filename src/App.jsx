import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Layout } from '../Layout/Layout'
import Add from '../Pages/Add'
import { Details } from '../Pages/Details'
import { Favorites } from '../Pages/Favorites'
import Edit from '../Pages/Edit'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Admin } from '../Pages/Admin'

export const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
/>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route index element={<Home />} />
          <Route element={<Add />} path='/add' />
          <Route element={<Details />} path='/details/:id' />
          <Route element={<Favorites />} path='/favorites' />
          <Route element={<Edit />} path='/edit/:id' />
          <Route element={<Admin/>} path='/admin' />
        </Route>
      </Routes>
    </>
  )
}
