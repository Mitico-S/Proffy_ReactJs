// Import react
import React from 'react';
import warningIcon from '../../assets/images/icons/warning.svg';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
  const scheduleItems = [{ week_day: 0, from: '8:00 AM', to: '4:00 PM' }];
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
        </fieldset>
        <fieldset id="page-teacher-nhaa">
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Js', label: 'Js' },
              { value: 'Banco de dados', label: 'Banco de dados' },
              { value: 'Python', label: 'Python' },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
          <Input name="" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>
          <div className="schedule-item">
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'Js', label: 'Js' },
                { value: 'Banco de dados', label: 'Banco de dados' },
                { value: 'Python', label: 'Python' },
              ]}
            />
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
