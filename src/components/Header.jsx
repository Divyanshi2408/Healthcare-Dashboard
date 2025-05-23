import React from 'react';
import {FiSearch, FiBell, FiPlus} from 'react-icons/fi'
import avtar from '../assets/avtar.avif'
import '../styles/App.css'

const Header = () =>{
    return(
    <header className='header'>
        <div className='logo'>
            <p>HealthCare</p>
        </div>
        <div className='search-bar'>
            <FiSearch className='search-icon'/>
            <input placeholder='Search' type='text'></input>
        </div>
        <div className='icon'>
                <FiBell/>
        </div>
        <div className='header-right'>
            
            <div className='profile'>
                <img src={avtar} alt='avtar'></img>
            </div>
             <div className='icon'>
                <FiPlus/>
        </div>
        </div>
    </header>
    )
}

export default Header