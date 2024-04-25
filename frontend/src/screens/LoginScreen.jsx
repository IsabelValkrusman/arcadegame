import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useLoginMutation } from "../slices/usersApiSlice";
import { toast } from 'react-toastify';

// Impordi FormContainer ja Loader komponendid siit
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [login] = useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await login({ email, password }).unwrap();
      // Kui soovid suunata kasutajat pärast sisselogimist,
      // siis pane siia suunamise loogika.
      // Näiteks: window.location.href = '/';
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    setIsLoading(false);
  };

  return (
    // Kasuta FormContainer komponenti siin
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email aadress</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-2" disabled={isLoading}>
          Sign In
        </Button>

        {isLoading && <Loader />}

      </Form>

      <Row className='py-3'>
        <Col>
          New Customer? <Link to={'/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
