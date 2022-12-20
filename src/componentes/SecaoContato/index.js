import React from "react";

import './secaoContato.css';

export default function SecaoContato(){
    return(
        <section id="contato">
            <div className="limitar-secao">
                <div>
                    <h2>FALE CONOSCO</h2>
                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>
                <div className="fale-conosco">
                    <div className="contato-conteudo">
                        <h3>Contato</h3>
                        <div>
                            <img src="assets/local.png" alt="local"/ >
                            <a href="#">Nova Iguaçu, RJ</a> 
                        </div>
                        <div>
                            <img src="assets/telefone.png" alt="telefone" />
                            <a href="tel:+552199999999">(21) 9999-9999</a> 
                        </div>
                        <div>
                            <img src="assets/email.png" alt="email" />
                            <a href="mailto:contato@oticavida.com">contato@oticavida.com</a> 
                        </div>
                    </div>
                    <div className="redes-sociais">
                        <h3>Nossas Redes Sociais</h3>
                        <div>
                            <img src="assets/fb.png" alt="facebook" />
                            <a href="#">/OticaVida</a> 
                        </div>
                        <div>
                            <img src="assets/ig.png" alt="instagram" />
                            <a href="#">@oticavidarj</a> 
                        </div>
                        <div>
                            <img src="assets/tt.png" alt="twitter" />
                            <a href="#">@oticavidarj</a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}