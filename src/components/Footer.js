import React from "react"
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"
import { Link } from "gatsby"
import "./style.scss"

import icon from "../images/icons/icon.svg"

const Footer = () => (
  <footer class="footer footer-dark">
    <div class="container">
      <div class="columns">
        <div class="column is-flex is-horizontal-center">
          <div class="footer-logo align-middle">
            <img
              alt="Footer Logo for BulmaPlay - JAMStack Bulma CSS Web App."
              src={icon}
            />
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
                <Link to="/construction">O projeto</Link>
              </li>
              <li>
                <Link to="/construction">Quem participa</Link>
              </li>
              <li>
                <Link to="/construction">Parcerias</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
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
        </div>
        <div class="column">
          <div class="footer-column">
            <div class="footer-header">
              <h3>Informações</h3>
            </div>
            <ul class="link-list">
              <li>
                <Link to="/construction">Termos de serviço</Link>
              </li>
              <li>
                <Link to="/construction">Política de Privacidade</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <div class="footer-column">
            <div class="footer-header">
              <h3>Social</h3>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a
                    class="level-item"
                    href="https://facebook.com/inspermileage"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="icon">
                      <a>
                        <FaFacebook id="icon" size="fa-2x" />
                      </a>
                    </span>
                  </a>
                  <a
                    class="level-item"
                    href="https://instagram.com/inspermileage"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="icon">
                      <a>
                        <FaInstagram id="icon" size="fa-2x" />
                      </a>
                    </span>
                  </a>
                  <a
                    class="level-item"
                    href="https://linkedin.com/company/insper-mileage/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="icon">
                      <a>
                        <FaLinkedin id="icon" size="fa-2x" />
                      </a>
                    </span>
                  </a>
                  <a
                    class="level-item"
                    href="https://github.com/inspermileage"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="icon">
                      <a>
                        <FaGithub id="icon" size="fa-2x" />
                      </a>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
