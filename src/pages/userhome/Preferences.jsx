import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Preference from './components/Preference'
import LogoutPage from './components/logout'
function UserHome() {
  return (
    <div>
      <Nav/>
      <Preference/>
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
