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
      <Card border={props.border} bg={props.bg} style={{ width: '10rem' }}>
        <Card.Body className='text-center'>
          <Card.Subtitle className='text-muted'>Wed</Card.Subtitle>
          <Card.Img
            variant='top'
            src='http://openweathermap.org/img/wn/09d@2x.png'
          />
          <Card.Text>
            <strong>42° </strong>
            <strong className='text-muted'> 32°</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default index;
