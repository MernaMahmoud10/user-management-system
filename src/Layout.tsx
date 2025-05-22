import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SidebarMenu from './components/Sidebar/SidebarMenu'

export default function Layout() {
    return (
        <div className='d-flex'>
            <div>
                <SidebarMenu />
            </div>
            <div className='w-100 vh-100 d-flex flex-column '>
                <Navbar/>
                <div className='outletDiv container-fluid'>
                    <Outlet />
                </div>
                
            </div>
        </div>


    )
}
