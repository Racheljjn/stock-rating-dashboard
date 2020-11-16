import React from 'react'
import {AppContext} from '../App/AppProvider'
import styled from 'styled-components'
import {fontSizeBig} from '../Shared/Styles'



const ConfirmBtnStyle = styled.div`
display:inline-block;
 padding:20px;
 ${fontSizeBig};
 margin:30px auto;
&:hover{
 cursor:pointer;
 border:2px solid black;
}
`
const ConfirmBtn=()=>{
 return <AppContext.Consumer>
  {
   ({favorites, confirmFavorites})=>(favorites.length > 0? <ConfirmBtnStyle onClick={()=>confirmFavorites()}>Confirm</ConfirmBtnStyle> : null)
  }
 </AppContext.Consumer>
  

}

export default ConfirmBtn