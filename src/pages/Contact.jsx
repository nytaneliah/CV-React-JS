import React, { useState } from "react";
import "./styles/Contact.css";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import backgroundImage from "../assets/img/contact-bg.jpg";

const Contact = () => {
  const [messageEnvoye, setMessageEnvoye] = useState(false); // ✅ Ajout d'un état pour gérer l'affichage du message

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageEnvoye(true); // ✅ Active le message de confirmation
    setTimeout(() => setMessageEnvoye(false), 5000); // ✅ Cache le message après 5 secondes
  };

  return (
    <div
      className="contact-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="contact-container">
        <h1>ME CONTACTER</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="blue-line"></div>
        <div className="contact-content">
          {/* Formulaire */}
          <div className="contact-form-section">
            <h2>Formulaire de contact</h2>
            <hr className="blue-line-long" />
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Votre nom" required />
              <input type="email" placeholder="Votre adresse mail" required />
              <input
                type="tel"
                placeholder="Votre numéro de téléphone"
                required
              />
              <input type="text" placeholder="Sujet" required />
              <textarea placeholder="Votre message" required></textarea>
              <button type="submit" className="send-btn">
                Envoyer
              </button>
            </form>
            {messageEnvoye && (
              <p className="confirmation-message">
                {" "}
                ✅ Votre message a été envoyé avec succès !
              </p>
            )}
          </div>

          {/* Coordonnées + Google Maps */}
          <div className="contact-info">
            <h2>Mes coordonnées</h2>
            <hr className="blue-line-long" />
            <p>
              <FaMapMarkerAlt className="icon" /> 40 Rue Laure Diebold, 69009
              Lyon, France
            </p>
            <p>
              <FaMobileAlt className="icon" /> 06 20 30 40 50
            </p>

            {/* Google Maps */}
            <div className="map-container">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754105!2d4.796403976619974!3d45.77866571240149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1742909659971!5m2!1sfr!2sfr"
                width="100%"
                height="250"
                style={{ border: "0", borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
