import React from "react"
import { Link } from "gatsby"

const Partners = () => (
    <section id="partners" class="hero is-medium">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-2 block-title-bw">Parceiros</h1>
                <div class="columns is-vcentered">
                    <div class="column">
                        <h1 class="subtitle is-5">
                            Para alcançar nossos objetivos, contamos com a ajuda
                            de empresas que acreditam no potencial do projeto e
                            compartilham a mesma visão que nós. Temos orgulho de
                            ser parceiros de:
                        </h1>
                        <Link
                            to="/partners"
                            class="button is-primary is-outlined"
                        >
                            Programa de parcerias
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Partners
