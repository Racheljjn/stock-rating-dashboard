import React from 'react'
import WelcomeMsg from './Welcome'
import Page from '../App/Page'
import Stock from './Stock'
import ConfirmBtn from './ConfirmBtn'
import Search from './Search'


// if page is equal to name here, display welcome msg
export default function(){
 return<Page name="quote">
  
  <Search/>
  <WelcomeMsg/>
  <Stock topStockSection="topStockSection"/>
  <ConfirmBtn/>
  
  <Stock/>
 </Page>
}




