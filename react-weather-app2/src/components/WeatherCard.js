import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, currentTemp, temp_min, temp_max, main, icon, weatherDescription}) => {
  // create a date object with Date class constructor
  //dt is the date timestamp 
  const date = new Date(dt);
  return (
    <Card >
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* current temperature */}
        <p>Current Temperature: {currentTemp}</p>
        {/* minimum temperature */}
        <p>Low: {temp_min}</p>
        {/* maximum temperature */}
        <p>Hi: {temp_max}</p>

      </Card.Body>
    </Card>
  );
};

export default WeatherCard;