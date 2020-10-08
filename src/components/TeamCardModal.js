/**
 * Dependencies
 */
import React from 'react'
import styled from 'styled-components'
import { Modal, Typography, Paper } from '@material-ui/core'
import Image from 'gatsby-image'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

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
    height: 36.4em;
    width: 52em;
    ${theme.breakpoints.down('sm')} {
      overflow-y: scroll;
      flex-direction: column;
      width: 100%;
      margin-top: 0;
      height: 100%;
    }
    .profilePick {
      ${theme.breakpoints.down('sm')} {
        overflow: hidden;
        height: 40%;
      }
    }
    .content {
      ${theme.breakpoints.down('sm')} {
        width: 100%;
      }
      width: 26em;
    }
    .bio {
      padding: 2em;
      text-align: center;
      ${theme.breakpoints.down('sm')} {
        padding: 1em;
        height: 60%;
      }
      .social {
        padding: 1em;
        * {
          cursor: pointer;
          color: ${theme.palette.primary.main};
          font-size: 1.5em;
        }
      }
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
    linkedIn,
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
            <div className="social">
              <a target="blank" href={`https://linkedin.com/in/${linkedIn}`}>
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </Container>
      )}
    </Modal>
  )
}
