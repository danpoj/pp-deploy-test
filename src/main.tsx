import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from '@page/Login'
import ErrorPage from '@page/ErrorPage'
import Overview from '@page/Overview'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Container from 'Layout/Container'
import Service from '@page/Service'
import Member from '@page/Member'
import Banner from '@page/Banner'
import Event from '@page/Event'
import OfflineShop from '@page/OfflineShop'
import OnlineMall from '@page/OnlineMall'
import Admin from '@page/Admin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' errorElement={<ErrorPage />}>
        <Route index element={<Login />} />
        <Route path='/dashboard' element={<Container />}>
          <Route path='/dashboard/overview' element={<Overview />} />
          <Route path='/dashboard/service' element={<Service />} />
          <Route path='/dashboard/member' element={<Member />} />
          <Route path='/dashboard/banner' element={<Banner />} />
          <Route path='/dashboard/event' element={<Event />} />
          <Route path='/dashboard/offlineshop' element={<OfflineShop />} />
          <Route path='/dashboard/onlinemall' element={<OnlineMall />} />
          <Route path='/dashboard/admin' element={<Admin />} />
        </Route>
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
