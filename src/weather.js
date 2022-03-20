import style from 'styled-components'

let Design = style.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
justify-contend:space-between;
margin:30px auto;

` 
let Condition=style.span`
margin:20px auto ;
font-size:14px;
& span{
    font-size:28px;
}

`


const Text = style.span`
font-weight:bold;
text-transform:capitalize;
font-size:6px;
`
const Location = style.span`
font-size:28px;
font-weight:bold;
`

const Info=style.span`
font-size:14px;
font-weight:bold;
margin:20px 25px 10px 0px;
text-align:start;
width:90%;
`

let Display = style.div`
border-radius:10px;
background-color:white;
display:flex;
width:90%;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
flex-wrap:wrap;
`;
let InfoContainer = style.div`

display:flex;
margin:5px 10px;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
`;
let InfoIcon = style.p`
width:36px;
height:36px;
`;
let Infolabel = style.span`


display:flex;
flex-direction:column;
font-size:14px;
margin:13px;
font-weight:bold;
& span{
font-size:12px;
text-transform:capitalize;
}

`;
const IconInfo={
    sunset:   <i class="bi bi-sunset-fill" style={{ fontSize: 40 }}></i>,
    sunrise: <i class="bi bi-sunrise-fill" style={{ fontSize: 40 }}></i>, 
    humidity: <p><i class="bi bi-moisture" style={{ fontSize: 40 }}></i></p>,
    wind:    <p><i class="bi bi-wind" style={{ fontSize: 40 }}></i></p>,
    pressure: <p><i class="bi bi-arrow-right-circle" style={{ fontSize: 40 }}></i></p>,
}
let Icons = (props)=>{
    const{name,value}=props;
    
    return(
        <InfoContainer>
            
            <InfoIcon>{IconInfo[name]}</InfoIcon>
                <Infolabel>
                    {value}
                    <span>{name}</span>
                </Infolabel>
            
        </InfoContainer>
    )
}
const Weather = (props)=>{
    const {response} = props;
    console.log(response)
    const isDay = response.weather[0].icon.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return(
       <>
       
           <Design>
           <Condition>
           <span>{`${Math.floor(response.main.temp - 273)}°C   |` }</span>
                  <Text> {`    ${response.weather[0].description}`}</Text>
           </Condition>
        
           </Design>
           <Location>{`${response.name}, ${response.sys.country}`}</Location>
           <Info>Weather info</Info>
           <Display>
        <Icons name={isDay ? "sunset" : "sunrise"}  value={`${getTime(response.sys[isDay ? "sunset" : "sunrise"])}`}/>
        <Icons name={"humidity"} value={response.main.humidity}/>
        <Icons name={"wind"} value={response.wind.speed}/>
        <Icons name={"pressure"} value={response.main.pressure}/>
                   </Display>
       </>
    )
}

export default Weather