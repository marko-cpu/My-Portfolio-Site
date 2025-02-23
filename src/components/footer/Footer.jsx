import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
      
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#home'>{t("footer.links.home")}</a></li>
        <li><a href='#about'>{t("footer.links.about")}</a></li>
        <li><a href='#projects'>{t("footer.links.technologies")}</a></li>
        <li><a href='#softskills'>{t("footer.links.softSkills")}</a></li>
        <li><a href='#portfolio'>{t("footer.links.projects")}</a></li>
        <li><a href='#contact'>{t("footer.links.contact")}</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/marko-djokic13" target='_blank' rel="noreferrer" ><FaLinkedin /></a>
        <a href="https://github.com/marko-cpu" target='_blank' rel="noreferrer" ><FaGithub /></a>
      </div>

      <div className="footer_copyright">
        <small>{t("footer.copyright")}</small>
      </div>
    </footer>
  )
}

export default Footer