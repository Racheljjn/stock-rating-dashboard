import React from 'react'
import Page from '../App/Page'
import StockPriceGrid from './StockPriceGrid'
import {AppContext} from '../App/AppProvider'

export default function(){

 return <AppContext.Consumer>
  {
   ({favoritePrices})=>(<Page name="dashboard">
    {
     favoritePrices ? <StockPriceGrid/> : <div>no available data, please select another stock</div> 
    }
  
 </Page>)
  }
 </AppContext.Consumer>
 
}