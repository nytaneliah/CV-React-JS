import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import LegalMentions from "./pages/LegalMentions";
import GitHubPage from "./pages/GitHubPage";
import ScrollToAnchor from "./components/ScrollToAnchor";
import "./style.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/realisations" exact element={<Realisations />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/legalmentions" exact element={<LegalMentions />} />
          <Route path="/github-profile" element={<GitHubPage />} />
        </Routes>
        <ScrollToAnchor />
        <Footer />
      </div>
    </Router>
  );
}
