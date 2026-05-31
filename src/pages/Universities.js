import React from 'react';
import { MapPin, Users, Globe } from 'lucide-react';
import '../styles/pages/Universities.css';

function Universities() {
  const universities = [
    {
      id: 1,
      name: 'Universiti Malaya (UM)',
      city: 'Kuala Lumpur',
      ranking: 'Top 70 mondial',
      specialties: ['Ingénierie', 'Médecine', 'Économie', 'Sciences'],
      students: '27,000+'
    },
    {
      id: 2,
      name: 'Universiti Kebangsaan Malaysia (UKM)',
      city: 'Selangor',
      ranking: 'Top 150 mondial',
      specialties: ['Droit', 'Ingénierie', 'Éducation', 'Affaires'],
      students: '22,000+'
    },
    {
      id: 3,
      name: 'Universiti Teknologi Malaysia (UTM)',
      city: 'Johor',
      ranking: 'Top 200 mondial',
      specialties: ['Technologie', 'Ingénierie', 'Informatique', 'Construction'],
      students: '19,000+'
    },
    {
      id: 4,
      name: 'Universiti Putra Malaysia (UPM)',
      city: 'Selangor',
      ranking: 'Top 200 mondial',
      specialties: ['Agriculture', 'Environnement', 'Ingénierie', 'Médecine'],
      students: '16,000+'
    },
    {
      id: 5,
      name: 'Taylor\'s University',
      city: 'Kuala Lumpur',
      ranking: 'Top 400 mondial',
      specialties: ['Affaires', 'Ingénierie', 'Hôtellerie', 'Communication'],
      students: '11,000+'
    },
    {
      id: 6,
      name: 'Monash University Malaysia',
      city: 'Selangor',
      ranking: 'Campus du groupe Monash',
      specialties: ['Ingénierie', 'Commerce', 'Informatique', 'Santé'],
      students: '8,000+'
    }
  ];

  return (
    <div className="universities">
      <div className="universities-header">
        <h1>Nos Universités Partenaires</h1>
        <p>Découvrez les meilleures institutions d'enseignement supérieur en Malaisie</p>
      </div>

      <div className="universities-grid">
        {universities.map((uni) => (
          <div key={uni.id} className="university-card">
            <div className="university-header">
              <h2>{uni.name}</h2>
              <span className="ranking-badge">{uni.ranking}</span>
            </div>
            
            <div className="university-info">
              <p className="city"><MapPin size={16} /> {uni.city}</p>
              <p className="students"><Users size={16} /> {uni.students} étudiants</p>
            </div>

            <div className="specialties">
              <h3>Spécialités :</h3>
              <div className="specialty-tags">
                {uni.specialties.map((spec, idx) => (
                  <span key={idx} className="tag">{spec}</span>
                ))}
              </div>
            </div>

            <button className="learn-more">En savoir plus</button>
          </div>
        ))}
      </div>

      <section className="why-malaysia">
        <h2>Pourquoi étudier en Malaisie ?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>💰 Coût abordable</h3>
            <p>Les frais de scolarité sont 40-60% moins chers qu'aux États-Unis ou au Royaume-Uni</p>
          </div>
          <div className="why-card">
            <h3>🌍 Diversité culturelle</h3>
            <p>Environnement multiculturel avec des étudiants de plus de 100 nationalités</p>
          </div>
          <div className="why-card">
            <h3>📚 Qualité d'enseignement</h3>
            <p>Universités reconnues mondialement avec des programmes modernes et rigoureux</p>
          </div>
          <div className="why-card">
            <h3>✈️ Emplacement stratégique</h3>
            <p>Porte d'entrée vers l'Asie du Sud-Est avec facilités de déplacement</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Universities;
