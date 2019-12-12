import React from "react"
import Layout from "../../components/Layout"

import SEO from "../../components/SEO"
import icon from "../../images/icons/icon.svg"

import SoftControlIcon from "../../images/icons/softcontrole.svg"
import EletronicIcon from "../../images/icons/eletronica.svg"
import MechanicIcon from "../../images/icons/mecanica.svg"

const EquipePage = () => (
  <Layout>
    <SEO title="Oops..." />
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 block-title-bw">Equipe 2020</h1>
          <h2 class="titles-team">Administrativo</h2>
          <div class="columns is-gapless">
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="names">Celine Mitu</h1>
              <h2 class="office">Administrativo</h2>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="names">Igor Seramisu</h1>
              <h2 class="office">Administrativo</h2>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="names">João Victor</h1>
              <h2 class="office">Administrativo</h2>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="names">Ramiro Pandullo</h1>
              <h2 class="office">Administrativo</h2>
            </div>
          </div>
          <div class="columns is-gapless">
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="names">Martim Ferreira José</h1>
              <h1 class="office">Líder de Software</h1>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="names">Guilherme Roccato</h1>
              <h1 class="office">Líder de Controle</h1>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="names">Felipe Scandiuzzi</h1>
              <h1 class="office">Líder de Mecânica</h1>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="names">Victor Hugo Leal</h1>
              <h1 class="office">Líder de Eletrônica</h1>
            </div>
          </div>
          <div class="columns is-gapless">
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="names">Lucas Fontenla</h1>
              <h1 class="office">Capitão da Equipe</h1>
            </div>
          </div>
          <h1 class="titles-team">Departamentos</h1>
          <div class="has-horizontal-scroll has-text-centered">
            <div class="scrolling-wrapper-flexbox">

              <div class="departaments">
                <figure class="images-team">
                  <img src={SoftControlIcon} alt="Software" />
                </figure>
                <h5 class="names">Software</h5>
                <h6 class="descriptions">A área de software é responsável por fazer isso aquilo e mais isso.</h6>
              </div>

              <div class="departaments">
                <figure class="images-team">
                  <img src={SoftControlIcon} alt="Controle" />
                </figure>
                <h5 class="names">Controle</h5>
                <h6 class="descriptions">A área de controle é responsável por fazer isso aquilo e mais isso.</h6>
              </div>
              <div class="padder-card " />
            </div>
          </div>
          <div class="has-horizontal-scroll has-text-centered">
            <div class="scrolling-wrapper-flexbox">

              <div class="departaments">
                <figure class="images-team">
                  <img src={MechanicIcon} alt="Mecânica" />
                </figure>
                <h5 class="names">Mecânica</h5>
                <h6 class="descriptions">A área de mecânica é responsável por fazer isso aquilo e mais isso.</h6>
              </div>

              <div class="departaments">
                <figure class="images-team">
                  <img src={EletronicIcon} alt="Eletrônica" />
                </figure>
                <h5 class="names">Eletrônica</h5>
                <h6 class="descriptions">A área de eletrônica é responsável por fazer isso aquilo e mais isso.</h6>
              </div>
              <div class="padder-card " />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default EquipePage
