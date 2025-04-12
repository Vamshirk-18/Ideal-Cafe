import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import OrderTracker from '../pages/OrderTracker';
import SignIn from '../pages/SignIn';
import Offers from '../pages/Offers';

const Cart = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    deliveryOption: 'dine-in',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  
  const [showTracker, setShowTracker] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTracker(true);
  };

  const updateQuantity = (index, delta) => {
    const updated = [...cartItems];
    updated[index].quantity += delta;
    if (updated[index].quantity < 1) updated[index].quantity = 1;
    setCartItems(updated);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault(); 
    setOrderPlaced(true);
  };

  return (
    <Container className="my-5">
      {!orderPlaced ? (
        <>
          <h2 className="mb-4">Your Cart</h2>

          {cartItems.map((item, index) => (
            <Card key={index} className="mb-3 p-3 d-flex flex-row align-items-center">
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '80px', objectFit: 'cover' }} />
              <div className="ms-3 flex-grow-1">
                <h5>{item.name}</h5>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <Button variant="secondary" onClick={() => updateQuantity(index, -1)}>-</Button>
                <span>{item.quantity}</span>
                <Button variant="secondary" onClick={() => updateQuantity(index, 1)}>+</Button>
              </div>
            </Card>
          ))}

          <h4>Total: ₹{totalPrice}</h4>

          <Form className="mt-4" onSubmit={handlePlaceOrder}>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control name="name" onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control name="phone" onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Delivery Option:</Form.Label>
              <Form.Select name="deliveryOption" onChange={handleInputChange} required>
                <option value="dine-in">Dine In</option>
                <option value="takeaway">Takeaway</option>
              </Form.Select>
            </Form.Group>

            <Button variant="success" type="submit">Place Order</Button>
          </Form>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-success">🎉 Order Placed!</h2>
          <p>Thank you, <strong>{userDetails.name}</strong>! Your order has been successfully placed.</p>
          <p>
            📱 We'll contact you at <strong>{userDetails.phone}</strong><br />
            🍽️ Mode: <strong>{userDetails.deliveryOption === 'dine-in' ? 'Dine In' : 'Takeaway'}</strong><br />
            💵 Total Paid: <strong>₹{totalPrice}</strong>
          </p>
          <p>We’re preparing your delicious food with love. See you soon! ❤️</p>

        
          {!showTracker && (
            <Button variant="primary" className="mt-3" onClick={handleSubmit}>
              Track My Order
            </Button>
          )}

         
          {showTracker && <OrderTracker />}
        </div>
      )}
    </Container>
  );
};

export default Cart;
