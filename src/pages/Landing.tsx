import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import '../styles/pages/landing.css';
import logo from '../assets/logo.svg';



function Landing() {
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logo} alt="Happy"/>
          <main>
            <h1>Bringing happyness to the </h1>
            <p>Visit kids and make them happy!</p>
          </main>
          <div className="location">
            <strong>Auburn</strong>
            <span>Alabama</span>
          </div>
        <Link to="app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
        </Link>
        </div>
      </div> 
    );
}

export default Landing;