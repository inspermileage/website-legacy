import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Intro = () => (
    <div class="SectionBlock">
        <div id="introAngled">
            <div class="introBG" />
        </div>

        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-9">
                            <h2 class="title is-2 has-text-white">
                                Aproximando estudantes do Insper de uma situação
                                real de pesquisa e desenvolvimento de
                                tecnologias voltadas para mobilidade sustentável
                            </h2>
                            <p>
                                <AnchorLink
                                    class="button is-white is-outlined"
                                    href="#about"
                                >
                                    Conheça mais
                                </AnchorLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default Intro
