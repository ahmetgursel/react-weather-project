import React from 'react';
import { Card, Col } from 'react-bootstrap';

function index(props) {
  return (
    <Col
      lg={{ span: 1, offset: 2 }}
      md={3}
      sm={6}
      className='mx-auto my-5 d-flex justify-content-center p-0'
    >
      <Card
        border={props.index === 0 ? 'dark' : props.border}
        bg={props.index === 0 ? 'light' : props.bg}
        style={{ width: '10rem' }}
      >
        <Card.Body className='text-center'>
          <Card.Subtitle className='text-muted'>{props.day}</Card.Subtitle>
          <Card.Img
            variant='top'
            src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          />
          <Card.Text>
            <strong>{props.current}°</strong>
            <br />
            <strong className='text-muted'>{props.max}° </strong>
            <strong className='text-muted'> - {props.min}°</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default index;
