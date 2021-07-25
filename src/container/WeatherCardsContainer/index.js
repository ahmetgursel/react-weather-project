import React from 'react';
import WeatherCard from '../../components/WeatherCard';
import { Container, Row } from 'react-bootstrap';

function index() {
  return (
    <Container fluid>
      <Row>
        <WeatherCard border='dark' bg='light'></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
        <WeatherCard></WeatherCard>
      </Row>
    </Container>
  );
}

export default index;
