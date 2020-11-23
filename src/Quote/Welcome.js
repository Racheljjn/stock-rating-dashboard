import React from 'react'
import { AppContext } from '../App/AppProvider'


const WelcomeMsg = ({isLoggedIn}) =>{
 return (
  <AppContext.Consumer>
   {
    ({isLoggedIn})=>!isLoggedIn? <div>Welcome to stock dashboard, please search or select your favorite stocks and confirm to get recommendation dashboard for your first pick</div> : null
   }


  </AppContext.Consumer>

 )}

 export default WelcomeMsg