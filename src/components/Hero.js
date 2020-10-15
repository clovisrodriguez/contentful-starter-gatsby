/**
 * Dependencies
 */
import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
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
    .image-container {
      flex-grow: 1;
    }
    .textContainer {
      padding: ${theme.spacing(0, 10)};
      height: 90vh;
      display: flex;
      display:-webkit-flex;
      position: absolute;
      flex-direction: column;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0) 100%
      );
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
        max-width: 9em;
      }
      .button {
        margin-top: 1.5em;
        color: white;
        max-width: 15em;
      }
    }
}`}
`
const RenderParticles = () => {
  if (typeof window !== 'undefined') {
    const ParticlesBg = require('particles-bg').default
    return <ParticlesBg color={'#45a8b9'} type="cobweb" num={50} />
  }
  return <div></div>
}

export default function Hero({ content: { heroText, subtitle } }) {
  return (
    <Container>
      <div className="textContainer">
        <Typography variant="h1" align="left" className="title" color="primary">
          {heroText}
        </Typography>
        <Typography variant="body1" align="left">
          {subtitle}
        </Typography>
      </div>
      <RenderParticles />
    </Container>
  )
}
