import React from 'react';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import './DashboardOverview.css';

const DashboardOverview = () => {
  return (
    <>
    <div className="dashboard-header">
    <h4 className='dash-heading'>Dashboard</h4>
    <h4 className='week-heading'>This week </h4>
    </div>
    <div className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards />
    </div>
    </>
  );
};

export default DashboardOverview;
