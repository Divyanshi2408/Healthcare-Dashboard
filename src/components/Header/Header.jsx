import React from 'react';
import { FiSearch, FiPlus, FiMenu } from 'react-icons/fi';
import { MdNotifications } from 'react-icons/md';
import avtar from '../../assets/avtar.png';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
    <div className='header-left'>
      <div className="logo-section">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FiMenu />
        </button>

        <div className="logo">
          <p>Health<span>Care.</span></p>
        </div>
      </div>

      <div className="search-bar">
        <div className="search">
          <FiSearch className="search-icon" />
          <input placeholder="Search" type="text" />
        </div>
        <MdNotifications className="bell-icon" />
      </div>
</div>
      <div className="header-right">
        <div className="profile">
          <img src={avtar} alt="avatar" />
        </div>
        <div className="plus-icon">
          <FiPlus className="plus" />
        </div>
      </div>
    </header>
  );
};

export default Header;
