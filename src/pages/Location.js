
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const branches = [
  {
    name: 'Pabbas Ideal Café – Bejai Main Road',
    address: 'Bharath Mall, Bejai Main Road, Mangalore, Karnataka, 575001',
    phone: '+91 98765 43210',
    timings: '10:00 AM – 11:00 PM',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.252352896177!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabc123def456!2sIdeal%20Café!5e0!3m2!1sen!2sin!4v1614321000000!5m2!1sen!2sin', // Replace with correct iframe
  },
  {
    name: 'Ideal Café – Hampankatta',
    address: 'Sharavu Ganapathi Temple Road, Hampankatta, Mangalore, Karnataka, 575001',
    phone: '+91 98765 67890',
    timings: '11:00 AM – 10:30 PM',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.252352896177!2d77.6400!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabc123def457!2sIdeal%20Café%20Indiranagar!5e0!3m2!1sen!2sin!4v1614321000001!5m2!1sen!2sin',
  },
  {
    name: 'Pabbas – Lalbagh',
    address: 'Near Municipality, Lalbagh, Mangalore, Karnataka, 575001',
    phone: '+91 98765 12345',
    timings: '09:30 AM – 11:00 PM',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.252352896177!2d77.5800!3d12.9200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabc123def458!2sIdeal%20Café%20Jayanagar!5e0!3m2!1sen!2sin!4v1614321000002!5m2!1sen!2sin',
  },
];

function Location() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📍 Our Locations</h2>
      <Row>
        {branches.map((branch, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="p-3 shadow-sm h-100">
              <h5>{branch.name}</h5>
              <p>{branch.address}</p>
              <p>{branch.timings}</p>
              <p>📞 {branch.phone}</p>
              <iframe
                title={branch.name}
                src={branch.mapLink}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Location;
