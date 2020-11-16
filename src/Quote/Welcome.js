import React from 'react'
import { AppContext } from '../App/AppProvider'


const WelcomeMsg = ({isLoggedIn}) =>{
 return (
  <AppContext.Consumer>
   {
    ({isLoggedIn})=>!isLoggedIn? <div>Welcome to stock dashboard, please log in</div> : null
   }


  </AppContext.Consumer>

 )}

 export default WelcomeMsg