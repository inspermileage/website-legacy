import React from 'react';
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'gatsby';
import icon from '../images/icons/icon.svg';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Modal = ({ children, title, state, toggle }) => (
  <div className={`modal footer-modal ${state ? 'is-active' : ''}`}>
    <div className="modal-background" onClick={toggle} />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button class="delete" aria-label="close" onClick={toggle}></button>
      </header>
      <section className="modal-card-body">
        <div className="content">{children}</div>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={toggle}>
          Ok
        </button>
      </footer>
    </div>
  </div>
);

class Footer extends React.Component {
  state = {
    activeTermsModal: false,
    activePrivacyModal: false
  };
  toggleTermsModal = () => {
    this.setState({
      activeTermsModal: !this.state.activeTermsModal
    });
  };
  togglePrivacyModal = () => {
    this.setState({
      activePrivacyModal: !this.state.activePrivacyModal
    });
  };

  render() {
    return (
      <footer class="footer footer-dark">
        <div class="container">
          <div class="columns">
            <div class="column is-flex">
              <div class="footer-logo">
                <img alt="Insper Mileage Logo" src={icon} />
              </div>
            </div>
            <div class="column">
              <div class="footer-column">
                <div class="footer-header">
                  <h3>Sobre</h3>
                </div>
                <ul class="link-list">
                  <li>
                    <Link to="/construction">Quem somos</Link>
                  </li>
                  <li>
                    <Link to="/construction">Competição</Link>
                  </li>
                  <li>
                    <Link to="/prototypes">Protótipo</Link>
                  </li>
                  <li>
                    <Link to="/2021/team">Equipe</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="column">
              <div class="footer-column">
                <div class="footer-header">
                  <h3>Informações</h3>
                </div>
                <ul class="link-list">
                  <li>
                    <Link to="/partners">Parcerias</Link>
                  </li>
                  <li>
                    <a onClick={this.toggleTermsModal}>Termos e condições</a>
                  </li>
                  <li>
                    <a onClick={this.togglePrivacyModal}>
                      Política de privacidade
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="column">
              <div class="footer-column">
                <div class="footer-header">
                  <h3>Social</h3>
                  <ul class="link-list">
                    <li>
                      <Link to="/contact">Contato</Link>
                    </li>
                    <li>
                      <Link to="/construction">Blog</Link>
                    </li>
                  </ul>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <OutboundLink
                        class="level-item"
                        href="https://facebook.com/inspermileage"
                        rel="noopener noreferrer"
                        target="_blank">
                        <span className="icon">
                          <FaFacebook class="footer-icon" size="25px" />
                        </span>
                      </OutboundLink>
                      <OutboundLink
                        class="level-item"
                        href="https://instagram.com/inspermileage"
                        rel="noopener noreferrer"
                        target="_blank">
                        <span className="icon">
                          <FaInstagram class="footer-icon" size="25px" />
                        </span>
                      </OutboundLink>

                      <OutboundLink
                        class="level-item"
                        href="https://linkedin.com/company/insper-mileage/"
                        rel="noopener noreferrer"
                        target="_blank">
                        <span className="icon">
                          <FaLinkedin class="footer-icon" size="25px" />
                        </span>
                      </OutboundLink>
                      <OutboundLink
                        class="level-item"
                        href="https://github.com/inspermileage"
                        rel="noopener noreferrer"
                        target="_blank">
                        <span className="icon">
                          <FaGithub class="footer-icon" size="25px" />
                        </span>
                      </OutboundLink>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          state={this.state.activeTermsModal}
          toggle={this.toggleTermsModal}
          title="Termos e condições">
          <p>Texto para termos e condições xD</p>
        </Modal>
        <Modal
          state={this.state.activePrivacyModal}
          toggle={this.togglePrivacyModal}
          title="Política de privacidade">
          <p>Texto para política de privacidade :P</p>
        </Modal>
      </footer>
    );
  }
}

export default Footer;
