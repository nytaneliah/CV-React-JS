import React from "react";
import "./styles/Home.css";
import heroBg from "/src/assets/img/hero-bg.jpg";
import JohnDoeAbout from "/src/assets/img/john-doe-about.jpg";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home">
      <section className="intro" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <Link
          to="about"
          smooth={true}
          offset={-70}
          duration={500}
          className="button"
        >
          En savoir plus
        </Link>
      </section>

      <section id="about">
        <div className="about-left">
          <h2>À propos</h2>
          <div className="underline"></div>
          <p>
            Passionné par l'informatique et les nouvelles technologies, j'ai
            suivi une formation d'<strong>intégrateur-développeur web </strong>
            au CEF. Au cours de cette formation j'ai pu acquérir des bases
            solides pour travailler dans le domaine du
            <strong> développement web</strong>.
            <br /> <br />
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une
            agence digitale pour consolider ma formation de{" "}
            <strong>développeur web full stack</strong>.
            <br /> <br />
            J'accorde une attention particulière à la qualité du code que
            j'écris et je respecte les bonnes pratiques du web.
          </p>
        </div>

        <div className="about-right">
          <img src={JohnDoeAbout} alt="John Doe" className="profile-img" />
          <h3>Mes Compétences</h3>
          <div className="skills">
            <div className="skill">
              <span>HTML5 90%</span>
              <ProgressBar now={90} variant="danger" />
            </div>
            <div className="skill">
              <span>CSS3 80%</span>
              <ProgressBar now={80} variant="info" />
            </div>
            <div className="skill">
              <span>JAVASCRIPT 70%</span>
              <ProgressBar now={70} variant="warning" />
            </div>
            <div className="skill">
              <span>PHP 60%</span>
              <ProgressBar now={60} variant="success" />
            </div>
            <div className="skill">
              <span>REACT 50%</span>
              <ProgressBar now={50} variant="primary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
