import React from "react"
import Layout from "../components/Layout"
import InsperLogo from "../images/partners/insper.svg"
import AffariLogo from "../images/partners/affari.svg"
import AtteiLogo from "../images/partners/ateei.png"
import Eurobikelogo from "../images/partners/eurobike.png"
import Energisalogo from "../images/partners/energisa.jpg"
import SEO from "../components/SEO"
import "../components/partners.scss"

const partners = () => (
  <Layout>
    <SEO title="Parceiros"/>
   
    <section class="hero_is-medium">
      <div class="hero-body">
        <div class="container">
           <h1 class="title is-2 block-title-bw"> Parcerias</h1> 
        </div>
        <div class= "introdução">
            <p class= "texto"> Desde a criação do projeto, em 2018, temos como objetivo criar um carro sustentável e eficiente, 
                que possa participar de diversas competições. É através do apoio de nossas parcerias que estamos
                cada vez mais próximos de atingí-lo.  </p>
        </div>
       </div>
       <div class="tipo_ parceria">
           <h1 class="platina"> Categoria Platina</h1> 
        </div>

        <div class="teste">
            <div class="scrolling"> 
                <div class="card ">
                    <figure class="image">
                        <a href="https://www.eurobike.com.br"> <img src={Eurobikelogo} alt="Eurobike"  /> </a>
                    </figure>
                    <p class= "texto1">
                     Criada em 2002, a eurobike é uma rede de concessionárias especializada em veículos premium e serviços personalizados
                     de alta qualidade. Seu foco é fornecer ao consumidor a mellhor experiência possível dentro do setor automobilístico.
                    </p>
                </div>
                <div class="card ">
                    <figure class="image">
                      <a href="https://www.ateei.com.br/">   <img src={AtteiLogo} alt="Ateei" /> </a> 
                    </figure>
                    <p class= "texto1"> 
                     A Ateei Group é um grupo visto pelo mercado como referência em sua área. Ela tem como missão produzir
                     placas e materiais eletrônicos de forma acessível a todos. Além disso, a Ateei realiza soluções de eletrônica com alta eficiência 
                     para terceiros.
                    </p>
                </div>
            </div> 
        </div>  
        <div class="tipo_ parceria">
           <h1 class="platina"> Categoria Ouro</h1> 
        </div>
        <div class="teste">
            <div class="scrolling"> 
                <div class="card">
                    <figure class="image1">
                        <a href="https://www.energisa.com.br/"> <img  src={Energisalogo} alt="Energisa"  /> </a>
                    </figure>
                    <p class= "texto">
                        Uma das maiores distribuidoras de energia elétrica do país, a Energisa é responsável por proporcionar
                        ao consumidor soluções inovadoras e sustentáveis, buscando sempre facilitar a vida de seus clientes.
                    </p>
                </div>
            </div>    
        </div>        

        <div class="hero-body">
            <div class="alinhamento">
            <h1 class="block-title-bwa"> Se torne um parceiro</h1> 
            </div>
        </div>  


        <div class="apoio">
            <div class="container">
            <h1 class="titulo"> Apoio:</h1>
            </div>
        </div>  
        <div class="columns is-vcentered">
          <div class="column is-flex is-horizontal-center">
            <a href= "https://www.insper.edu.br/"> <img src={InsperLogo} alt="Software e Controle" /> </a>
          </div>
          <div class="column is-flex is-horizontal-center">
            <a href="https://www.facebook.com/affaricatering/"> <img src={AffariLogo} alt="Software e Controle" /> </a>
          </div>
        </div>        
    </section>
   </Layout>
)

export default partners
