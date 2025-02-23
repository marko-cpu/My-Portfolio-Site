import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/erp.png";
import IMG2 from "../../assets/chat.png";
import IMG3 from "../../assets/stock.png";
import IMG4 from "../../assets/zookeper.png";
import IMG5 from "../../assets/warehouse.png";
import IMG7 from "../../assets/library.png";
import IMG8 from "../../assets/tech-quiz.png";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      image: IMG1,
      title: t("portfolio.projects.erp.title"),
      github: "https://github.com/marko-cpu/Enterprise-Resource-Planning",
    },
    {
      id: 2,
      image: IMG8,
      title: t("portfolio.projects.techQuiz.title"),
      github: "https://github.com/marko-cpu/tech-quiz-frontend",
      github2: "https://github.com/marko-cpu/tech-quiz-backend",
      demo: "https://tech-quiz-frontend.vercel.app/",
    },
    {
      id: 3,
      image: IMG2,
      title: t("portfolio.projects.chatRooms.title"),
      github: "https://github.com/marko-cpu/Chat-Rooms",
    },
    {
      id: 4,
      image: IMG3,
      title: t("portfolio.projects.stockExchange.title"),
      github: "https://github.com/marko-cpu/Stock-exchange-gRPC-Socket-Server",
    },
    {
      id: 5,
      image: IMG4,
      title: t("portfolio.projects.zookeeper.title"),
      github: "https://github.com/marko-cpu/Zookeper-java",
    },
    {
      id: 6,
      image: IMG5,
      title: t("portfolio.projects.warehouse.title"),
      github: "https://github.com/marko-cpu/Warehouse-Management-System",
    },
    {
      id: 8,
      image: IMG7,
      title: t("portfolio.projects.library.title"),
      github: "https://github.com/marko-cpu/Fullstack-Library-App/tree/master",
    },
  ];

  return (
    <section id="portfolio">
      <h5>{t("portfolio.recentWork")}</h5>
      <h2>{t("portfolio.projectsTitle")}</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3 className="title">{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                {t("portfolio.githubButton")}
              </a>
              {demo && (
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("portfolio.demoButton")}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;