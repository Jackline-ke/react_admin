import React from 'react'
import './SideBar.scss'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CategoryIcon from '@mui/icons-material/Category';
import GradingIcon from '@mui/icons-material/Grading';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>Logo</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li className='menuList'>
                    <SpaceDashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li className='menuList'>
                    <PeopleAltIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li className='menuList'>
                    <CategoryIcon className='icon'/>
                    <span>Products</span>
                </li>
                <li className='menuList'>
                    <GradingIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li className='menuList'>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li className='menuList'>
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li className='menuList'>
                    <NotificationsIcon className='icon'/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICES</p>
                <li className='menuList'>
                    <SettingsSystemDaydreamIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li className='menuList'>
                    <PsychologyIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li className='menuList'>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li className='menuList'>
                    <PersonIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li className='menuList'>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default SideBar
