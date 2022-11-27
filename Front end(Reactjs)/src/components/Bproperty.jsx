import React from 'react';

function Bproperty(props) {
  return (
    <div className='p-box'>
        <img src={props.image} alt='product'/>
        <p> {props.name} </p>
        <a href='#' className='price'> {props.price} </a>
        <a href='#' className='buy-btn'>Book</a>

      
    </div>
  )
}

export default Bproperty;
