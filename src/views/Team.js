import React from 'react';
import { Link } from 'gatsby';
import AdminIcon from '../images/icons/administrativo.svg';
import SoftControlIcon from '../images/icons/softcontrole.svg';
import EletronicIcon from '../images/icons/eletronica.svg';
import MechanicIcon from '../images/icons/mecanica.svg';

const Team = () => (
  <div class="SectionBlock">
    <div id="TeamAngled">
      <div class="teamBG" />
    </div>

    <section id="team" class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 block-title-wb">Equipe</h1>
          <div class="columns">
            <div class="column">
              <h1 class="subtitle is-5 has-text-white">
                Acreditamos que o trabalho multidisciplinar não é só uma
                excelente forma de otimizar o desenvolvimento do projeto mas
                também de habilitar a integração de alunos de diferentes cursos.
              </h1>
              <p>
                <Link to="/2021/team" class="button is-white is-outlined">
                  Conheça a equipe
                </Link>
              </p>
            </div>
          </div>

          <div class="has-horizontal-scroll has-text-centered">
            <div class="scrolling-wrapper-flexbox">
              <div class="feature-card ">
                <figure class="image is-64x64">
                  <img src={AdminIcon} alt="Administrativo" />
                </figure>
                <h5 class="subtitle is-5">Administrativo</h5>
              </div>

              <div class="feature-card ">
                <figure class="image is-64x64">
                  <img src={SoftControlIcon} alt="Software e Controle" />
                </figure>
                <h5 class="subtitle is-5">Software</h5>
              </div>

              <div class="feature-card ">
                <figure class="image is-64x64">
                  <img src={SoftControlIcon} alt="Software e Controle" />
                </figure>
                <h5 class="subtitle is-5">Controle</h5>
              </div>

              <div class="feature-card ">
                <figure class="image is-64x64">
                  <img src={MechanicIcon} alt="Mecânica" />
                </figure>
                <h5 class="subtitle is-5">Mecânica</h5>
              </div>

              <div class="feature-card ">
                <figure class="image is-64x64">
                  <img src={EletronicIcon} alt="Eletrônica" />
                </figure>
                <h5 class="subtitle is-5">Eletrônica</h5>
              </div>

              <div class="padder-card " />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Team;
