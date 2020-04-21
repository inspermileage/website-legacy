import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Intro from "../views/Intro"
import PageOptions from "../components/PageOptions"


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
                         <PageOptions
                          link= "/construction" 
                          cssName= "tile is-child notification is-primary competition-tile-bg"  
                          name= "Projeto"
                          />

                         <PageOptions 
                         link= "/prototypes" 
                         cssName= "tile is-child notification is-primary projeto-tile-bg"  
                         name= "Protótipos"
                         />

                    </div>
                    <div class="tile is-vertical is-parent">
                         <PageOptions
                         link= "/2020/team" 
                         cssName= "tile is-child notification is-primary team-tile-bg"  
                         name= "Equipe"
                         />
                         <PageOptions 
                         link= "/partners" 
                         cssName= "tile is-child notification is-primary partner-tile-bg"  
                         name= "Parceiros"
                         />
                         
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
