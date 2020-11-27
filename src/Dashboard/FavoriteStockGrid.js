import React from 'react'
import {AppContext} from '../App/AppProvider'
import styled from 'styled-components'
import {SelectableStock, HighlightStock} from '../Shared/StockStyle'
// import {greenBoxShadow} from '../Shared/Styles'


export const FavoriteStyle = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap:15px;
margin:40px 0;
`


export default function(){
 return <AppContext.Consumer>
  {
   ({favorites, getStockRec, currentFavorite, isLoggedIn})=>(
    <FavoriteStyle>
    {
    !isLoggedIn ? <div>Please confirm first</div> :
    favorites.map(current => {return current === currentFavorite ? <HighlightStock>
     {current.description ? current.description : current.displaySymbol}
    </HighlightStock>
    : <SelectableStock onClick={()=>getStockRec(current.displaySymbol,current)}>{current.description ? current.description : current.displaySymbol}
     </SelectableStock>})}
    </FavoriteStyle>
      ) 
  }
 </AppContext.Consumer>
}