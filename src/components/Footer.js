import React from "react"
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"
import { Link } from "gatsby"
import icon from "../images/icons/icon.svg"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Modal = ({ children, title, state, toggle }) => (
  <div className={`modal footer-modal ${state ? "is-active" : ""}`}>
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
)

class Footer extends React.Component {
  state = {
    activeTermsModal: false,
    activePrivacyModal: false,
  }
  toggleTermsModal = () => {
    this.setState({
      activeTermsModal: !this.state.activeTermsModal,
    })
  }
  togglePrivacyModal = () => {
    this.setState({
      activePrivacyModal: !this.state.activePrivacyModal,
    })
  }

  render() {
    return (
      <footer class="footer footer-dark">
        <div class="container">
          <div class="columns">
            <div class="column is-flex is-horizontal-center">
              <div class="footer-logo align-middle">
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
                    <Link to="/construction">Projeto</Link>
                  </li>
                  <li>
                    <Link to="/construction">Equipe</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div class="column">
              <div class="footer-column">
                <div class="footer-header">
                  <h3>Documentação</h3>
                </div>
                <ul class="link-list">
                  <li>
                    <Link to="/construction">Github</Link>
                  </li>
                  <li>
                    <Link to="/construction">Blog</Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div class="column">
              <div class="footer-column">
                <div class="footer-header">
                  <h3>Informações</h3>
                </div>
                <ul class="link-list">
                  <li>
                    <Link to="/construction">Parcerias</Link>
                  </li>
                  <li>
                    <Link to="/construction">Midia Kit</Link>
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
                      <Link to="/construction">Blog</Link>
                    </li>
                    <li>
                      <Link to="/construction">Newsletter</Link>
                    </li>
                  </ul>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <OutboundLink
                        class="level-item"
                        href="https://facebook.com/inspermileage"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="icon">
                          <a>
                            <FaFacebook class="footer-icon" size="fa-2x" />
                          </a>
                        </span>
                      </OutboundLink>
                      <OutboundLink
                        class="level-item"
                        href="https://instagram.com/inspermileage"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="icon">
                          <a>
                            <FaInstagram class="footer-icon" size="fa-2x" />
                          </a>
                        </span>
                      </OutboundLink>

                      <OutboundLink
                        class="level-item"
                        href="https://linkedin.com/company/insper-mileage/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="icon">
                          <a>
                            <FaLinkedin class="footer-icon" size="fa-2x" />
                          </a>
                        </span>
                      </OutboundLink>
                      <OutboundLink
                        class="level-item"
                        href="https://github.com/inspermileage"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="icon">
                          <a>
                            <FaGithub class="footer-icon" size="fa-2x" />
                          </a>
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
          title="Termos e condições"
        >
          <p>Texto para termos e condições xD</p>
        </Modal>
        <Modal
          state={this.state.activePrivacyModal}
          toggle={this.togglePrivacyModal}
          title="Política de privacidade"
        >
          <p>Texto para política de privacidade :P</p>
        </Modal>
      </footer>
    )
  }
}

export default Footer
