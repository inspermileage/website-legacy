import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Intro from "../views/Intro"

const IndexPage = () => (
    <Layout>
        <SEO
            title="Início"
            description="Insper Mileage"
            lang="pt-br"
            meta={[
                `Insper`,
                `projeto`,
                `protótipo`,
                `Insper Mileage`,
                `Shell Eco-Marathon`,
            ]}
        />
        <Intro />
        <div class="hero-body" id="about">
            <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-6 is-vertical is-parent">
                        <div class="tile is-child">
                            <Link to="/construction">
                                <article class="tile is-child notification is-primary competition-tile-bg">
                                    <h1 class="title is-2 block-title-wb">
                                        Projeto
                                    </h1>
                                </article>
                            </Link>
                        </div>
                        <div class="tile is-child">
                            <Link to="/prototypes">
                                <article class="tile is-child notification is-primary projeto-tile-bg">
                                    <h1 class="title is-2 block-title-wb">
                                        Protótipos
                                    </h1>
                                </article>
                            </Link>
                        </div>

                    </div>
                    <div class="tile is-vertical is-parent">
                        <div class="tile is-child">
                            <Link to="/2020/team">
                                <article class="tile is-child notification is-primary team-tile-bg">
                                    <h1 class="title is-2 block-title-wb">
                                        Equipe
                                    </h1>
                                </article>
                            </Link>
                        </div>

                        <div class="tile is-child">
                            <Link to="/partners">
                                <article class="tile is-child notification is-primary partner-tile-bg">
                                    <h1 class="title is-2 block-title-wb">
                                        Parceiros
                                    </h1>
                                </article>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
