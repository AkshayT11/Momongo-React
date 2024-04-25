import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <div className="overflow-x-hidden">
        <Header/>
        <div>{children} </div>
        <Footer/>
    </div>
  )
}

export default Layout