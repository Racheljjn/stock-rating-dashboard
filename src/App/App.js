import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar'
import Dashboard from '../Dashboard/index'
import Quote from '../Quote/index'
import { AppProvider } from './AppProvider';

class App extends Component {
  
  
render(){

  return (
    <AppProvider>
      <TopBar/>
      <Quote/>
      <Dashboard/>      
    </AppProvider>
  );
}
  
}



export default App;
