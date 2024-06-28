import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/5.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header id="home">
    <div className="container header_container">
      <h4>Hello I'm</h4>
      <h1 className='flicker'>Marko Đokić</h1>
      <h4 className='text-light'>Software Enginner</h4>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt=""/>
      </div>


     
    </div>
   </header>
  )
}

export default Header