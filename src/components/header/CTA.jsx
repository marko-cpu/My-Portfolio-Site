import React from 'react'
import EnglishCV from '../../assets/CV.pdf'
import SerbianCV from '../../assets/CV-SRB.pdf'

const CTA = () => {



  return (
   <div className="cta">
    <a href={EnglishCV} download className='btn'>Download CV</a>
    <a href="#contact"  className='btn btn-primary'>Let's Talk</a>
   </div>
  )
}

export default CTA