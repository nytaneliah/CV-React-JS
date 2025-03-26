import React from "react";
import "./styles/Realisations.css";
import banner from "../assets/img/banner.jpg";
import FreshFood from "../assets/img/portfolio/fresh-food.jpg";
import Restaurant from "../assets/img/portfolio/restaurant-japonais.jpg";
import BienEtre from "../assets/img/portfolio/espace-bien-etre.jpg";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Realisations = () => {
  const projects = [
    {
      img: FreshFood,
      title: "Fresh Food",
      description: "Réalisation d'un site avec commande en ligne.",
      footer: "Site réalisé avec PHP et MySQL",
    },
    {
      img: Restaurant,
      title: "Restaurant Akira",
      description: "Réalisation d'un site vitrine.",
      footer: "Site réalisé avec WordPress",
    },
    {
      img: BienEtre,
      title: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être.",
      footer: "Site réalisé en HTML/CSS",
    },
  ];

  return (
    <div className="realisations">
      <div
        className="banner"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      <main className="realisations-main">
        <h1>PORTFOLIO</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="blue-line"></div>

        <Container>
          <Row className="justify-content-center">
            {projects.map((project, index) => (
              <Col key={index} md={4} sm={12} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={project.img}
                    alt={project.title}
                  />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button variant="primary">Voir</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    {project.footer}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Realisations;
