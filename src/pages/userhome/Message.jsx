import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Message from'./components/Message'

function MessageHome() {
  return (
    <div>
      <Nav/>
      <Message/>
      {/* <Members/>
      
      <Team/>
      <Reviews/> */}
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default MessageHome
