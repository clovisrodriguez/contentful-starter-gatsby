/**
 * Dependencies
 */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import config from 'utils/siteConfig'

/**
 * Components
 */
import GlobalStyle from 'styles/global'
import NavBar from './Navbar'
import Footer from './Footer'

/**
 * Other
 */
import theme from 'styles/theme'

const Layout = ({ children, teamRef }) => (
  <div className="siteRoot" id="outer-container">
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <NavBar {...{teamRef}} />
        {children}
        <Footer />
      </ThemeProvider>
    </MuiThemeProvider>
    <GlobalStyle />
  </div>
)

export default Layout
