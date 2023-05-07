import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Preload from '../preload/Preload'

const Layout = ({children}) => {
  return (
    <>
    <Preload/>
    <Header/>
    <main>
        {children}
    </main>

    <Footer/>
    </>
  )
}

export default Layout