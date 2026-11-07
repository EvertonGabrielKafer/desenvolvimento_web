import "./styles/utility.css"
import "./styles/header.css"
import Logo from "./assets/icons/logo.svg"
import Close from "./assets/icons/close.svg"
import Bom from "./assets/icons/carBom.svg"
import Ruim from "./assets/icons/carRuim.svg"
import Documento from "./assets/icons/carDocumento.svg"
import Star from "./assets/icons/star.svg"
import StarOut from "./assets/icons/star_out.svg"
import Menu from "./assets/icons/menu.svg"
import { useEffect, useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card.tsx"
import Carrossel from "./components/Carrosel.tsx";

import HeroRectangleOne from "./assets/images/rectangleOne.png";
import HeroRectangleTwo from "./assets/images/rectangleTwo.png";
import ProfileImageOne from "./assets/images/ProfileImageOne.png";
import ProfileImageTwo from "./assets/images/ProfileImageTwo.png";
import ProfileImageThree from "./assets/images/ProfileImageThree.png";

import "./styles/hero.css";
import "./styles/solution.css";
import "./styles/testimonials.css";

export default function Hone() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)}
                                                href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)}
                                                href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)}
                                                href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)}
                                                href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)}
                                                href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)}
                                                className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Relíquias sem muita qualidade e com procedência incerta?</h1>
                    <p>Está procurando um lugar onde você pode encontrar um carro da decada de 80, compra-lo e gastar o dinheiro de três carros novos para restaura-lo??? Este é o lugar!
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>


            <section className="container" id="solution">
                {<header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Uma vasta variedade!
                            </h2>
                        </span>
                    </span>
                    <p>
                        Você pode buscar por diversas formas para encontrar o seu <strong>projéto ideal</strong>,
                        que irá acabar com todas as suas econcomias e possívelmente o seu casamento!
                    </p>
                </header>}


                <section className="even-columns">
                    <Card src={Bom} h3="Bom estado" p1="Você pode encontrar diversos interessantes carros com documentação em dia e em um estado " p2="aceitável" p3=", mas é claro que sempre terá algo a ser feito entre eles." />

                    <Card src={Ruim} h3="Bem trabalhoso" p1="Caso você esteja procurando um desafio para gastar mais do seu precioso dinheirinho, aqui você poderá encontrar algumas opções em um estado mais  " p2="alarmante" p3=", mas ainda com doc ok" />

                    <Card src={Documento} h3="Doc atrasado" p1="Se você não tiver mais nada para fazer da vida, tiver tempo a perder e não tiver medo de lidar com carro de leilão, ou entrar na justiça para fazer um " p2="usucapião" p3=", está é a sua opção!" />

                </section>
            </section>



            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p className="p-header-testimonials">
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">

                        <Carrossel src={ProfileImageOne} src2={Star} src3={StarOut} p1="Comprei pelo site e gostei bastante! O carro é econômico, confortável e não precisei pedir dinheiro emprestado ao Seu Barriga para pagar. Agora só falta conseguir pagar as parcelas!" p2="Seu Madruga" p3="Empreendedor" />

                        <Carrossel src={ProfileImageTwo} src2={Star} src3={StarOut} p1="Comprei minha Brasília pelo site e estou muito satisfeito! O carro chegou em ótimo estado. Só espero que o Seu Madruga não bata a porta nele quando vier cobrar o aluguel!" p2="Seu Barriga" p3="Sindico de condomínio" />

                        <Carrossel src={ProfileImageThree} src2={Star} src3={StarOut} p1="Uma excelente experiência de compra! O veículo chegou em perfeitas condições. Dona Florinda certamente aprovaria minha escolha. Agora, só falta convidá-la para um passeio!" p2="Professor Girafales" p3="Professor" />

                    </div>


                    <div className="carousel-content">

                        <Carrossel src={ProfileImageOne} src2={Star} src3={StarOut} p1="Comprei pelo site e gostei bastante! O carro é econômico, confortável e não precisei pedir dinheiro emprestado ao Seu Barriga para pagar. Agora só falta conseguir pagar as parcelas!" p2="Seu Madruga" p3="Empreendedor" />

                        <Carrossel src={ProfileImageTwo} src2={Star} src3={StarOut} p1="Comprei minha Brasília pelo site e estou muito satisfeito! O carro chegou em ótimo estado. Só espero que o Seu Madruga não bata a porta nele quando vier cobrar o aluguel!" p2="Seu Barriga" p3="Sindico de condomínio" />

                        <Carrossel src={ProfileImageThree} src2={Star} src3={StarOut} p1="Uma excelente experiência de compra! O veículo chegou em perfeitas condições. Dona Florinda certamente aprovaria minha escolha. Agora, só falta convidá-la para um passeio!" p2="Professor Girafales" p3="Professor" />

                    </div>
                </section>
            </section>
        </>
    )
}