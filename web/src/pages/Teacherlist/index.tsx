// import React
import React from 'react';

import { Link } from 'react-router-dom';

// import backIcon
import backIcon from '../../assets/images/icons/back.svg';

// import logoImg
import logoImg from '../../assets/images/logo.svg';

// import style.css
import './style.css';

// import page header
import PageHeader from '../../components/PageHeader';

function TeachersList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader />
    </div>
  );
}

export default TeachersList;
