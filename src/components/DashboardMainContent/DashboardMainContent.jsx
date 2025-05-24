import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import Sidebar from '../Sidebar';
import '../../styles/App.css';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="dashboard-left">
        <Sidebar />
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className="dashboard-right">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
