import React from 'react';
// import backIcon
import backIcon from '../../assets/images/icons/back.svg';

// import logoImg
import logoImg from '../../assets/images/logo.svg';

// import link
import { Link } from 'react-router-dom';

// import css
import './styles.css'

// interface
interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return(
  <header className="page-header">
  <div className="top-bar-container">
    <Link to="/">
      <img src={backIcon} alt="voltar" />
    </Link>
    <img src={logoImg} alt="Proffy" />
  </div>

  <div className="header-content">
    <strong>{props.title}</strong>
    {props.children}
  </div>

</header>
);
}

export default PageHeader;