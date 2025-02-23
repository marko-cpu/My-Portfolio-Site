import React, { useState, useEffect, useRef } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/5.png'
import HeaderSocials from './HeaderSocials'
import { FiChevronDown, FiGlobe } from 'react-icons/fi'
import { useTranslation } from "react-i18next"

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const timeoutRef = useRef(null)
  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("i18nextLng") || "en"
  )

  const languages = [
    { code: "en", name: "🇬🇧 English" },
    { code: "srb", name: "🇷🇸 Srpski" }
  ]

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setIsLanguageOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsLanguageOpen(false)
    }, 100)
  }

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage)
    localStorage.setItem("i18nextLng", selectedLanguage)
  }, [selectedLanguage, i18n])

  const getDisplayLanguage = (code) => {
    return code === "en" ? "EN" : "SRB"
  }

  return (
    <header id="home">
      <div className="container header_container">
        {/* Language Switcher */}
        <div className="language-switcher"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          <button className="btn btn-language">
            <FiGlobe className="language-icon" />
            {getDisplayLanguage(selectedLanguage)}
            <FiChevronDown className="chevron-icon" />
          </button>
          
          {isLanguageOpen && (
            <div className="language-dropdown">
              {languages.map((lang) => (
                <button 
                  key={lang.code}
                  className="language-item"
                  onClick={() => setSelectedLanguage(lang.code)}>
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <h4>{t("header.hello")}</h4>
        <h1 className='flicker'>{t("header.name")}</h1>
        <h4 className='text-light'>{t("header.title")}</h4>
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