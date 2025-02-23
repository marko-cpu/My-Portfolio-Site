import React, { useState, useRef } from 'react'
import EnglishCV from '../../assets/CV-ENG.pdf'
import SerbiaCV from '../../assets/CV-SRB.pdf'
import Flag from 'react-world-flags';
import { useTranslation } from "react-i18next";

const CTA = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const { t } = useTranslation();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100); // 1000ms = 1 sekund
  };
  return (
    <div className="cta">
     <div className="dropdown" 
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        <button className="btn btn-primary btnd">
          {t("header.downlaodCv")}
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <a href={EnglishCV} download className="dropdown-item">
              <Flag code="GB" style={{ width: '20px', height: '15px', marginRight: '0.5rem' }} />
              English CV
            </a>
            <a href={SerbiaCV} download className="dropdown-item">
              <Flag code="RS" style={{ width: '20px', height: '15px', marginRight: '0.5rem' }} />
              Serbian CV
            </a>
          </div>
        )}
      </div>
      <a href="#contact" className="btn btn-primary">
        {t("header.letsTalk")}
      </a>
    </div>
  )
}

export default CTA;