import  { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SidebarMenu from './components/Sidebar/SidebarMenu'
import { AuthContext } from './contexts/AuthContext'
import type { UserDataProps } from './helpers/interfaces'

export default function Layout() {
    const { userData } = useContext(AuthContext) as UserDataProps

    return (
        <div className='d-flex'>
            <div>
                <SidebarMenu />
            </div>
            <div className='w-100 vh-100 d-flex flex-column '>
                {userData && <Navbar />}
                <div className="outletDiv">
                    <Outlet />
                </div>

            </div>
        </div>


    )
}
