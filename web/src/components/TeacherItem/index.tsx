import React from 'react';

import './styles.css';
// import whatsappIcon
import whasappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/56173070?s=460&u=4d174a79863bcdb487c36553e6dc4f6c0497f195&v=4"
          alt="João Pedro Alves"
        />
        <div>
          <strong>João Pedro Alves</strong>
          <span>Js</span>
        </div>
      </header>
      <p>
        Entusiasta de Devenvolvimento de games e pra web.
        <br></br>
        Gosto de construir aplicações interativas e atraentes para o usuário,
        para que o mesmo tenha uma boa experiência usando um site feito por mim.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whasappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
