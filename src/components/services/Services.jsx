import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
   <section id="softskills">
   
    <h2>Soft Skills</h2>
    
    <div className="container services_container">
      <article className='service'>
        <div className="service_head">
          <h3>Soft Skills</h3>
        </div>

        <ul className="service_list">
          <li>
            <BiCheck className='service_list-icon' />
            <p>Organizational and planning skills</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Motivated</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Team-work oriented</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Good listener and communicator</p>
          </li>
          
        </ul>
      </article>

      {/* ********* */}

    

      <article className='service'>
        <div className="service_head">
          <h3>Project Management</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon' />
            <p>Basic familiarity with project management tools, including Trello.</p>
          </li>
          
        </ul>
      </article>

      {/* ********* */}



    </div>
   </section>
  )
}

export default Services