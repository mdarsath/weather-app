
import{useState} from 'react'
import City from './city'
import Weather from './weather'
import style from 'styled-components';
import axios from 'axios'
const Pack = style.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow: 0 4px 8px 0 khaki;
padding:20px 10px,
border-radius:10px;
width:300px;
background-color:#92A8D1;

font-family:Montserrat
`
const Read = style.span`
color:navy;
text-decoration:underline;
font-size:20px;

font-style:montessori;`



function App(){
  const [city,updatecity] = useState();
  const [weather,updateweather] = useState();

  const fetchweather=async (e)=>{
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateweather(response.data)
   
  }
  return(<>

  <Pack>
    <Read>REACT WEATHER APP</Read>
    {
      weather?(<Weather response={weather}/>):(<City updatecity={updatecity} fetchweather={fetchweather}/>)
    }
   
  {/* <Weather/> */}
  </Pack>


</>
  )
} 
 
export default App;
