import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent'
import './styles/App.css'


const App = () => {
  return (
    <>
     {/* <Header/>
     <Sidebar/>
     <DashboardMainContent/> */}
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