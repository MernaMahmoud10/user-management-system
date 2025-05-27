import { useContext, useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegUser, FaUsers } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { LuLogOut } from 'react-icons/lu';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { AuthContext } from '../../contexts/AuthContext';
import type { IUserData } from '../../helpers/interfaces';
import personalImg from "../../assets/personalImg.png"


export default function SidebarMenu() {
    const [SidebarCollapsed, setSidebarCollapsed] = useState(false);
    const { userData, setUserData } = useContext(AuthContext) as IUserData
    const navigate = useNavigate()
    const toggleSidebar = () => {
        setSidebarCollapsed(!SidebarCollapsed);
    }

    const Logout = () => {
        localStorage?.removeItem("token")
        setUserData(null)
        navigate("/")
    }

    return (
        <>
            <div className='sidebarContainer vh-100'>
                <Sidebar collapsed={SidebarCollapsed} className='h-100'>
                    <div className='d-flex justify-content-between align-items-center ms-4 mt-3 mb-5'>
                        {SidebarCollapsed ? "" :
                            <h1 className='SidebarHeader pt-1 ps-3 mb-0'>UMS</h1>

                        }
                        <div className=' me-3 cursor-pointer' onClick={toggleSidebar}>
                            {SidebarCollapsed ? <MdKeyboardDoubleArrowRight size={25} /> : <MdKeyboardDoubleArrowLeft size={25} />}

                        </div>
                    </div>
                    <div className='infoDiv d-flex flex-column align-items-center mb-5 '>
                        <img className='w-50 rounded-circle' src={personalImg} alt='User management system profile image' />

                        {SidebarCollapsed ? "" :
                            <>
                                <h3 className='fs-6 pt-3 pb-2 mb-0 fw-bold'>{userData?.username}</h3>
                                <small className='text-mustard'>Admin</small>

                            </>
                        }

                    </div>
                    <Menu >

                        <MenuItem icon={<FaUsers size={20} />} component={<NavLink to="/dashboard/users" />}> Users </MenuItem>
                        <MenuItem icon={<FaRegUser size={20} />} component={<NavLink to="/dashboard/addUser" />}> Add User </MenuItem>
                        <MenuItem icon={<AiOutlineHome size={20} />} component={<NavLink to="/dashboard/about" />}> About </MenuItem>
                        <MenuItem icon={<ImProfile size={20} />} component={<NavLink to="/dashboard/profile" />}> Profile </MenuItem>
                        <MenuItem className='position-absolute logoutDiv' icon={<LuLogOut color='red' size={20} />} onClick={Logout}> Logout </MenuItem>

                    </Menu>
                </Sidebar>
            </div>

        </>
    )
}
