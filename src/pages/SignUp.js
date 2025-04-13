import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function SignUp() {
  return (
    <Container className="my-5">
      <Card className="p-4 shadow">
        <h3 className="text-center mb-4">📝 Create an Account</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default SignUp;
