// import react
import React from 'react';

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
function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="study icon" />
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="study icon" />
            Estudar
          </a>
        </div>

        <span className="total connections">
          Total de 200 conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="coração roxo"></img>
        </span>
      </div>
    </div>
  );
}

export default Landing;
