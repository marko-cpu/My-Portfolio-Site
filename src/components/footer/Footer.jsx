import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
   <footer>
   

    <ul className='permalinks'>
      <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About</a></li>

      <li><a href='#projects'>Technologies</a></li>

      <li><a href='#softskills'>Soft Skills</a></li>

      <li><a href='#portfolio'>Projects</a></li>

     {/* <li><a href='#testimonials'>testimonials</a></li> */}

      <li><a href='#contact'>Contact</a></li>

    </ul>

    <div className="footer_socials">
      <a href="https://www.linkedin.com/in/marko-djokic13" target='_blank' rel="noreferrer" ><FaLinkedin /></a>
      <a href="https://github.com/marko-cpu" target='_blank' rel="noreferrer" ><FaGithub /></a>

    </div>

    <div className="footer_copyright">
      <small>&copy; Marko Đokić. All right reserved</small>
    </div>

   </footer>
  )
}

export default Footer