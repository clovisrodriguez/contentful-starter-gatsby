/**
 * Dependencies
 */
import React from 'react'
import styled from 'styled-components'
import { BottomNavigation, Toolbar, Box, Typography } from '@material-ui/core'

const Container = styled(BottomNavigation)`
  ${({ theme }) => `
  && {
    background: ${theme.palette.primary.main};
    color: white;
    height: auto;
    .toolBar {
      padding: ${theme.spacing(2)}px;
      display: flex;
display:-webkit-flex;
      flex-direction: row;
      justify-content: space-around;
      p {
        margin: 0.7em 4em;
      }
    }
    ${theme.breakpoints.down('sm')} {
      .toolBar {
        justify-content: space-between;
        flex-direction: column-reverse;
      }
      p {
        margin: 0;
      }
    }
  }
`}
`

const Links = styled(Box)`
  display: flex;
display:-webkit-flex;
  flex-direction: column;
  align-items: center;
  a {
    margin: 0 1em;
  }
`

export default function Footer() {
  return (
    <Container position="absolute" color={'transparent'}>
      <Toolbar className="toolBar">
        <Typography variant="body1">312 365 7458 - 311 260 6786</Typography>
        <Typography variant="body1">
          Cll 26 # 68c-61, Edificio torre central, oficina 22
        </Typography>
        <Typography variant="body1">
          ®Enciso Montero todos los derechos reservados
        </Typography>
      </Toolbar>
    </Container>
  )
}
