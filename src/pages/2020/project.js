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

import prototypev2_1 from "../../images/2020/project/prototypev2-1.png"
import prototypev2_2 from "../../images/2020/project/prototypev2-2.png"
import prototypev2_3 from "../../images/2020/project/prototypev2-3.png"

import icon from "../../images/icons/icon.svg"

const images = [
    {
        original: prototypev2_1,
        thumbnail: prototypev2_1,
    },
    {
        original: prototypev2_2,
        thumbnail: prototypev2_2,
    },
    {
        original: prototypev2_3,
        thumbnail: prototypev2_3,
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
                        O núcleo do Administrativo é responsável por organizar, promover, captar e gerir 
                        os recursos financeiros, humanos e materiais necessários para a coordenação e progressão 
                        saudável do projeto. Está organizado nas áreas: Recursos Humanos, Captação de Recursos, 
                        Financeiro, Logística e Marketing.
                            
                            </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="controle" class="title is-4 block-title-bw ">
                        Controle
                    </h3>
                    <div class="columns">
                        <div class="column">
                        O subsistema de controle tem a função de modelar fisicamente o comportamento do
                        veículo em questão de performance energética e dinâmica veicular; projetar o sistema de
                        controle; e projetar a estratégia de competição.
                            </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="eletronica" class="title is-4 block-title-bw">
                        Eletrônica
                    </h3>
                    <div class="columns">
                        <div class="column">
                        O subsistema de Eletrônica é responsável pela elaboração e execução da
                        fonte de energia para carro (baterias), bem como o controle de seu acionamento, como também
                        o acionamento de potência para os motores elétricos (rodas).
                            </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="mecanica" class="title is-4 block-title-bw">
                        Mecânica
                    </h3>
                    <div class="columns">
                        <div class="column">
                        O subsistema de Mecânica é responsável por toda a parte mecânica do veículo, que inclui
                        o sistema de transmissão, o sistema de direção, o sistema de freios e o chassi. Dentro de
                        cada uma dessas partes a equipe deve analisar possíveis soluções para o veículo e definir
                        as que melhor atendem aos objetivos do projeto. Além disso, o subsistema deve
                        dimensionar geométrica e estruturalmente todos os componentes envolvidos para,
                        então, dar início à etapa de projeto desses mesmos componentes, que é seguida pelas
                        etapas de fabricação e encomendas de peças.
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="software" class="title is-4 block-title-bw">
                        Software
                    </h3>
                    <div class="columns">
                        <div class="column">
                            Este subsistema é responsável pela aquisição e análise dos dados provenientes
                            do veículo, de forma a informar em tempo real o piloto e a equipe os detalhes cruciais
                            do carro. Dentro dessa função, surge a necessidade de criar uma interface gráfica
                            para o piloto, um sistema de comunicação dele com a equipe no Box, uma dashboard
                            para a equipe ver os dados em tempo real.
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </Layout >
)

export default Project
