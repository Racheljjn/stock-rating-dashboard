import React from 'react'
import {AppContext} from '../App/AppProvider'
import ReactHighcharts from 'react-highcharts'
import highchartsConfig from './HighchartsConfig'
import chartTheme from './ChartTheme'
import styled from 'styled-components'
ReactHighcharts.Highcharts.setOptions(chartTheme)


export const ErrorStyle = styled.div`
font-size: 2em;
color:red
`
function getStockBuy (currentRec){
 return currentRec.slice(0, 4).map(price => price.buy)
}
function getStockHold (currentRec){
 return currentRec.slice(0, 4).map(price => price.hold)
}
function getStockSell (currentRec){
 return currentRec.slice(0, 4).map(price => price.sell)
}
function getStockPeriod (currentRec){
 return currentRec.slice(0, 4).map(price => price.period)
}
function getStockSymbol(currentRec){
 return currentRec.slice(0, 1).map(price => price.symbol)

}
const StockPriceGrid=()=>{
 return (<AppContext.Consumer>
  {

  ({favoritePrices, isLoggedIn, favorites})=>{
    console.log(isLoggedIn);
      
    if(isLoggedIn && !favorites.length){
      return <ErrorStyle>please select some stocks first </ErrorStyle>
    }

    return favoritePrices.length > 0 ? 
      <ReactHighcharts config={highchartsConfig(getStockBuy(favoritePrices), getStockHold(favoritePrices), getStockSell(favoritePrices), getStockPeriod(favoritePrices), getStockSymbol(favoritePrices))}/> : 
      isLoggedIn ? 
      <ErrorStyle>no avaliable data for this stock, please check others</ErrorStyle> : <ErrorStyle>Please confirm first</ErrorStyle>

    // else if(favoritePrices.length !== 0){
    //   <ReactHighcharts config={highchartsConfig(getStockBuy(favoritePrices), getStockHold(favoritePrices), getStockSell(favoritePrices), getStockPeriod(favoritePrices), getStockSymbol(favoritePrices))}/>}
      
    
    
  }
    

   
 }
 </AppContext.Consumer>)
 }



export default StockPriceGrid