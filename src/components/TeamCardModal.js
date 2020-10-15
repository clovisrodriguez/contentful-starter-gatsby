/**
 * Dependencies
 */
import React from 'react'
import styled from 'styled-components'
import { Modal, Typography, Paper, Button } from '@material-ui/core'
import Image from 'gatsby-image'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import CloseIcon from '@material-ui/icons/Close'

const Container = styled(Paper)`
  ${({ theme }) => `
  && {
    border: none;
    position: absolute;
    margin: auto;
    left: 50%;
    right: 0;
    transform: translate(-50%, 0);
    margin-top: 10vh;
    display: flex;
display:-webkit-flex;
    height: 36.4em;
    width: 52em;
    ${theme.breakpoints.down('sm')} {
      overflow-y: scroll;
      width: 100%;
      margin-top: 0;
      height: 100%;
      display: inline;
    }
    .profilePick {
      ${theme.breakpoints.down('sm')} {
        overflow: hidden;
        height: auto;
      }
      button {
        position: absolute;
        z-index: 2;
        cursor: pointer;
        color: white;
        border-radius: 50%;
        margin: 1em;
        background: rgba(0,0,0,0.4);
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
  }
  `}
`

export default function TeamCardModal({
  activeAssociate,
  showModal,
  changeModalState,
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
      onClose={() => changeModalState()}
      disableScrollLock
    >
      {firstName && (
        <Container>
          <div className="content profilePick">
            <Button onClick={() => changeModalState(false)}>
              <CloseIcon />
            </Button>
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
              component="div"
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
