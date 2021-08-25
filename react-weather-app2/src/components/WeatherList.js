import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    return (
        <Row>
           {weathers.map(({dt, main, weather, currentTemp}) => (
                <Col key={dt}>
                    <WeatherCard 
                    currentTemp = {temperature.value}
                    temp_max = {temperature.max} 
                    temp_min = {temperature.min} 
                    dt= {dt * 1000} 
                    main= {weather[0].main} 
                    icon= {weather[0].icon} 
                  />
                </Col>
            ))} 
        </Row>
    )
}

export default WeatherList;