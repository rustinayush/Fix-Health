
import React from 'react';
import './WellnessStories.css';

const WellnessStories = () => {
  const PatientVoices = [
    {
      patientName: 'Sana Khan',
      recoveryDescription:
        'Grateful for effective physiotherapy sessions, I am now pain- free and back to daily life, thanks to the dedicated team of doctors and therapists.',
    },
    {
      patientName: 'Mahi Singh',
      recoveryDescription:
        'I extend my heartfelt thanks to the skilled orthopedic surgeons for a successful joint replacement surgery. The comprehensive rehabilitation program has significantly enhanced my mobility, granting me a better quality of life',
    },
    {
      patientName: 'Anika Mishra',
      recoveryDescription:
        'I want to express my gratitude to the orthopedic surgeons who performed a successful joint replacement surgery. The rehabilitation program was comprehensive, and I now have improved mobility and a better quality of life.',
    },
  ];

  return (
    <div className="wellness-stories-section">
      <p style={{ color: "white", fontSize: "35px" }}>Some Patient Recovery Stories</p>
      <p style={{ color: "white", fontSize: "20px" }}>Don't just take our word for it</p>
      <div className="wellness-stories-container">
        {PatientVoices.map((story, index) => (
          <div key={index} className="wellness-story">
            <h3>{story.patientName}</h3>
            <p>{story.recoveryDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessStories;
