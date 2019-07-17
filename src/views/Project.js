import React from "react"
import car from "../images/car.svg"
import { Link } from "gatsby"

const Project = () => (
  // Nosso projeto consiste em um protótipo de veículo elétrico a bateria, que
  //   conta com sistemas elétricos de alta eficiência, um sistema de controle
  //   complexo que melhora a eficiência de acionamento do motor, um monocoque em
  //   fibra de carbono super leve em formato aerodinâmico, um sistema de
  //   telemetria em tempo real e um sistema semi-autônomo de direção.

  // How fast can it go?
  <section id="project" class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2 block-title-bw">Prototype Bolt</h1>
        <div class="columns">
          <div class="column">
            <h1 class="subtitle is-5">
              Nosso projeto consiste em um protótipo de veículo elétrico a
              bateria, que conta com sistemas elétricos de alta eficiência, um
              sistema de controle complexo que melhora a eficiência de
              acionamento do motor, um monocoque em fibra de carbono super leve
              em formato aerodinâmico, um sistema de telemetria em tempo real e
              um sistema semi-autônomo de direção.
            </h1>
            <p>
              <Link to="/construction" class="button is-primary is-outlined">
                Conheça mais
              </Link>
            </p>
          </div>
          <div class="column">
            <img class="image" src={car} alt="Protótipo Bolt" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Project
