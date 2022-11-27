import React from 'react';
import Bproperty from './Bproperty';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';
function Properties() {
  return (
    <div className='Product'>
        <div className='p-heading'>
            <h3>Properties</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className='product-container'>
            <Bproperty image={pimage1} name="Flora-Heights" price="66-75L"/>
            <Bproperty image={pimage2} name="Finswell-Woods" price="98-99L"/>
            <Bproperty image={pimage3} name="Sky-Lakes" price="1.5-2CR"/>
            <Bproperty image={pimage3} name="Bellmonte" price="40-50L"/>
            <Bproperty image={pimage3} name="Sky-Magenta" price="1.2-1.3CR"/>
            <Bproperty image={pimage3} name="Platinum-Towers" price="1.0-1.1CR"/>
        </div>
    </div>
  )
}

export default Properties;
