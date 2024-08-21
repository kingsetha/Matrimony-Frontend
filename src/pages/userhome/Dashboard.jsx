import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Dashboard from './components/Dashboard'
import LogoutPage from './components/logout'
function UserHome() {
  return (
    <div>
      <Nav/>
      <Dashboard/>
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
