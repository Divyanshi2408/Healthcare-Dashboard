import React from 'react';
import {FiSearch, FiPlus} from 'react-icons/fi'
import {MdNotifications} from 'react-icons/md'
import avtar from '../../assets/avtar.png'
import './Header.css'

const Header = () =>{
    return(
    <header className='header'>
        <div className='logo'>
            <p>Health<span>Care.</span></p>
        </div>
        <div className='search-bar'>
        <div className='search'>
            <FiSearch className='search-icon'/>
            <input placeholder='Search' type='text'></input>
            </div>
             <div >
                <MdNotifications className='bell-icon'/>
        </div>
        </div>
       
        <div className='header-right'>
            
            <div className='profile'>
                <img src={avtar} alt='avtar'></img>
            </div>
             <div className='plus-icon'>
                <FiPlus className='plus'/>
        </div>
        </div>
    </header>
    )
}

export default Header