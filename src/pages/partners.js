import React from "react"
import Layout from "../components/Layout"

import InsperLogo from "../images/partners/insper.svg"
import AffariLogo from "../images/partners/affari.svg"
import AtteiLogo from "../images/partners/ateei.png"
import Eurobikelogo from "../images/partners/eurobike.png"
import Energisalogo from "../images/partners/energisa.jpg"
import SEO from "../components/SEO"

const partners = () => (
    <Layout>
        <SEO title="Parceiros" />
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2 block-title-bw">Parcerias</h1>
                    <div class="content">
                        <p>
                            Desde a criação do projeto, em 2018, temos como
                            objetivo criar um carro sustentável e eficiente, que
                            possa participar de diversas competições. É através
                            do apoio de nossas parcerias que estamos cada vez
                            mais próximos de atingí-lo.
                        </p>
                    </div>
                    <nav class="level">
                        <div class="level-item project-tile-bg">
                            <h1 class="title is-3 partner-cat">
                                PARCEIROS PLATINA
                            </h1>
                        </div>
                    </nav>
                    <div class="columns is-multiline is-centered">
                        <div class="column is-half">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image-platina">
                                        <a href="https://www.insper.edu.br/">
                                            <img
                                                src={InsperLogo}
                                                alt="Insper"
                                            />
                                        </a>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        O Insper é uma instituição sem fins
                                        lucrativos de ensino superior e pesquisa
                                        reconhecida como referência em
                                        Administração, Economia, Direito e
                                        Engenharia.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-half">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image-platina">
                                        <a href="https://www.eurobike.com.br">
                                            <img
                                                src={Eurobikelogo}
                                                alt="Eurobike"
                                            />
                                        </a>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        Criada em 2002, a eurobike é uma rede de
                                        concessionárias especializada em
                                        veículos premium e serviços
                                        personalizados de alta qualidade. Seu
                                        foco é fornecer ao consumidor a mellhor
                                        experiência possível dentro do setor
                                        automobilístico.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column is-half">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image-platina">
                                        <a href="https://www.ateei.com.br/">
                                            <img src={AtteiLogo} alt="Ateei" />
                                        </a>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        A Ateei Group é um grupo visto pelo
                                        mercado como referência em sua área. Ela
                                        tem como missão produzir placas e
                                        materiais eletrônicos de forma acessível
                                        a todos. Além disso, a Ateei realiza
                                        soluções de eletrônica com alta
                                        eficiência para terceiros.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="level">
                        <div class="level-item project-tile-bg">
                            <h1 class="title is-3 partner-cat">
                                PARCEIROS OURO
                            </h1>
                        </div>
                    </nav>
                    <div class="columns is-multiline is-centered">
                        <div class="column is-two-fifths">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image-ouro">
                                        <a href="https://www.energisa.com.br/">
                                            <img
                                                src={Energisalogo}
                                                alt="Energisa"
                                            />
                                        </a>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        Uma das maiores distribuidoras de
                                        energia elétrica do país, a Energisa é
                                        responsável por proporcionar ao
                                        consumidor soluções inovadoras e
                                        sustentáveis, buscando sempre facilitar
                                        a vida de seus clientes.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="level">
                        <div class="level-item project-tile-bg">
                            <h1 class="title is-3 partner-cat">APOIO</h1>
                        </div>
                    </nav>
                    <div class="columns is-multiline is-centered">
                        <div class="column is-two-fifths">
                            <div class="card">
                                <figure class="image-apoio">
                                    <a href="https://www.facebook.com/affaricatering/">
                                        <img src={AffariLogo} alt="Affari" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default partners
