import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import { useTranslation } from "react-i18next"

const Services = () => {
    const { t } = useTranslation()
        
  return (
   <section id="softskills">
    <h2>{t("services.softSkillsTitle")}</h2>
    
    <div className="container services_container">
      <article className='service'>
        <div className="service_head">
          <h3>{t("services.sections.softSkills.title")}</h3>
        </div>

        <ul className="service_list">
          <li>
            <BiCheck className='service_list-icon' />
            <p>{t("services.sections.softSkills.items.organizational")}</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>{t("services.sections.softSkills.items.motivated")}</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>{t("services.sections.softSkills.items.teamwork")}</p>
          </li>
          <li>
            <BiCheck className='service_list-icon' />
            <p>{t("services.sections.softSkills.items.communication")}</p>
          </li>
        </ul>
      </article>

      <article className='service'>
        <div className="service_head">
          <h3>{t("services.sections.projectManagement.title")}</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon' />
            <p>{t("services.sections.projectManagement.items.tools")}</p>
          </li>
        </ul>
      </article>
    </div>
   </section>
  )
}

export default Services