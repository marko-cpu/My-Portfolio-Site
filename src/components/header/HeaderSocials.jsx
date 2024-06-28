import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
   <div className="header_socials">
    <a href="https://www.linkedin.com/in/marko-djokic13" rel='noreferrer' target='_blank'><FaLinkedin /></a>
    <a href="https://github.com/marko-cpu" rel='noreferrer' target='_blank'><FaGithub /></a>
   </div>
  )
}

export default HeaderSocials