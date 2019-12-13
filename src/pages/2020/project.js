import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

import SEO from "../../components/SEO"

const Project = () => (
    <Layout>
        <SEO
            title="Protótipo Bolt"
            description="Insper Mileage protótipo Bolt"
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
                    <h1 class="title is-2 block-title-bw">Protótipo Bolt</h1>
                    <p>Conteúdo</p>
                </div>
            </div>
        </section>
    </Layout>
)

export default Project
