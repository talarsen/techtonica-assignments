import React from "react";
import './App.css';
//components
import WeatherCard from "./components/WeatherCard.js"
// A React app that connected to the openweathermap api
// Have an input that will take a city name, after the city name is verified and data is returned display: current weather icon, temp (high, low, current) - in fahrenheit!
// 5 day forecast!
// Responsive
// Error handling
//high is list.main.temp_max low is list.main.temp_min in min and current is data.list.main.temp
//

function App() {
  return (
    <div className="App">
     {/* dt is in unix-seconds but javascript uses milliseconds, multiply with 1000 */} 

     <WeatherCard
      dt = {1602104400 * 1000}
      temp_min= "22.67"
      temp_max= "24.39"
      main= "clear"
      icon= "01d"
      />
    </div>
  );
}

export default App;
