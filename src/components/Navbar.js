/**
 * Dependencies
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar,
  Box,
  Hidden,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import { Link } from 'gatsby'
import MenuIcon from '@material-ui/icons/Menu'

/**
 * Other
 */
import Logo from 'images/color_logo.png'
import config from 'utils/siteConfig'

const Container = styled(AppBar)`
  ${({ theme }) => `
  && {
    background: rgba(255, 255, 255, 0.7);
    .toolBar {
      display: flex;
display:-webkit-flex;
      flex-direction: row;
      justify-content: space-around;

    }
    .logo {
      height: 2em;
      width: auto;
    }
    ${theme.breakpoints.down('sm')} {
      .toolbar {
        justify-content: space-between;
      }
      .logo {
        height: 1.6em;
      }
    }
  }
`}
`

const Links = styled(Box)`
  display: flex;
display:-webkit-flex;
  flex-direction: row;
  align-items: center;
  a {
    margin: 0 1em;
  }
`

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Container position="absolute" color={'transparent'}>
      <Toolbar className="toolBar">
        <img src={Logo} className="logo" />
        {/* <Hidden smDown>
          <Links>
            {config.navigation.map((route) => (
              <Link key={route.name} to={route.slug}>
                {route.name}
              </Link>
            ))}
          </Links>
        </Hidden>
        <Hidden mdUp>
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon color="primary" />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {config.navigation.map((route) => (
              <MenuItem onClick={handleClose} key={route.name}>
                <a key={route.name} href={route.slug}>
                  {route.name}
                </a>
              </MenuItem>
            ))}
          </Menu>
        </Hidden> */}
      </Toolbar>
    </Container>
  )
}
