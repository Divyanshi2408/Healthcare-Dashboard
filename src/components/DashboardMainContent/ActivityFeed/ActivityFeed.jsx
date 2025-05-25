import React from 'react';
import './ActivityFeed.css'; 

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h4>Activity</h4>
      <p>3 appointments on this week</p>
      <div className="bar-chart">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={day} className="bar-day">
            <div className="bar" style={{ height: `${(i + 1) * 10 + 30}px` }} />
            <small>{day}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
