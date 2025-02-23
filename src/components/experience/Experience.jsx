import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { useTranslation } from "react-i18next"

const Experience = () => {
    const { t } = useTranslation()
    
    return (
        <section id="projects">
            <h5>{t("experience.skillsTitle")}</h5>
            <h2>{t("experience.sectionTitle")}</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>{t("experience.technologiesHeader")}</h3>
                    <div className="experience_content">
                        {["HTML", "CSS", "JavaScript", "React", "Java", "Spring Boot", "Python", "MySQL", "MongoDB"].map((tech) => (
                            <article className='experience_details' key={tech}>
                                <BsPatchCheckFill className='experience_details-icon' />
                                <div>
                                    <h4>{tech}</h4>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="experience_backend">
                    <h3>{t("experience.toolsHeader")}</h3>
                    <div className="experience_content">
                        {["Git & GitHub", "Bash/CLI", "Postman", "Docker", "IntelliJ", "Visual Studio Code"].map((tool) => (
                            <article className='experience_details' key={tool}>
                                <BsPatchCheckFill className='experience_details-icon' />
                                <div>
                                    <h4>{tool}</h4>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience