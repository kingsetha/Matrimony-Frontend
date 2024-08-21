import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import EditProfile from './components/EditProfile'
import LogoutPage from './components/logout'
import Dashboard from './components/Dashboard'

function UserHome() {
  return (
    <div>
      <Nav/>
      <EditProfile/>
      {/* <Members/>
      
      <Team/>
      <Reviews/> */}
      {/* <Contact/> */}
      {/* <LogoutPage/> */}
      <Footer/>
    </div>
  )
}

export default UserHome
