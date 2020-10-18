import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';
import '../styles/components/animations.css';

import logoImg from '../images/logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" className="animate-up"/>

        <main>
          <h1 className="animate-up">Leve felicidade para o mundo</h1>
          <p className="animate-up">Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location animate-up">
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </div>

        <Link to="/app" className="enter-app animate-up"> 
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
