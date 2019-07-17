import React from "react"
import { Link } from "gatsby"
import "./style.scss"
import logo from "../images/logo.svg"

const NavbarBurger = props => (
  <a
    role="button"
    onClick={props.toggleMenu}
    class={`navbar-burger ${props.active ? "is-active" : ""}`}
    aria-label="menu"
    aria-expanded="false"
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
)

class Header extends React.Component {
  state = {
    activeMenu: false,
  }
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }

  render() {
    return (
      <nav
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img
                  src={logo}
                  alt="Insper Mileage"
                  style={{ width: "147px" }}
                />
              </figure>
            </Link>
            <NavbarBurger
              active={this.state.activeMenu}
              toggleMenu={this.toggleMenu}
            />
          </div>
          <div
            className={`navbar-menu ${
              this.state.activeMenu ? "is-active" : ""
            }`}
          >
            <div class="navbar-end">
              <Link to="/" className="navbar-item is-tab">
                Inicio
              </Link>
              <Link to="/construction" className="navbar-item is-tab">
                Sobre
              </Link>
              <Link to="/construction" className="navbar-item is-tab">
                Competição
              </Link>
              <Link to="/construction" className="navbar-item is-tab">
                Projeto
              </Link>
              <Link to="/construction" className="navbar-item is-tab">
                Time
              </Link>
              <Link to="/construction" className="navbar-item is-tab">
                Parceiros
              </Link>
              <Link to="/construction" className="navbar-item is-tab">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
