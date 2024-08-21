import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Email from'./components/Email'
import LogoutPage from './components/logout'
import PremiumPlans from './components/Premium'

function UserHome() {
  return (
    <div>
      <Nav/>
      <PremiumPlans/>
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
