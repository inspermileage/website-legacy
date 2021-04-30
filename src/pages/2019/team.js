import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TeamComponent from '../../components/TeamComponent';
import icon from '../../images/icons/icon.svg';

// Imagens do Administrativo
import { guilherme, ramiro } from '../../images/2020/team/administrativo/adm';

// Imagens de Controle
import { andre, lucasfontenla } from '../../images/2020/team/controle/cont';

// Imagens de Mecânica
import {
  dennis,
  isadora,
  marceloreis,
  felipe,
  joao,
  paulo
} from '../../images/2020/team/mecanica/mec';

// Imagens de Eletrônica
import {
  giovana,
  gabriel,
  stephanie,
  victorhugo
} from '../../images/2020/team/eletronica/elet';

// Imagens de Software
import {
  martim,
  beatrizbernardino,
  william
} from '../../images/2020/team/software/soft';

const EquipePage = () => (
  <Layout>
    <SEO title="Equipe 2019" />
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
          <h1 class="title is-2 block-title-bw">Equipe 2019</h1>
          <article class="tile is-child">
            <div class="columns is-multiline is-centered ">
              <h3 class="title is-4 block-title-bw mb-6">Capitão </h3>
              <TeamComponent
                name="Lucas Fontenla"
                link="https://www.linkedin.com/in/lucasfontenla"
                office="Capitão e Controle"
                link_area="/2020/project/#controle"
                classe="images-team team-leader"
                image={lucasfontenla}
              />

              <h3 class="title is-4 block-title-bw mb-6">
                <p class="professor"> Professor</p>
                <p> Orientador</p>
              </h3>

              <TeamComponent
                name="Fabio Hage"
                link=""
                office="Professor Orientador"
                link_area="/2020/project/#administrativo"
                classe="images-team"
                image={icon}
              />
            </div>

            <h3 class="title is-4 block-title-bw mb-6">Administrativo </h3>
            <div class="container-team">
              <div class="columns is-multiline is-centered">
                {/* Equipe do Administrativo */}

                <TeamComponent
                  name="Ramiro Pandullo"
                  link="https://www.linkedin.com/in/rampandullo30"
                  office="Administrativo"
                  link_area="/2020/project/#administrativo"
                  classe="images-team"
                  image={ramiro}
                />

                <TeamComponent
                  name="Celine Mitu"
                  link="https://www.linkedin.com/in/celine-mitu"
                  office="Administrativo"
                  link_area="/2020/project/#administrativo"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="João Abbatepaulo"
                  link="https://www.linkedin.com/in/joaoabbatepaulo"
                  office="Administrativo"
                  link_area="/2020/project/#administrativo"
                  classe="images-team"
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
              </div>
            </div>

            {/* Equipe de Controle */}
            <h3 class="title is-4 block-title-bw mb-6">Controle </h3>
            <div class="container-team">
              <div class="columns is-multiline is-centered">
                <TeamComponent
                  name="Guilherme Boldin"
                  link="https://www.linkedin.com/in/guilherme-boldin-6ba36b165/"
                  office=" Diretor de controle"
                  link_area="/2020/project/#controle"
                  classe="images-team team-leader"
                  image={guilherme}
                />

                <TeamComponent
                  name="Alexandre Zamberlan"
                  link="https://br.linkedin.com/in/alexandre-zamberlan-filho-034b18158"
                  office="Controle"
                  link_area="/2020/project/#controle"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="André Annunziato"
                  link="https://www.linkedin.com/in/andr%C3%A9-annunziato-526ab5169/"
                  office="Controle"
                  link_area="/2020/project/#controle"
                  classe="images-team"
                  image={andre}
                />
              </div>
            </div>

            <h3 class="title is-4 block-title-bw mb-6">Eletrônica </h3>
            <div class="container-team">
              <div class="columns is-multiline is-centered">
                {/* Equipe de Eletrônica */}

                <TeamComponent
                  name="Victor Hugo"
                  link="https://www.linkedin.com/in/victor-hugo-leal-vieira-da-silva-51726a12a"
                  office=" Diretor de eletrônica"
                  link_area="/2020/project/#eletronica"
                  classe="images-team team-leader"
                  image={victorhugo}
                />

                <TeamComponent
                  name="Stephanie Liu"
                  link="https://www.linkedin.com/in/stephanie-liu-469066195/"
                  office="Eletrônica"
                  link_area="/2020/project/#eletronica"
                  classe="images-team"
                  image={stephanie}
                />

                <TeamComponent
                  name="Gabriel Terhorst"
                  link="https://www.linkedin.com/in/gabriel-terhorst-de-souza-a194a8146/"
                  office="Eletrônica"
                  link_area="/2020/project/#eletronica"
                  classe="images-team"
                  image={gabriel}
                />

                <TeamComponent
                  name="Giovana Lemes"
                  link="https://www.linkedin.com/in/gio-lemes/"
                  office="Eletrônica"
                  link_area="/2020/project/#eletronica"
                  classe="images-team"
                  image={giovana}
                />

                <TeamComponent
                  name="Anna Beathriz"
                  link="https://www.linkedin.com/in/anna-beathriz-cipriano-de-mauro-203417151/"
                  office="Eletrônica"
                  link_area="/2020/project/#eletronica"
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
                  name="Felipe Scandiuzzi"
                  link="https://www.linkedin.com/in/felipe-scandiuzzi-552164153"
                  office="Diretor de Mecânica"
                  link_area="/2020/project/#mecanica"
                  classe="images-team team-leader"
                  image={felipe}
                />

                <TeamComponent
                  name="Dennis"
                  link="https://www.linkedin.com/in/stephanie-liu-469066195/"
                  office="Mecânica"
                  link_area="/2020/project/#mecanica"
                  classe="images-team"
                  image={dennis}
                />

                <TeamComponent
                  name="Isadora Stigliani"
                  link="https://www.linkedin.com/in/isadora-stigliani-dalberto-65526a19b/"
                  office="Mecânica"
                  link_area="/2020/project/#mecanica"
                  classe="images-team"
                  image={isadora}
                />

                <TeamComponent
                  name="João Guilherme"
                  link="http://linkedin.com/in/joaogaraujo"
                  office="Mecânica"
                  link_area="/2020/project/#mecanica"
                  classe="images-team"
                  image={joao}
                />

                <TeamComponent
                  name="Marcelo Lisboa"
                  link="https://www.linkedin.com/in/marcelo-lisboa-de-castro-reis-14b75a16b/"
                  office="Mecânica"
                  link_area="/2020/project/#mecanica"
                  classe="images-team"
                  image={marceloreis}
                />

                <TeamComponent
                  name="Luiz Felipe"
                  link="https://www.linkedin.com/in/luiz-felipe-lazzaron-682676181/"
                  office="Mecânica"
                  link_area="/2020/project/#mecanica"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="Paulo Chavarelli"
                  link="https://www.linkedin.com/in/paulo-t-chavarelli-b5a02a170/"
                  office="Mecânica"
                  link_area="/2020/project/#mecanica"
                  classe="images-team"
                  image={paulo}
                />
              </div>
            </div>

            <h3 class="title is-4 block-title-bw mb-6">Software </h3>
            <div class="container-team">
              <div class="columns is-multiline is-centered">
                {/* Equipe de Software */}

                <TeamComponent
                  name="Martim Ferreira"
                  link="https://www.linkedin.com/in/martim-ferreira-jose"
                  office="Diretor de software"
                  link_area="/2020/project/#software"
                  classe="images-team team-leader"
                  image={martim}
                />

                <TeamComponent
                  name="Beatriz Bernardino"
                  link="https://www.linkedin.com/in/beatriz-rianho-bernardino-7198061a4/"
                  office="Software"
                  link_area="/2020/project/#software"
                  classe="images-team"
                  image={beatrizbernardino}
                />

                <TeamComponent
                  name="Nicole Sarvasi"
                  link="https://www.linkedin.com/in/nicole-sarvasi-alves-da-costa-5446a21a4/"
                  office="Software"
                  link_area="/2020/project/#software"
                  classe="images-team"
                  image={icon}
                />

                <TeamComponent
                  name="William Silva"
                  link="https://www.linkedin.com/in/williamars/"
                  office="Software"
                  link_area="/2020/project/#software"
                  classe="images-team"
                  image={william}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </Layout>
);

export default EquipePage;
