import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import prototype_2020 from "../images/car.svg"

import SEO from "../components/SEO"

const Project = () => (
    <Layout>
        <SEO
            title="Projeto"
            description="Insper Mileage projeto"
            lang="pt-br"
            meta={[
                `Insper`,
                `projeto`,
                `protótipo`,
                `Insper Mileage`,
                `Shell Eco-Marathon`,
            ]}
        />
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2 block-title-bw">Projeto</h1>
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="heading">Protótipos</p>
                                <p class="title">1</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="heading">KW consumidos</p>
                                <p class="title">0</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="heading">Km percorridos</p>
                                <p class="title">0</p>
                            </div>
                        </div>
                    </nav>
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-12">
                            <Link to="/2020/project">
                                <div class="tile">
                                    <div class="tile is-parent is-vertical">
                                        <article class="tile is-child notification is-primary project-tile-bg">
                                            <p class="title">Bolt - 2020</p>
                                            <p class="subtitle">
                                                Faster than a lightning...
                                            </p>
                                            <div class="content">
                                                <div class="columns">
                                                    <div class="column">
                                                        O protótipo Bolt
                                                        consiste em um protótipo
                                                        de veículo elétrico a
                                                        bateria, que conta com
                                                        sistemas elétricos de
                                                        alta eficiência, um
                                                        sistema de controle
                                                        complexo que melhora a
                                                        eficiência de
                                                        acionamento do motor, um
                                                        chassi de alumínio e uma
                                                        carenagem de fibra de
                                                        carbono super leve em
                                                        formato aerodinâmico, um
                                                        sistema de telemetria em
                                                        tempo real.
                                                    </div>
                                                    <div class="column">
                                                        <figure>
                                                            <img
                                                                src={
                                                                    prototype_2020
                                                                }
                                                                alt="Imagem do protótipo Bolt"
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tags are-small">
                                                <span class="tag is-light">
                                                    Light
                                                </span>
                                                <span class="tag is-black">
                                                    Chassi
                                                </span>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default Project
