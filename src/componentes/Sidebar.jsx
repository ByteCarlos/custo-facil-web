import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/src/componentes/img/educacaosergipe_logo.png" alt="Logo" />
      </div>
      <div className='seduc'>
        <h1>SEDUC</h1>
      </div>
      <ul className="menu">
        <li>
          <a href="#">
            <i className="fa fa-bar-chart"></i>
            <span>Financeiro</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-users"></i>
            <span>Usuários</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-cog"></i>
            <span>Configurações</span>
          </a>
        </li>
      </ul>
      <button className="logout">
        <i className="fas fa-sign-out-alt"></i>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;