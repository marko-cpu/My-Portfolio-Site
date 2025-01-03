import React, { useState } from 'react'
import EnglishCV from '../../assets/CV-ENG.pdf'
import SerbiaCV from '../../assets/CV-SRB.pdf'
import Flag from 'react-world-flags';

const CTA = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="cta">
      <div className="dropdown">
        <button onClick={toggleDropdown} className="btn btn-primary btnd">
          Download CV
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
        Let's Talk
      </a>
    </div>
  )
}

export default CTA;
