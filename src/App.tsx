import React from 'react'
import './App.css'
import Layout from './Layout'
import Login from './components/Login/Login'
import AddUser from './components/AddUser/AddUser'
import Users from './components/Users/Users'
import Profile from './components/Profile/Profile';
import About from './components/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {

  const routes = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Login /> },
        { path: "about", element: <About /> },
        { path: "users", element: <Users /> },
        { path: "addUser", element: <AddUser /> },
        { path: "profile", element: <Profile /> },
      ]
    }
  ])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
