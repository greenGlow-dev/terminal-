import React from 'react'
import styled , {css , keyframes} from 'styled-components'


const AnimationButton = keyframes`
0%{
  transform:rotateZ(0deg);
}
100%{
    transform:rotateZ(360deg);
}
`

const StyledButton = styled.button`
padding:10px 15px;
border:none;
font-size:24px
margin-bottom: ${props => props.margin};
cursor:pointer;
align-self:${props => props.align || 'str'}; 

&: hover{
    animation: ${AnimationButton} 1s infinite linear;
}


${props => props.primary && css`
color: ${props => props.color || 'white'};
background:${props => props.background || 'white'};
`}

${props => props.outline && css`
color: ${props => props.color || 'white'};
border: 1px solid ${props => props.color || 'white'};
background:transparent;
`}


`

const LargeButton = styled(StyledButton)`
font-size:32px;`


console.log('dad')

export const Button = (props) => {
  return (
    <LargeButton {...props} />
  )
}

export default Button