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
          <span className="logo-text">MK Ventures</span>
          <span className="logo-subtext">Malaysia</span>
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
