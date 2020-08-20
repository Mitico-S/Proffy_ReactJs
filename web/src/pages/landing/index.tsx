// import react
import React, { useState, useEffect } from 'react';

// import logo
import logoImg from '../../assets/images/logo.svg';

// import landing img
import landingImg from '../../assets/images/landing.svg';

// import icons
import studyIcon from '../../assets/images/icons/study.svg';

// import classIcom
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

// import purple heart icoan
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

// import style.css
import './style.css';

// import Link
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="study icon" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="study icon" />
            Dar aula
          </Link>
        </div>

        <span className="total connections">
          Total de {totalConnections} conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="coração roxo"></img>
        </span>
      </div>
    </div>
  );
}

export default Landing;
