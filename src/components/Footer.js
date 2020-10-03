/**
 * Dependencies
 */
import React from 'react'
import styled from 'styled-components'
import { BottomNavigation, Toolbar, Box, Typography } from '@material-ui/core'

const Container = styled(BottomNavigation)`
  ${({ theme }) => `
  && {
    background: rgba(255, 255, 255, 0.7);
    .toolBar {
      display: flex;
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
  flex-direction: row;
  align-items: center;
  a {
    margin: 0 1em;
  }
`

export default function Footer() {
  return (
    <Container position="absolute" color={'transparent'}>
      <Toolbar className="toolBar">
        <Typography variant="body1">
          ®Enciso Montero todos los derechos reservados
        </Typography>
      </Toolbar>
    </Container>
  )
}
