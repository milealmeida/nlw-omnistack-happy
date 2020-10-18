import React from 'react';

import '../styles/pages/orphanage-success.css';
import '../styles/components/animations.css';

import imgSuccess from '../images/success.svg';
import { Link } from 'react-router-dom';

export default function OrphanageSuccess() {
    return (
       <div id="page-success">
           <div className="content">

            <h1 className="animate-up">Ebaaa!</h1>
            <p className="animate-up">O cadastro foi realizado com sucesso!</p>

            <Link to="/app" className="enter-app animate-up"> 
                Voltar para o mapa
            </Link>
           </div>
           <img className="animate-up" src={imgSuccess} alt="Cadastro Realizado!"/>
       </div> 
    );
}