import React from "react"
import Layout from "../components/Layout"

import SEO from "../components/SEO"
import Intro from "../views/Intro"
import About from "../views/About"
import Competition from "../views/Competition"
import Project from "../views/Project"
import Team from "../views/Team"
import Partners from "../views/Partners"

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
        <About />
        <Competition />
        <Project />
        <Team />
        <Partners />
    </Layout>
)

export default IndexPage
