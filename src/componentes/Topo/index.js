import React from "react";

import './topo.css';
import '../../App.css';

export default function Topo(){
    return(
        <header>
            <div className="limitar-secao">
                <img src="assets/logo.png" alt="logo" />
                <nav >
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>
            
        </header>
    )
}