import React from 'react';
import lungsIcon from '../../../assets/lungs.png';
import teethIcon from '../../../assets/theeth.png';
import boneIcon from '../../../assets/bone.png';
import './HealthStatusCards.css';

const data = [
  { label: 'Lungs', date: '26 Okt 2021', status: 'red', fill: 60 },
  { label: 'Teeth', date: '26 Okt 2021', status: 'green', fill: 100 },
  { label: 'Bone', date: '26 Okt 2021', status: 'orange', fill: 80 },
];

const iconMap = {
  Lungs: lungsIcon,
  Teeth: teethIcon,
  Bone: boneIcon,
};

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {data.map(({ label, date, status, fill }) => (
        <div key={label} className={`health-card ${status}`}>
          <div className="health-info">
          <div className='health-icon-container'>
          <img src={iconMap[label]} alt={label} className="health-icon" />
            <p>{label}</p>
            </div>
            <small>{date}</small>
            <div className="health-bar">
              <div
                className={`health-bar-fill ${status}`}
                style={{ width: `${fill}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
