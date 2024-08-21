import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Search from './components/Search'

import Dashboard from './components/Dashboard'
import LogoutPage from './components/logout'
function UserHome() {
  return (
    <div>
      <Nav/>
      <Search/>
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
