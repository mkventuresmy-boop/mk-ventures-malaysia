import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/pages/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Nous Contacter</h1>
        <p>Nous sommes là pour répondre à vos questions et vous aider dans votre parcours</p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <section className="contact-info">
          <h2>Nos Coordonnées</h2>
          
          <div className="info-card">
            <Mail size={32} className="icon" />
            <div>
              <h3>Email</h3>
              <p><a href="mailto:info@mkventures.my">info@mkventures.my</a></p>
              <p><a href="mailto:support@mkventures.my">support@mkventures.my</a></p>
            </div>
          </div>

          <div className="info-card">
            <Phone size={32} className="icon" />
            <div>
              <h3>Téléphone</h3>
              <p><a href="tel:+60312345678">+603 1234 5678</a></p>
              <p><a href="tel:+60387654321">+603 8765 4321</a></p>
            </div>
          </div>

          <div className="info-card">
            <MapPin size={32} className="icon" />
            <div>
              <h3>Adresse</h3>
              <p>Suite 1001, Level 10<br />Mid Valley City<br />Kuala Lumpur 58000<br />Malaisie</p>
            </div>
          </div>

          <div className="hours">
            <h3>Heures d'ouverture</h3>
            <p>Lundi - Vendredi: 09:00 - 18:00</p>
            <p>Samedi: 10:00 - 14:00</p>
            <p>Dimanche: Fermé</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>Formulaire de contact</h2>
          
          {submitted && (
            <div className="success-message">
              ✓ Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+33 XX XX XX XX XX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sujet de votre message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Détaillez votre message..."
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Envoyer <Send size={20} />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
