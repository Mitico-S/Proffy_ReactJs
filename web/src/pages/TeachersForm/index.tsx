// Import react
import React from 'react';

// import logoImg
import logoImg from '../../assets/images/logo.svg';

// import PageHeader
import PageHeader from '../../components/PageHeader';

function TeacherForm() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
        </fieldset>
      </main>
    </div>
  );
}

export default TeacherForm;
