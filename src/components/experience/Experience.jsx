import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id="projects">
      <h5>The Skills I Have</h5>
      <h2>Technologies and Tools</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Technologies</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
             <div>
               <h4>HTML</h4>
              
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
              
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
               
              </div>
            </article>
           {/*  <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
             <div>
              <h4>NodeJs</h4>
              
             </div>
            </article> */}
             <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
               
              </div>
            </article> 
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Java</h4>
               
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Spring Boot</h4>
               
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Python</h4>
               
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MySQL</h4>
               
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
               
              </div>
            </article>
          </div>
        </div>

        

        <div className="experience_backend">
        <h3>Tools</h3>
        <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Git & GitHub</h4>
                
              </div>
            </article>
           
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Bash/CLI</h4>
                
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Postman</h4>
               
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Docker</h4>
                
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>IntelliJ</h4>
                
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Visual Studio Code</h4>
               
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}
 
export default Experience