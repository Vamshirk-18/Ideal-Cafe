import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import RatingStars from '../pages/RatingStars'; 
import pavbhaji from '../assets1/pavbhaji.jpg';
import marzi_paan from '../assets1/marzi_paan.jpg';
import cold_coffee from '../assets1/cold_coffee.jpg';
import vada_chutney from '../assets1/vada_chutney.jpg';
import bee from '../assets1/bee.jpg';
import brownie from '../assets1/brownie.jpg';
import fantasy from '../assets1/fantasy.jpg';
import oreo from '../assets1/oreo.jpg';


const sampleMenuItems = [
    {
        id: 1,
        name: 'Gadbad Ice Cream',
        category: 'Ice Creams',
        description: 'A layered delight of ice cream, fruits & jelly.',
        price: 120,
        popularity: 95,
        rating: 4.8,
        image: require('../assets1/gadbad.jpg'),
        isNew: true,
      },
      {
        id: 2,
        name: 'Chocolate Brownie',
        category: 'Desserts',
        description: 'Rich chocolate brownie served warm.',
        price: 90,
        popularity: 75,
        rating: 4.5,
        image: brownie,
        isNew: false,
      },
      {
        id: 3,
        name: 'Cold Coffee',
        category: 'Beverages',
        description: 'Chilled coffee with ice cream topping.',
        price: 70,
        popularity: 80,
        rating: 4.2,
        image: cold_coffee,
        isNew: true,
      },
      {
        id: 4,
        name: 'Pav Bhaji',
        category: 'Snacks',
        description: 'Spicy mashed vegetables with buttery pav.',
        price: 60,
        popularity: 85,
        rating: 4.4,
        image: pavbhaji,
        isNew: false,
      },
      {
        id: 5,
        name: 'Vada Chutney',
        category: 'Snacks',
        description: 'Delicious Vada with Chutney',
        price: 80,
        popularity: 77,
        rating: 4.0,
        image: vada_chutney,
        isNew: false,
      },
      {
        id: 6,
        name: 'Bee Hive',
        category: 'Ice Creams',
        description: 'Have look into this amazing Bee hive',
        price: 85,
        popularity: 70,
        rating: 4.5,
        image: bee,
        isNew: true,
      },
      {
        id: 7,
        name: 'Chocolate Fantasy',
        category: 'Ice Creams',
        description: 'Fantasy of Chocolates with delicious choco chips',
        price: 100,
        popularity: 60,
        rating: 4.2,
        image: fantasy,
        isNew: false,
      },
      {
        id: 8,
        name: 'Marzi Paan',
        category: 'Desserts',
        description: 'An innovative dessert combining the flavors of traditional Indian paan with ice cream.',
        price: 120,
        popularity: 85,
        rating: 4.9,
        image: marzi_paan,
        isNew: true,
      },
      {
        id: 9,
        name: 'Oreo Milkshake',
        category: 'Beverages',
        description: 'Softened vanilla ice cream, milk, and chopped Oreo cookies.',
        price: 90,
        popularity: 75,
        rating: 4.4,
        image: oreo,
        isNew: true,
      },
    ];


const Menu = () => {
  const [filter, setFilter] = useState('All');
  const [sortOption, setSortOption] = useState('popularity');
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    setCart(updatedCart);
    navigate('/cart', { state: { cartItems: updatedCart } });
  };

  const filteredItems = sampleMenuItems.filter(item => {
    if (filter === 'Only Ice Creams') return item.category === 'Ice Creams';
    if (filter === 'Popular') return item.popularity >= 80;
    if (filter === 'New Arrivals') return item.isNew;
    return true;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === 'price') return a.price - b.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    return b.popularity - a.popularity;
  });

  return (
    <Container className="menu-page">
      <div className="d-flex justify-content-between align-items-center my-4 flex-wrap gap-2">
        <Form.Select
          style={{ maxWidth: '200px' }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Items</option>
          <option value="Only Ice Creams">Only Ice Creams</option>
          <option value="Popular">Popular</option>
          <option value="New Arrivals">New Arrivals</option>
        </Form.Select>

        <Form.Select
          style={{ maxWidth: '200px' }}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="popularity">Sort by Popularity</option>
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </Form.Select>
      </div>

      <Row className="g-4">
        {sortedItems.map(item => (
          <Col md={6} lg={4} key={item.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={item.image} className="menu-img" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>

               
                <RatingStars itemName={item.name} />

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <strong>₹{item.price}</strong>
                  <Button variant="success" onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
