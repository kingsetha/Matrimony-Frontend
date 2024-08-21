import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Team from './components/Team'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Members from '../member/Member'
import LogoutPage from './components/logout'

function UserHome() {
  return (
    <div>
      <Nav/>
      <Hero/>
      {/* <Members/>
      
      <Team/>
      <Reviews/> */}
      {/* <LogoutPage/> */}
      <Footer/>
    </div>
  )
}

export default UserHome
