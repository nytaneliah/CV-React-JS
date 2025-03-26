import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCircleUp,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaAngleRight,
} from "react-icons/fa6";
import "./styles/Footer.css";

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopButton = document.getElementById("footerScrollToTop");

      const scrollPos = window.scrollY;

      if (scrollPos > 100) {
        scrollToTopButton.classList.add("show");
      } else {
        scrollToTopButton.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const yOffset = -70;
        const y =
          aboutSection.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100); // Petit délai pour s'assurer que la page est bien chargée
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>John Doe</h3>
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Téléphone : 06 20 30 40 50</p>
          <div className="footer-icons">
            <Link to="/github-profile" aria-label="Voir le profil GitHub">
              <FaGithub />
            </Link>
            <a
              href="https://x.com/?lang=fr"
              aria-label="Twitter"
              target="_blank"
              rel="noopener nofollow"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener nofollow"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Liens utiles</h3>
          <ul>
            <li>
              <FaAngleRight className="liIcon" />
              <Link to="/#home" onClick={scrollToTop}>
                Accueil
              </Link>
            </li>
            <li>
              <FaAngleRight className="liIcon" />
              <a href="/#" onClick={handleAboutClick}>
                A propos
              </a>
            </li>
            <li>
              <FaAngleRight className="liIcon" />
              <Link to="/services" onClick={scrollToTop}>
                Services
              </Link>
            </li>
            <li>
              <FaAngleRight className="liIcon" />
              <Link to="/contact" onClick={scrollToTop}>
                Me contacter
              </Link>
            </li>
            <li>
              <FaAngleRight className="liIcon" />
              <Link to="/legalmentions" onClick={scrollToTop}>
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li>
              <FaAngleRight className="liIcon" />
              <Link to="/realisations" onClick={scrollToTop}>
                Fresh Food
              </Link>
            </li>
            <li>
              <FaAngleRight className="liIcon" />
              <Link to="/realisations" onClick={scrollToTop}>
                Restaurant Akira
              </Link>
            </li>
            <li>
              <FaAngleRight className="liIcon" />
              <Link to="/realisations" onClick={scrollToTop}>
                Espace bien-être
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Mes derniers articles</h3>
          <ul>
            <li>
              <FaAngleRight className="liIcon" />
              <a href="/blog" onClick={scrollToTop}>
                Coder son site en HTML/CSS
              </a>
            </li>
            <li>
              <FaAngleRight className="liIcon" />
              <a href="/blog" onClick={scrollToTop}>
                Vendre ses produits sur le web
              </a>
            </li>
            <li>
              <FaAngleRight className="liIcon" />
              <a href="/blog" onClick={scrollToTop}>
                Se positionner sur Google
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Designed by John Doe</p>
      </div>

      <button
        id="footerScrollToTop"
        className="footer-scroll-to-top"
        onClick={scrollToTop}
      >
        <FaCircleUp />
      </button>
    </footer>
  );
};

export default Footer;
