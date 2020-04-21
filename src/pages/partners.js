import React from "react"
import Layout from "../components/Layout"
import InsperLogo from "../images/partners/insper.svg"
import AffariLogo from "../images/partners/affari.svg"
import AtteiLogo from "../images/partners/ateei.png"
import Eurobikelogo from "../images/partners/eurobike.svg"
import Energisalogo from "../images/partners/energisa.svg"
import SEO from "../components/SEO"
import PartnerApoio from "../components/PartnerApoio"
import PartnerPlatina from "../components/PartnerPlatina"
import PartnerType from "../components/PartnerType"



const partners = () => (
    <Layout>
        <SEO title="Parceiros" />
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2 block-title-bw">Parcerias</h1>
                    <div class="content">
                        <p>
                            Desde a criação do projeto, em 2018, temos como
                            objetivo criar um carro sustentável e eficiente, que
                            possa participar de diversas competições. É através
                            do apoio de nossas parcerias que estamos cada vez
                            mais próximos de atingí-lo.
                        </p>
                    </div>
                     <PartnerType type="PARCEIROS PLATINA" />  
                    <div class="columns is-multiline is-centered">
                        < PartnerPlatina link= "https://www.insper.edu.br"   
                                            img= {InsperLogo}
                                            alt="Insper"
                                            description=" O Insper é uma 
                                            instituição sem fins
                                            lucrativos de ensino superior e
                                            pesquisa. Na graduação, conta com os
                                            cursos de Administração, Economia,
                                            Engenharia da Computação, Engenharia
                                            Mecânica e Engenharia Mecatrônica." />



                        < PartnerPlatina link= "https://www.eurobike.com.br"  
                                                img= {Eurobikelogo}
                                                alt="Eurobike"
                                                description= "Criada em 2002,
                                                a Eurobike é uma rede de concessionárias 
                                                especializada em veículos premium e serviços 
                                                personalizados de alta qualidade.Seu foco é 
                                                fornecer ao consumidor a melhor experiência 
                                                possível dentro do setor automobilístico." />



                        < PartnerPlatina link= "https://www.ateei.com.br/" 
                                                img= {AtteiLogo} 
                                                alt="Ateei"
                                                description= " A Ateei Group é um grupo visto pelo
                                                mercado como referência em sua área.
                                                Ela tem como missão produzir placas 
                                                e materiais eletrônicos de forma 
                                                acessível a todos. Além disso, a  
                                                Ateei realiza soluções de eletrônica 
                                                com alta eficiência para terceiros." />

                       < PartnerPlatina link= "https://www.energisa.com.br"
                                                img= {Energisalogo}
                                                alt="Energisa"
                                                description= "Uma das maiores distribuidoras de 
                                                energia elétrica do país, a Energisa 
                                                é responsável por proporcionar ao 
                                                consumidor soluções inovadoras e 
                                                sustentáveis, buscando sempre  
                                                facilitar a vida de seus clientes." />
                    </div>

                    <PartnerType type="APOIO" />  
                    <div class="columns is-multiline is-centered">
                        <PartnerApoio img= {AffariLogo} alt= "Affari"/> 
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default partners
