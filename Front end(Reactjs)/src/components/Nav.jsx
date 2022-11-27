import React, { useState } from 'react';
import logo from '../images/logo1.png';
const Nav = () => {
    const navStyles = {
        position: 'fixed',
        height: '60px',
        width: '100%',
        backgroundColor: 'grey',
        textAlign: 'center'
      }
    return (
        <div style={{ ...navStyles }}>
        <nav sticky="top" >

            <a href='#' className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            < input className = 'menu-btn' type='checkbox' id='menu-btn' />
            < label className = 'menu-icon' for='menu-btn' >
                <span className='nav-icon'></span>
            </label>
            
            <ul className='menu'>
                <li><a href='#' className='active'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Property</a></li>
            </ul>
            <a href='#' className='property'>Properties</a>
        </nav>
        </div>
        )
}
export default Nav;