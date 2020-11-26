import React from 'react'
import {AppContext} from '../App/AppProvider'
import ReactHighcharts from 'react-highcharts'
import highchartsConfig from './HighchartsConfig'
import chartTheme from './ChartTheme'
ReactHighcharts.Highcharts.setOptions(chartTheme)


function getStockBuy (favoritePrices){
 return favoritePrices.slice(0, 4).map(price => price.buy)
}
function getStockHold (favoritePrices){
 return favoritePrices.slice(0, 4).map(price => price.hold)
}
function getStockSell (favoritePrices){
 return favoritePrices.slice(0, 4).map(price => price.sell)
}
function getStockPeriod (favoritePrices){
 return favoritePrices.slice(0, 4).map(price => price.period)
}
function getStockSymbol(favoritePrices){
 return favoritePrices.slice(0, 1).map(price => price.symbol)

}
const StockPriceGrid=()=>{
 return (<AppContext.Consumer>
  {

  ({favoritePrices})=>{
    return (<div>

   <ReactHighcharts config={highchartsConfig(getStockBuy(favoritePrices), getStockHold(favoritePrices), getStockSell(favoritePrices), getStockPeriod(favoritePrices), getStockSymbol(favoritePrices))}/>
  </div>)
    

   
 } }
 </AppContext.Consumer>)}



export default StockPriceGrid