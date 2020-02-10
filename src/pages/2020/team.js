import React from "react"
import Layout from "../../components/Layout"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import SEO from "../../components/SEO"
import { Link } from "gatsby"


import icon from "../../images/icons/icon.svg"

const EquipePage = () => (
    <Layout>
        <SEO title="Equipe 2019" />
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <nav class="breadcrumb is-large is-centered has-dot-separator" aria-label="breadcrumbs">
                        <ul>
                            <li><a href="/2019/team">2019</a></li>
                            <li><a href="/2020/team">2020</a></li>
                        </ul>
                    </nav>
                    <h1 class="title is-2 block-title-bw">Equipe 2020</h1>
                    <article class="tile is-child">
                        <div class="columns is-multiline is-centered">
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/guilherme-boldin-6ba36b165"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Guilherme</p>
                                </OutboundLink>
                                <p class="team-area">Capitão</p>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/rampandullo30"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Ramiro</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#administrativo"
                                >
                                    Administrativo
                                </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/igor-seramisu"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Igor</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#administrativo"
                                >
                                    Administrativo
                                </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/victor-hugo-leal-vieira-da-silva-51726a12a"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team team-leader"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">André</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#controle"
                                >
                                    Controle
                                </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/guilherme-boldin-6ba36b165"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Alexandre</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#controle"
                                >
                                    Controle
                                </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/victor-hugo-leal-vieira-da-silva-51726a12a"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team team-leader"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Giovana</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#eletronica"
                                >
                                    Eletrônica
                                </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/guilherme-boldin-6ba36b165"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Anna Beathriz</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#eletronica"
                                >
                                    Eletrônica
                                </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/victor-hugo-leal-vieira-da-silva-51726a12a"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Gabriel</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#eletronica"
                                >
                                    Eletrônica
                                </Link>
                            </div>

                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/victor-hugo-leal-vieira-da-silva-51726a12a"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Stephanie</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#eletronica"
                                >
                                    Eletrônica
                                </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/guilherme-boldin-6ba36b165"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team team-leader"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Dennis</p>

                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#mecanica"
                                >
                                    Mecânica
                                        </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/guilherme-boldin-6ba36b165"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Isadora</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#mecanica"
                                >
                                    Mecânica
                                        </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/victor-hugo-leal-vieira-da-silva-51726a12a"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">
                                        João Guilherme
                                        </p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#mecanica"
                                >
                                    Mecânica
                                        </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/martim-ferreira-jose"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Paulo</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#mecanica"
                                >
                                    Mecânica
                                        </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/martim-ferreira-jose"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">Marcelo</p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#mecanica"
                                >
                                    Mecânica
                                        </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/victor-hugo-leal-vieira-da-silva-51726a12a"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team team-leader"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">
                                        Beatriz
                                                    </p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#software"
                                >
                                    Software
                                </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/victor-hugo-leal-vieira-da-silva-51726a12a"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">
                                        Nicole
                                                    </p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#software"
                                >
                                    Software
                                </Link>
                            </div>
                            <div class="column is-3 is-narrow">
                                <OutboundLink
                                    href="https://www.linkedin.com/in/victor-hugo-leal-vieira-da-silva-51726a12a"
                                    target="_blank"
                                >
                                    <img
                                        class="images-team"
                                        src={icon}
                                        alt="Ícone Mileage"
                                    />
                                    <p class="team-member">
                                        William
                                                    </p>
                                </OutboundLink>
                                <Link
                                    class="team-area"
                                    to="/2020/project/#software"
                                >
                                    Software
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div >
        </section >
    </Layout >
)

export default EquipePage
