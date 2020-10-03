/**
 * Dependencies
 */
import React from 'react'
import styled from 'styled-components'
import { Modal, Typography, Paper } from '@material-ui/core'
import Image from 'gatsby-image'

const Container = styled(Paper)`
  ${({ theme }) => `
    border: none;
    position: absolute;
    margin: auto;
    left: 50%;
    right: 0;
    transform: translate(-50%, 0);
    margin-top: 10vh;
    display: flex;
    .content {
      width: 35em;
      height: 37.6em;
    }
    .bio {
      padding: 2em;
      text-align: center;
      margin-bottom: 2em;
    }
    .paragraph {
      margin-top: 2em;
      text-align: left;
      height: 16em;
      overflow-y: scroll;
      p {
        margin-top: 1em;
      }
    }
  `}
`

export default function TeamCardModal({
  activeAssociate,
  showModal,
  setShowModal,
}) {
  const {
    firstName,
    lastName,
    bigPicture,
    position,
    biography,
  } = activeAssociate
  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      disableScrollLock
    >
      {firstName && (
        <Container>
          <div className="content profilePick">
            <Image fluid={bigPicture.fluid} />
          </div>
          <div className="content bio">
            <Typography variant="h4" color="primary">
              {firstName} {lastName}
            </Typography>
            <Typography variant="h6">{position}</Typography>
            <Typography
              variant="body1"
              className="paragraph"
              dangerouslySetInnerHTML={{
                __html: biography.childMarkdownRemark.html,
              }}
            ></Typography>
          </div>
        </Container>
      )}
    </Modal>
  )
}
