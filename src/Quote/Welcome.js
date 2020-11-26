import React from 'react'
import { AppContext } from '../App/AppProvider'
import styled from 'styled-components'

const WelcomeStyled = styled.div`
 width:45%;
 text-align:left;
 margin-left:20px

`


const WelcomeMsg = () =>{
 return (
  <AppContext.Consumer>
   {
    ({isLoggedIn})=>!isLoggedIn? <WelcomeStyled>Welcome to stock dashboard, please search or select your favorite stocks and confirm to get recommendation dashboard for your first pick</WelcomeStyled> : null
   }


  </AppContext.Consumer>

 )}

 export default WelcomeMsg