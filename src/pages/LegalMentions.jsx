import { Accordion } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import "./styles/LegalMentions.css";

const LegalMentions = () => {
  return (
    <div className="legal-mentions">
      <h1>MENTIONS LÉGALES</h1>
      <div className="blue-line"></div>

      <div className="legal-container">
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <h2>John Doe</h2>
              <div className="icon-container">
                <div className="icon-item">
                  <FaMapMarkerAlt />
                  <p>40 Rue Laure Diebold</p>
                </div>
                <div className="adresse">
                  <p>69009 Lyon</p>
                </div>
                <div className="icon-item phone">
                  <FaPhoneAlt />
                  <a href="tel:0620304050">06 20 30 40 50</a>
                </div>
                <div className="icon-item email">
                  <FaEnvelope />
                  <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <h2>Always Data</h2>
              <div className="icon-container">
                <div className="adresse">
                  <p>
                    91 rue du Faubourg Saint-Honoré
                    <br />
                    75008 Paris
                  </p>
                </div>
                <div className="icon-item">
                  <FaGlobe />
                  <a
                    href="http://www.alwaysdata.com"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    www.alwaysdata.com
                  </a>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h2>Crédits</h2>
              <p>Site développé par John Doe, étudiant du CEF</p>
              <p>
                Les images libres de droit sont issues du site{" "}
                <a
                  href="https://pixabay.com"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  Pixabay
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default LegalMentions;
