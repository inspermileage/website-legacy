import React from "react"
import Layout from "../components/Layout"
import john from "../images/404.gif"

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title is-2 block-title-bw">404</h1>
              <h1 class="subtitle is-5">
                Está página não existe. Você por acaso se perdeu?
              </h1>
            </div>
            <div class="column">
              <figure>
                <img src={john} alt="Gif John Travolta perdido" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
