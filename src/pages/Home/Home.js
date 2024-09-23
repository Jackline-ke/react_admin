import React from 'react'
import './Home.scss'
import SideBar from '../../components/SideBar/SideBar'

const Home = () => {
  return (
    <div className='home'>
      <SideBar/>
      <div className="homeContainer">Container</div>
    </div>
  )
}

export default Home
