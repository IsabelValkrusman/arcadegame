import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Logi</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Logi sisse</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Makse</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Makse</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Vormista tellimus</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Vormista tellimus</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;