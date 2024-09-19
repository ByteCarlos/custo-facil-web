import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faChartBar, faChartSimple, faCoffee, faCog, faSignOut, faSignOutAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="container">
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
                <i><FontAwesomeIcon icon={faChartSimple}></FontAwesomeIcon></i>
                <span>Financeiro</span>
            </a>
            </li>
            <li>
            <a href="#">
                <i><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></i>
                <span>Usuários</span>
            </a>
            </li>
            <li>
             <a href="#">
                <i><FontAwesomeIcon icon={faCog}></FontAwesomeIcon></i>
                <span>Configurações</span>
            </a>
            </li>
        </ul>
        <button className="logout">
            <i><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></i>
            <span>Logout</span>
        </button>
        </div>
        <div className="main-content">
            <div className="home-container">
            <div className="home">Home</div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;