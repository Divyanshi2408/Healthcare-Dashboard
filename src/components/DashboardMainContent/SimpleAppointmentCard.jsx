import React from 'react';

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className="appointment-card">
      <p>{title}</p>
      <small>{time}</small>
    </div>
  );
};


export default SimpleAppointmentCard;
