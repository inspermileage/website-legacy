import React from "react"

import SEO from "./SEO"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <SEO />
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
