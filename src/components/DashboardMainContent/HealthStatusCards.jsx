import React from 'react';
import '../../styles/App.css';

const data = [
  { label: 'Lungs', date: '26 Okt 2021', status: 'red' },
  { label: 'Teeth', date: '26 Okt 2021', status: 'green' },
  { label: 'Bone', date: '26 Okt 2021', status: 'orange' },
];

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {data.map(({ label, date, status }) => (
        <div key={label} className={`health-card ${status}`}>
          <p>{label}</p>
          <small>{date}</small>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
