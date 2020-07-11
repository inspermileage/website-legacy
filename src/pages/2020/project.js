import React from "react"
import Layout from "../../components/Layout"
import ImageGallery from "react-image-gallery"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../../components/SEO"
import PrototypeComponent from "../components/PrototypeComponent"
import Prototype2Component from "../components/Prototype2Component"

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
                                        Com o objetivo de atingir a maior eficiência energética possível, o protótipo Bolt é um veículo elétrico que possui um conceito otimizado para garantir uma melhor performance. Com seu formato extremamente aerodinâmico e monocoque feito com fibra de carbono, o protótipo promete o controle de motores e um sistema elétrico de alta eficiência.
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
                                                <PrototypeComponent titulo = "Autonomia"
                                                                    info = "__km" />
                                                <PrototypeComponent titulo = "Consumo"
                                                                    info = "170km/kWh" />
                                                <PrototypeComponent titulo = "Bateria"
                                                                    info = "24V 5000mAh" />
                                                <PrototypeComponent titulo = "Motor"
                                                                    info = "Brushless 24V 350W" />
                                                <PrototypeComponent titulo = "Sistema de direção"
                                                                    info = "Geometria de Ackerman com Pitman Arm" />
                                                <PrototypeComponent titulo = "Transmissão"
                                                                    info = "18:1, fixa e por engrenagens"/>
                                                <PrototypeComponent titulo = "Chassi"
                                                                    info = "Tubular em alumínio" />
                                                <PrototypeComponent titulo = "Carenagem"
                                                                    info = "Fibra de carbono e policarbonato" />
                                                <PrototypeComponent titulo = "Peso"
                                                                    info = "30 kg" />
                                                <PrototypeComponent titulo = "Telemetria"
                                                                    info = "Em tempo real com dashboard na nuvem" />
                                            
                                                <tr>
                                                    <th>Astronomia</th>
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
                <Prototype2Component titulo = "Administrativo"
                                     info = "O departamento administrativo é responsável por toda gestão administrativa do Insper Mileage.
                                     Seu papel comporta áreas essenciais para gestão de um projeto sendo elas:
                                     • Finanças
                                     • Captação de recursos
                                     • Marketing
                                     • Recursos humanos
                                     • Logística.
         
                                     Para isso busca diariamente gerir o pessoal e as atividades essências do projeto, alem de juntamente a diretoria estruturar o direcionamento estrategico." />

                <Prototype2Component titulo = "Controle"
                                     info = "A área de controle do Insper Mileage é responsável pelo desenvolvimento da modelagem física do veículo, projeto da dinâmica veicular como dimensionamento de motores, baterias e estudo da aerodinâmica, assim como o controle de eficiência energética do carro, desempenho em frenagem, aceleração, curvas e consumo de energia. Sendo assim, é nosso papel determinar parâmetros ótimos para o carro ser o mais seguro, rápido e econômico possível, bem como prever o seu comportamento dinâmico antes do protótipo ser finalizado." />

                                     A área de controle do Insper Mileage é responsável pelo desenvolvimento da modelagem física do veículo, projeto da dinâmica veicular como dimensionamento de motores, baterias e estudo da aerodinâmica, assim como o controle de eficiência energética do carro, desempenho em frenagem, aceleração, curvas e consumo de energia. Sendo assim, é nosso papel determinar parâmetros ótimos para o carro ser o mais seguro, rápido e econômico possível, bem como prever o seu comportamento dinâmico antes do protótipo ser finalizado.
                <Prototype2Component titulo = "Eletrônica"
                                     info = "A área de eletrônica é responsável pela organização e produção de qualquer circuito elétrico e eletrônico do protótipo, podendo ser dividida em três setores principais, no caso, acionamento do motor, instrumentação e segurança. A parte de acionamento do motor, consiste no estudo e confecção de circuitos que permitem a alimentação do motor através da bateria e o controle de funcionamento do mesmo, como velocidade. A parte de instrumentação é resumida em circuitos de sensores capazes de captar variáveis importantes do carro para a análise dos dados. Por fim, a segurança consiste em toda e qualquer aplicação de precaução de incidentes com os componentes elétricos do carro." />

                <Prototype2Component titulo = "Mecânica"
                                     info = "Fazemos desde dimensionamentos e projeto dos componentes mecânicos do carro (chassis, sistemas de transmissão, direção e carenagem), seleção de componentes a serem comprados, além da fabricação própria de partes do protótipo (por usinagem, corte à plasma, laminação de compósitos, entre outros). A montagem do carro é realizada na própria oficina." />

                <Prototype2Component titulo = "Software"
                                     info = "A área de software é responsável pelo sistema de telemetria do carro. Para isso, nos dividimos em três subáreas: backend, responsável por fazer o tratamento de dados e armazená-los; frontend, responsável por criar uma interface com o piloto e uma dashboard para a equipe, capaz de atualizar os dados em tempo real; e, por fim, a terceira subárea realiza uma análise de dados para garantir que o carro está tendo a melhor eficiência possível." />





                <div class="container">
                    <h3 id="administrativo" class="title is-4 block-title-bw ">
                        Administrativo
                    </h3>
                    <div class="columns">
                        <div class="column">
                            O departamento administrativo é responsável por toda gestão administrativa do Insper Mileage.
                            Seu papel comporta áreas essenciais para gestão de um projeto sendo elas:
                            • Finanças
                            • Captação de recursos
                            • Marketing
                            • Recursos humanos
                            • Logística.

                            Para isso busca diariamente gerir o pessoal e as atividades essências do projeto, alem de juntamente a diretoria estruturar o direcionamento estrategico.
                            </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="controle" class="title is-4 block-title-bw ">
                        Controle
                    </h3>
                    <div class="columns">
                        <div class="column">
                            A área de controle do Insper Mileage é responsável pelo desenvolvimento da modelagem física do veículo, projeto da dinâmica veicular como dimensionamento de motores, baterias e estudo da aerodinâmica, assim como o controle de eficiência energética do carro, desempenho em frenagem, aceleração, curvas e consumo de energia. Sendo assim, é nosso papel determinar parâmetros ótimos para o carro ser o mais seguro, rápido e econômico possível, bem como prever o seu comportamento dinâmico antes do protótipo ser finalizado.
                            </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="eletronica" class="title is-4 block-title-bw">
                        Eletrônica
                    </h3>
                    <div class="columns">
                        <div class="column">
                            A área de eletrônica é responsável pela organização e produção de qualquer circuito elétrico e eletrônico do protótipo, podendo ser dividida em três setores principais, no caso, acionamento do motor, instrumentação e segurança. A parte de acionamento do motor, consiste no estudo e confecção de circuitos que permitem a alimentação do motor através da bateria e o controle de funcionamento do mesmo, como velocidade. A parte de instrumentação é resumida em circuitos de sensores capazes de captar variáveis importantes do carro para a análise dos dados. Por fim, a segurança consiste em toda e qualquer aplicação de precaução de incidentes com os componentes elétricos do carro.
                            </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="mecanica" class="title is-4 block-title-bw">
                        Mecânica
                    </h3>
                    <div class="columns">
                        <div class="column">
                            Fazemos desde dimensionamentos e projeto dos componentes mecânicos do carro (chassis, sistemas de transmissão, direção e carenagem), seleção de componentes a serem comprados, além da fabricação própria de partes do protótipo (por usinagem, corte à plasma, laminação de compósitos, entre outros). A montagem do carro é realizada na própria oficina.
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h3 id="software" class="title is-4 block-title-bw">
                        Software
                    </h3>
                    <div class="columns">
                        <div class="column">
                            A área de software é responsável pelo sistema de telemetria do carro. Para isso, nos dividimos em três subáreas: backend, responsável por fazer o tratamento de dados e armazená-los; frontend, responsável por criar uma interface com o piloto e uma dashboard para a equipe, capaz de atualizar os dados em tempo real; e, por fim, a terceira subárea realiza uma análise de dados para garantir que o carro está tendo a melhor eficiência possível.
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </Layout >
)

export default Project
