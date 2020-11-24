import React from 'react'
import {AppContext} from '../App/AppProvider'
import styled from 'styled-components'
import {SelectableStock, DisabledStock} from '../Shared/StockStyle'


export const StockGrid = styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr);
grid-gap:15px;
margin-top:40px
`


// function getLowerStock(filteredStocks, stockList){
//   let stockItems = stockList.slice(0,100).map(item=>{return item.description})
//   return filteredStocks ? filteredStocks : stockItems

// }
// console.log(getLowerStock());
export default function (){
 return(<AppContext.Consumer>
  {
   ({stockList, addStock, filteredStocks, favoriteSymbols})=>(<StockGrid >
     {
       
     filteredStocks? filteredStocks.map(des => {return<SelectableStock onClick={()=>{addStock(des,des)}}>{des}</SelectableStock>}) : stockList.slice(0,100).map(piece =>  {return !favoriteSymbols.includes(piece.displaySymbol) ? <SelectableStock onClick={()=>{addStock(piece.description ? piece.description : piece.displaySymbol, piece.displaySymbol)}}>{piece.description} {piece.displaySymbol}</SelectableStock> : <DisabledStock>{piece.description} {piece.displaySymbol}</DisabledStock>})
     }
     
    </StockGrid>)
   
  }
 </AppContext.Consumer>)
 
}



