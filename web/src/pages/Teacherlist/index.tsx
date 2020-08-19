// import React
import React from 'react';

import { Link } from 'react-router-dom';

// import backIcon
import backIcon from '../../assets/images/icons/back.svg';

// import logoImg
import logoImg from '../../assets/images/logo.svg';

// import style.css
import './styles.css';

// import page header
import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';

function TeachersList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis.">
        <Input name="subject" label="Matéria" />
        <Input name="week_day" label="Dia da semana" />
        <Input type="time" name="time" label="Hora" />
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeachersList;
