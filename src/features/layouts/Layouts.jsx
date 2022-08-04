import React from 'react'
import Routers from '../routers/Routers'
import Navigation from './../components/nav/Navigation'
import Category from './../components/category/Category'
import Footer from './../components/footer/Footer'

function Layouts() {
  return (
    <div className='layouts'>
      <Navigation/>
      <div className='main container'>
        <Category/>
        <Routers/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layouts