import React from 'react';
import './AnatomySection.css';
import human from '../../../assets/human.png'

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      <img src={human} alt="Human Body" className="anatomy-img" />
      <div className="indicator heart">❤️ Healthy Heart</div>
      <div className="indicator leg">🦿 Healthy Leg</div>
    </div>
  );
};

export default AnatomySection;
