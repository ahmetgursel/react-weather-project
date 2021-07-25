import React from 'react';
import WeatherCard from '../../components/WeatherCard';
import { Container, Row } from 'react-bootstrap';
import { UseOpenWeatherApi } from '../../context/OpenWeatherApiContext';

function WeatherCardsContainer() {
  const { weather } = UseOpenWeatherApi();

  const unixTimestampConverter = (dt) => {
    const milliseconds = dt * 1000;
    const dateObject = new Date(milliseconds); //2019-12-9 10:30:15
    return dateObject.toLocaleString('en-US', { weekday: 'long' });
  };

  let weatherRender;

  try {
    weatherRender = weather.daily.map((item, index) => (
      <WeatherCard
        day={unixTimestampConverter(item.dt)}
        icon={item.weather[0].icon}
        current={Math.round(item.temp.day)}
        max={Math.round(item.temp.max)}
        min={Math.round(item.temp.min)}
        key={index}
        index={index}
      ></WeatherCard>
    ));
  } catch {
    console.log('data henüz çekilmedi');
  }

  return (
    <Container fluid>
      <Row>{weatherRender}</Row>
    </Container>
  );
}

export default WeatherCardsContainer;
