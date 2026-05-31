import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Award } from 'lucide-react';
import '../styles/pages/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Réalisez votre rêve d'étudier en Malaisie</h1>
          <p>MK Ventures Malaysia est votre partenaire de confiance pour une expérience éducative internationale inoubliable</p>
          <Link to="/admission" className="cta-button">
            Commencer <ArrowRight size={20} />
          </Link>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">📚🌏</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Pourquoi choisir MK Ventures ?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Globe size={40} />
            <h3>Partenariats internationaux</h3>
            <p>Accès aux meilleures universités malaisien­nes et internationales</p>
          </div>
          <div className="feature-card">
            <Users size={40} />
            <h3>Accompagnement personnalisé</h3>
            <p>Suivi complet de votre dossier de candidature à votre arrivée</p>
          </div>
          <div className="feature-card">
            <Award size={40} />
            <h3>Expertise reconnue</h3>
            <p>Plus de 10 ans d'expérience dans l'éducation internationale</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Prêt à commencer votre aventure éducative ?</h2>
        <Link to="/contact" className="cta-button-secondary">
          Nous contacter maintenant
        </Link>
      </section>
    </div>
  );
}

export default Home;
