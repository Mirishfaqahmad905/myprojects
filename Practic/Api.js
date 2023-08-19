import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Api.css';

const Api = () => {
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const apiKey = "f37c5e6e0bfd18c05d428a3bca19a42b";

    useEffect(() => {
        const fetchApi = async () => {
            if (city === "") {
                setError("Please enter a city name");
                return;
            }
            setError("");
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
                setWeatherData(response.data);
            } catch (err) {
                setError("Error fetching weather data. Please check the city name and try again.");
            }
        };
        fetchApi();
    }, [city]); 
  

    const handleSearch = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetchApi();
    };

    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <form onSubmit={handleSubmit}>
                        <input type='search' className='inputFeild' value={city} onChange={handleSearch} />
                        <button type="submit">Search</button>
                    </form>
                </div>
                {error && <div className="error">{error}</div>}
                {weatherData && (
                    <div className='info'>
                        <h2 className='location'>{weatherData.name}, {weatherData
.sys.country}</h2>

<img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" /> 
<h1 className='temp'>{(weatherData.main.temp-273).toFixed(2)}&#8451;</h1>
<h3 className='tempin_max '>Min: {(weatherData.main.temp_min - 273.15).toFixed(2)}&#8451; | Max: {(weatherData.main.temp_max - 273.15).toFixed(2)}&#8451;</h3>

</div>
)}
<div className='wave-one'></div>
<div className='wave-two'></div>
<div className='wave-three'></div>
</div>
</>
)
}

export default Api