// import React
import React from 'react';

// import style.css
import './styles.css';

// import page header
import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeachersList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis.">
        <Select
          name="subject"
          label="Matéria"
          options={[
            { value: 'Js', label: 'Js' },
            { value: 'Banco de dados', label: 'Banco de dados' },
            { value: 'Python', label: 'Python' },
          ]}
        />
        <Select
          name="week_day"
          label="Dia da semana"
          options={[
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-Feira' },
            { value: '2', label: 'Terça-Feira' },
            { value: '3', label: 'Quarta-Feira' },
            { value: '4', label: 'Quinta-Feira' },
            { value: '5', label: 'Sexta-Feira' },
            { value: '6', label: 'Domingo' },
          ]}
        />
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
