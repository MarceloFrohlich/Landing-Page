import './style.css';
import Logo from '../assets/barbearia-logo.png';
import Dark from '../assets/moon.png';
import Light from '../assets/sun.png';
import { useState } from 'react';


export default function LandingPage() {

    const modoEscuro = 'modo-escuro';
    const modoClaro = 'modo-claro';

    const [NovoEstilo, setNovoEstilo] = useState(modoClaro);
    const [NovoTxt, setNovoTxt] = useState('Dark');
    const [NovaImg, setNovaImg] = useState(Dark)

    const alterarEstilo = () =>{
        if(NovoEstilo === modoClaro) {
            setNovoEstilo(modoEscuro)
            setNovoTxt('Light')
            setNovaImg(Light)
        } else {
            setNovoEstilo(modoClaro)
            setNovoTxt('Dark')
            setNovaImg(Dark)
        }


    }

    return (
        <body className={NovoEstilo}>
            <div>
                <section className="topo limitar-secao">
                    <img className="logo" src={Logo}></img>
                    <div className='botao'>
                        <button onClick={alterarEstilo}>
                            <img className='img-botao' src={NovaImg}></img>
                            {NovoTxt}
                        </button>
                    </div>
                </section>

                <section className="banner">
                    <p></p>
                </section>

                <section className="limitar-secao texto">
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p className="subtitulo">Nossa barbearia sempre oferece profissionais qualificados e estamos prontos para suprir as suas maioires expectativas.</p>
                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui teos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca será desapontado.</p>
                    <p className="assinatura">S. Kelly</p>
                </section>
            </div>
        </body>
    );
}