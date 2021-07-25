import React from 'react';
import { Container, Col, Form } from 'react-bootstrap';
import stateList from '../../assets/stateList.json';
import { useOpenWeatherApi } from '../../context/OpenWeatherApiContext';

function SelectHeader() {
  const { setState } = useOpenWeatherApi();

  const cityOptions = stateList.map((item, index) => (
    <option value={JSON.stringify(item)} key={index}>
      {item.il_adi}
    </option>
  ));

  const selectOnChangeHandler = (e) => {
    const json = JSON.parse(e.target.value);
    setState(json);
  };

  return (
    <Container>
      <Col xs={{ span: 6, offset: 3 }}>
        <Form.Group>
          <Form.Control
            as='select'
            size='lg'
            className='my-4 bg-light'
            onChange={selectOnChangeHandler}
          >
            {cityOptions}
          </Form.Control>
        </Form.Group>
      </Col>
    </Container>
  );
}

export default SelectHeader;
