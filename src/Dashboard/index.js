import React from 'react'
import Page from '../App/Page'
import StockPriceGrid from './StockPriceGrid'
import FavoriteStockGrid from './FavoriteStockGrid'

export default function(){

 return (

   <Page name="dashboard">
     <FavoriteStockGrid/>
     <StockPriceGrid/>   
   </Page>
 )
  
  
 
 
}