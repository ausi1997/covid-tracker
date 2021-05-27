import React from 'react';
import {Box} from '@material-ui/core';
import logo from './assets/covid.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Box className='box'>
    <Box className='box-inner'>COVID-19 PANADEMIC</Box>
    <img style={{width:450}} src={logo} alt="covid"></img>
    </Box>
    </div>
  );
}

export default App;
