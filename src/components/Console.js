import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Line from './Line'

const StyledConsole = styled.textarea`
width:100%;
height:70vh;
background:black;
font-size:24px; 
border:none;
resize:none;
color: ${(props)=> props.color};
&:focus{
    outline:none;
}
`

export const Console = (props) => {

  const [lines, setLines] = useState(['C/users/GreenGLow>'])
  const onKeyPress1 = e => {
    if(e.charCode == 13){
      setLines([...lines,"C/users/GreenGLow>"])
    }
  }

  return (

    <Flex margin='10px 0'>
      <Flex direction='column' >
          {lines.map((lin) => <Line color="green" >{lin}</Line>)}
      </Flex>
      <StyledConsole {...props} color="green" onKeyPress ={onKeyPress1} />
    </Flex>


  )
}

export default Console