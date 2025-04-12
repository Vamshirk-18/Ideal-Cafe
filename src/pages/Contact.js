import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📬 Contact Us</h2>
      <Row>
        {/* Contact Form */}
        <Col md={6}>
          <Card className="p-4 shadow">
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message..." required />
              </Form.Group>

              <Button variant="primary" type="submit">Send Message</Button>
            </Form>
          </Card>
        </Col>

        {/* Café Info */}
        <Col md={6}>
          <Card className="p-4 shadow">
            <h5>📍 Visit Us</h5>
            <p>Pabbas Ideal Café, Lalbagh, Mangaluru - 575001</p>

            <h5>📞 Call Us</h5>
            <p>+91 98765 43210</p>

            <h5>📧 Email</h5>
            <p>support@idealcafe.com</p>

            {/* Optional: Embedded Google Map */}
            <div className="mt-3">
              <iframe
                title="Ideal Café Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0459818278265!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670a9d8f4d1%3A0x5e97926a6c4a8752!2sMG%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1617732000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
