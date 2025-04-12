import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import '../App.css';
import App from '../App';
import hero1 from '../assets1/hero1.png';
import hero2 from '../assets1/hero2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Menu from '../pages/Menu';
import IceCreamOfTheDay from '../pages/IceCreamOfTheDay';
import FlavorRecommendation from '../pages/FlavorRecommendation';
import SignIn from '../pages/SignIn';
import Offers from '../pages/Offers';

const Home = () => {
  return (
    <div>

      <Carousel className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100" src={hero1} alt="First slide" />
          <Carousel.Caption>
            <h3>Award-Winning Ice Creams</h3>
            <p>Try our famous Gadbad Ice Cream!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Refreshing Flavors</h3>
            <p>Crafted with love and tradition.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>

        
        <h2 className="mb-4 text-center">Popular Dishes</h2>
        <Row className="mb-5">
          {['Gadbad', 'Tiramisu Sundae', 'Chocolate Fudge'].map((dish, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Img variant="top" src={`/assets/dish${index + 1}.jpg`} />
                <Card.Body>
                  <Card.Title>{dish} Ice Cream</Card.Title>
                  <Card.Text>
                    Enjoy the perfect blend of flavors in our top-selling treat!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

       
        <h2 className="mb-4 text-center">What Our Customers Say</h2>
        <Row className="mb-5">
          {[
            { name: 'Ayesha', review: 'Best ice cream in Mangalore!' },
            { name: 'Rahul', review: 'Love the Gadbad! Must try!' },
            { name: 'Divya', review: 'Perfect place for dessert cravings.' }
          ].map((testimonial, index) => (
            <Col md={4} key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Text>"{testimonial.review}"</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

       
        <h2 className="mb-4 text-center">Exclusive Offers</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>🍦 Happy Hours</Card.Title>
                <Card.Text>Buy 1 Get 1 Free on all scoops from 4 PM to 6 PM!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>🎉 Seasonal Special</Card.Title>
                <Card.Text>Mango Mania returns this summer — limited time only!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Home;
