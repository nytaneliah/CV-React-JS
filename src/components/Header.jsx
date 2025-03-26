import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/styles/Header.css";
import { FaBars } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" onClick={scrollToTop} className="logo">
          JOHN DOE
        </Link>

        <div className="burger-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          {[
            { to: "/", label: "Accueil" },
            { to: "/services", label: "Services" },
            { to: "/realisations", label: "Réalisations" },
            { to: "/blog", label: "Blog" },
            { to: "/contact", label: "Me contacter" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={[
                  "uppercase",
                  location.pathname === to ? "active" : "",
                ].join(" ")}
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
