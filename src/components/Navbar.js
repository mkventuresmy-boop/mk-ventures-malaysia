import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/components/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-wrapper">
            <svg className="logo-icon" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              {/* Globe */}
              <circle cx="100" cy="100" r="85" fill="none" stroke="#1e40af" strokeWidth="3"/>
              <path d="M 50 100 Q 100 50 150 100 Q 100 150 50 100" fill="none" stroke="#1e40af" strokeWidth="2"/>
              <ellipse cx="100" cy="100" rx="85" ry="30" fill="none" stroke="#1e40af" strokeWidth="2"/>
              <line x1="20" y1="100" x2="180" y2="100" stroke="#1e40af" strokeWidth="2"/>
              
              {/* MK Letters */}
              <text x="100" y="115" fontSize="60" fontWeight="bold" fill="#f59e0b" textAnchor="middle" fontFamily="Poppins">MK</text>
              
              {/* Plane */}
              <g transform="translate(140, 45)">
                <circle cx="0" cy="0" r="8" fill="#f59e0b"/>
                <line x1="-15" y1="0" x2="15" y2="0" stroke="#f59e0b" strokeWidth="4"/>
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#f59e0b" strokeWidth="3"/>
              </g>
              
              {/* Building */}
              <g transform="translate(50, 45)">
                <rect x="-8" y="-8" width="16" height="16" fill="#f59e0b"/>
                <rect x="-3" y="-3" width="6" height="6" fill="#1e40af"/>
              </g>
              
              {/* Ribbon bottom */}
              <path d="M 70 155 Q 100 160 130 155" fill="none" stroke="#f59e0b" strokeWidth="3"/>
              <polygon points="100,165 95,155 105,155" fill="#f59e0b"/>
            </svg>
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-text">MK Ventures</span>
            <span className="logo-subtext">Malaysia</span>
          </div>
        </Link>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>À propos</Link></li>
          <li><Link to="/universities" onClick={() => setIsOpen(false)}>Universités</Link></li>
          <li><Link to="/admission" onClick={() => setIsOpen(false)}>Admission</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} className="contact-btn">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
