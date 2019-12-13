import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.svg"

const NavbarBurger = props => (
    <a
        role="button"
        onClick={props.toggleMenu}
        className={`navbar-burger ${props.active ? "is-active" : ""}`}
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
                class="navbar is-fixed-top has-shadow"
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
                                Início
                            </Link>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <Link
                                    to="/construction"
                                    className="navbar-link"
                                >
                                    Sobre
                                </Link>
                                <div class="navbar-dropdown">
                                    <Link
                                        to="/construction"
                                        className="navbar-item"
                                    >
                                        Competição
                                    </Link>
                                    <Link to="/project" className="navbar-item">
                                        Projeto
                                    </Link>
                                    <Link
                                        to="/construction"
                                        className="navbar-item"
                                    >
                                        Equipe
                                    </Link>
                                </div>
                            </div>
                            <Link
                                to="/construction"
                                className="navbar-item is-tab"
                            >
                                Parceiros
                            </Link>
                            <Link
                                to="/construction"
                                className="navbar-item is-tab"
                            >
                                Blog
                            </Link>
                            <Link to="/contact" className="navbar-item is-tab">
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
