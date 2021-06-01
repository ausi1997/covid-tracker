import React, { useEffect, useState } from 'react';
import {FetchCountries} from '../service/api';
import {Typography,NativeSelect} from '@material-ui/core';

const Country =({handleCountry})=>{

  const [countries, setCountries] = useState([]);

useEffect(()=>{
     const fetchApi=async()=>{
   const data = await FetchCountries();
   console.log(data);
        setCountries(data);

     }
     fetchApi();
},[])

    return(
        <div>
        <Typography style={{marginTop:20 }} variant='h5' color='textSecondary'>Reported Cases or Deaths Country wise</Typography>
        <NativeSelect className='drop-down' onChange={(e)=>handleCountry(e.target.value)}>
        <option value=''> Globally </option>
        {countries.map((country,i)=>{
            return(
                <option key={i} value={country}>{country}</option>
            )
        })}
        </NativeSelect>
        </div>
    )
}

export default Country;