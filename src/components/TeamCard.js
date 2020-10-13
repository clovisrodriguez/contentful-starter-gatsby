/**
 * Dependencies
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography, Button } from '@material-ui/core'
import Img from 'gatsby-image'

const Card = styled.div`
  ${({ theme }) => `
  margin-top: ${theme.spacing(2)}px;
display: flex;
display:-webkit-flex;
flex-direction: column;
align-items: center;
justify-content: center;
.profile {
  width: 18em;
  border-radius: 50%;
  border: 6px solid ${theme.palette.primary.main};
  height: 18em;
  overflow: hidden;
  display: flex;
display:-webkit-flex;
  align-items: center;
  justify-content: center;
  padding-top: ${theme.spacing(2)}px;
  margin-bottom: ${theme.spacing(2)}px;
}
button {
  margin-top: ${theme.spacing(2)}px;
}
`}
`

export default function TeamCard({
  associate,
  changeModalState,
  setActiveAssociate,
}) {
  const handleClick = (e) => {
    e.preventDefault()
    setActiveAssociate(associate)
    changeModalState(true)
  }
  return (
    <Card>
      <div className="profile">
        <Img fixed={associate.profilePick.fixed} />
      </div>
      <Typography variant="h5" color="primary">
        {`${associate.firstName} ${associate.lastName}`}
      </Typography>
      <Typography variant="body1">{associate.position}</Typography>
      <Button onClick={handleClick}>Leer Perfil</Button>
    </Card>
  )
}
