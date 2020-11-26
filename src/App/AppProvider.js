import React, { Component } from 'react'



export const AppContext = React.createContext()
const maxStocks = 5;
export class AppProvider extends Component{
 constructor(props){
  super(props)
  this.state = {
   page:"quote",
   isLoggedIn:false,
   ...this.initialPage(),
   setPage: this.setPage,
   stockList:[],
   favorites:[],
   addStock:this.addStock,  
   confirmFavorites:this.confirmFavorites,
   removeStocks:this.removeStocks,
   favoriteSymbols:[],
   setStocks:this.setStocks,
   favoritePrices:[]
   
   

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
   
  //  for(let i = 0; i < favoriteSymbols.length; i++){   
   let price = []
   try{  
     
    let {favorites} = this.state;
    console.log(favorites[0].displaySymbol);
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
   if(!favoriteData){
     return {page:'quote', isLoggedIn:false}
   }
   let {favorites} = favoriteData
   return {favorites}
 }


 setPage=(page)=>{
  this.setState({page})
  
 }

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