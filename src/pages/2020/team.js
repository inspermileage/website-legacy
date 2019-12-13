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
          <h2 class="is-size-4 titles-team">Administrativo</h2>
          <div class="columns is-gapless">
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="is-size-5 names">Celine Mitu</h1>
              <h2 class="is-size-6 office">Administrativo</h2>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="is-size-5 names">Igor Seramisu</h1>
              <h2 class="is-size-6 office">Administrativo</h2>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="is-size-5 names">João Victor</h1>
              <h2 class="is-size-6 office">Administrativo</h2>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="is-size-5 names">Ramiro Pandullo</h1>
              <h2 class="is-size-6 office">Administrativo</h2>
            </div>
          </div>
          <div class="columns is-gapless">
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="is-size-5 names">Martim Ferreira José</h1>
              <h1 class="is-size-6 office">Líder de Software</h1>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="is-size-5 names">Guilherme Roccato</h1>
              <h1 class="is-size-6 office">Líder de Controle</h1>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="is-size-5 names">Felipe Scandiuzzi</h1>
              <h1 class="is-size-6 office">Líder de Mecânica</h1>
            </div>
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="is-size-5 names">Victor Hugo Leal</h1>
              <h1 class="is-size-6 office">Líder de Eletrônica</h1>
            </div>
          </div>
          <div class="columns is-gapless">
            <div class="column">
              <img class="images-team" src={icon} alt="Ícone Mileage" />
              <h1 class="is-size-5 names">Lucas Fontenla</h1>
              <h1 class="is-size-6 office">Capitão da Equipe</h1>
            </div>
          </div>
          <h1 class="is-size-4 titles-team">Departamentos</h1>
          <div class="has-horizontal-scroll has-text-centered">
            <div class="scrolling-wrapper-flexbox">
              <div class="departaments">
                <figure class="images-team">
                  <img src={SoftControlIcon} alt="Software" />
                </figure>
                <h5 class="is-size-4 names">Software</h5>
                <h6 class="is-size-5 descriptions">Área responsável por estabelecer o meio de comunicação dos dados com o piloto, para que possa auxiliá-lo na pista. Ademais, 
                também mantenedor </h6>
              </div>

              <div class="departaments">
                <figure class="images-team">
                  <img src={SoftControlIcon} alt="Controle" />
                </figure>
                <h5 class="is-size-4 names">Controle</h5>
                <h6 class="is-size-5 descriptions">A área de controle é responsável por fazer isso aquilo e mais isso.</h6>
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
                <h5 class="is-size-4 names">Mecânica</h5>
                <h6 class="is-size-5 descriptions">A área de mecânica é responsável por fazer isso aquilo e mais isso.</h6>
              </div>

              <div class="departaments">
                <figure class="images-team">
                  <img src={EletronicIcon} alt="Eletrônica" />
                </figure>
                <h5 class="is-size-4 names">Eletrônica</h5>
                <h6 class="is-size-5 descriptions">A área de eletrônica é responsável por fazer isso aquilo e mais isso.</h6>
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
