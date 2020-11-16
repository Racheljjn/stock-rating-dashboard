import React from 'react'
import {AppContext} from './AppProvider'

const Page =({name, children})=>{
 return <AppContext.Consumer>
  {
   ({page})=> page === name ? children : null
  }
 </AppContext.Consumer>


}

export default Page