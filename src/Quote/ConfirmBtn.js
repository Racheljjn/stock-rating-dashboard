import React from 'react'
import {AppContext} from '../App/AppProvider'
import styled from 'styled-components'
import {fontSize1} from '../Shared/Styles'



const ConfirmBtnStyle = styled.div`
 display:flex;
 justify-content:center;
 padding:20px;
 ${fontSize1};
 margin:50px auto;
&:hover{
 cursor:pointer;
 color:green;
}
`
const ConfirmBtn=()=>{
 return <AppContext.Consumer>
  {
   ({confirmFavorites})=>(<ConfirmBtnStyle onClick={()=>confirmFavorites()}>Confirm</ConfirmBtnStyle> )
  }
 </AppContext.Consumer>
  

}

export default ConfirmBtn