// // import React from 'react';
// // import {FiGrid, FiClock, FiCalendar, FiClipboard, FiBarChart2, FiFileText, FiMessageSquare,FiHelpCircle, FiSettings} from 'react-icons/fi';
// // import './Sidebar.css';

// // const navItems =[
// //     {
// //         heading:'General',
// //         items:[
// //             {icon: <FiGrid/>, label: 'Dashboard'},
// //             {icon: <FiClock/>, label:'History'},
// //             {icon: <FiCalendar/>, label:'Calendar'},
// //             {icon: <FiClipboard/>, label:'Appoitments'},
// //             {icon: <FiBarChart2/>, label:'Statistics'},
// //             {icon: <FiFileText/>, label:'Tests'},
// //         ]
// //     },
// //      {
// //         heading:'Tools',
// //         items:[
// //             {icon: <FiMessageSquare/>, label:'Chat'},
// //             {icon: <FiHelpCircle/>, label:'Support'},
// //         ]
// //     },
  
// //      {
// //         heading:'settings',
// //         items:[
// //              {icon: <FiSettings/>, label:'Setting'},
// //         ]
// //     },
   
// // ];

// // const Sidebar =() =>{
// //     return(
// //         <aside className='sidebar'>
// //         <nav className='nav-container'>
// //             {navItems.map((navItem,navIndex)=>(
// //                 <div className='nav-items' key={navIndex}>
// //                 <h4 className='nav-heading'>{navItem.heading}</h4>
// //                 {
// //                     navItem.items.map((item, itemIndex) => (
// //                         <div className='nav-item' key={itemIndex}>
// //                             <span className='sidebar-icons'>{item.icon}</span>
// //                             <span className='sidebar-label'>{item.label}</span>
// //                         </div>
// //                     ))
// //                 }
// //                 </div>
// //             ))}
// //         </nav>
// //         </aside>
// //     )
// // }

// // export default Sidebar;

// import React, { useState } from 'react';
// import {
//   FiGrid, FiClock, FiCalendar, FiClipboard, FiBarChart2,
//   FiFileText, FiMessageSquare, FiHelpCircle, FiSettings,
//   FiMenu, FiX
// } from 'react-icons/fi';
// import './Sidebar.css';

// const navItems = [
//   {
//     heading: 'General',
//     items: [
//       { icon: <FiGrid />, label: 'Dashboard' },
//       { icon: <FiClock />, label: 'History' },
//       { icon: <FiCalendar />, label: 'Calendar' },
//       { icon: <FiClipboard />, label: 'Appoitments' },
//       { icon: <FiBarChart2 />, label: 'Statistics' },
//       { icon: <FiFileText />, label: 'Tests' },
//     ],
//   },
//   {
//     heading: 'Tools',
//     items: [
//       { icon: <FiMessageSquare />, label: 'Chat' },
//       { icon: <FiHelpCircle />, label: 'Support' },
//     ],
//   },
//   {
//     heading: 'Settings',
//     items: [
//       { icon: <FiSettings />, label: 'Setting' },
//     ],
//   },
// ];

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Hamburger toggle */}
//       <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <FiX /> : <FiMenu />}
//       </div>

//       {/* Sidebar drawer */}
//       <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <nav className="nav-container">
//           {navItems.map((navItem, navIndex) => (
//             <div className="nav-items" key={navIndex}>
//               <h4 className="nav-heading">{navItem.heading}</h4>
//               {navItem.items.map((item, itemIndex) => (
//                 <div className="nav-item" key={itemIndex}>
//                   <span className="sidebar-icons">{item.icon}</span>
//                   <span className="sidebar-label">{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;


import React from 'react';
import {
  FiGrid, FiClock, FiCalendar, FiClipboard, FiBarChart2,
  FiFileText, FiMessageSquare, FiHelpCircle, FiSettings, FiX
} from 'react-icons/fi';
import './Sidebar.css';

const navItems = [
  { label: 'Dashboard', icon: <FiGrid /> },
  { label: 'History', icon: <FiClock /> },
  { label: 'Calendar', icon: <FiCalendar /> },
  { label: 'Appointments', icon: <FiClipboard /> },
  { label: 'Statistics', icon: <FiBarChart2 /> },
  { label: 'Tests', icon: <FiFileText /> },
  { label: 'Chat', icon: <FiMessageSquare /> },
  { label: 'Support', icon: <FiHelpCircle /> },
  { label: 'Setting', icon: <FiSettings /> },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>General</h3>
        <FiX className="close-icon" onClick={toggleSidebar} />
      </div>
      <nav className="nav-items">
        {navItems.map((item, i) => (
          <div className="nav-item" key={i}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
