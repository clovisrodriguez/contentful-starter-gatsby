/**
 * Dependencies
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography, Button } from '@material-ui/core'
import ReactCardFlip from 'react-card-flip'

const CardContainer = styled.div`
  ${({ theme, i }) => `
  && {
      flex: 1 1 30em;
      padding: ${theme.spacing(3)}px;
      background: ${
        (i + 1) % 2 ? theme.palette.primary.main : theme.palette.primary.dark
      };
      color: white;
    };
    .flipCard {
        height: 40em;
        display flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: ${theme.spacing(0, 2)};
        li {
            list-style: disc;
            text-align: left;
            line-height: 1.5;
        }
    }
    .button {
        color: ${theme.palette.grey[50]};
        width: 10em;
    }
`}
`
export default function ServiceCard({ card, i }) {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <CardContainer i={i}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="flipCard">
          <Typography variant="h5">{card.title}</Typography>
          <Button
            variant="text"
            className="button"
            onClick={() => setIsFlipped(true)}
          >
            Ver más {`>>`}
          </Button>
        </div>
        <div className="flipCard">
          <div
            dangerouslySetInnerHTML={{
              __html: card.description.childMarkdownRemark.html,
            }}
          ></div>
          <Button
            variant="text"
            className="button"
            onClick={() => setIsFlipped(false)}
          >
            Volver
          </Button>
        </div>
      </ReactCardFlip>
    </CardContainer>
  )
}
