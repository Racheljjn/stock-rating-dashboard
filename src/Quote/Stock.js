import React from 'react'
import {AppContext} from '../App/AppProvider'
import styled from 'styled-components'
import {SelectableStock, DisabledStock, DeletableStock} from '../Shared/StockStyle'




export const StockGrid = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap:15px;
margin-top:40px
`

export const DeleteStyle = styled.div`
display:grid;
grid-template-columns: 2fr 1fr;

`
export const DeleteSym = styled.div`
justify-self:right;
display:none; 
${DeletableStock}:hover &{
  display:block;
  color:red;

}
`


function getDifferentStocks(stockList,topStockSection,favorites, filteredStocks){
  return  topStockSection ? favorites : getSearchResults(filteredStocks, stockList)

}


function getSearchResults(filteredStocks, stockList){
  return filteredStocks || stockList.slice(0, 100)

}



export default function ({topStockSection}){
 return(<AppContext.Consumer>
  {
   ({stockList, addStock, removeStocks, filteredStocks, favorites})=>(
   
   <StockGrid >
     {
       
       getDifferentStocks(stockList,topStockSection,favorites,filteredStocks).map((stock, index) =>{return topStockSection ? <DeletableStock  onClick={()=>removeStocks(index)}>
        <DeleteStyle>
         <div>{stock.description ? stock.description : stock.displaySymbol}</div>
         <DeleteSym>X</DeleteSym>
        </DeleteStyle>
      </DeletableStock> 

      : favorites.find(item => item.displaySymbol === stock.displaySymbol) ? <DisabledStock>
        {stock.description ? stock.description : stock.displaySymbol}
      </DisabledStock> :
      <SelectableStock onClick={()=>{addStock(stock)}}>
         {stock.description ? stock.description : stock.displaySymbol}
       </SelectableStock>})   
     }
     
    </StockGrid>)
   
  }
 </AppContext.Consumer>)
 
}



