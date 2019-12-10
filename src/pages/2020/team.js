import React from "react"
import Layout from "../../components/Layout"
// import cat from "../images/construction.gif"

import SEO from "../../components/SEO"
import shell from "../../images/shellecomarathon.svg"

const EquipePage = () => (
  <Layout>
    <SEO title="Oops..." />
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 block-title-bw">Equipe 2020</h1>
          <h2 class="title is-2 block-title-bw">Administrativo</h2>
          <div class="columns is-gapless">
            <div class="column">
              <img src={shell} alt="Shell Eco Marathon Logo" />
              <h1 class="subtitle is-5">Celine Mitu</h1>
            </div>
            <div class="column">
              <img src={shell} alt="Shell Eco Marathon Logo" />
              <h1 class="subtitle is-5">Igor Seramisu</h1>
            </div>
            <div class="column">
              <img src={shell} alt="Shell Eco Marathon Logo" />
              <h1 class="subtitle is-5">João Victor</h1>
            </div>
            <div class="column">
              <img src={shell} alt="Shell Eco Marathon Logo" />
              <h1 class="subtitle is-5">Ramiro Pandullo</h1>
            </div>
          </div>
          <div class="columns is-gapless">
            <div class="column">
              <img src={shell} alt="Shell Eco Marathon Logo" />
              <h1 class="subtitle is-5">Celine Mitu</h1>
            </div>
            <div class="column">
              <img src={shell} alt="Shell Eco Marathon Logo" />
              <h1 class="subtitle is-5">Igor Seramisu</h1>
            </div>
            <div class="column">
              <img src={shell} alt="Shell Eco Marathon Logo" />
              <h1 class="subtitle is-5">João Victor</h1>
            </div>
            <div class="column">
              <img src={shell} alt="Shell Eco Marathon Logo" />
              <h1 class="subtitle is-5">Ramiro Pandullo</h1>
            </div>
          </div>
          <h1 class="title is-2 block-title-bw">Departamentos</h1>
        </div>
      </div>
    </section>
  </Layout>
)

export default EquipePage
