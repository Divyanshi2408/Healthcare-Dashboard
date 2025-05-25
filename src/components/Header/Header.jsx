// import React from 'react';
// import {FiSearch, FiPlus} from 'react-icons/fi'
// import {MdNotifications} from 'react-icons/md'
// import avtar from '../../assets/avtar.png'
// import './Header.css'

// const Header = () =>{
//     return(
//     <header className='header'>
//         <div className='logo'>
//             <p>Health<span>Care.</span></p>
//         </div>
//         <div className='search-bar'>
//         <div className='search'>
//             <FiSearch className='search-icon'/>
//             <input placeholder='Search' type='text'></input>
//             </div>
//              <div >
//                 <MdNotifications className='bell-icon'/>
//         </div>
//         </div>
       
//         <div className='header-right'>
            
//             <div className='profile'>
//                 <img src={avtar} alt='avtar'></img>
//             </div>
//              <div className='plus-icon'>
//                 <FiPlus className='plus'/>
//         </div>
//         </div>
//     </header>
//     )
// }

// export default Header

// import React, { useState } from 'react';
// import { FiSearch, FiPlus, FiMenu, FiX } from 'react-icons/fi';
// import { MdNotifications } from 'react-icons/md';
// import avtar from '../../assets/avtar.png';
// import './Header.css';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
//       <div className='logo'>
//         <p>Health<span>Care.</span></p>
//       </div>

//       {/* Hamburger icon */}
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <FiX /> : <FiMenu />}
//       </div>

//       <div className='search-bar'>
//         <div className='search'>
//           <FiSearch className='search-icon' />
//           <input placeholder='Search' type='text' />
//         </div>
//         <div>
//           <MdNotifications className='bell-icon' />
//         </div>
//       </div>

//       <div className='header-right'>
//         <div className='profile'>
//           <img src={avtar} alt='avtar' />
//         </div>
//         <div className='plus-icon'>
//           <FiPlus className='plus' />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';
// import { FiBell, FiPlus, FiMenu } from 'react-icons/fi';
// import './Header.css';

// const Header = ({ toggleSidebar }) => {
//   return (
//     <header className="header">
//       <div className="left-section">
//         <button className="menu-btn" onClick={toggleSidebar}>
//           <FiMenu />
//         </button>
//         <h2 className="logo">Healthcare.</h2>
//       </div>

//       <div className="search-bar">Search...</div>

//       <div className="right-section">
//         <FiBell className="icon" />
//         <div className="user-profile">
//           <img src="/avatar.png" alt="User" />
//           <span>John Doe</span>
//         </div>
//         <FiPlus className="icon add-btn" />
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { MdNotifications } from 'react-icons/md';
import avatar from '../../assets/avtar.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <p>Health<span>Care.</span></p>
      </div>

      {/* Search & Notification */}
      <div className="search-bar">
        <div className="search">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <MdNotifications className="bell-icon" />
      </div>

      {/* Right Side: Avatar + Add */}
      <div className="header-right">
        <div className="profile">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="plus-icon">
          <FiPlus className="plus" />
        </div>
      </div>
    </header>
  );
};

export default Header;
