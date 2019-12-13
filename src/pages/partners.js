import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import InsperLogo from "../images/partners/insper.svg"
import AffariLogo from "../images/partners/affari.svg"
import AtteiLogo from "../images/partners/ateei.png"
import Eurobikelogo from "../images/partners/eurobike.png"
import Energisalogo from "../images/partners/energisa.jpg"
import SEO from "../components/SEO"


const partners = () => (
  <Layout>
    <SEO title="Parceiros"/>
   
    <section class="hero_is-medium">
      <div class="hero-body">
        <div class="container-titulo">
           <h1 class="title is-2 block-title-bw"> Parcerias</h1> 
        </div>
        <div class= "introdução">
            <p class= "texto_intro"> Desde a criação do projeto, em 2018, temos como objetivo criar um carro sustentável e eficiente, 
                que possa participar de diversas competições. É através do apoio de nossas parcerias que estamos
                cada vez mais próximos de atingí-lo.  </p>
        </div>
       </div>
       <div class="tipo_parceria">
           <h1 class="cat_part"> Categoria Platina</h1> 
        </div>

        <div class="patrocinadores">
            <div class="scrolling"> 
                <div class="card">
                    <figure class="image_platina">
                        <a href="https://www.eurobike.com.br"> <img src={Eurobikelogo} alt="Eurobike"  /> </a>
                    </figure>
                    <p class= "desc_platina">
                     Criada em 2002, a eurobike é uma rede de concessionárias especializada em veículos premium e serviços personalizados
                     de alta qualidade. Seu foco é fornecer ao consumidor a mellhor experiência possível dentro do setor automobilístico.
                    </p>
                </div>
                <div class="card">
                    <figure class="image_platina">
                      <a href="https://www.ateei.com.br/">   <img src={AtteiLogo} alt="Ateei" /> </a> 
                    </figure>
                    <p class= "desc_platina"> 
                     A Ateei Group é um grupo visto pelo mercado como referência em sua área. Ela tem como missão produzir
                     placas e materiais eletrônicos de forma acessível a todos. Além disso, a Ateei realiza soluções de eletrônica com alta eficiência 
                     para terceiros.
                    </p>
                </div>
            </div> 
        </div>  
        <div class="tipo_parceria">
           <h1 class="cat_part"> Categoria Ouro</h1> 
        </div>
        <div class="patrocinadores">
            <div class="scrolling"> 
                <div class="card">
                    <figure class="image_ouro">
                        <a href="https://www.energisa.com.br/"> <img src={Energisalogo} alt="Energisa"  /> </a>
                    </figure>
                    <div class= "container_desc_ouro">   
                        <p class= "desc_ouro">
                        Uma das maiores distribuidoras de energia elétrica do país, a Energisa é responsável por proporcionar
                        ao consumidor soluções inovadoras e sustentáveis, buscando sempre facilitar a vida de seus clientes.
                        </p> 
                    </div>     
                </div>           
            </div>    
        </div>        

        <div class="hero-body">
            <div class="alinhamento_botao">
            <Link to="/contact" class="button is-primary is-outlined">  
                <h1 class="parceria"> Se torne um parceiro</h1>  
            </Link> 
            </div>
        </div>  


        <div class="apoio">
            <div class="container_apoio">
            <h1 class="titulo_apoio"> Apoio:</h1>
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
