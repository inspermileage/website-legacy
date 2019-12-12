import React from "react"
import Layout from "../components/Layout"
import cat from "../images/construction.gif"

import SEO from "../components/SEO"

const ConstructionPage = () => (
    <Layout>
        <SEO title="Oops..." />
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2 block-title-bw">Oops...</h1>
                    <div class="columns">
                        <div class="column">
                            <h1 class="subtitle is-5">
                                Desculpa, ainda estamos acertando os últimos
                                detalhes do site.
                            </h1>
                        </div>
                        <div class="column">
                            <figure>
                                <img
                                    src={cat}
                                    alt="Gif de um gato programando"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default ConstructionPage
