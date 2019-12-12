import React from "react"
import Layout from "../components/Layout"
import john from "../images/404.gif"

import SEO from "../components/SEO"

const NotFoundPage = () => (
    <Layout>
        <SEO
            title="404"
            description="Insper Mileage Not Found"
            lang="pt-br"
            meta="Insper"
        />
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2 block-title-bw">404</h1>
                    <div class="columns">
                        <div class="column">
                            <h1 class="subtitle is-5">
                                Está página não existe. Você por acaso se
                                perdeu?
                            </h1>
                        </div>
                        <div class="column">
                            <figure>
                                <img
                                    src={john}
                                    alt="Gif John Travolta perdido"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default NotFoundPage
