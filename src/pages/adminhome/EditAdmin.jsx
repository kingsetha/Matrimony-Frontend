import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer'
import Header from './components/header'
import EditAdmin from './components/EditAdmin'
// import Contact from './components/Contact'

// import Members from '../member/Member'

function AdminHome() {
  return (
    <div>
      <Nav/>
      <EditAdmin/>
      {/* <Member/> */}
      
      {/* <Team/> */}
      {/* <Reviews/> */}
      {/* <Header/> */}
      <Footer/>
    </div>
  )
}

export default AdminHome
