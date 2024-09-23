import React from 'react'
import './Home.scss'
import SideBar from '../../components/SideBar/SideBar'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <SideBar/>
      <div className="homeContainer">
        <Navbar/>
          Container
      </div>
    </div>
  )
}

export default Home
