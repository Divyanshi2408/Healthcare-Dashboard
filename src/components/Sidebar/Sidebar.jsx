import React from 'react';
import {
  FiGrid, FiClock, FiCalendar, FiClipboard, FiBarChart2,
  FiFileText, FiMessageSquare, FiHelpCircle, FiSettings, FiX
} from 'react-icons/fi';
import './Sidebar.css';

const navItems = [
  {
    heading: 'General',
    items: [
      { icon: <FiGrid />, label: 'Dashboard' },
      { icon: <FiClock />, label: 'History' },
      { icon: <FiCalendar />, label: 'Calendar' },
      { icon: <FiClipboard />, label: 'Appoitments' },
      { icon: <FiBarChart2 />, label: 'Statistics' },
      { icon: <FiFileText />, label: 'Tests' },
    ],
  },
  {
    heading: 'Tools',
    items: [
      { icon: <FiMessageSquare />, label: 'Chat' },
      { icon: <FiHelpCircle />, label: 'Support' },
    ],
  },
  {
    heading: 'Settings',
    items: [
      { icon: <FiSettings />, label: 'Setting' },
    ],
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <FiX className="close-icon" onClick={toggleSidebar} />
      </div>
      <nav className="nav-items">
         {navItems.map((navItem,navIndex)=>(
                <div className='nav-items' key={navIndex}>
              <h4 className='nav-heading'>{navItem.heading}</h4>
                {
                   navItem.items.map((item, itemIndex) => (
                        <div className='nav-item' key={itemIndex}>
                           <span className='sidebar-icons'>{item.icon}</span>
                            <span className='sidebar-label'>{item.label}</span>
                        </div>
                   ))
                }
                </div>
           ))}
      </nav>
    </aside>
  );
};


export default Sidebar;
