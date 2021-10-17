import React from 'react';
import './Login.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);


export default function Formulario() {

    function login(){
        alert('Boas-vindas!!! Que seu dia seja lindoso!')
    }


  return (
    <div className="principal">
        <div className="containerLeft">
            <img src="https://cdn-icons-png.flaticon.com/512/977/977479.png" alt="form-icon"/>
        </div>

        <div className="containerRight">
            <form>
                <h2> Member Login</h2>
                <div className="login">
                <FontAwesomeIcon icon="envelope" className="icone" />
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="senha">
                    <FontAwesomeIcon icon="lock" className="icone" />
                    <input type="password" placeholder="Password"/>
                </div>
                <button className="botao" onClick={login()}>
                    LOGIN
                </button>
                <p className="esqueceu">
                    Forgot username/password?
                </p>
            </form>
            <p>Create your Account <FontAwesomeIcon icon="arrow-right" className="seta"/> </p>
        </div>

    </div>
);
}

