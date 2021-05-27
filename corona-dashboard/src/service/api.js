import axios from 'axios';

const uri = "https://covid19.mathdro.id/api";

const FetchData = async ()=>{
   try{
  const data =  await axios.get(uri);
  console.log(data);
  return data;
   }
   catch(error){

   }
}
export default FetchData;