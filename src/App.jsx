import React from 'react'

import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent/DashboardMainContent'
import './styles/App.css'
import Header from './components/Header/Header'


const App = () => {
  return (
    <>
      <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
    </>
  )
}

export default App