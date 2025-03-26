import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./styles/Blog.css";
import banner from "../assets/img/banner.jpg";
import coder from "../assets/img/blog/coder.jpg";
import croissance from "../assets/img/blog/croissance.jpg";
import google from "../assets/img/blog/google.jpg";
import screens from "../assets/img/blog/screens.jpg";
import seo from "../assets/img/blog/seo.jpg";
import technos from "../assets/img/blog/technos.png";

const articles = [
  {
    img: coder,
    title: "Coder son site en HTML/CSS",
    date: "22 août 2022",
    text: "Apprenez à créer votre propre site web en maîtrisant les bases du HTML et du CSS pour un site bien conçu !",
  },
  {
    img: croissance,
    title: "Vendre ses produits sur le web",
    date: "20 août 2022",
    text: "Découvrez les clés pour créer une boutique en ligne efficace et stratégies de vente pour booster votre succès en e-commerce !",
  },
  {
    img: google,
    title: "Se positionner sur Google",
    date: "1 août 2022",
    text: "Apprenez les bases du SEO pour améliorer votre visibilité sur Google et attirer plus de visiteurs !",
  },
  {
    img: screens,
    title: "Coder en responsive design",
    date: "31 juillet 2022",
    text: "Le Responsive Design permet d’adapter un site web à tous les écrans (ordinateur, tablette, mobile) améliorant ainsi l'expérience utilisateur.",
  },
  {
    img: seo,
    title: "Techniques de référencement",
    date: "30 juillet 2022",
    text: "Boostez votre visibilité sur Google grâce au SEO ! Mots-clés, backlinks, optimisation technique…",
  },
  {
    img: technos,
    title: "Apprendre à coder",
    date: "12 juillet 2022",
    text: "Débutez en programmation et maîtrisez les bases du code pour créer vos propres projets web.",
  },
];

const Blog = () => {
  return (
    <div className="blog">
      {/* Bannière */}
      <div
        className="banner"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      <Container className="blog-main text-center py-5">
        <h1>BLOG</h1>
        <p>Retrouvez ici quelques articles sur le développement web.</p>
        <div className="blue-line my-3"></div>

        {/* Grille Bootstrap */}
        <Row className="g-4">
          {articles.map((article, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={article.img} alt={article.title} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.text}</Card.Text>
                  <Button variant="primary">Lire la suite</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Publié le {article.date}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
