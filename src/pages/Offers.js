import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';


const offerList = [
  {
    id: 1,
    title: '🍨 Ice Cream Combo Offer',
    description: 'Buy 2 ice creams and get 1 scoop FREE!',
    image: require('../assets1/icecream_offer.jpg'),
    validTill: 'April 30, 2025',
  },
  {
    id: 2,
    title: '☕ Coffee + Brownie Combo',
    description: 'Get a Brownie at just ₹30 with any Cold Coffee.',
    image: require('../assets1/coffee_combo.jpg'),
    validTill: 'April 15, 2025',
  },
  {
    id: 3,
    title: '🎉 Flat 20% OFF on Orders Above ₹300',
    description: 'Enjoy 20% off on total bill when you order for ₹300 or more!',
    image: require('../assets1/flat_discount.jpg'),
    validTill: 'April 20, 2025',
  },
  {
    id: 4,
    title: '🍧 Ice Cream of the Day Special',
    description: 'Get 10% off on the “Ice Cream of the Day”!',
    image: require('../assets1/daily_special.jpg'),
    validTill: 'Today Only',
  },
];

const Offers = () => {
  const [appliedOffer, setAppliedOffer] = useState(null);

  const handleGrabOffer = (offer) => {
    setAppliedOffer(offer);

    
    setTimeout(() => {
      setAppliedOffer(null);
    }, 100000);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🔥 Exclusive Offers & Deals</h2>

      {appliedOffer && (
        <Alert variant="success" className="text-center">
          🎁 <strong>{appliedOffer.title}</strong> has been applied!
        </Alert>
      )}

      <Row className="g-4">
        {offerList.map((offer) => (
          <Col md={6} lg={4} key={offer.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={offer.image}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                <Card.Text className="text-muted">
                  Valid Till: <strong>{offer.validTill}</strong>
                </Card.Text>
                <Button variant="danger" onClick={() => handleGrabOffer(offer)}>
                  Grab Offer
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
