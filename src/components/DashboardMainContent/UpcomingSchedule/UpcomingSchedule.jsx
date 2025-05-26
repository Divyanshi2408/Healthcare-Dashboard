import React from 'react';
import SimpleAppointmentCard from '../SimpleAppointmentCard';
import './UpcomingSchedule.css'

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h4>The Upcoming Schedule</h4>
      <div>
        <h5>On Thursday</h5>
        <div className='schedule-cards'>
        <SimpleAppointmentCard title="Health checkup complete  💉" time="11:00 AM" />
        <SimpleAppointmentCard title="Ophthalmologist  👁" time="14:00 PM" />
        </div>
        <h5>On Saturday</h5>
        <div className='schedule-cards'>
        <SimpleAppointmentCard title="Cardiologist  🧡" time="12:00 AM" />
        <SimpleAppointmentCard title="Neurologist  👩‍⚕️" time="16:00 PM" />
      </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
