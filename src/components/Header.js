import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
const NavbarBurger = (props) => (
  <a
    role="button"
    onClick={props.toggleMenu}
    className={`navbar-burger ${props.active ? 'is-active' : ''}`}
    aria-label="menu"
    aria-expanded="false">
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);

class Header extends React.Component {
  state = {
    activeMenu: false
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };

  render() {
    return (
      <nav
        class="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation">
        <div class="container">
          <div className="navbar-brand">
            <OutboundLink href="/" className="navbar-item">
              <figure className="image">
                <img
                  src={logo}
                  alt="Insper Mileage"
                  style={{ width: '147px' }}
                />
              </figure>
            </OutboundLink>
            <NavbarBurger
              active={this.state.activeMenu}
              toggleMenu={this.toggleMenu}
            />
          </div>
          <div
            className={`navbar-menu ${
              this.state.activeMenu ? 'is-active' : ''
            }`}>
            <div class="navbar-end">
              <OutboundLink href="/" className="navbar-item is-tab">
                Início
              </OutboundLink>

              <div class="navbar-item has-dropdown is-hoverable">
                <OutboundLink href="/construction" className="navbar-link">
                  Sobre
                </OutboundLink>
                <div class="navbar-dropdown">
                  <OutboundLink href="/construction" className="navbar-item">
                    Competição
                  </OutboundLink>
                  <OutboundLink href="/prototypes" className="navbar-item">
                    Protótipos
                  </OutboundLink>
                  <OutboundLink href="/2021/team" className="navbar-item">
                    Equipe
                  </OutboundLink>
                </div>
              </div>
              <OutboundLink href="/partners" className="navbar-item is-tab">
                Parceiros
              </OutboundLink>
              <OutboundLink href="/blog" className="navbar-item is-tab">
                Blog
              </OutboundLink>
              <OutboundLink href="/contact" className="navbar-item is-tab">
                Contato
              </OutboundLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
