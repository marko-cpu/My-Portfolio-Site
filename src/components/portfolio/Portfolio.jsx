import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/erp.png";
import IMG2 from "../../assets/chat.png";
import IMG3 from "../../assets/stock.png";
import IMG4 from "../../assets/zookeper.png";
import IMG5 from "../../assets/warehouse.png";
/* import IMG6 from "../../assets/used-car.png"; */
import IMG7 from "../../assets/library.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Enterprise Resource Planning",
    github: "https://github.com/marko-cpu/Enterprise-Resource-Planning",
    demo: "https://dribbble.com/shots/22987684-Personal-Web-Portfolio-Live-Website",
  },
  {
    id: 2,
    image: IMG2,
    title: "Chat-Rooms",
    github: "https://github.com/marko-cpu/Chat-Rooms",
    demo: "https://dribbble.com/shots/22987684-Personal-Web-Portfolio-Live-Website",
  },
  {
    id: 3,
    image: IMG3,
    title: "Stock-exchange-gRPC-Socket-Server",
    github: "https://github.com/marko-cpu/Stock-exchange-gRPC-Socket-Server",
    demo: "https://dribbble.com/shots/22987684-Personal-Web-Portfolio-Live-Website",
  },
  {
    id: 4,
    image: IMG4,
    title: "Zookeper-java",
    github: "https://github.com/marko-cpu/Zookeper-java",
    demo: "https://dribbble.com/shots/22987684-Personal-Web-Portfolio-Live-Website",
  },
  {
    id: 5,
    image: IMG5,
    title: "Warehouse-Management-System",
    github: "https://github.com/marko-cpu/Warehouse-Management-System",
    demo: "https://dribbble.com/shots/22987684-Personal-Web-Portfolio-Live-Website",
  },
 /*  {
    id: 6,
    image: IMG6,
    title: "Used-Cars-Website",
    github: "https://github.com/marko-cpu/Used-Cars-Website",
    demo: "https://dribbble.com/shots/22987684-Personal-Web-Portfolio-Live-Website",
  }, */
  {
    id: 7,
    image: IMG7,
    title: "FullStack Library App",
    github: "https://github.com/marko-cpu/Fullstack-Library-App/tree/master",
    demo: "https://dribbble.com/shots/22987684-Personal-Web-Portfolio-Live-Website",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
             {/*   <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
