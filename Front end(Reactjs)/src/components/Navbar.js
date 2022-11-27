import React from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
import "./navbar.css";

const Navbar=()=>{
 return(
     <>
   <nav className="main-nav">
       {/* 1st logo part  */}
       <div className="logo">
          <h2>
          <span>S</span>🏘quare
            <span>f</span>🏙eets
          </h2>
        </div>
         {/* 2nd menu part  */}
         <div className="menu-link">
             <ul>
               <li>
                   <a href="#">Home</a>
               </li>
               <li>
                   <a href="#">Login</a>
               </li>
               <li>
                   <a href="#">Service</a>
               </li>
               <li>
                   <a href="#">Contact</a>
               </li>

             </ul>


         </div>
         <div className="social-media">
         <ul className="social-media-desktop">
            <li>
              <a
                href="#">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="#">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
         </div>
       
   </nav>
     {/* hero section  */}
       <section className="hero-section">
        <p>Welcome to </p>
        <h1>Squarefeets</h1>
      </section>
    </>
    


 );


};
export default Navbar;