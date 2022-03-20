import style from 'styled-components'
import cors from "cors"
const Cloud = style.img`
width:130px;
height:150px;
margin:40px auto;
`
const Text = style.p`
fond-size:18px;
font-weight:bold;
margin:10px auto;
`

const SearchBox = style.form`
margin:10px auto;
display:flex;
flex-direction:row;
color:black;

& input{
    padding:10px;
    font-size:14px;
   border:2px solid red, 
    
    font-weight:bold;
};


`
function City(props){
  const {updatecity,fetchweather}=props;
  return(
    <>
     <Cloud src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2wfH0g2VIBJMJRyBDFgX_QHaHa%26pid%3DApi&f=1'/>
     <Text>Find Weather of Your City</Text>  
     <SearchBox onSubmit={fetchweather}>
         <input onChange={e=>{updatecity(e.target.value)}} className="input form-control" placeholder="City" type="text"/>
         <button type=" submit" className='btn btn-primary'>Search</button>
     </SearchBox>  
   </>
  )
} 
 
export default City;
