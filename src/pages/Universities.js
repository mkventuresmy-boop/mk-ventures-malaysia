import React from 'react';
import { MapPin, Users, Globe } from 'lucide-react';
import '../styles/pages/Universities.css';

function Universities() {
  const universities = [
    {
      id: 1,
      name: 'APU (Asia Pacific University)',
      city: 'Kuala Lumpur',
      ranking: 'Top 350 mondial',
      specialties: ['Informatique', 'Ingénierie', 'Affaires', 'Communication'],
      students: '12,000+',
      color: '#1e40af'
    },
    {
      id: 2,
      name: 'City University',
      city: 'Petaling Jaya',
      ranking: 'Reconnue internationalement',
      specialties: ['Affaires', 'Droit', 'Informatique', 'Ingénierie'],
      students: '8,000+',
      color: '#0ea5e9'
    },
    {
      id: 3,
      name: 'UNIKL (Universiti Kuala Lumpur)',
      city: 'Kuala Lumpur',
      ranking: 'Université technologique',
      specialties: ['Ingénierie', 'Technologie', 'Construction', 'Manufacture'],
      students: '15,000+',
      color: '#2563eb'
    },
    {
      id: 4,
      name: 'MSU (Metropolitan State University)',
      city: 'Shah Alam',
      ranking: 'Établissement privé',
      specialties: ['Commerce', 'Informatique', 'Droit', 'Santé'],
      students: '5,000+',
      color: '#1e40af'
    },
    {
      id: 5,
      name: 'MMU (Multimedia University)',
      city: 'Cyberjaya',
      ranking: 'Top 500 mondial',
      specialties: ['Multimédia', 'Informatique', 'Ingénierie', 'Creative Arts'],
      students: '10,000+',
      color: '#0ea5e9'
    },
    {
      id: 6,
      name: 'MAHSA University',
      city: 'Kuala Lumpur',
      ranking: 'Spécialiste en santé',
      specialties: ['Médecine', 'Pharmacie', 'Soins infirmiers', 'Dentisterie'],
      students: '4,000+',
      color: '#059669'
    },
    {
      id: 7,
      name: 'KLUST (Kuala Lumpur University of Science & Technology)',
      city: 'Kuala Lumpur',
      ranking: 'Université technologique',
      specialties: ['Sciences', 'Technologie', 'Ingénierie', 'Informatique'],
      students: '6,000+',
      color: '#2563eb'
    },
    {
      id: 8,
      name: 'Geomatika University',
      city: 'Kuala Lumpur',
      ranking: 'Spécialiste en géomatique',
      specialties: ['Géomatique', 'Architecture', 'Génie civil', 'Topographie'],
      students: '2,500+',
      color: '#1e40af'
    },
    {
      id: 9,
      name: 'INTI International University',
      city: 'Subang Jaya',
      ranking: 'Top 600 mondial',
      specialties: ['Ingénierie', 'Informatique', 'Commerce', 'Architecture'],
      students: '11,000+',
      color: '#0ea5e9'
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
          <div key={uni.id} className="university-card" style={{'--card-color': uni.color}}>
            <div className="university-header" style={{backgroundColor: uni.color}}>
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
                  <span key={idx} className="tag" style={{borderColor: uni.color, color: uni.color}}>{spec}</span>
                ))}
              </div>
            </div>

            <button className="learn-more" style={{backgroundColor: uni.color}}>En savoir plus</button>
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
          <div className="why-card">
            <h3>🏘️ Coût de vie attractif</h3>
            <p>Logement, nourriture et transport sont très abordables pour les étudiants</p>
          </div>
          <div className="why-card">
            <h3>🎓 Diplômes reconnus</h3>
            <p>Vos diplômes malaisiens seront reconnus par les employeurs mondiaux</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Universities;
