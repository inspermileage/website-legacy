import React from "react"
import car from "../images/car.svg"
import { Link } from "gatsby"

const About = () => (
    <section id="about" class="hero is-medium">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-2 block-title-bw" id="about">
                    Quem somos?
                </h1>
                <div class="columns">
                    <div class="column">
                        <h1 class="subtitle is-5">
                            Somos um projeto sem fins lucrativos, formado por
                            alunos do Insper, voltado ao desenvolvimento de
                            tecnologias sustentáveis de mobilidade. Nosso
                            principal objetivo é aproximar os membros do projeto
                            de uma situação real de pesquisa e desenvolvimento.
                        </h1>
                        <h1 class="subtitle is-5">
                            Competimos no maior evento universitário de
                            eficiência energética do mundo, a Shell
                            Eco-Marathon, onde temos a oportunidade de testar
                            nosso projeto e validar nossas pesquisas.
                        </h1>
                        <p>
                            <Link
                                to="/about"
                                class="button is-primary is-outlined"
                            >
                                Conheça mais
                            </Link>
                        </p>
                    </div>
                    <div class="column">
                        <img class="image" src={car} alt="Prototype Bolt" />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About
