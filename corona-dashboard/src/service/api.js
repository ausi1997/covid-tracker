import axios from 'axios';

const uri = "https://covid19.mathdro.id/api";

const FetchData = async ()=>{
   try{
  const {data: {confirmed,recovered,deaths,lastUpdate}  }=  await axios.get(uri);
  return {confirmed,recovered,deaths,lastUpdate};
   }
   catch(error){

   }
}
export default FetchData;