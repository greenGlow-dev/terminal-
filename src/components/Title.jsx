import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
color:white
`

export const Title = ({children}   {color} )   => {
  return (
    <StyledTitle>
{children}
    </StyledTitle>
  )
}
export default Title