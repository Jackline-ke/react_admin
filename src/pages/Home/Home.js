import React from 'react'
import './Home.scss'
import SideBar from '../../components/SideBar/SideBar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/Widget/Widget'

const Home = () => {
  return (
    <div className='home'>
      <SideBar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
      </div>
    </div>
  )
}

export default Home
