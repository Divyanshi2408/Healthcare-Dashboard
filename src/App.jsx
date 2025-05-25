// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar/Sidebar'
// import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent/DashboardMainContent'
// import './styles/App.css'
// import Header from './components/Header/Header'
// import AppLayout from './components/AppLayout/AppLayout'


// const App = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
  
//     const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   return (
//     <>
//       <div className="app-container">
//       {/* <Header /> */}
//      <Header toggleSidebar={toggleSidebar} />
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//       <div className="main-layout">
//         {/* <Sidebar /> */}
//         <DashboardMainContent />
//       </div>
//     </div>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent/DashboardMainContent';
import './styles/App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="app-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className="layout-wrapper">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="main-layout">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
};

export default App;
