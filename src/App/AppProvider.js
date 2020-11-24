import React, { Component } from 'react'



export const AppContext = React.createContext()
const maxStocks = 5;
export class AppProvider extends Component{
 constructor(props){
  super(props)
  this.state = {
   page:"quote",
   isLoggedIn:false,
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
  // this.fetchQuotes()
  
 }

 async fetchStocks(){
  const firstUrl = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bumnhe748v6scplu3d60'
  try{
   let data = await fetch(firstUrl).then(res=>res.json()).then(data => {return data})
   this.setState({stockList:data})

  }
  catch(error){console.log('error')}  
 }

 async fetchQuotes(){
   
  if(this.state.isLoggedIn === false) return ;
  let quotes = await this.quotes()
  console.log(quotes);
  this.setState({favoritePrices: quotes})
 }

 async quotes(){
   
  //  for(let i = 0; i < favoriteSymbols.length; i++){   
   let price = []
   try{  
     
     let {favoriteSymbols} = this.state;
     console.log(favoriteSymbols[0]);
     let secondUrl = `https://finnhub.io/api/v1/stock/recommendation?symbol=${favoriteSymbols[0]}&token=bumnhe748v6scplu3d60`
    let dataPrice = await fetch(secondUrl).then(res=>res.json()).then(data =>{return data}) 
    
    price.push(dataPrice)
    
    
   
  }catch(error){
    console.log('error');
  }
  return price

//  }


 
}



 /*************************
  functions
 *************************/


 setPage=(page)=>{
  this.setState({page})
  
 }

 setStocks=(filteredStocks)=>{
  this.setState({filteredStocks})
  // console.log(filteredStocks);

 }

 addStock=(stock, symbols)=>{
  let favorites = [...this.state.favorites] 
  let favoriteSymbols = [...this.state.favoriteSymbols]
  favoriteSymbols.push(symbols)
  if(favorites.length < maxStocks) {
    favorites.push(stock)
  this.setState({favorites, favoriteSymbols})
  }
  
 }

 removeStocks=(id)=>{
  let favorites = [...this.state.favorites]
  let favoriteSymbols = [...this.state.favoriteSymbols]
  if(favoriteSymbols.length > 0){
    let newSymbols = favoriteSymbols.filter((sym, index) => index !== id)
    this.setState({favoriteSymbols:newSymbols})
  }
  if(favorites.length > 0){
   let newFavorites = favorites.filter((item,index) => index!== id )
   this.setState({favorites: newFavorites})
  }
 }

 confirmFavorites=()=>{
   this.setState({page:"dashboard", isLoggedIn:true}, ()=>{
     this.fetchQuotes()
   })

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