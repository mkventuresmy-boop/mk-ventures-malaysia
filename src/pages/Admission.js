import React from 'react';
import { CheckCircle } from 'lucide-react';
import '../styles/pages/Admission.css';

function Admission() {
  const steps = [
    {
      step: 1,
      title: 'Consultation initiale',
      description: 'Discutez de vos objectifs éducatifs et de vos préférences avec notre équipe d\'experts'
    },
    {
      step: 2,
      title: 'Sélection des universités',
      description: 'Nous vous recommandons les meilleures universités adaptées à votre profil académique'
    },
    {
      step: 3,
      title: 'Préparation du dossier',
      description: 'Aide complète pour préparer tous les documents requis (relevés de notes, lettres de motivation, etc.)'
    },
    {
      step: 4,
      title: 'Soumission de la candidature',
      description: 'Nous soumettons votre dossier aux universités et assurons le suivi'
    },
    {
      step: 5,
      title: 'Traitement du visa',
      description: 'Assistance complète pour l\'obtention du visa d\'étudiant malaisien'
    },
    {
      step: 6,
      title: 'Arrivée et intégration',
      description: 'Support à votre arrivée en Malaisie, aide au logement et à l\'orientation'
    }
  ];

  const requirements = [
    { title: 'Diplôme du secondaire', description: 'Relevés de notes officiels traduits en anglais ou français' },
    { title: 'Résultats d\'examens', description: 'BAC, BACCALAURÉAT ou équivalent' },
    { title: 'Compétences linguistiques', description: 'IELTS 5.5-6.5 ou TOEFL 500-550 (selon l\'université)' },
    { title: 'Passeport valide', description: 'Valide pour au moins 18 mois' },
    { title: 'Lettre de motivation', description: 'Expliquant vos objectifs académiques et professionnels' },
    { title: 'Certificat médical', description: 'Pour certaines universités et programmes' }
  ];

  return (
    <div className="admission">
      <div className="admission-header">
        <h1>Processus d'Admission</h1>
        <p>Suivez notre guide étape par étape pour votre admission en Malaisie</p>
      </div>

      {/* Steps Section */}
      <section className="admission-steps">
        <h2>6 Étapes simples</h2>
        <div className="steps-container">
          {steps.map((item) => (
            <div key={item.step} className="step-card">
              <div className="step-number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.step < steps.length && <div className="step-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements">
        <h2>Conditions d'admission</h2>
        <div className="requirements-grid">
          {requirements.map((req, idx) => (
            <div key={idx} className="requirement-card">
              <CheckCircle className="check-icon" />
              <h3>{req.title}</h3>
              <p>{req.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <h2>Calendrier d'admission</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Janvier - Février</h3>
              <p>Ouverture des candidatures pour l'admission au semestre d'automne</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Mars - Avril</h3>
              <p>Examens d'entrée et entrevues (si nécessaire)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Mai - Juin</h3>
              <p>Notifications d'admission et demandes de visa</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Juillet - Août</h3>
              <p>Orientation et préparation à l'arrivée</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Septembre</h3>
              <p>Début des cours - Semestre d'automne</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="admission-cta">
        <h2>Prêt à postuler ?</h2>
        <p>Contactez notre équipe dès maintenant pour une consultation gratuite</p>
        <button className="cta-button-primary">Commencer votre candidature</button>
      </section>
    </div>
  );
}

export default Admission;
