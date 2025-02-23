import React from "react";
import "./about.css";
import ME from "../../assets/5.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useState } from "react";
import finkg from "../../assets/finkg.png";
import first from "../../assets/first.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  const { t } = useTranslation();

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <p>{t("about.content.about")}</p>;
      case "education":
        return (
          <div className="education_content">
            <div className="education_item">
              <h3>{t("about.education.masters.title")}</h3>
              <p>
                <img src={finkg} className="finkg" alt={t("about.education.altFaculty")} />
                {t("about.education.masters.description")}
                <span>{t("about.education.masters.year")}</span>
              </p>
            </div>
            <div className="education_item">
              <h3>{t("about.education.bachelors.title")}</h3>
              <p>
                <img src={finkg} className="finkg" alt={t("about.education.altFaculty")} />
                {t("about.education.bachelors.description")}
                <p className="year">2019-2023</p>
              </p>
            </div>
            <div className="education_item">
              <h3>{t("about.education.secondary.title")}</h3>
              <p>
                <img src={first} className="first" alt={t("about.education.altSchool")} />
                {t("about.education.secondary.description")}
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
      <h5>{t("about.getToKnow")}</h5>
      <h2>{t("about.title")}</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article
              className={`about_card ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              <FaAward className="about_icon" />
              <h5>{t("about.tabs.about")}</h5>
            </article>

            <article
              className={`about_card ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              <FiUsers className="about_icon" />
              <h5>{t("about.tabs.education")}</h5>
            </article>
            <a href="#portfolio">
              <article className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>{t("about.tabs.projects")}</h5>
              </article>
            </a>
          </div>

          <div className="content_section">{renderContent()}</div>
          <a href="#contact" className="btn btn-primary">
            {t("about.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;