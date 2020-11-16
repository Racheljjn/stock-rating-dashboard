import React from 'react'
import {AppContext} from '../App/AppProvider'
import {DeletableStock} from '../Shared/StockStyle'
import styled from 'styled-components'

const TopStockStyle = styled.div`
display:grid;
grid-template-columns:repeat(4, 1fr);
grid-gap:15px;
margin:20px 0;
`

const TopStock=()=>{

 return <AppContext.Consumer>
  {   
   ({favorites,removeStocks})=>(
   <TopStockStyle>
    {
      favorites.map((item,index)=> <DeletableStock onClick={()=>removeStocks(index)}>{item}</DeletableStock>)
    }   
   </TopStockStyle>)
  }
 </AppContext.Consumer>

}

export default TopStock