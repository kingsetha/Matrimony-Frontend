import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Search from './components/Search'
import SingleProfileManagement from './components/SingleProfile'
import LogoutPage from './components/logout'

function UserHome() {
  return (
    <div>
      <Nav/>
      <SingleProfileManagement/>
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
