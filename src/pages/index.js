/**
 * Dependencies
 */
import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

/**
 * Components
 */
import Layout from 'components/Layout'
import Hero from 'components/Hero'
import Services from 'src/components/Services'
import Team from 'components/Team'
import Calendar from 'components/Calendar'

const Description = styled.div`
  ${({ theme }) => `
  && {
    color: white;
    display: flex;
display:-webkit-flex;
    width: 100%;
    background: ${theme.palette.primary.main};
    padding: ${theme.spacing(8, 8, 16, 8)};
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    .paragraph {
      width: 60%;
      margin-right: 7%;
    }
    .title {
      vertical-align: center;
      text-align: right;
    }
    ${theme.breakpoints.down('sm')} {
      padding: ${theme.spacing(8, 4)};
      flex-direction: column-reverse;
      .paragraph {
        width: 100%;
        margin: 0;
        margin-top: 3em;
      }
  `}
  }
`

const Home = ({ data }) => {
  const homePage = _.get(data, 'allContentfulHomePage.edges[0].node')
  // OFS: reassign capacity for this section
  // const facts = _.get(data, 'allContentfulHomePage.edges[0].node')
  const services = _.get(data, 'allContentfulService.edges')
  const associates = _.get(data, 'allContentfulAssociate.edges')
  const teamRef = useRef()
  return (
    <Layout {...{ teamRef }}>
      <Hero {...{ content: homePage }} />
      <Description>
        <Typography
          variant="body1"
          component="div"
          className="paragraph"
          dangerouslySetInnerHTML={{
            __html: homePage.bodyDescription.childMarkdownRemark.html,
          }}
        ></Typography>
        <Typography variant="h2" className="title">
          {homePage.titleDescriptionSection}
        </Typography>
      </Description>
      <Services {...{ services, title: homePage.serviceTitle }} />
      <Team {...{ associates, homePage }} ref={teamRef} />
      <Calendar />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          heroBanner {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          heroText
          subtitle
          factTitle
          titleDescriptionSection
          serviceTitle
          teamTitle
          teamDescription {
            childMarkdownRemark {
              html
            }
          }
          bodyDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulService {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulFact {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          icon
        }
      }
    }
    allContentfulAssociate {
      edges {
        node {
          position
          linkedIn
          lastName
          firstName
          profilePick {
            fixed(width: 300) {
              ...GatsbyContentfulFixed
            }
          }
          bigPicture {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
            }
          }
          biography {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default Home
