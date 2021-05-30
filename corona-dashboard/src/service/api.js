import axios from 'axios';

const uri = "https://covid19.mathdro.id/api";

 export const FetchData = async ()=>{
   try{
  const {data: {confirmed,recovered,deaths,lastUpdate}  }=  await axios.get(uri);
  return {confirmed,recovered,deaths,lastUpdate};
   }
   catch(error){

   }
}

export const FetchCountries= async()=>{
    try{
       const {data:{countries}} = await axios.get(`${uri}/countries`);
       console.log(countries);
       return countries.map(country=>
           country.name);
    }
    catch(error){
  return error;
    }
}