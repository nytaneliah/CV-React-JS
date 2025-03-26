import React from "react";
import "./styles/Services.css";
import banner from "../assets/img/banner.jpg";
import {
  FaDisplay,
  FaFileCode,
  FaMagnifyingGlassDollar,
} from "react-icons/fa6";

const Services = () => {
  return (
    <div className="services">
      <div
        className="banner"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      <main className="services-main">
        <h1>MON OFFRE DE SERVICES</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className="blue-line"></div>

        <div className="services-blocks">
          <div className="services-block">
            <div className="icon">
              <FaDisplay />
            </div>
            <h2>UX DESIGN</h2>
            <p>
              L'<strong>UX Design</strong> est une méthode de conception centrée
              sur l'utilisateur. Son but est d'offrir une expérience de
              navigation optimale à l'internaute.
            </p>
          </div>

          <div className="services-block">
            <div className="icon">
              <FaFileCode />
            </div>
            <h2>DÉVELOPPEMENT WEB</h2>
            <p>
              Le <strong>développement de sites web</strong> repose sur
              l'utilisation des langages HTML, CSS, JavaScript et PHP.
            </p>
          </div>

          <div className="services-block">
            <div className="icon">
              <FaMagnifyingGlassDollar />
            </div>
            <h2>RÉFÉRENCEMENT</h2>
            <p>
              Le <strong>référencement naturel d'un site</strong>, aussi appelé
              SEO, consiste à mettre des techniques en oeuvre pour améliorer sa
              position dans les résultats des moteurs de recherche.
            </p>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Services;
