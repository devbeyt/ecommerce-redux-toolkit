import React from 'react'
import Routers from '../routers/Routers'
import Navigation from './../components/nav/Navigation'

function Layouts() {
  return (
    <div className='layouts'>
      <Navigation/>
       <div className="container">
       <Routers/>
       </div>
    </div>
  )
}

export default Layouts