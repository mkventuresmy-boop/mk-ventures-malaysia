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
          <svg className="hero-logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Globe */}
            <circle cx="100" cy="100" r="85" fill="none" stroke="#f59e0b" strokeWidth="3"/>
            <path d="M 50 100 Q 100 50 150 100 Q 100 150 50 100" fill="none" stroke="#f59e0b" strokeWidth="2"/>
            <ellipse cx="100" cy="100" rx="85" ry="30" fill="none" stroke="#f59e0b" strokeWidth="2"/>
            <line x1="20" y1="100" x2="180" y2="100" stroke="#f59e0b" strokeWidth="2"/>
            
            {/* MK Letters */}
            <text x="100" y="115" fontSize="60" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Poppins">MK</text>
            
            {/* Plane */}
            <g transform="translate(140, 45)">
              <circle cx="0" cy="0" r="8" fill="white"/>
              <line x1="-15" y1="0" x2="15" y2="0" stroke="white" strokeWidth="4"/>
              <line x1="0" y1="-10" x2="0" y2="10" stroke="white" strokeWidth="3"/>
            </g>
            
            {/* Building */}
            <g transform="translate(50, 45)">
              <rect x="-8" y="-8" width="16" height="16" fill="white"/>
              <rect x="-3" y="-3" width="6" height="6" fill="#f59e0b"/>
            </g>
            
            {/* Ribbon bottom */}
            <path d="M 70 155 Q 100 160 130 155" fill="none" stroke="white" strokeWidth="3"/>
            <polygon points="100,165 95,155 105,155" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Pourquoi choisir MK Ventures ?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Globe size={40} />
            <h3>Partenariats internationaux</h3>
            <p>Accès aux meilleures universités malaisiennees et internationales</p>
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
