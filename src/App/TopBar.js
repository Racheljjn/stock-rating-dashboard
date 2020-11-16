import React from 'react'
import {AppContext} from './AppProvider'
import styled, {css} from 'styled-components'

const Logo = styled.div`
font-size:1.5em;
`
const Bar = styled.div`
padding:1.4em;
display:grid;
grid-template-columns:180px auto 100px 100px
`
const ButtonStyled = styled.div`
cursor:pointer;
${props => props.active && css`
border:2px solid #3C4F76;
`}
`



const ControlButton =({name})=> {
return (

<AppContext.Consumer>
 {
  ({page,setPage})=>(
   <ButtonStyled onClick={()=>{setPage(name)}} active={page === name}>
    {name}
   </ButtonStyled>)
 }
</AppContext.Consumer> 
)

}


export default function(){
 return (<Bar>
  <Logo>Stock Quote</Logo>
  <div></div>
  <ControlButton name="quote"/>
  <ControlButton name="dashboard"/>

 </Bar>)
 
}

