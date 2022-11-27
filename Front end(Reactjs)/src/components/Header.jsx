import React from 'react'
import Nav from './Nav';

function Header() {
  return (
    <div className='header'>
        <Nav/>
        <div className='intro'>
            <p>Looking for a Property..?</p>
            
            <h1><span>Buy</span> and <span>Sell</span> Properties</h1>
            <hr></hr>
            <p className='details'>
              Real Estate Property Portal 
            where Buyers and Builders can exchange information about properties quickly,  
            effectively and inexpensively at one place.
            Now customers will not have to go to the agents personally they
            can search for their desired home or apartment which
            suits their pocket. 
            </p>
            
            <a href='#' className='header-btn'>Details</a>
        </div>
    </div>
  )
}

export default Header;
