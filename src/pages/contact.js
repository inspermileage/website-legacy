import React from 'react';
import Layout from '../components/Layout';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

import SEO from '../components/SEO';
import ContactComponent from '../components/ContactComponent';

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contato"
      description="Insper Mileage contato"
      lang="pt-br"
      meta={[
        `Insper`,
        `projeto`,
        `protótipo`,
        `Insper Mileage`,
        `Shell Eco-Marathon`
      ]}
    />

    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 block-title-bw">Contato</h1>
          <div class="columns">
            <div class="column">
              <iframe
                class="contact-map"
                src="https://maps.google.com/maps?q=Insper&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"></iframe>

              <div class="columns">
                <ContactComponent
                  link="https://facebook.com/inspermileage"
                  icon={FaFacebook}
                  class={true}
                  name="Facebook"
                />

                <ContactComponent
                  link="https://instagram.com/inspermileage"
                  icon={FaInstagram}
                  class={true}
                  name="Instagram"
                />

                <ContactComponent
                  link="https://linkedin.com/company/insper-mileage/"
                  icon={FaLinkedin}
                  class={true}
                  name="Linkedin"
                />

                <ContactComponent
                  link="https://github.com/inspermileage"
                  icon={FaGithub}
                  class={true}
                  name="Github"
                />
              </div>

              <div class="columns">
                <ContactComponent
                  link="mailto:inspermileage@gmail.com"
                  icon={FaEnvelope}
                  class={false}
                  name="inspermileage@insper.edu.br"
                />

                <ContactComponent
                  link="tel:+5511996036683"
                  icon={FaWhatsapp}
                  class={false}
                  name="+55 11 999217548"
                />
              </div>
            </div>

            <div class="is-divider-vertical" data-content="Ou"></div>
            <div class="column ">
              <h1 class="title is-4">
                Preencha os campos abaixo para sabermos melhor como podemos te
                ajudar.
              </h1>

              <div class="field is-horizontal">
                <div class="field-label is-normal align-left">
                  <label class="label">Seus dados</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded">
                      <input class="input" type="text" placeholder="Nome" />
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded">
                      <input class="input" type="email" placeholder="Email" />
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="field has-addons">
                      <p class="control">
                        <a class="button is-static">+55</a>
                      </p>
                      <p class="control is-expanded">
                        <input
                          class="input"
                          type="tel"
                          placeholder="Telefone"
                        />
                      </p>
                    </div>
                    <p class="help">Não se esqueça do DDD</p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal align-left">
                  <label class="label">Assunto</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded">
                      <div class="select">
                        <select>
                          <option>Parceria</option>
                          <option>Visita na faculdade</option>
                          <option>Dúvida / Sugestão</option>
                        </select>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal align-left">
                  <label class="label">Mensagem</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <textarea
                        class="textarea"
                        placeholder="Como podemos te ajudar?"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label align-left">
                  <label class="label">Resposta</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="via" />
                        {'  '}via Telefone
                      </label>
                      <label class="radio">
                        <input type="radio" name="via" />
                        {'  '}via Email
                      </label>
                    </div>
                    <p class="help">
                      Fique tranquilo, ligações somente em horário comercial.
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <button class="button is-primary">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
