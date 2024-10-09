import React from "react";
import logo from '../../assets/img/educacaosergipe_logo.png'
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="header-logo">
                <img src={logo} alt=""  />
                <h1>SEDUC</h1>
            </div>
        </header>
    );
}