import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import '../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MK Ventures Malaysia</h3>
          <p>Votre partenaire de confiance pour étudier en Malaisie</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <div className="contact-info">
            <p><Mail size={18} /> info@mkventures.my</p>
            <p><Phone size={18} /> +60 XX XXXX XXXX</p>
            <p><MapPin size={18} /> Kuala Lumpur, Malaisie</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Liens rapides</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/universities">Universités</a></li>
            <li><a href="/admission">Admission</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Réseaux sociaux</h4>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MK Ventures Malaysia. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
