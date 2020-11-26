import React from 'react'
import {AppContext} from '../App/AppProvider'
import ReactHighcharts from 'react-highcharts'
import highchartsConfig from './HighchartsConfig'
import chartTheme from './ChartTheme'
ReactHighcharts.Highcharts.setOptions(chartTheme)


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

  ({favoritePrices})=>{
    return (<div>{

      // favoritePrices.length > 0 ? <ReactHighcharts config={highchartsConfig(getStockBuy(favoritePrices), getStockHold(favoritePrices), getStockSell(favoritePrices), getStockPeriod(favoritePrices), getStockSymbol(favoritePrices))}/> 
      favoritePrices.length > 0 ? 
      <ReactHighcharts config={highchartsConfig(getStockBuy(favoritePrices), getStockHold(favoritePrices), getStockSell(favoritePrices), getStockPeriod(favoritePrices), getStockSymbol(favoritePrices))}/> : <div>no avaliable data, please select some stocks</div>

      }

   
  </div>)
    

   
 } }
 </AppContext.Consumer>)}



export default StockPriceGrid