import React, { Component } from 'react'
import _ from 'lodash'



export const AppContext = React.createContext()
const maxStocks = 5;
export class AppProvider extends Component{
 constructor(props){
  super(props)
  this.state = {
   page:"quote",
   ...this.initialPage(),
   setPage: this.setPage,
   stockList:[],
  //  favorites:[],
   addStock:this.addStock,  
   confirmFavorites:this.confirmFavorites,
   removeStocks:this.removeStocks,
   setStocks:this.setStocks,
   getStockRec:this.getStockRec,
   currentRec:[],
   favoritePrices:[],
   
   
   

  }
 }

 

 /******************
  API calls
 ******************/

 componentDidMount(){
  this.fetchStocks()
  this.fetchQuotes()
  
 }

//  fetch stock tickers from finnhub API and populate stocklist array with stock tickers
 async fetchStocks(){
  const firstUrl = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=buv946748v6vrjlub4i0'
  try{
   let stockList = await fetch(firstUrl).then(res=>res.json()).then(data => {return data})
   console.log(stockList.slice(0,100));
   this.setState({stockList})

  }
  catch(error){console.log('error')}  
 }



 async fetchQuotes(){
   
  if(this.state.isLoggedIn === false) return ;
  let quotes = await this.quotes()
  
  this.setState({favoritePrices: quotes})
  
 }

 async quotes(){
   
  
   let price = []
   try{  
     
    let {favorites} = this.state;
    this.setState({currentFavorite : favorites[0]})
    console.log(favorites);
    let secondUrl = `https://finnhub.io/api/v1/stock/recommendation?symbol=${favorites[0].displaySymbol}&token=buv946748v6vrjlub4i0`
    let data = await fetch(secondUrl).then(res=>res.json()).then(data => data) 
    console.log(data);
    [...price] = data
  
   
  }catch(error){
    console.log('error');
  }

 
    return price
  
 
}



 /*************************
  functions
 *************************/

 initialPage(){
   let favoriteData = JSON.parse(localStorage.getItem('favoriteStocks'))
   let isLoggedInStorage = JSON.parse(localStorage.getItem('isLoggedIn'))
   console.log(favoriteData)
   console.log(isLoggedInStorage)
   if(!favoriteData){
     return {page:'quote', isLoggedIn:false}
   }
   let {favorites} = favoriteData
   let {isLoggedIn} = isLoggedInStorage
   

   return {favorites,isLoggedIn}
 }
 


 setPage=(page)=>{
  this.setState({page})
  
 }

// populate filteredStocks with search results
 setStocks=(filteredStocks)=>{
  
  this.setState({filteredStocks})
  

 }

 addStock=(stock)=>{
  let favorites = [...this.state.favorites] 
  if(favorites.length <= maxStocks) {
  favorites.push(stock)
  this.setState({favorites})
  }


  
 }

 removeStocks=(id)=>{
  let favorites = [...this.state.favorites]
  if(favorites.length > 0){
   let newFavorites = favorites.filter((item,index) => index!== id )
   this.setState({favorites: newFavorites})
  }
 }

 confirmFavorites=()=>{
   this.setState({page:"dashboard", isLoggedIn:true}, ()=>{
     this.fetchQuotes()
   })

   localStorage.setItem('favoriteStocks', JSON.stringify({
     favorites:this.state.favorites
   }))
   localStorage.setItem('isLoggedIn', JSON.stringify({
     isLoggedIn:this.state.isLoggedIn
   }))

 }

 getStockRec= async (favoriteSymbol,currentFavorite)=>{
   let current = []
   try{

    let secondUrl = `https://finnhub.io/api/v1/stock/recommendation?symbol=${favoriteSymbol}&token=buv946748v6vrjlub4i0`

    let currentRec = await fetch(secondUrl).then(res => res.json()).then(data => data );
    [...current] = currentRec
    this.setState({favoritePrices : current, currentFavorite})

   }catch(error){console.log('error' + error)}

 }

 






/************************
 render starts
*************************/

 render(){
  return(
   <AppContext.Provider value={this.state}>
    {this.props.children}
   </AppContext.Provider>
  )
 }
}