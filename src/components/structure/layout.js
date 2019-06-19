import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import { Normalize } from "styled-normalize"
import { GlobalStyle } from "./globalStyles"

import Header from "../header"
import ConnectedMobileMenu from "../mobileMenu"
import ConnectedSocialMenu from "../socialMenu"
import Footer from "../footer"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <ConnectedMobileMenu />
      <ConnectedSocialMenu />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
      <Normalize />
      <GlobalStyle />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

