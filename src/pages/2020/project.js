import React from "react"
import Layout from "../../components/Layout"
import ImageGallery from "react-image-gallery"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../../components/SEO"

import prototype_sketch from "../../images/2020/project/prototype-sketch.png"
import prototype1 from "../../images/2020/project/prototype-1.png"
import prototype1_thumb from "../../images/2020/project/prototype-1-thumb.png"
import prototype2 from "../../images/2020/project/prototype-2.png"
import prototype2_thumb from "../../images/2020/project/prototype-2-thumb.png"
import prototype3 from "../../images/2020/project/prototype-3.png"
import prototype3_thumb from "../../images/2020/project/prototype-3-thumb.png"

import icon from "../../images/icons/icon.svg"

const images = [
    {
        original: prototype1,
        thumbnail: prototype1_thumb,
    },
    {
        original: prototype2,
        thumbnail: prototype2_thumb,
    },
    {
        original: prototype3,
        thumbnail: prototype3_thumb,
    },
]

class Galeria extends React.Component {
    render() {
        return (
            <ImageGallery
                items={images}
                showPlayButton={false}
                autoPlay={true}
                additionalClass={"gallery-color"}
            />
        )
    }
}

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
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-12">
                            <div class="tile">
                                <div class="tile is-parent is-vertical">
                                    <article class="tile is-child">
                                        <h1 class="title is-2 block-title-bw">
                                            Protótipo Bolt - 2020
                                        </h1>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo
                                        enim ipsam voluptatem quia voluptas sit
                                        aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt. Neque
                                        porro quisquam est, qui dolorem ipsum
                                        quia dolor sit amet, consectetur,
                                        adipisci velit, sed quia non numquam
                                        eius modi tempora incidunt ut labore et
                                        dolore magnam aliquam quaerat
                                        voluptatem.
                                    </article>

                                    <article class="tile is-child">
                                        <Galeria></Galeria>
                                    </article>
                                </div>
                                <div class="tile is-parent is-vertical">
                                    <article class="tile is-child">
                                        <h3 class="title is-4 block-title-bw">
                                            Especificações
                                        </h3>
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <th>Autonomia</th>
                                                    <td>__ km</td>
                                                </tr>
                                                <tr>
                                                    <th>Consumo</th>
                                                    <td>170km/kWh</td>
                                                </tr>
                                                <tr>
                                                    <th>Bateria</th>
                                                    <td>24V 5000mAh</td>
                                                </tr>
                                                <tr>
                                                    <th>Motor</th>
                                                    <td>Brushless 24V 350W</td>
                                                </tr>
                                                <tr>
                                                    <th>Sistema de direção</th>
                                                    <td>
                                                        Geometria de Ackerman
                                                        com Pitman Arm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Transmissão</th>
                                                    <td>
                                                        18:1, fixa e por
                                                        engrenagens
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Chassi</th>
                                                    <td>Tubular em alumínio</td>
                                                </tr>
                                                <tr>
                                                    <th>Carenagem</th>
                                                    <td>
                                                        Fibra de carbono e
                                                        policarbonato
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Peso</th>
                                                    <td>30 kg</td>
                                                </tr>
                                                <tr>
                                                    <th>Telemetria</th>
                                                    <td>
                                                        Em tempo real com
                                                        dashboard na nuvem
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="administrativo" class="title is-4 block-title-bw ">
                        Administrativo
                    </h3>
                    <div class="columns">
                        <div class="column">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                            </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="controle" class="title is-4 block-title-bw ">
                        Controle
                    </h3>
                    <div class="columns">
                        <div class="column">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                            </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="eletronica" class="title is-4 block-title-bw">
                        Eletrônica
                    </h3>
                    <div class="columns">
                        <div class="column">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                            </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="mecanica" class="title is-4 block-title-bw">
                        Mecânica
                    </h3>
                    <div class="columns">
                        <div class="column">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="software" class="title is-4 block-title-bw">
                        Software
                    </h3>
                    <div class="columns">
                        <div class="column">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </Layout >
)

export default Project
