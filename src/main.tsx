import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from '@page/Login'
import ErrorPage from '@page/ErrorPage'
import Dashboard from '@page/Dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' errorElement={<ErrorPage />}>
        <Route index element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </>,
  ),
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>,
)
