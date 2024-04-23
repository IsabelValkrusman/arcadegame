import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook suunamiseks
  const location = useLocation(); // Hook asukoha hankimiseks

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = location;
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  // Kui kasutaja on sisselogitud, suuname ta edasi õigesse kohta
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  // Käivitatakse vormi saatmisel
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Käivita login mutation
      const res = await login({ email, password }).unwrap();
      // Määra kasutaja andmed Reduxi olekusse
      dispatch(setCredentials({ ...res }));
      // Suuna kasutaja õigesse kohta
      navigate(redirect);
    } catch (err) {
      // Käitle viga
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        {/* Emaili välja vorm */}
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Parooli välja vorm */}
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Sisselogimise nupu vorm */}
        <Button disabled={isLoading} type='submit' variant='primary'>
          Sign In
        </Button>

        {/* Laadimise oleku näitamine */}
        {isLoading && <Loader />}
      </Form>

      {/* Lingi vorm uue kasutaja registreerimiseks */}
      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={`/register?redirect=${redirect}`}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
