/**
 * Dependencies
 */
import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

/**
 * Components
 */
import ServiceCard from 'components/ServiceCard'

const Container = styled.div`
  ${({ theme }) => ` 
  && {
      text-align: center;
      padding: ${theme.spacing(6, 0)};
      .cardContainer {
        margin-top: ${theme.spacing(6)}px;
        display: flex;
        flex-wrap: wrap;
      }
  }
  `}
`

export default function Services({ services, title }) {
  return (
    <Container>
      <Typography variant="h2" color="primary">
        {title}
      </Typography>
      <div className="cardContainer">
        {services.map(({ node }, i) => (
          <ServiceCard key={i} {...{ card: node, i }} />
        ))}
      </div>
    </Container>
  )
}
