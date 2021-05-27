import React, { useEffect } from 'react';
import {Box} from '@material-ui/core';
import logo from './assets/covid.jpg';
import Cards from './components/card';
import './App.css';
import FetchData from './service/api';

function App() {
  useEffect(async()=>{
   await FetchData();
  })
  return (
    <div className="App">
    <Box className='box'>
    <Box className='box-inner'>COVID-19 PANADEMIC</Box>
    <img style={{width:450}} src={logo} alt="covid"></img>
    <Cards></Cards>
    </Box>
    </div>
  );
}

export default App;
