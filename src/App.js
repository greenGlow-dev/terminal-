import React from 'react'
import styled from 'styled-components'
import Title from './components/Title'
import Flex from './components/Flex'
import Console from './components/Console'
import Button from './components/Button'




const AddWrapper = styled.div`
width:100%;
min-height:100vh;
padding:2rem;
background:black;
color:white
`


export const App = () => {
  return (
    <AddWrapper>
      <Flex content = "center">
        <Title color="green">
       Console cmd 2021. GreenGlow
        </Title>
     </Flex>
     <Flex direction="column" >
     <Console/>
    <Button  outline color='green' align="flex-end">Send</Button>
     </Flex>
 
    </AddWrapper>
  )
}
export default App