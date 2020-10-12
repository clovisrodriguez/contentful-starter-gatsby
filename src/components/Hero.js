/**
 * Dependencies
 */
import React from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled(Box)`
  ${({ theme }) => `
    && {
    width: 100%;
    text-align: center;
    height: 90vh;
    display: flex;
    align-content: center;
    ${theme.breakpoints.down('sm')} {
      height: 90vh;
      .white-background: {
        height: 90vh;
      }
    }
    .white-background {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 90vh;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    .image-container {
      flex-grow: 1;
    }
}`}
`

const TextContainer = styled.div`
  ${({ theme }) => `
  padding: ${theme.spacing(0, 10)};
  display: flex;
display:-webkit-flex;
  position: absolute;
  flex-direction: column;
  max-width: 50em;
  justify-content: left;
  z-index: 2;
  width: 100%;
  padding-top: 30vh;
  ${theme.breakpoints.down('sm')} {
    padding: ${theme.spacing(0, 4)};
    text-align: center;
    padding-top: 20vh;
  }
  .title {
    margin-bottom: 0.5em;
  }
  .button {
    margin-top: 1.5em;
    color: white;
    max-width: 15em;
  }
  `}
`

export default function Hero({ content: { heroText, subtitle } }) {
  const RenderParticles = () => {
    if (typeof window !== 'undefined') {
      const ParticlesBg = require('particles-bg').default
      return <ParticlesBg color={'#45a8b9'} type="cobweb" num={50} />
    }
    return <div></div>
  }
  return (
    <Container>
      <RenderParticles />
      <div className="white-background" />
      <TextContainer>
        <Typography variant="h1" align="left" className="title" color="primary">
          {heroText}
        </Typography>
        <Typography variant="body1" align="left">
          {subtitle}
        </Typography>
        {/* <a href="https://meetings.hubspot.com/clovis1992">
          <Button
            className="button"
            variant="contained"
            color="primary"
            disableElevation
          >
            Consultar
          </Button>
        </a> */}
      </TextContainer>
    </Container>
  )
}
