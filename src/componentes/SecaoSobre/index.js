import React from "react";

import './secaoSobre.css';
import '../../App.css';

export default function SecaoSobre(){
    return(
        <section id="sobre">
            <div className="limitar-secao">
                <h1>QUEM SOMOS NÓS?</h1>
                <p className="primeiro-paragrafo">
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixa.
                </p>
                <div className="cards-sobre">
                    <img src="assets/loja.png" alt="loja"></img>
                    <div className="card-sobre">
                        <h4>NOSSAS FILIAIS</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card-sobre">
                        <h4>ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img src="assets/atendimento.png" alt="atendimento"></img>
                </div>
            </div>
        </section>
    )
}