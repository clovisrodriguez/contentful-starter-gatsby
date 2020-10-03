/**
 * Dependencies
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'
import TeamCard from 'components/TeamCard'
import TeamCardModal from 'components/TeamCardModal'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Container = styled.div`
  ${({ theme }) => `
  && {
    display: flex;
    flex: 1 1;
    align-content: center;
    .textDescription {
      width: 50%;
      padding: ${theme.spacing(4)}px;
      h4 {
        margin-bottom: 1em;
      }
    }
    .carouselContainer {
      .background {
        position: absolute;
        z-index: 2;
        width: 100%;
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%);
      }
      width: 50%;
      background: none;
      .slide {
        background: none;
      }
    }
  }
|`}
`

export default function Team({ associates, homePage }) {
  const { teamTitle: title, teamDescription: description } = homePage
  const [showModal, setShowModal] = useState(false)
  const [activeAssociate, setActiveAssociate] = useState({})
  return (
    <Container>
      <div className="textDescription">
        <Typography variant="h4" color="primary">
          {title}
        </Typography>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        ></Typography>
      </div>
      <div className="carouselContainer">
        <TeamCardModal {...{ activeAssociate, showModal, setShowModal }} />
        <Carousel
          autoPlay
          showStatus={false}
          renderIndicator={false}
          infiniteLoop
          centerMode
          centerSlidePercentage={60}
        >
          {associates.map(({ node: associate }) => (
            <div key={associate.firstName}>
              <TeamCard {...{ associate, setShowModal, setActiveAssociate }} />
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  )
}
