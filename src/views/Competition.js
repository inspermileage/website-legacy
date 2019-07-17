import React from "react"
import shell from "../images/shellecomarathon.svg"
import { Link } from "gatsby"

const Competition = () => (
  // Shellecoquê?

  // Shell Eco-marathon é uma competição organizada pela petrolífera Shell, que
  // desafia estudantes de todo mundo a projetarem, construírem e pilotarem
  // veículos mais eficientes em termos de energia.

  <div class="SectionBlock">
    <div id="competitionAngled">
      <div class="competitionBG" />
    </div>

    <section id="competition" class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 block-title-wb">Shell oquê?</h1>
          <div class="columns">
            <div class="column">
              <img src={shell} alt="Shell Eco Marathon Logo" />
            </div>
            <div class="column">
              <h1 class="subtitle is-5 has-text-white">
                Shell Eco-marathon é uma competição organizada pela petrolífera
                Shell, que desafia estudantes de todo mundo a projetarem,
                construírem e pilotarem veículos mais eficientes em termos de
                energia.
              </h1>
              <p>
                <Link to="/construction" class="button is-primary is-outlined">
                  Conheça mais
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Competition
