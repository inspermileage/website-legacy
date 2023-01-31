import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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
                Estamos com o nosso processo seletivo aberto!
                Sabia mais sobre o nosso projeto e venha
                participar se inscrevendo no link abaixo.
              </h2>
              <p>
                <a href="https://join.inspermileage.com/" rel="noreferrer">Conheça mais</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Intro;
