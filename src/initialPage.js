import React from "react"
import Layout from "./components/Layout"
import SEO from "./components/SEO"
import Intro from "./views/Intro"
import IndexComponent from "./components/IndexComponent"

const InicialPage = () => (
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
                        <IndexComponent
                            link="/construction"
                            cssName="competition"
                            name="Projeto"
                        />

                        <IndexComponent
                            link="/prototypes"
                            cssName="projeto"
                            name="Protótipos"
                        />
                    </div>
                    <div class="tile is-vertical is-parent">
                        <IndexComponent
                            link="/2020/team"
                            cssName="team"
                            name="Equipe"
                        />
                        <IndexComponent
                            link="/partners"
                            cssName="partner"
                            name="Parceiros"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default InicialPage
