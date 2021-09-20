import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TeamComponent from '../../components/TeamComponent';
// Imagens de Eletrônica
import { gabriel, stephanie } from '../../images/2020/team/eletronica/elet';
// Imagens da Mecânica
import { isadora, joao, paulo } from '../../images/2020/team/mecanica/mec';
// Imagens de Software
import { beatrizbernardino } from '../../images/2020/team/software/soft';
import icon from '../../images/icons/icon.svg';

const EquipePage2021 = () => (
  <Layout>
    <SEO title="Equipe 2021" />
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <nav
            class="breadcrumb is-large is-centered has-dot-separator"
            aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="/2019/team">2019</a>
              </li>
              <li>
                <a href="/2020/team">2020</a>
              </li>
              <li>
                <a href="/2021/team">2021</a>
              </li>
            </ul>
          </nav>
          <h1 class="title is-2 block-title-bw">Equipe 2021</h1>
          <article class="tile is-child">
            <div class="columns is-multiline is-centered ">
              <h3 class="title is-4 block-title-bw mb-6">Capitão </h3>
              <TeamComponent
                name="Isadora Stigliani"
                link="https://www.linkedin.com/in/isadora-stigliani-dalberto-65526a19b/"
                office="Capitã"
                link_area="/2021/project/#mecanica"
                classe="images-team team-leader"
                image={isadora}
              />

              <h3 class="title is-4 block-title-bw mb-6">
                <p class="professor"> Professor</p>
                <p> Orientador</p>
              </h3>

              <TeamComponent
                name="Fabiano Adegas"
                link=""
                office="Professor Orientador"
                link_area="/2021/project/#administrativo"
                classe="images-team"
                image={icon}
              />
            </div>

            <h3 class="title is-4 block-title-bw mb-6">Administrativo </h3>
            <div class="container-team">
              <div class="columns is-multiline is-centered">
                {/* Equipe do Administrativo*/}

                <TeamComponent
                  name="Ellen Shen" // sem linkedin
                  link="https://www.linkedin.com/"
                  office="Diretora do Administrativo"
                  link_area="/2021/project/#administrativo"
                  classe="images-team team-leader"
                  image={icon}
                />

                <TeamComponent
                  name="Igor Seramisu"
                  link="https://www.linkedin.com/in/igor-seramisu"
                  office="Administrativo"
                  link_area="/2020/project/#administrativo"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Priscila Baron"
                  link="https://www.linkedin.com/"
                  office="Administrativo"
                  link_area="/2021/project/#administrativo"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Mariana Abrantes"
                  link="https://www.linkedin.com/in/mariana-sophia-abrantes/"
                  office="Administrativo"
                  link_area="/2021/project/#administrativo"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Bruno Yuji"
                  link="https://www.linkedin.com/"
                  office="Administrativo"
                  link_area="/2021/project/#administrativo"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Guilherme Aveiro"
                  link="https://www.linkedin.com/"
                  office="Administrativo"
                  link_area="/2021/project/#administrativo"
                  classe="images-team"
                  image={icon}
                />
              </div>
            </div>

            {/* Equipe de Controle */}

            <h3 class="title is-4 block-title-bw mb-6">Controle </h3>
            <div class="container-team">
              <div class="columns is-multiline is-centered">
                <TeamComponent
                  name="Alexandre Zamberlan"
                  link="https://br.linkedin.com/in/alexandre-zamberlan-filho-034b18158"
                  office="Diretor de Controle"
                  link_area="/2021/project/#controle"
                  classe="images-team team-leader"
                  image={icon}
                />

                <TeamComponent
                  name="Enrico Nardi"
                  link="https://www.linkedin.com/in/enrico-aloisi-nardi-575a09164/"
                  office="Controle"
                  link_area="/2021/project/#controle"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Lucca Nazari"
                  link="https://www.linkedin.com/"
                  office="Controle"
                  link_area="/2021/project/#controle"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="André Giusti Dambry"
                  link="https://www.linkedin.com/"
                  office="Controle"
                  link_area="/2021/project/#controle"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Maurício Ando"
                  link="https://www.linkedin.com/in/maur%C3%ADcio-ando-3106b5164/"
                  office="Controle"
                  link_area="/2021/project/#controle"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Rodrigo Ignacio"
                  link="https://www.linkedin.com/"
                  office="Controle"
                  link_area="/2021/project/#controle"
                  classe="images-team"
                  image={icon}
                />
              </div>
            </div>

            <h3 class="title is-4 block-title-bw mb-6">Eletrônica </h3>
            <div class="container-team">
              <div class="columns is-multiline is-centered">
                {/* Equipe de Eletrônica */}

                <TeamComponent
                  name="Gabriel Terhorst"
                  link="https://www.linkedin.com/in/gabriel-terhorst-de-souza-a194a8146/"
                  office="Eletrônica"
                  link_area="/2021/project/#eletronica"
                  classe="images-team team-leader"
                  image={gabriel}
                />

                <TeamComponent
                  name="Stephanie Liu"
                  link="https://www.linkedin.com/in/stephanie-liu-469066195/"
                  office="Eletrônica"
                  link_area="/2021/project/#eletronica"
                  classe="images-team"
                  image={stephanie}
                />

                <TeamComponent
                  name="Daniel Minson"
                  link="https://www.linkedin.com/"
                  office="Eletrônica"
                  link_area="/2021/project/#eletronica"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Jean Silas"
                  link="https://www.linkedin.com/"
                  office="Eletrônica"
                  link_area="/2021/project/#eletronica"
                  classe="images-team"
                  image={icon}
                />
              </div>
            </div>

            <h3 class="title is-4 block-title-bw mb-6">Mecânica </h3>
            <div class="container-team">
              <div class="columns is-multiline is-centered">
                {/* Equipe de Mecânica */}
                <TeamComponent
                  name="Paulo Chavarelli"
                  link="https://www.linkedin.com/in/paulo-t-chavarelli-b5a02a170/"
                  office="Diretor de mecânica"
                  link_area="/2021/project/#mecanica"
                  classe="images-team team-leader"
                  image={paulo}
                />

                <TeamComponent
                  name="Beatriz Alexandre"
                  link="https://www.linkedin.com/in/beatriz-galassi-alexandre-19873a18b/"
                  office="Mecânica"
                  link_area="/2021/project/#mecanica"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Juan Ruiz"
                  link="https://www.linkedin.com/in/juan-ruiz-444248180/"
                  office="Mecânica"
                  link_area="/2021/project/#mecanica"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="João Guilherme"
                  link="http://linkedin.com/in/joaogaraujo"
                  office="Mecânica"
                  link_area="/2021/project/#mecanica"
                  classe="images-team"
                  image={joao}
                />

                <TeamComponent
                  name="Ricardo Peres"
                  link="https://www.linkedin.com/in/ricardo-ferraro-peres-02b731168/"
                  office="Mecânica"
                  link_area="/2021/project/#mecanica"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Gabriela Duarte"
                  link="https://www.linkedin.com"
                  office="Mecânica"
                  link_area="/2021/project/#mecanica"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="João Bueno"
                  link="https://www.linkedin.com"
                  office="Mecânica"
                  link_area="/2021/project/#mecanica"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Vitória Oliveira"
                  link="https://www.linkedin.com"
                  office="Mecânica"
                  link_area="/2021/project/#mecanica"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Pedro Célia"
                  link="https://www.linkedin.com"
                  office="Mecânica"
                  link_area="/2021/project/#mecanica"
                  classe="images-team"
                  image={icon}
                />
              </div>
            </div>

            <h3 class="title is-4 block-title-bw mb-6">Software </h3>
            <div class="container-team">
              <div class="columns is-multiline is-centered">
                {/* Equipe de Software */}

                <TeamComponent
                  name="Marcelo Cesário"
                  link="https://www.linkedin.com/in/marcelo-cesario-miguel-48b1131a8/"
                  office="Diretor de software"
                  link_area="/2021/project/#software"
                  classe="images-team team-leader"
                  image={icon}
                />

                <TeamComponent
                  name="Beatriz Bernardino"
                  link="https://www.linkedin.com/in/beatriz-rianho-bernardino-7198061a4/"
                  office="Software"
                  link_area="/2021/project/#software"
                  classe="images-team"
                  image={beatrizbernardino}
                />

                <TeamComponent
                  name="Gabriela Boriero"
                  link="https://www.linkedin.com/"
                  office="Software"
                  link_area="/2021/project/#software"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="André Brito"
                  link="https://www.linkedin.com/in/andrebrito16"
                  office="Software"
                  link_area="/2021/project/#software"
                  classe="images-team"
                  image={icon}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </Layout>
);

export default EquipePage2021;
