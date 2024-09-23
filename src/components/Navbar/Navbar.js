import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search"> 
          <SearchIcon className='icon'/> 
          <input type='text' placeholder='Search...'/>
        </div>
        <div className="items">
          <div className="item">
            <DarkModeIcon className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className='icon'/>
            <div className="counter">12</div>
          </div>
          <div className="item">
            <ListIcon className='icon'/>
          </div>
          <div className="item">
            <img 
              src='https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
              className='avatar'
            />
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Navbar
