/**
 * Dependencies
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography, Button } from '@material-ui/core'

const Container = styled.div`
  ${({ theme }) => `
  && {
    padding: ${theme.spacing(4)}px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding-top: 20vh;
    .button {
      margin: 6em;
      color: white;
    }
  }
`}
`

export default function () {
  return (
    <Container>
      <Typography variant="h2" color="primary">
        Empecemos a trabajar juntos
      </Typography>
      <a href="https://meetings.hubspot.com/clovis1992">
          <Button
            className="button"
            variant="contained"
            color="primary"
            disableElevation
          >
          Consultar
        </Button>
      </a>
    </Container>
  )
}
