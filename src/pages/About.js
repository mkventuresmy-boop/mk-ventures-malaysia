import React from 'react';
import '../styles/pages/About.css';

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>À propos de MK Ventures Malaysia</h1>
        <p>Votre guide vers l'excellence éducative en Malaisie</p>
      </div>

      <section className="about-section">
        <h2>Notre Mission</h2>
        <p>
          MK Ventures Malaysia est dédiée à faciliter l'accès à une éducation de qualité en Malaisie. 
          Nous accompagnons les étudiants internationaux à chaque étape de leur parcours, 
          du choix de l'université à leur intégration réussie dans la vie étudiante malaisienne.
        </p>
      </section>

      <section className="about-section">
        <h2>Notre Vision</h2>
        <p>
          Être le partenaire de référence pour les étudiants francophones qui souhaitent poursuivre 
          leurs études en Malaisie, en offrant un accompagnement professionnel, transparent et centré sur le succès.
        </p>
      </section>

      <section className="about-section">
        <h2>Pourquoi la Malaisie ?</h2>
        <ul className="benefits-list">
          <li>✓ Universités classées mondialement</li>
          <li>✓ Frais d'études abordables par rapport aux pays occidentaux</li>
          <li>✓ Environnement multiculturel et accueillant</li>
          <li>✓ Diplômes reconnus internationalement</li>
          <li>✓ Climat tropical toute l'année</li>
          <li>✓ Excellent système de transport public à Kuala Lumpur</li>
        </ul>
      </section>

      <section className="about-section stats">
        <h2>Nos Résultats</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>500+</h3>
            <p>Étudiants accompagnés</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>Taux de satisfaction</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>Universités partenaires</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Support disponible</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
