import React from 'react';
// import backIcon
import backIcon from '../../assets/images/icons/back.svg';

// import logoImg
import logoImg from '../../assets/images/logo.svg';

// import style.css
// import './style.css';

// import link
import { Link } from 'react-router-dom';

function PageHeader() {
  return(
  <header className="page-header">
  <div className="top-bar-container">
    <Link to="/">
      <img src={backIcon} alt="voltar" />
    </Link>
    <img src={logoImg} alt="Proffy" />
  </div>

  <div className="header-content">
    <strong>Estes são os proffys disponíveis.</strong>
  </div>
</header>
);
}

export default PageHeader;