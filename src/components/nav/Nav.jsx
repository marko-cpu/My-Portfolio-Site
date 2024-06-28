import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5"
import { FaRegUser } from "react-icons/fa"
import { BiBook } from "react-icons/bi"
import { BiMessageSquareDetail } from "react-icons/bi"
import { GrProjects } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import { useState } from 'react'



const Nav = () => {

  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')}
      className={activeNav === '#home' ? 'active' : ''} ><IoHomeOutline /></a>
      <a href="#about" onClick={() => setActiveNav('#about')}
       className={activeNav === '#about' ? 'active' : ''}  ><FaRegUser /></a>
      <a href="#projects" onClick={() => setActiveNav('#experience')}
       className={activeNav === '#experience' ? 'active' : ''} ><BiBook /></a>
      <a href="#softskills" onClick={() => setActiveNav('#services')}
       className={activeNav === '#services' ? 'active' : ''} ><AiOutlineTeam /></a>
       <a href="#portfolio" onClick={() => setActiveNav('#contact')}
       className={activeNav === '#contact' ? 'active' : ''} ><GrProjects /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}
       className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail /></a>


    </nav>
  )
}

export default Nav