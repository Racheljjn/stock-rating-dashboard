import React from 'react'
import { AppContext } from '../App/AppProvider'
import styled from 'styled-components'
import { fontSize1 } from '../Shared/Styles'
import { Color } from 'highcharts'

const WelcomeStyled = styled.div`
 width:45%;
 text-align:left;
 margin-left:20px;
 ${fontSize1}

`


const WelcomeMsg = () =>{
 return (
  <AppContext.Consumer>
   {
    ({isLoggedIn})=>!isLoggedIn? <WelcomeStyled>Welcome to stock dashboard, please search and select stocks and then <span style={{'color':'green', fontSize:'2em'}}>confirm</span>to get recommendation dashboard for your favorite stocks</WelcomeStyled> : null
   }


  </AppContext.Consumer>

 )}

 export default WelcomeMsg