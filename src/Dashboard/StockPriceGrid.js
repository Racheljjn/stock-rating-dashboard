import React from 'react'
import {AppContext} from '../App/AppProvider'
import ReactHighcharts from 'react-highcharts'
import highchartsConfig from './HighchartsConfig'
import chartTheme from './ChartTheme'
ReactHighcharts.Highcharts.setOptions(chartTheme)


function getStockBuy (favoritePrices){
 return favoritePrices.map(arr => arr.slice(0,4).map(item => item.buy? item.buy : 'analysis not available'))
}
function getStockHold (favoritePrices){
 return favoritePrices.map(arr => arr.slice(0,4).map(item => item.hold? item.hold : 'analysis not available'))
}
function getStockSell (favoritePrices){
 return favoritePrices.map(arr => arr.slice(0,4).map(item => item.sell? item.sell : 'analysis not available'))
}
function getStockPeriod (favoritePrices){
 return favoritePrices.map(arr => arr.slice(0,4).map(item => item.period? item.period : 'analysis not available'))
}
function getStockSymbol(favoritePrices){
 return favoritePrices.map(arr => arr.slice(0,1).map(item => item.symbol? item.symbol : 'analysis not available'))

}
const StockPriceGrid=()=>{
 return <AppContext.Consumer>
  {
   ({favoritePrices})=>(<ReactHighcharts config={highchartsConfig(getStockBuy(favoritePrices)[0], getStockHold(favoritePrices)[0], getStockSell(favoritePrices)[0], getStockPeriod(favoritePrices)[0], getStockSymbol(favoritePrices)[0])}/>)
  
   
   
  }
  
 </AppContext.Consumer>

}

export default StockPriceGrid