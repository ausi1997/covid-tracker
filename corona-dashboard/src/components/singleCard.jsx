import React from 'react';
import {Grid,CardContent,Box,Typography,Card} from '@material-ui/core';
import Countup from 'react-countup';

const SingleCard = ({cardTitle,value,desc,lastUpdate})=>{
    return(
        <Grid component={Card} style={{margin:20, borderBottom:'10px solid yellow'}}>
        <Box className='card' >
        <Typography variant='h5'>{cardTitle}</Typography>
        </Box>
        <CardContent>
        <Typography variant='h5'>
        <Countup start={0} end={value} duration={3} separator=','></Countup>
        </Typography>
        <Typography>{desc}</Typography>
        <Typography>{lastUpdate && new Date(lastUpdate).toDateString()}</Typography>
        </CardContent>
       
        </Grid>
    )
}

export default SingleCard;