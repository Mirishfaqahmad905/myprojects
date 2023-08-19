import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Apis.css";
const Apis = () => {
    const [city,setciy]=useState('');
     const [weatherdata,setweaterdata]=useState('');
      const [err,seterror]=useState('');
      console.log(weatherdata);
    const apiKey = "f37c5e6e0bfd18c05d428a3bca19a42b";
     console.log(city);
     useEffect(()=>{
       const fetchData=async ()=>{
         if(city===""){
           seterror('please enter the correct city name around the world');
            
         };
          seterror('');

          const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
           const data=response.data;
            setweaterdata(data);
             
       };
        fetchData();
     },[city]);
       const Handle=(e)=>{
         e.preventDefault();
       }
        const ChangeHandler=(e)=>{
           setciy(e.target.value);
        }
  return (
 <div>
   <div className='api-fetch'>
     <div className='form'>
       <form className='form-data' onSubmit={Handle}>
         <input type={'search'}  onChange={ChangeHandler}  name='search'/>
       
           
       </form>
       <div className='err'>
                  {err && (<p>  erro accure  {err}</p>)}
                </div>
       {weatherdata && (
        <>
           <div className='country-list'>
           <h2>Country: <i class="fas fa-flag"></i> {weatherdata.name}</h2>

            <h2> <i class="fas fa-map-marker-alt"></i> {weatherdata.sys.country}</h2>

             <img src={`https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`} alt="weather icon" /> 
              
         </div>
             
          <div className='max-tem'>
          <h2>Current Temperature: <i class="fas fa-thermometer-half"></i> {(weatherdata.main.temp - 273.15).toFixed(2)} &#8451;</h2>
<h2>Min Temperature: <i class="fas fa-thermometer-empty"></i> {(weatherdata.main.temp_min - 273.15).toFixed(2)} &#8451; | Max Temperature: <i class="fas fa-thermometer-full"></i> {(weatherdata.main.temp_max - 273.15).toFixed(2)} &#8451;</h2>
<h2>Humidity: <i class="fas fa-tint"></i> {weatherdata.main.humidity}%</h2>
<h2>Wind Speed: <i class="fas fa-wind"></i> {weatherdata.wind.speed} m/s</h2>
<h2>Wind Deg: <i class="fas fa-compass"></i> {weatherdata.wind.deg} &#176;</h2>

<h2>Weather Description: <i class="fas fa-cloud"></i> {weatherdata.weather[0].description}</h2>

          </div>
        </>
       )}
 <div className='wave-weather'>
 <div className='wave-one'></div>
  <div className='wave-two'></div>
   <div className='wave-three'></div>
 </div>
     </div>
   </div>
 </div>
  )
}

export default Apis