import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  // Mock data: each day has an array of bar heights and colors
  const weekData = [
    [{ h: 40, c: '#ccc' }, { h: 50, c: '#00d4ff' }, { h: 30, c: '#5d5fef' }],
    [{ h: 60, c: '#ccc' }, { h: 35, c: '#5d5fef' }, { h: 25, c: '#00d4ff' }],
    [{ h: 50, c: '#ccc' }, { h: 30, c: '#00d4ff' }, { h: 20, c: '#5d5fef' }],
    [{ h: 60, c: '#ccc' }, { h: 40, c: '#00d4ff' }, { h: 35, c: '#5d5fef' }],
    [{ h: 50, c: '#ccc' }, { h: 65, c: '#00d4ff' }, { h: 25, c: '#5d5fef' }],
    [{ h: 70, c: '#ccc' }, { h: 30, c: '#5d5fef' }, { h: 40, c: '#00d4ff' }],
    [{ h: 45, c: '#ccc' }, { h: 55, c: '#00d4ff' }, { h: 20, c: '#5d5fef' }],
  ];

  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="activity-feed">
      <div className="activity-heading">
        <h4>Activity</h4>
        <p>3 appointments on this week</p>
      </div>
      <div className="bar-chart">
        {weekData.map((bars, dayIndex) => (
          <div key={days[dayIndex]} className="bar-day">
            <div className="bar-stack">
              {bars.map((bar, i) => (
                <div
                  key={i}
                  className="bar"
                  style={{
                    height: `${bar.h}px`,
                    backgroundColor: bar.c,
                  }}
                />
              ))}
            </div>
            <small>{days[dayIndex]}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
