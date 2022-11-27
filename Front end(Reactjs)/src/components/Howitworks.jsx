import React from 'react'
import Home from './Nav';

function Howitworks() {
  return (
    <div>
        <div className= 'how-it-works'>
            
            <div className= 'container'>
            
                <h2>How it Works</h2>
                <div className= 'flex'>

                    <div>
                        <span className= 'fas fa-home'></span>
                        <h4>Find a Property</h4>
                        <p>Search for your Dream House.</p>
                    </div>

                    <div>
                        <span className= 'fas fa-chart-line'></span>
                        <h4>Appointment</h4>
                        <p>Book your Appointment with one tap.</p>
                    </div>

                    <div>
                        <span className= 'fas fa-rupee-sign'></span>
                        <h4>Buy a Property</h4>
                        <p>You are very close from buying your Dream House.</p>
                    </div>

                    
                </div>
            </div>
        </div>

        
      
    </div>
  )
}

export default Howitworks
