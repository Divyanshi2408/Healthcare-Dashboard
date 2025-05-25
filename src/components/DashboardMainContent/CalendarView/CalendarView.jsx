import React from 'react';
import './CalendarView.css';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h4>October 2021</h4>
        <div className="nav-arrows">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="calendar-week">
        {[
          { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
          { day: 'Tue', date: 26, times: ['08:00', '09:00', '10:00'], activeTime: '09:00' },
          { day: 'Wed', date: 27, times: ['10:00', '12:00', '13:00'] },
          { day: 'Thu', date: 28, times: ['11:00'] },
          { day: 'Fri', date: 29, times: ['14:00', '16:00'] },
          { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'] },
          { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'] },
        ].map(({ day, date, times, activeTime }, index) => (
          <div className="calendar-day" key={index}>
            <div className={`day-box ${activeTime ? 'active' : ''}`}>
              <p>{day}</p>
              <h5>{date}</h5>
            </div>
            {times.map((time, i) => (
              <p key={i} className={`time-slot ${time === activeTime ? 'highlight' : ''}`}>
                {time}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="appointments">
        <div className="appointment-card dentist">
          <p><strong>Dentist 🦷</strong></p>
          <p>09:00–11:00</p>
          <p>Dr. Cameron Williamson </p>
        </div>
        <div className="appointment-card physio">
          <p><strong>Physiotherapy Appointment 🏋️</strong></p>
          <p>11:00–12:00</p>
          <p>Dr. Kevin Djones </p>
        </div>
      </div>
    </div>
  );
};


export default CalendarView;
