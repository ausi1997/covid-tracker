import {Box, Typography,Grid } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import SingleCard from './singleCard';
import React from 'react';

const Cards =({data})=>{
    //console.log(data.confirmed);
    if(!data.confirmed){
        return <CircularProgress></CircularProgress>
    }
    return(
        <div>
        <Box className='card-box'>
        <Typography variant="h4" gutterBottom>Coronavirus Cases Globally</Typography>
        <Grid container spacing={3} justify='center'>
        <SingleCard cardTitle='Infected' value={data.confirmed.value} desc='Number of Infected cases of covid-19'
         lastUpdate={data.lastUpdate}>
        </SingleCard>
        <SingleCard cardTitle='Recovered' value={data.recovered.value} desc='Number of Recovered cases from covid-19'
        lastUpdate={data.lastUpdate} >
        </SingleCard>
        <SingleCard cardTitle='Deaths' value={data.deaths.value} desc='Number of Deaths caused by covid-19'
        lastUpdate={data.lastUpdate}>
        </SingleCard>
        </Grid>
        </Box>
        </div>
    )
}

export default Cards;