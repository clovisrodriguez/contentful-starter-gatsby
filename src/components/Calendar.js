/**
 * Dependencies
 */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

/**
 * Utils
 */
import { loadScript } from 'utils/globalActions'

const Container = styled.div`
  ${({ theme }) => `
  && {
    padding: ${theme.spacing(4)}px;
    display: flex;
    display:-webkit-flex;
    flex-direction: column;
    justify-items: center;
    background: ${theme.palette.primary.darkest};
    color: white;
    align-items: center;
    padding-top: 20vh;
    .meetings-iframe-container { 
      margin-top: 3em;
    }
    ${theme.breakpoints.down('sm')} {
      text-align: center;
    }
    .button {
      margin: 6em;
      color: white;
    }
  }
`}
`

export default function () {
  useEffect(() => {
    loadScript(
      'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    )
  }, [])
  return (
    <Container>
      <Typography variant="h2" color="inherit">
        Empecemos a trabajar juntos
      </Typography>
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/contacto448?embed=true"
      ></div>
    </Container>
  )
}
