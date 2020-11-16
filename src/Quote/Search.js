import React from 'react'
import styled from 'styled-components'
import{fontSize2} from '../Shared/Styles'
import {AppContext} from '../App/AppProvider'
import fuzzy from 'fuzzy'
import _ from 'lodash'


const SearchGrid = styled.div`
display:grid;
grid-template-columns:200px 200px
`
const InputStyle = styled.input`
height:25px;
border:2px solid white;
place-self:center left;
${fontSize2}
`



const handleFilter = _.debounce((inputValue, stockList, setStocks)=>{
 
 let stocks = stockList.map(item => item.description)
 let symbols = stockList.map(item => item.displaySymbol)
 const allString = [...symbols]
 let fuzzyResults = fuzzy.filter(inputValue, allString, {}).map(res=> res.string)
 console.log(fuzzyResults)
 setStocks(fuzzyResults)

}, 500)

function getFilteredResults(e, stockList, setStocks){
 let inputValue = e.target.value
 if(!inputValue){
  setStocks(null)
  return 
 }
 handleFilter(inputValue, stockList, setStocks)

}



const Search =()=>{
 return <AppContext.Consumer>

  {
   ({stockList, setStocks})=>(
    <SearchGrid>
       <h2>Search stocks</h2>
       <InputStyle placeholder="e.g. AAPL" onKeyUp={(e)=>getFilteredResults(e, stockList, setStocks)}/>
      </SearchGrid>
   )
  }
       
 </AppContext.Consumer>
 
}

export default Search