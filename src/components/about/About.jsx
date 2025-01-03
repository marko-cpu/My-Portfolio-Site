import React from "react";
import "./about.css";
import ME from "../../assets/5.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useState } from "react";
import finkg from "../../assets/finkg.png";
import first from "../../assets/first.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <p>
            I am a recent graduate with a Bachelor's degree in Electrical
            Engineering and Computer Science from the Faculty of Engineering
            Sciences in Kragujevac. Currently, I am pursuing a Master's degree
            in the same field at the same institution. I am actively seeking
            opportunities to apply my theoretical knowledge in a professional
            setting. Eager to contribute to cutting-edge projects and thrive in
            a dynamic work environment, I am poised to make a meaningful impact
            as I embark on the next phase of my career.
          </p>
        );
      case "education":
        return (
          <div className="education_content">
            
            <div className="education_item">
              <h3>Currently Enrolled in a Master's Program</h3>
            
              <p>
              <img src={finkg} className="finkg" alt="fin" />
                The Faculty of Engineering Sciences, specializing in Electrical
                Engineering and Computer Science.
                <span>Present</span>
              </p>
            </div>
          
            <div className="education_item">
              <h3>Bachelor's Degree</h3>
            
              <p>
              <img src={finkg} className="finkg" alt="fin" />
                Faculty of Engineering Sciences, major in Computer Technology
                and Software Engineering.
                <p className="year">2019-2023</p>
              </p>
             
            </div>
            <div className="education_item">
              <h3>Completed Secondary Education</h3>
             
              <p>
              <img src={first} className="first" alt="fin" />
                First Technical School in Kragujevac.
                <p className="year">2015-2019</p>
                </p>
             
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Aboutimage" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article
              className={`about_card ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              <FaAward className="about_icon" />
              <h5>About me</h5>
            </article>

            <article
              className={`about_card ${
                activeTab === "education" ? "active" : ""
              }`}
              onClick={() => setActiveTab("education")}
            >
              <FiUsers className="about_icon" />
              <h5>Education</h5>
            </article>
            <a href="#portfolio">
              <article className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
              </article>
            </a>
          </div>

          <div className="content_section">{renderContent()}</div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
