import './App.css'
import Layout from './Layout'
import AuthLayout from './AuthLayout'
import Login from './components/Login/Login'
import AddUser from './components/AddUser/AddUser'
import Users from './components/Users/Users'
import Profile from './components/Profile/Profile';
import ProtectedRouting from './components/ProtectedRouting/ProtectedRouting'
import About from './components/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {
  

 

  const routes = createBrowserRouter([
    {
      path: "", element: <AuthLayout />, children: [
        { index: true, element: <Login /> }]
    },
    {
      path: "/dashboard", element: <Layout />, children: [
        { path: "/dashboard/about", element: <ProtectedRouting><About /> </ProtectedRouting>},
        { path: "/dashboard/users", element:<ProtectedRouting> <Users /> </ProtectedRouting> },
        { path: "/dashboard/addUser", element: <ProtectedRouting><AddUser /> </ProtectedRouting>},
        { path: "/dashboard/addUser/:id", element: <ProtectedRouting><AddUser /> </ProtectedRouting>},
        { path: "/dashboard/profile", element: <ProtectedRouting><Profile /> </ProtectedRouting> },
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
