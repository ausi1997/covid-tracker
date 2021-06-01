import React, { useEffect, useState } from 'react';
import {Box, Typography} from '@material-ui/core';
import logo from './assets/covid.jpg';
import Cards from './components/card';
import './App.css';
import {FetchData} from './service/api';
import Country from './components/country';
import Chart from './components/chart';
function App() {

  const [data , setData] = useState([]);

  useEffect(async()=>{
   const fetchData = await FetchData();
   setData(fetchData);
   console.log(data);
  });
  return (
    <div className="App">
    <Box className='box'>
    <Box className='box-inner'>COVID-19 PANADEMIC</Box>
    <Typography>Last Updated: {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
    <img style={{width:450}} src={logo} alt="covid"></img>
    <Cards data = {data}></Cards>
    <Country></Country>
    <Chart data={data}></Chart>
    </Box>
    </div>
  );
}

export default App;
