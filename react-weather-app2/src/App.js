import React from "react";
import './App.css';
import {Container} from 'react-bootstrap';
//components
import CitySelector from './components/CitySelector';
import UseFetch from "./hooks/UseFetch";
import WeatherList from './components/WeatherList';
import {API_KEY, API_BASE_URL} from './config.js';
// A React app that connected to the openweathermap api
// Have an input that will take a city name, after the city name is verified and data is returned display: current weather icon, temp (high, low, current) - in fahrenheit!
// 5 day forecast!
// Responsive
// Error handling
//high is list.main.temp_max low is list.main.temp_min in min and current is data.list.main.temp
//



function App() {
  const {data, setUrl} = UseFetch();


  return (
    <Container className="App">
        <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`)} />
        {/* conditionally render  */}
     {data && <WeatherList weathers={data.list.filter(({dt}) => {
          const date = new Date(dt * 1000);
          if(date.getHours() === 8){
            return true;
          } 
          console.log(date.getHours()) 
          // return true;  
     })
     
     } />}
     
    </Container>
    
  );
}


export default App;
