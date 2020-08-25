import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import InicialPage from "../initialPage"
import Blog from "./blog"

const IndexPage = () => (
    <Router>
        <main>
            <Switch>
                <Route exact path="/" component={InicialPage} />
                <Route exact path="/blog" component={Blog} />
            </Switch>
        </main>
    </Router>
)

export default IndexPage
